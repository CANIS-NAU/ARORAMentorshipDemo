import React, {useState, useEffect} from 'react';
import {styles} from '../../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, FlatList, RefreshControl, TextInput } from 'react-native';
import { getAsyncItem, setAsyncItem, removeAsyncItem, getEvents, getUser } from '../../databasehelpers/asyncstoragecalls';

export function SupervisorCalendarScreen( {route, navigation} )
{
  const username = navigation.getParent().getState().routes[1].params.params.params.username

  const [eventDate, dateText] = useState('');
  const [eventTime, timeText] = useState('');
  const [eventDesc, descText] = useState('');
  const [events, setEvents] = useState('');

  useEffect(() => {
    //setAsyncItem("events", JSON.stringify(eventsExample))
    //console.log(navigation.getParent().getState().routes[1].params.params.params.username)
    getEvents(username).then(eventsList => setEvents(eventsList))
  }, []);

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
