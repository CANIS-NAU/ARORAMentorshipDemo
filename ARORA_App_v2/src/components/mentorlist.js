import * as React from 'react';
import {styles} from '../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput, Divider } from 'react-native';
import { FindMRButterfly, FindAVGHelper, FindAVGButterfly } from '../../functions/butterflyfuncts.js';

export default function MentorList( {navigation} ) {
  const mentors = [{
                    name: 'Mentor Adam',
                    mentees: [{
                                name: 'John Smith',
                                moodreports: [
                                              {date: '08/24/2001', mood: 'Happy', stresslevel: 'Low' },
                                              {date: '08/25/2001', mood: 'Neutral', stresslevel: 'Medium' },
                                              {date: '08/26/2001', mood: 'Neutral', stresslevel: 'Low' },
                                            ],
                              risk: FindAVGHelper('Happy', 'Low', 'Neutral', 'Medium', 'Neutral', 'Low'),
                              flag: "off"
                              },
                              {
                                name: 'Jane Doe',
                                moodreports: [
                                              {date: '08/24/2001',mood: 'Sad',stresslevel: 'Low'},
                                              {date: '08/25/2001',mood: 'Neutral',stresslevel: 'High'},
                                              {date: '08/26/2001',mood: 'Sad',stresslevel: 'Medium'},
                                            ],
                              risk: FindAVGHelper('Sad', 'Low', 'Neutral', 'High', 'Sad', 'Medium'),
                              flag: "on"
                              }]
                  },
                  {
                    name: 'Mentor Stacy',
                    mentees: [{
                        name: 'John Smith',
                        moodreports: [
                                      {date: '08/24/2001', mood: 'Happy', stresslevel: 'Low' },
                                      {date: '08/25/2001', mood: 'Neutral', stresslevel: 'Medium' },
                                      {date: '08/26/2001', mood: 'Neutral', stresslevel: 'Low' },
                                     ],
                       risk: FindAVGHelper('Happy', 'Low', 'Neutral', 'Medium', 'Neutral', 'Low'),
                       flag: "off"
                      },
                      {
                        name: 'Jane Doe',
                        moodreports: [
                                      {date: '08/24/2001',mood: 'Sad',stresslevel: 'Low'},
                                      {date: '08/25/2001',mood: 'Neutral',stresslevel: 'High'},
                                      {date: '08/26/2001',mood: 'Sad',stresslevel: 'Medium'},
                                     ],
                       risk: FindAVGHelper('Sad', 'Low', 'Neutral', 'High', 'Sad', 'Medium'),
                       flag: "on"
                      }]
                  }
                ]

  return (<View style={styles.homescreenmenteelist}>
               {mentors.map(mentor =>
                  (<Pressable style={styles.homescreenmentee}
                                      onPress={() => navigation.navigate("Supervisor Mentor Screen", {screenname: mentor.name, mentor: mentor})}>
                    <View style={styles.homescreenmentee}>
                      <Text>{mentor.name}</Text>
                    </View>
                  </Pressable>))}
          </View>)
}
