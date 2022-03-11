import React, {useState} from 'react';
import {styles} from '../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput, FlatList, RefreshControl } from 'react-native';
import { FindMRButterfly, FindAVGHelper, FindAVGButterfly } from '../../functions/butterflyfuncts.js';
import { GiftedChat } from 'react-native-gifted-chat';

export function ChatroomScreen( {route, navigation} )
{
  const {menteename, mentee} = route.params;
  const [messages, setMessages] = useState([
    //system message
    {
      _id: 0,
      text: 'New messages.',
      createdAt: new Date().getTime(),
      system: true
    },
    //chat message
    {
      _id: 1,
      text: 'Thanks for all your help.',
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: 'Test User'
      }
    },
    {
      _id: 3,
      text: 'I am feeling good today!',
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: 'Test User'
      }
    },
    {
      _id: 4,
      text: 'Hello!',
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: 'Test User'
      }
    }
  ]);

  // helper method that is sends a message
  function handleSend(newMessage = []) {
    setMessages(GiftedChat.append(messages, newMessage));
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={newMessage => handleSend(newMessage)}
      user={{ _id: 1 }}
    />
  );
}
