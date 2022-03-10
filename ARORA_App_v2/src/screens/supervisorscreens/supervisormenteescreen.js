import * as React from 'react';
import {styles} from '../../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, FlatList, RefreshControl } from 'react-native';
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

  const MoodReportItem = ({moodreport}) => (
    <View style={styles.moodreport}>
            <Text style={styles.moodreporttext}>Mood: {moodreport.mood}</Text>
            <Text style={styles.moodreporttext}>Stress Level: {moodreport.stresslevel}</Text>
    </View>
    )

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
