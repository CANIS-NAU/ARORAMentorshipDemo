import React, {useState, useEffect} from 'react';
import {styles} from '../stylesheet';
import { StyleSheet, View, Text, TextInput, Button, Pressable, Image, FlatList, RefreshControl } from 'react-native';
import { getAsyncItem, setAsyncItem, removeAsyncItem, getAsyncKeys, clearAsyncStorage, getMentors, getMentees, getAllUsers } from '../databasehelpers/asyncstoragecalls';
import { loginsExample, mentorsExample, menteesExample, accessCodesExample} from '../databasehelpers/exampledata';

export default function SupervisorChatList( {navigation, username} ) {
  const [mentorList, setMentors] = useState('');
  const [searchMentors, setSearchMentors] = React.useState([])

  useEffect(() => {
    //setAsyncItem("mentees", menteesExample)
    getAllUsers("mentor").then(mentorsList => {
      setMentors(mentorsList);
      setSearchMentors(mentorsList);

    //getMentors(username).then(mentors => {
    //  setMentors(mentors)
    //  setSearchMentors(mentors)
    })}, []);

  const searchQueryMentors = (query) => {
    if (query == ''){
      setSearchMentors(mentorList)
    }
    else{
      getMentors(username).then(mentors => {
        let queryMentors = []
        for (let mentor of mentors ){
          if (mentor.name.toLowerCase().includes(query.toLowerCase())){
            queryMentors.push(mentor)
          }
        }
        setSearchMentors(queryMentors)
      })
    }
  }

  useEffect(() => {
    //makeQuestions("questions", JSON.stringify(questionsExample))
    //console.log(navigation.getParent().getState().routes[1].params.params.params.username)
    console.log(username)
    getMentors(username).then(mentors => {
      setMentors(mentors)
    })}, []);
  
  const ChatItem = ({mentor}) => (
    <View style={styles.homescreenmenteelist}>
      <Pressable style={styles.homescreenmentee}
                 onPress={() => navigation.navigate("Supervisor Chat Logs", {screenname: mentor.name, username: username, mentor: mentor})}>
        <View style={styles.homescreenmentee}>
          <Text>{mentor.name}</Text>
        </View>
      </Pressable>
    </View>
  )

  const renderChat = ({ item: mentorItem }) => (
    <ChatItem mentor = {mentorItem} />
  )

  const [refreshing, setRefreshing] = React.useState(false);

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);



  return (
    <View>
      <TextInput style={styles.logininput}
          placeholder="Search"
          onChangeText = {searchQuery => searchQueryMentors(searchQuery)}
          />
      <FlatList
      contentContainerStyle={{flexGrow:1}}
      data={searchMentors}
      keyExtractor={(item, index) => index}
      renderItem={renderChat}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }/>
    </View>)
}