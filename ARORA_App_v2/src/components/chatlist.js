import React, {useState, useEffect} from 'react';
import {styles} from '../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, FlatList, RefreshControl } from 'react-native';
import { FindMRButterfly, FindAVGHelper, FindAVGButterfly } from '../../functions/butterflyfuncts.js';
import { getAsyncItem, setAsyncItem, removeAsyncItem, getAsyncKeys, clearAsyncStorage, getLogin, getMentees } from '../databasehelpers/asyncstoragecalls';
import { loginsExample, mentorsExample, menteesExample, accessCodesExample} from '../databasehelpers/exampledata';

export default function ChatList( {navigation, username} ) {
  const [menteeList, setMentees] = useState('');

  useEffect(() => {
    //makeQuestions("questions", JSON.stringify(questionsExample))
    //console.log(navigation.getParent().getState().routes[1].params.params.params.username)
    getMentees(username).then(results => {
      setMentees(results)
    })}, []);

  const ChatItem = ({mentee}) => (
    <View style={styles.homescreenmenteelist}>
      <Pressable style={styles.homescreenmentee}
                 onPress={() => navigation.navigate("Chat Room", {screenname: mentee.name, username: username, mentee: mentee})}>
        <View style={styles.homescreenmentee}>
          <Text>{mentee.name}</Text>
        </View>
      </Pressable>
    </View>
  )

  const renderChat = ({ item: menteeItem }) => (
    <ChatItem mentee = {menteeItem} />
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
    data={menteeList}
    keyExtractor={(item, index) => index}
    renderItem={renderChat}
    refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    }/>)
}