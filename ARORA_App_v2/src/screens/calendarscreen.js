import React, {useState, useEffect} from 'react';
import {styles} from '../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, FlatList, RefreshControl, TextInput } from 'react-native';
import { getAsyncItem, setAsyncItem, removeAsyncItem, getEvents, getUser } from '../databasehelpers/asyncstoragecalls';
import { DateTimePicker } from '@react-native-community/datetimepicker';
import moment from 'moment';

export function CalendarScreen( {route, navigation} )
{
  let username = null
  if (route != null && route.params != null){
    username = route.params.username
  }
  else{
    username = navigation.getParent().getState().routes[1].params.params.params.username
  }

  const [mode, setMode] = useState(new Date());
  const [timeShow, setTimeShow] = useState(false);
  const [dateShow, setDateShow] = useState(false);
  const [eventDate, dateText] = useState(new Date());
  const [eventTime, timeText] = useState(new Date());
  const [eventDesc, descText] = useState('');
  const [events, setEvents] = useState('');

  useEffect(() => {
    console.log(route.params)
    console.log(username)
    //setAsyncItem("events", JSON.stringify(eventsExample))
    //console.log(navigation.getParent().getState().routes[1].params.params.params.username)
    getEvents(username).then(eventsList => setEvents(eventsList))
  }, []);

  const EventItem = ({event}) => (
    <View style={styles.homescreenmenteelist}>
      <View style={styles.moodreport}>
        <Text>{new Date(event.date).toLocaleDateString('en-US', {weekday: "long", year: "numeric", month: "long", day: "numeric"})}</Text>
        <Text>{new Date(event.time).toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', hour12: true})}</Text>
        <Text>{event.desc}</Text>
        <Button title="Edit" 
            onPress={() => {
                    dateText(event.date);
                    timeText(event.time);
                    descText(event.desc);
                    
                    event.activity = "inactive";
                    setEvents(events.filter(eventitem => eventitem.activity != "inactive"));

                    getAsyncItem("users").then(users => {
                      getUser(username).then( user => {
                        getEvents(username).then (eventsList => {
                          for (var index = 0; index < eventsList.length; index++){
                            if (eventsList[index].date == event.date
                                  && eventsList[index].time == event.time
                                  && eventsList[index].desc == event.desc){
    
                              eventsList.splice(index, 1);
                            }
                          }
                          let userIndex = -1;
                          for (let index = 0; index < users.length; index++){
                            if (users[index].username == user.username){
                              userIndex = index;
                              break;
                            }
                          }
                          user.events = eventsList;
                          users[userIndex] = user;
                          setAsyncItem("users", users)

                        })
                      })
                    })
                }
            }/>
        <Button title="Delete" 
            onPress={() => {
                    event.activity = "inactive"
                    setEvents(events.filter(eventitem => eventitem.activity != "inactive"))

                    getAsyncItem("users").then(users => {
                      getUser(username).then(user => {
                        getEvents(username).then (eventsList => {
                          for (var index = 0; index < eventsList.length; index++){
                            if (eventsList[index].date == event.date
                                  && eventsList[index].time == event.time
                                  && eventsList[index].desc == event.desc){
    
                              eventsList.splice(index, 1);
                            }
                          }
                          let userIndex = -1;
                          for (let index = 0; index < users.length; index++){
                            if (users[index].username == user.username){
                              userIndex = index;
                              break;
                            }
                          }
                          user.events = eventsList;
                          users[userIndex] = user;
                          setAsyncItem("users", users)

                        })
                      })
                    })
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

  const onChange = (event, selectedDate) => {
    console.log(selectedDate)
    console.log(mode)
    const currentDate = selectedDate;

    if (mode == "date"){
      dateText(currentDate);
      console.log("changed date")
      setDateShow(false);
    }
    else if (mode == "time"){
      timeText(currentDate)
      console.log("changed time")
      setTimeShow(false);
    }
    setMode('')
  };


  const showMode = (currentMode) => {

    if (currentMode == 'time'){
      setTimeShow(true);
      setMode(currentMode);
    }
    else if (currentMode == 'date'){
      setDateShow(true);
      setMode(currentMode);
    }
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (

    <View style={styles.screen}>
      
      <View>
        <Text>Date</Text>
        <Pressable onPress={showDatepicker}>
          <Text>{eventDate.toDateString()}</Text>
          {dateShow && (
            <DateTimePicker
              testID="datePicker"
              value={eventDate}
              mode="date"
              is24Hour={true}
              onChange={onChange}
            />
          )}
        </Pressable>

        <Text>Time</Text>
        <Pressable onPress={showTimepicker}>
          <Text>{moment(eventTime).format('hh:mm A')}</Text>
          {timeShow && (
            <DateTimePicker
              testID="timePicker"
              value={eventTime}
              mode="time"
              is24Hour={true}
              onChange={onChange}
            />
          )}
        </Pressable>

        <TextInput style={styles.logininput}
                 placeholder="Description"
                 onChangeText = {eventDesc => descText(eventDesc)}
                 defaultValue = {eventDesc}/>

        <Button
                 title="Submit"
                 onPress={() => {
                  setEvents([...events, {activity: "active", date: eventDate, time: eventTime, desc: eventDesc}])

                  getAsyncItem("users").then(users => {
                    getUser(username).then( user => {
                      getEvents(username).then (eventsList => {
                        
                        eventsList.push(
                          {
                          activity: "active",
                          date: eventDate,
                          time: eventTime,
                          desc: eventDesc
                          }
                        )

                        let userIndex = -1;
                          for (let index = 0; index < users.length; index++){
                            if (users[index].username == user.username){
                              userIndex = index;
                              break;
                            }
                          }
                        user.events = eventsList;
                        users[userIndex] = user;
                        setAsyncItem("users", users)

                      })
                    })
                  })
              }}/>

      </View>

      <View>
            <FlatList 
                keyboardShouldPersistTaps="always"
                contentContainerStyle={{flexGrow:1}}
                data={events}
                keyExtractor={(item, index) => index}
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
