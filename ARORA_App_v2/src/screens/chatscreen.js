import * as React from 'react';
import {styles} from '../stylesheet';
import {NavigationBar} from '../components/navigationbar';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput } from 'react-native';

export function ChatScreen( {navigation} )
{
  return (
    <View style={styles.screen}>

      <View style={styles.screencontent}>

      </View>

      <NavigationBar navigation={navigation}/>

    </View>
  );
}
