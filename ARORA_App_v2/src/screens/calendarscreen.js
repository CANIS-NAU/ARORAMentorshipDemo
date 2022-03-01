import * as React from 'react';
import {styles} from '../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, Alert, TextInput } from 'react-native';
import { CalendarList } from '../components/calendarlist.js';

export function CalendarScreen( {route, navigation} )
{


  return (

    <View style={styles.screen}>

      <CalendarList navigation={navigation}/>

    </View>
  );
}
