import React, {useState, useEffect} from 'react';
import {styles} from '../stylesheet';
import MenteeList from '../components/menteelist';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput, Divider } from 'react-native';
import ChatList from '../components/chatlist'
import { getAsyncItem, setAsyncItem, removeAsyncItem, getAsyncKeys, clearAsyncStorage, getLogin, getMentees} from '../databasehelpers/asyncstoragecalls';
import { loginsExample, mentorsExample, menteesExample, accessCodesExample} from '../databasehelpers/exampledata';

export function ChatScreen( {navigation} ) {
  const username = navigation.getParent().getState().routes[2].params.params.username
  const [menteeList, setMentees] = useState('');

  useEffect(() => {
    //makeQuestions("questions", JSON.stringify(questionsExample))
    getMentees(username).then(results => {
      setMentees(results)
    
    })}, []);

  return(
    <View style={styles.screen}>
      <View style={styles.screencontent}>
        <View style={styles.homescreen}>

          <Text style={{fontSize: 20, paddingBottom: 3, marginBottom: 3,}}>Your Chats</Text>

          <ChatList navigation={navigation} username={username}/>

        </View>

      </View>

    </View>
  );
}