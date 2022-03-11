import React, {useState, useEffect} from 'react';
import {styles} from '../../stylesheet';
import MentorList from '../../components/mentorlist';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput, Divider } from 'react-native';
import { getAsyncItem, setAsyncItem, removeAsyncItem, getAsyncKeys, clearAsyncStorage, getUser } from '../../databasehelpers/asyncstoragecalls';

export function SupervisorHomeScreen ( {route, navigation} ) {
  const {username} = route.params;

  return(
    <View style={styles.screen}>
      <View style={styles.screencontent}>
        <View style={styles.homescreen}>

          <Image style={{width: 40, height: 40}} source={require('../../../assets/teamshiningskyicon.png')}/>
          <Text style={{fontSize: 20, paddingBottom: 0, marginBottom: 0,}}>Welcome, Y/N</Text>

          <Text>Your Mentors</Text>
          <MentorList navigation={navigation} username={username}/>

        </View>

      </View>

    </View>
  );
}
