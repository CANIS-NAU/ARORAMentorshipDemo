import React, {useState, useEffect} from 'react';
import {styles} from '../../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput, FlatList, RefreshControl } from 'react-native';
import { getAsyncItem, setAsyncItem, removeAsyncItem, getAsyncKeys, clearAsyncStorage, getUser, questionsExample, getMentees} from '../../databasehelpers/asyncstoragecalls';
import { loginsExample, mentorsExample, menteesExample, accessCodesExample} from '../../databasehelpers/exampledata';

export function SupervisorChatlogScreen( {route, navigation} )
{
    const {mentor, mentee} = route.params;
    const [messages, setMessages] = useState('');
  
    useEffect(() => {
      //makeQuestions("questions", JSON.stringify(questionsExample))
      getUser(mentor.username).then(mentor => {
        setMessages(mentor.messages[mentee.id - 1])
      })
      
    }, []);
  
  
    const LogItem = ({log}) => (
      <View style={styles.homescreenmenteelist}>
          <View style={styles.homescreenmentee}>
            <Text>{log.text}</Text>
          </View>
      </View>
    )
  
    const renderLog = ({ item: logItem }) => (
      <LogItem log = {logItem} />
    )
  
    const [refreshing, setRefreshing] = React.useState(false);
  
    const wait = (timeout) => {
      return new Promise(resolve => setTimeout(resolve, timeout));
    }
  
    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }, []);
  
  
  
    return (<View>
        <Text>Mentor: {mentor.name}</Text>
        <Text>Mentee: {mentee.name}</Text>

        <FlatList
            contentContainerStyle={{flexGrow:1}}
            data={messages}
            keyExtractor={(item, index) => index}
            renderItem={renderLog}
            refreshControl={
                <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                />
            }/>

    </View>
    )
  }