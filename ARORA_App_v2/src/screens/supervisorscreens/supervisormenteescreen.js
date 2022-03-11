import * as React from 'react';
import {styles} from '../../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput, FlatList, RefreshControl } from 'react-native';
import { FindMRButterfly, FindAVGHelper, FindAVGButterfly } from '../../../functions/butterflyfuncts.js';
import { getAsyncItem, setAsyncItem, removeAsyncItem, getMentees } from '../../databasehelpers/asyncstoragecalls';
import { menteesExample } from '../../databasehelpers/exampledata';


export function SupervisorMenteeScreen( {navigation, route} )
{
  const {username, mentor, mentee} = route.params;

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

  const MoodReportItem = ({moodreport}) => (
      <View style={styles.moodreport}>
              <Text style={styles.moodreporttext}>Mood: {moodreport.mood}</Text>
              <Text style={styles.moodreporttext}>Stress Level: {moodreport.stresslevel}</Text>
      </View>
  )

  const toggleFlag = () => {
      mentee.flag = (mentee.flag + 1) % 2;
      if( mentee.flag == 0 ) {
          mentee.flagIcon = require('../../../assets/flag0.png')
        }
      else {
        mentee.flagIcon = require('../../../assets/flag1.png')
      }
      console.log(mentee.flag);

      getAsyncItem("mentees").then( menteesList => {
        for (var index = 0; index < menteesList.length; index++){
          if (menteesList[index].name == mentee.name){

            menteesList[index].flag = mentee.flag;
            menteesList[index].flagIcon = mentee.flagIcon;
            break;
          }

        }
        setAsyncItem("mentees", menteesList)
      })

  }

  const renderMoodReport = ({ item: moodreportitem }) => (
    <MoodReportItem moodreport = {moodreportitem} />
  )

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <View style={styles.menteescreen}>

      <View style={styles.menteescreenbuttons}>

        <View style={styles.menteebuttonsection}>
          <Pressable style={styles.menteebutton}
                                onPress={() => navigation.navigate("Supervisor Chat Log", {screenname: mentee.name, mentor: mentor, mentee: mentee})}>
            <Image style={styles.menteeicons} source={require('../../../assets/chaticon.png')}/>
            <Text style={styles.menteeicontext}>Chat</Text>
          </Pressable>

          <Pressable style={styles.menteebutton}
                                  onPress={() => navigation.navigate('Supervisor Calendar Shortcut', {username: username})}>
            <Image style={styles.menteeicons} source={require('../../../assets/calendaricon.png')}/>
            <Text style={styles.menteeicontext}>Calendar</Text>
          </Pressable>
        </View>

        <View style={styles.menteebuttonsection}>
          <Pressable style={styles.menteebutton}
                                  onPress={() => toggleFlag()}>
            <Image style={styles.menteeicons} source={require('../../../assets/flag0.png')}/>
            <Text style={styles.menteeicontext}>Add Flag</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.menteecurrentrisk}>
        <Text>Current Risk:</Text>
        <Image style={styles.menteeicons} source={riskButterflyLoc}/>
      </View>

      <FlatList
        contentContainerStyle={{flexGrow:1}}
        data={filteredList}
        keyExtractor={(item) => item.id}
        renderItem={renderMoodReport}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }/>

    </View>
  );
}
