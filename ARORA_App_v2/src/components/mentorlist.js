import React, {useState, useEffect} from 'react';
import {styles} from '../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, FlatList, RefreshControl } from 'react-native';
import { getAsyncItem, setAsyncItem, removeAsyncItem, getMentors } from '../databasehelpers/asyncstoragecalls';
import { mentorsExample } from '../databasehelpers/exampledata';

export default function MentorList( {navigation, username} ) {
  //const {username} = route.params;
  const [mentors, setMentors] = React.useState([])

  useEffect(() => {
    //setAsyncItem("mentors", mentorsExample)
    getMentors(username).then(mentorsList => setMentors(mentorsList))
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

  return (<FlatList 
            contentContainerStyle={{flexGrow:1}}
            data={mentors}
            keyExtractor={(item, index) => index}
            renderItem={renderMentor}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
    }/>)
}