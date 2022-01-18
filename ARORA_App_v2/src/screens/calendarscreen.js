import * as React from 'react';
import {styles} from '../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput } from 'react-native';

export function CalendarScreen( {navigation} )
{
  return (
    <View style={styles.screen}>

      <View style={styles.screencontent}>
        <Text>Google Calendar</Text>
      </View>

    </View>
  );
}
