import React, {useState, useEffect} from 'react';
import {styles} from '../../stylesheet';
import MenteeList from '../../components/menteelist';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput, Divider } from 'react-native';
import SupervisorChatList from '../../components/supervisorchatlist'
import { getAsyncItem, setAsyncItem, removeAsyncItem, getAsyncKeys, clearAsyncStorage, getMentors, questionsExample, getMentees} from '../../databasehelpers/asyncstoragecalls';
import { loginsExample, mentorsExample, menteesExample, accessCodesExample} from '../../databasehelpers/exampledata';

export function SupervisorChatScreen( {navigation} ) {
  const username = navigation.getParent().getState().routes[2].params.params.username
  const [mentorList, setMentors] = useState('');

  useEffect(() => {
    //makeQuestions("questions", JSON.stringify(questionsExample))
    getMentors(username).then(results => {
      setMentors(results)
    
    })}, []);

  return(
    <View style={styles.screen}>
      <View style={styles.screencontent}>
        <View style={styles.homescreen}>

          <Text style={{fontSize: 20, paddingBottom: 3, marginBottom: 3,}}>Your Chat Logs</Text>

          <SupervisorChatList navigation={navigation} username={username}/>

        </View>

      </View>

    </View>
  );
}
