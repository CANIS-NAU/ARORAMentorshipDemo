import * as React from 'react';
import {styles} from '../../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, FlatList, RefreshControl, TextInput } from 'react-native';

let eventslist = [{
  activity: "active",
  date: '05/10/2022',
  time: '12:30 PM',
  desc: 'Meeting with John Smith'
},
{
  activity: "active",
  date: '05/12/2022',
  time: '6:00 PM',
  desc: 'Jane Doe\'s birthday'
}]

export function SupervisorCalendarScreen( {route, navigation} )
{

  const [eventDate, dateText] = React.useState('');
  const [eventTime, timeText] = React.useState('');
  const [eventDesc, descText] = React.useState('');
  const [events, setEvents] = React.useState([...eventslist]);

  const EventItem = ({event}) => (
    <View style={styles.homescreenmenteelist}>
      <View style={styles.moodreport}>
        <Text>{event.date}</Text>
        <Text>{event.time}</Text>
        <Text>{event.desc}</Text>
        <Button title="Edit" 
            onPress={() => {
                    dateText(event.date);
                    timeText(event.time);
                    descText(event.desc);
                    
                    event.activity = "inactive";
                    setEvents(events.filter(eventitem => eventitem.activity != "inactive"));
                }
            }/>
        <Button title="Delete" 
            onPress={() => {
                    event.activity = "inactive";
                    console.log(events);
                    setEvents(events.filter(eventitem => eventitem.activity != "inactive"));
                    console.log(events);
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



  return (

    <View style={styles.screen}>
      
      <View>
        <TextInput style={styles.logininput}
                 placeholder="Date"
                 onChangeText = {eventDate => dateText(eventDate)}
                 defaultValue = {eventDate}/>

        <TextInput style={styles.logininput}
                 placeholder="Time"
                 onChangeText = {eventTime => timeText(eventTime)}
                 defaultValue = {eventTime}/>

        <TextInput style={styles.logininput}
                 placeholder="Description"
                 onChangeText = {eventDesc => descText(eventDesc)}
                 defaultValue = {eventDesc}/>

        <Button
                 title="Submit"
                 onPress={() => {
                  dateText('');
                  timeText('');
                  descText('');
                  console.log("clicked")
                  setEvents([...events, {activity: "active", date: eventDate, time: eventTime, desc: eventDesc}])
              }}/>

      </View>

      <View>
            <FlatList 
                keyboardShouldPersistTaps="always"
                contentContainerStyle={{flexGrow:1}}
                data={events}
                keyExtractor={(item, index) => index.id}
                renderItem={renderEvent}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }/>
        </View>

    </View>
  );
}
