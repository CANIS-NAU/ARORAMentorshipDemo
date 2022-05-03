import React, {useState, useEffect} from 'react';
import {styles} from '../stylesheet';
import { StyleSheet, View, Text, TextInput, Button, Pressable, Image, FlatList, RefreshControl } from 'react-native';
import { getAsyncItem, setAsyncItem, removeAsyncItem, getMentors, getAllUsers } from '../databasehelpers/asyncstoragecalls';
import { mentorsExample } from '../databasehelpers/exampledata';

export default function MentorList( {navigation, username} ) {
  //const {username} = route.params;
  const [mentors, setMentors] = React.useState([])
  const [searchMentors, setSearchMentors] = React.useState([])

  useEffect(() => {
    //setAsyncItem("mentees", menteesExample)
    getAllUsers("mentor").then(mentorsList => {
      setMentors(mentorsList);
      setSearchMentors(mentorsList);
    })
  }, []);

  const searchQueryMentors = (query) => {
    if (query == ''){
      setSearchMentors(mentors)
    }
    else{
      getAllUsers("mentor").then(mentors => {
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
    //setAsyncItem("mentors", mentorsExample)
    getAllUsers("mentor").then(mentorsList => setMentors(mentorsList))
  }, []);

  const MentorItem = ({mentor}) => (
    <View style={styles.homescreenmenteelist}>
      <Pressable style={styles.homescreenmentee}
                          onPress={() => navigation.navigate("Supervisor Mentor Screen", {screenname: mentor.name, username: username, mentor: mentor})}>
        <View style={styles.homescreenmentee}>
          <Text>{mentor.name}</Text>
        </View>
      </Pressable>
    </View>
  )

  const renderMentor = ({ item: mentorItem }) => (
    <MentorItem mentor = {mentorItem} />
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
            renderItem={renderMentor}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
        }/>
    </View>)
}