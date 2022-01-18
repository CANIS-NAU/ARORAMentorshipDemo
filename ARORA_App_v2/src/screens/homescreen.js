import * as React from 'react';
import {styles} from '../stylesheet';
import MenteeList from '../components/menteelist';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput, Divider } from 'react-native';

export function HomeScreen ( {navigation} ) {
  return(
    <View style={styles.screen}>
      <View style={styles.screencontent}>
        <View style={styles.homescreen}>

          <Image style={{width: 40, height: 40}} source={require('../../assets/teamshiningskyicon.png')}/>
          <Text style={{fontSize: 20, paddingBottom: 0, marginBottom: 0,}}>Welcome, Y/N</Text>

          <Text>Your Mentees</Text>
          <MenteeList navigation={navigation}/>

        </View>

      </View>

    </View>
  );
}
