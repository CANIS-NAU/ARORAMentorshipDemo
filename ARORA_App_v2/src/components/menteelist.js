import * as React from 'react';
import {styles} from '../stylesheet';
import {NavigationBar} from './navigationbar';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput, Divider } from 'react-native';

export default function MenteeList( {navigation} ) {
  const mentees = [{
                    name: 'John Smith',
                    risk: 'yellow',
                    moodreports: [
                                  {date: '08/24/2001', mood: 'Happy', stresslevel: 'Neutral'},
                                  {date: '08/25/2001', mood: 'Neutral', stresslevel: 'Slightly Stressed'},
                                  {date: '08/26/2001', mood: 'Neutral', stresslevel: 'Neutral'},
                                 ]
                  },
                  {
                    name: 'Jane Doe',
                    risk: 'red',
                    moodreports: [
                                  {date: '08/24/2001',mood: 'Sad',stresslevel: 'Neutral'},
                                  {date: '08/25/2001',mood: 'Neutral',stresslevel: 'Very Stressed'},
                                  {date: '08/26/2001',mood: 'Sad',stresslevel: 'Slightly Stressed'},
                                 ]
                  }
                  ]

  return (<View style={styles.homescreenmenteelist}>
    {mentees.map(mentee =>
                  (<Pressable style={styles.homescreenmentee}
                                      onPress={() => navigation.navigate("Mentee Screen", {screenname: mentee.name, mentee: mentee})}>
                    <View style={styles.homescreenmentee}>
                      <Image style={styles.homescreenmenteeicons} source={require('../../assets/' + mentee.risk + 'butterflyicon.png')}/>
                      <Text>{mentee.name}</Text>
                    </View>
                  </Pressable>))}
    </View>)
}
