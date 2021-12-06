import * as React from 'react';
import {styles} from './stylesheet';
import {NavigationBar} from './navigationbar';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput } from 'react-native';

export function ProfileScreen({ navigation }) {
  return (
    <View style={styles.screen}>

      <View style={styles.screencontent}>

      </View>

      <NavigationBar navigation={navigation}/>

    </View>
  );
}
