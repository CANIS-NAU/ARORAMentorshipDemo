import React, {useState, useEffect} from 'react';
import {styles} from '../stylesheet';
import MenteeList from '../components/menteelist';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput, Divider } from 'react-native';
import { getAsyncItem, setAsyncItem, removeAsyncItem, getEvents, getUser } from '../databasehelpers/asyncstoragecalls';

export function HomeScreen ( {route, navigation} ) {
  const {username} = route.params;

  const [name, updateName] = useState('');

  useEffect(() => {
    //setAsyncItem("events", JSON.stringify(eventsExample))
    //console.log(navigation.getParent().getState().routes[1].params.params.params.username)
    getUser(username).then(user => {
      updateName(user.name)
    })
  }, []);

  return(
    <View style={styles.screen}>
      <View style={styles.screencontent}>
        <View style={styles.homescreen}>

          <Image style={{width: 40, height: 40}} source={require('../../assets/teamshiningskyicon.png')}/>
          <Text style={{fontSize: 20, paddingBottom: 0, marginBottom: 0,}}>Welcome, {name}</Text>

          <Text>Your Mentees</Text>
          <MenteeList navigation={navigation} username={username}/>

        </View>

      </View>

    </View>
  );
}