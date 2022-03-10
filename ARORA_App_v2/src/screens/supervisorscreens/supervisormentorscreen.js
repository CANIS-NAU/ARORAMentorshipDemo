import * as React from 'react';
import {styles} from '../../stylesheet';
import SupervisorMenteeList from '../../components/supervisormenteelist';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput } from 'react-native';

export function SupervisorMentorScreen( {route, navigation} )
{
  //const {mentorname, mentor} = route.params;
  return (
      <View style={styles.mentormenteelist}>
        <SupervisorMenteeList navigation={navigation}/>
      </View>
  );
}
