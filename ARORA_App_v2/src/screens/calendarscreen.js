import * as React from 'react';
import {styles} from '../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, Alert } from 'react-native';

export function CalendarScreen( {route, navigation} )
{
  return (
    <View style={styles.screen}>

      <View style={styles.moodreportlist}>

      </View>
      <Pressable style={styles.menteebutton}>
        <Text style={styles.menteeicontext}>Add Event</Text>
      </Pressable>
    </View>
  );
}
