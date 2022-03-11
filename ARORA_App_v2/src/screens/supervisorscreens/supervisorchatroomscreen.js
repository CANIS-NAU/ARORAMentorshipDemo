import React, {useState, useEffect} from 'react';
import {styles} from '../../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput, FlatList, RefreshControl } from 'react-native';
import { getAsyncItem, setAsyncItem, removeAsyncItem, getAsyncKeys, clearAsyncStorage, getMentors, questionsExample, getMentees} from '../../databasehelpers/asyncstoragecalls';
import { loginsExample, mentorsExample, menteesExample, accessCodesExample} from '../../databasehelpers/exampledata';

export function SupervisorChatroomScreen( {route, navigation} )
{
  const {username, mentor} = route.params;
  const [mentees, setMentees] = useState('');

  useEffect(() => {
    //makeQuestions("questions", JSON.stringify(questionsExample))
    getMentees(mentor.username).then(mentees => {
      setMentees(mentees)
    })
    
  }, []);

  const LogItem = ({mentee}) => (
    <View style={styles.homescreenmenteelist}>
      <Pressable style={styles.homescreenmentee}
                 onPress={() => navigation.navigate("Supervisor Chat Log", {screenname: mentor.name, mentor: mentor, mentee: mentee})}>
        <View style={styles.homescreenmentee}>
          <Text>{mentee.name}</Text>
        </View>
      </Pressable>
    </View>
  )

  const renderMentees = ({ item: menteeItem }) => (
    <LogItem mentee = {menteeItem} />
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
    data={mentees}
    keyExtractor={(item, index) => index}
    renderItem={renderMentees}
    refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    }/>)
}
