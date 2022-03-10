import * as React from 'react';
import {styles} from '../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, FlatList, RefreshControl } from 'react-native';
import { FindMRButterfly, FindAVGHelper, FindAVGButterfly } from '../../functions/butterflyfuncts.js';
//import CompleteFlatList from 'react-native-complete-flatlist';

export default function MenteeList( {navigation} ) {
  const mentees = [{
                    name: 'John Smith',
                    moodreports: [
                                  {date: '08/24/2001', mood: 'Happy', stresslevel: 'Low' },
                                  {date: '08/25/2001', mood: 'Neutral', stresslevel: 'Medium' },
                                  {date: '08/26/2001', mood: 'Neutral', stresslevel: 'Low' },
                                 ],
                   risk: FindAVGHelper('Happy', 'Low', 'Neutral', 'Medium', 'Neutral', 'Low'),
                   riskIcon: require('../../assets/greenbutterflyicon.png'),
                   flag: "off",
                   flagIcon: require('../../assets/flagoff.png'),
                  },
                  {
                    name: 'Jane Doe',
                    moodreports: [
                                  {date: '08/24/2001',mood: 'Sad',stresslevel: 'Low'},
                                  {date: '08/25/2001',mood: 'Neutral',stresslevel: 'High'},
                                  {date: '08/26/2001',mood: 'Sad',stresslevel: 'Medium'},
                                 ],
                   risk: FindAVGHelper('Sad', 'Low', 'Neutral', 'High', 'Sad', 'Medium'),
                   riskIcon: require('../../assets/yellowbutterflyicon.png'),
                   flag: "on",
                   flagIcon: require('../../assets/flagon.png'),
                  }
                  ]

  const MenteeItem = ({mentee}) => (
    <View style={styles.homescreenmenteelist}>
        <Pressable style={styles.homescreenmentee}
                            onPress={() => navigation.navigate("Mentee Screen", {screenname: mentee.name, mentee: mentee})}>
            <View style={styles.homescreenmentee}>
                <Image style={styles.homescreenmenteeicons} source={mentee.riskIcon}/>
                <Text>{mentee.name}</Text>
                <Image style={styles.homescreenmenteeicons} source={mentee.flagIcon}/>
            </View>
        </Pressable>
    </View>
  )

  const renderMentee = ({ item: menteeItem }) => (
      <MenteeItem mentee = {menteeItem} />
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
                data={mentees}
                keyExtractor={(item) => item.id}
                renderItem={renderMentee}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }/>)
}
