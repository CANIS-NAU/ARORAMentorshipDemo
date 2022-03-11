import React, {useState, useEffect} from 'react';
import {styles} from '../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, FlatList, RefreshControl } from 'react-native';
import { FindMRButterfly, FindAVGHelper, FindAVGButterfly } from '../../functions/butterflyfuncts.js';

import { getAsyncItem, setAsyncItem, removeAsyncItem, getMentees } from '../databasehelpers/asyncstoragecalls';
import { menteesExample } from '../databasehelpers/exampledata';

export default function SupervisorMenteeList( {navigation, username, mentor} ) {

  const [mentees, setMentees] = React.useState([])

  useEffect(() => {
    //setAsyncItem("mentees", menteesExample)
    getMentees(mentor.username).then(menteesList => setMentees(menteesList))
  }, []);

  const MenteeItem = ({mentee}) => (
    <View style={styles.homescreenmenteelist}>
        <Pressable style={styles.homescreenmentee}
                            onPress={() => navigation.navigate("Supervisor Mentee Screen", {screenname: mentee.name, username: username, mentor: mentor, mentee: mentee})}>
            <View style={styles.homescreenmentee}>
                <Image style={styles.homescreenmenteeicons} source={mentee.riskIcon}/>
                <Text>{mentee.name}</Text>
                <Image style={styles.homescreenmenteeicons} source={mentee.flagIcon}/>
            </View>
        </Pressable>
    </View>
  )

  const renderMentee = ({ item: menteeItem }) => (
      <MenteeItem mentee = {menteeItem} />
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
                renderItem={renderMentee}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }/>)
}
