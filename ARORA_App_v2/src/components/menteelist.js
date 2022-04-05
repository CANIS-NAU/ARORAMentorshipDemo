import React, {useState, useEffect} from 'react';
import {styles} from '../stylesheet';
import { StyleSheet, View, Text, TextInput, Button, Pressable, Image, FlatList, RefreshControl } from 'react-native';
import { FindMRButterfly, FindAVGHelper, FindAVGButterfly } from '../../functions/butterflyfuncts.js';

import { getAsyncItem, setAsyncItem, removeAsyncItem, getMentees } from '../databasehelpers/asyncstoragecalls';
import { menteesExample } from '../databasehelpers/exampledata';

export default function MenteeList( {navigation, username} ) {
  const [mentees, setMentees] = React.useState([])
  const [searchMentees, setSearchMentees] = React.useState([])

  useEffect(() => {
    //setAsyncItem("mentees", menteesExample)
    getMentees(username).then(menteesList => {
      setMentees(menteesList);
      setSearchMentees(menteesList);
    })
  }, []);

  const searchQueryMentees = (query) => {
    if (query == ''){
      setSearchMentees(mentees)
    }
    else{
      getMentees(username).then(mentees => {
        let queryMentees = []
        for (let mentee of mentees ){
          if (mentee.name.toLowerCase().includes(query.toLowerCase())){
            queryMentees.push(mentee)
          }
        }
        setSearchMentees(queryMentees)
      })
    }
  }

  const MenteeItem = ({mentee}) => (
    <View style={styles.homescreenmenteelist}>
        <Pressable style={styles.homescreenmentee}
                            onPress={() => navigation.navigate("Mentee Screen", {screenname: mentee.name, username: username, mentee: mentee})}>
            <View style={styles.homescreenmentee}>
                <Image style={styles.homescreenmenteeicons} source={mentee.riskIcon}/>
                <Text>{mentee.name}</Text>
                <Image style={styles.homescreenmenteeflags} source={mentee.flagIcon}/>
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



  return (
    <View>
      <TextInput style={styles.logininput}
      placeholder="Search"
      onChangeText = {searchQuery => searchQueryMentees(searchQuery)}
      />

      <FlatList
                  contentContainerStyle={{flexGrow:1}}
                  data={searchMentees}
                  keyExtractor={(item, index) => index}
                  renderItem={renderMentee}
                  refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                  }/>
    </View>)
}
