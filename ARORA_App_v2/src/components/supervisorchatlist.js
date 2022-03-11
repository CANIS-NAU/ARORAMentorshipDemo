import React, {useState, useEffect} from 'react';
import {styles} from '../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, FlatList, RefreshControl } from 'react-native';
import { getAsyncItem, setAsyncItem, removeAsyncItem, getAsyncKeys, clearAsyncStorage, getMentors, getMentees } from '../databasehelpers/asyncstoragecalls';
import { loginsExample, mentorsExample, menteesExample, accessCodesExample} from '../databasehelpers/exampledata';

export default function SupervisorChatList( {navigation, username} ) {
  const [mentorList, setMentors] = useState('');

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



  return (<FlatList
    contentContainerStyle={{flexGrow:1}}
    data={mentorList}
    keyExtractor={(item, index) => index}
    renderItem={renderChat}
    refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    }/>)
}