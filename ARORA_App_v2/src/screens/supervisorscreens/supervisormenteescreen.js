import * as React from 'react';
import {styles} from '../../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput } from 'react-native';
import { FindMRButterfly, FindAVGHelper, FindAVGButterfly } from '../../../functions/butterflyfuncts.js';

export function SupervisorMenteeScreen( {route, navigation} )
{
  const {menteename, mentee} = route.params;
  var isIncluded = {'Happy' : true,
  'Neutral' : true,
  'Sad' : true };
  const filteredList = mentee.moodreports.filter(moodreport => isIncluded[moodreport.mood]);

  var butterflyColor = FindAVGButterfly(mentee)
  var riskButterflyLoc = require('../../../assets/yellowbutterflybuttonicon.png')
  if (butterflyColor == "yellow"){
    riskButterflyLoc = require('../../../assets/yellowbutterflybuttonicon.png')
  }
  else if (butterflyColor == "red"){
    riskButterflyLoc = require('../../../assets/redbutterflybuttonicon.png')
  }
  else {
    riskButterflyLoc = require('../../../assets/greenbutterflybuttonicon.png')
  }


  return (
    <View style={styles.menteescreen}>

      <View style={styles.menteescreenbuttons}>

        <View style={styles.menteebuttonsection}>
          <Pressable style={styles.menteebutton}
                                onPress={() => navigation.navigate('Supervisor Chat')}>
            <Image style={styles.menteeicons} source={require('../../../assets/chaticon.png')}/>
            <Text style={styles.menteeicontext}>Chat</Text>
          </Pressable>

          <Pressable style={styles.menteebutton}
                                  onPress={() => navigation.navigate('Supervisor Calendar')}>
            <Image style={styles.menteeicons} source={require('../../../assets/calendaricon.png')}/>
            <Text style={styles.menteeicontext}>Calendar</Text>
          </Pressable>
        </View>

        <View style={styles.menteebuttonsection}>
          <Pressable style={styles.menteebutton}
                                  onPress={() => mentee.isFlagged = true}>
            <Image style={styles.menteeicons} source={require('../../../assets/flagoff.png')}/>
            <Text style={styles.menteeicontext}>Add Flag</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.menteecurrentrisk}>
        <Text>Current Risk:</Text>
        <Image style={styles.menteeicons} source={riskButterflyLoc}/>
      </View>

      <View style={styles.moodreportlist}>
      {filteredList.map(moodreport =>
            (<View style={styles.moodreport}>
              <Text >Mood: {moodreport.mood}</Text>
              <Text >Stress Level: {moodreport.stresslevel}</Text>
            </View>))}
      </View>

    </View>
  );
}
