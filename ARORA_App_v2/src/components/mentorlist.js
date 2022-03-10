import * as React from 'react';
import {styles} from '../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, FlatList, RefreshControl } from 'react-native';
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

  const MentorItem = ({mentor}) => (
    <View style={styles.homescreenmenteelist}>
      <Pressable style={styles.homescreenmentee}
                          onPress={() => navigation.navigate("Supervisor Mentor Screen", {screenname: mentor.name, mentor: mentor})}>
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
            keyExtractor={(item) => item.id}
            renderItem={renderMentor}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
    }/>)
}
