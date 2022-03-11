import * as React from 'react';
import {styles} from '../../stylesheet';
import MenteeList from '../../components/menteelist';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput, Divider } from 'react-native';
import SupervisorChatList from '../../components/supervisorchatlist'

export function SupervisorChatScreen( {navigation} ) {
  return(
    <View style={styles.screen}>
      <View style={styles.screencontent}>
        <View style={styles.homescreen}>

          <Text style={{fontSize: 20, paddingBottom: 3, marginBottom: 3,}}>Your Chat Logs</Text>

          <SupervisorChatList navigation={navigation}/>

        </View>

      </View>

    </View>
  );
}
