import * as React from 'react';
import {styles} from '../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput } from 'react-native';
import { FindMRButterfly, FindAVGHelper, FindAVGButterfly } from '../../functions/butterflyfuncts.js';

export function MenteeScreen( {route, navigation} )
{
  const {menteename, mentee} = route.params;
  return (
    <View style={styles.menteescreen}>

      <View style={styles.menteescreenbuttons}>

        <View style={styles.menteebuttonsection}>
          <Pressable style={styles.menteebutton}
                                onPress={() => navigation.navigate('Chat')}>
            <Image style={styles.menteeicons} source={require('../../assets/chaticon.png')}/>
            <Text style={styles.menteeicontext}>Chat</Text>
          </Pressable>

          <Pressable style={styles.menteebutton}
                                  onPress={() => navigation.navigate('Calendar')}>
            <Image style={styles.menteeicons} source={require('../../assets/calendaricon.png')}/>
            <Text style={styles.menteeicontext}>Calendar</Text>
          </Pressable>
        </View>

        <View style={styles.menteebuttonsection}>
          <Pressable style={styles.menteebutton}
                                  onPress={() => mentee.isFlagged = true}>
            <Image style={styles.menteeicons} source={require('../../assets/flag.png')}/>
            <Text style={styles.menteeicontext}>Add Flag</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.menteecurrentrisk}>
        <Text>Current Risk:</Text>
        <Image style={styles.menteeicons} source={require('../../assets/' + FindAVGButterfly(mentee) + 'butterflybuttonicon.png')}/>
      </View>

      <View style={styles.moodreportlist}>
        {mentee.moodreports.map(moodreport =>
            (<View style={styles.moodreport}>
              <Text >Mood: {moodreport.mood}</Text>
              <Text >Stress Level: {moodreport.stresslevel}</Text>
            </View>))}
      </View>

    </View>
  );
}
