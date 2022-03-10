import React, {useState} from 'react';
import {styles} from '../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput, FlatList, RefreshControl } from 'react-native';

export function CalendarList( {navigation} ){

  let eventslist = [{
    date: '05/10/2022',
    time: '12:30 PM',
    desc: 'Meeting with John Smith'
  },
  {
    date: '05/12/2022',
    time: '6:00 PM',
    desc: 'Jane Doe\'s birthday'
  }]


  const [events, setEvents] = useState(eventslist);

  const EventItem = ({event}) => (
    <View style={styles.homescreenmenteelist}>
      <View style={styles.moodreport}>
        <Text>{event.date}</Text>
        <Text>{event.time}</Text>
        <Text>{event.desc}</Text>
        <Button title="Delete" 
            onPress={() => {
              console.log(event)
                    const index = eventslist.indexOf(event)
                    eventslist.splice(index, 1)
                    let tempArray = [...eventslist]
                    setEvents(tempArray)
                }
            }/>
      </View>
    </View>
  )

  const renderEvent = ({ item: eventItem }) => (
      <EventItem event = {eventItem} />
  )

  const [refreshing, setRefreshing] = React.useState(false);

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
  }, []);



  return (<View>
            <FlatList 
                keyboardShouldPersistTaps="always"
                contentContainerStyle={{flexGrow:1}}
                data={events}
                keyExtractor={(item) => item.id}
                renderItem={renderEvent}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }/>
        </View>
      )
}
