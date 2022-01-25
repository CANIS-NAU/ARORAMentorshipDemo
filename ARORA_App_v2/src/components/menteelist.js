import * as React from 'react';
import {styles} from '../stylesheet';
import {NavigationBar} from './navigationbar';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput, Divider } from 'react-native';
import { FindMRButterfly, FindAVGHelper, FindAVGButterfly } from '../../functions/butterflyfuncts.js';

export default function MenteeList( {navigation} ) {
  const mentees = [{
                    name: 'John Smith',
                    moodreports: [
                                  {date: '08/24/2001', mood: 'Happy', stresslevel: 'Low'},
                                  {date: '08/25/2001', mood: 'Neutral', stresslevel: 'Medium'},
                                  {date: '08/26/2001', mood: 'Neutral', stresslevel: 'Low'},
                                 ],
                   risk: FindAVGHelper('Happy', 'Low', 'Neutral', 'Medium', 'Neutral', 'Low'),
                   isFlagged: false
                  },
                  {
                    name: 'Jane Doe',
                    moodreports: [
                                  {date: '08/24/2001',mood: 'Sad',stresslevel: 'Low'},
                                  {date: '08/25/2001',mood: 'Neutral',stresslevel: 'High'},
                                  {date: '08/26/2001',mood: 'Sad',stresslevel: 'Medium'},
                                 ],
                   risk: FindAVGHelper('Sad', 'Low', 'Neutral', 'High', 'Sad', 'Medium'),
                   isFlagged: true
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
