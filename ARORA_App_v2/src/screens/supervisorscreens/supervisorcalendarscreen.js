import * as React from 'react';
import {styles} from '../../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput } from 'react-native';
import { CalendarList } from '../../components/calendarlist';

export function SupervisorCalendarScreen( {navigation} )
{
  const [eventDate, dateText] = React.useState('');
  const [eventTime, timeText] = React.useState('');
  const [eventDesc, descText] = React.useState('');

  return (
    <View style={styles.screen}>

      <View style={styles.screencontent}>

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
          />

        </View>

        <CalendarList navigation={navigation}/>
        
      </View>

    </View>
  );
}
