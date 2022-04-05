import React, { useState, useEffect } from 'react';
import {styles} from '../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput, FlatList, RefreshControl } from 'react-native';
import { FindMRButterfly, FindAVGHelper, FindAVGButterfly } from '../../functions/butterflyfuncts.js';
import { GiftedChat } from 'react-native-gifted-chat';
import { getAsyncItem, setAsyncItem, removeAsyncItem, getUser } from '../databasehelpers/asyncstoragecalls';
import { messagesExample } from '../databasehelpers/exampledata';

export function ChatroomScreen( {navigation, route} )
{
  const {username, mentee} = route.params;

  const [messages, setMessages] = useState([])

  useEffect(() => {
    console.log(route.params)
    //setAsyncItem("messages", messagesExample)
    getUser(username).then(user => {
      setMessages(user.messages[mentee.id-1])
    }
  )}, []);


  // helper method that is sends a message
  function handleSend(newMessage = []) {
    setMessages(GiftedChat.append(messages, newMessage));

    getAsyncItem("users").then(users => {

      getUser(username).then(user => {

        user.messages[mentee.id - 1] = GiftedChat.append(user.messages[mentee.id], newMessage)
        GiftedChat.append(user.messages, newMessage)

        let userIndex = -1;
          for (let index = 0; index < users.length; index++){
            if (users[index].username == user.username){
              userIndex = index;
              break;
            }
          }

        users[userIndex] = user;

        setAsyncItem("users", users)
      })
    })
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={newMessage => handleSend(newMessage)}
      user={{ _id: 0 }}
    />
  );
}