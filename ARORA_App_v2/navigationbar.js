import * as React from 'react';
import {styles} from './stylesheet';


import { StyleSheet, View, Text, Button, Pressable, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export function NavigationBar({navigation}) {
  return (
    <View style={styles.navigationbar}>

      <Pressable style={styles.navigationbutton}
                            onPress={() => navigation.navigate('Profile')}>
        <View style={styles.navigationbutton}>
          <Image style={styles.navigationbuttonicon} source={require('./assets/profilebuttonicon.png')}/>
        </View>
      </Pressable>

      <Pressable style={styles.navigationbutton}
                            onPress={() => navigation.navigate('Questions')}>
        <View style={styles.navigationbutton}>
          <Image style={styles.navigationbuttonicon} source={require('./assets/questionbuttonicon.png')}/>
        </View>
      </Pressable>

      <Pressable style={styles.navigationbutton}
                        onPress={() => navigation.navigate('Home')}>
        <View style={styles.navigationbutton}>
          <Image style={styles.navigationbuttonicon} source={require('./assets/homebuttonicon.png')}/>
        </View>
      </Pressable>

      <Pressable style={styles.navigationbutton}
                        onPress={() => navigation.navigate('Chat')}>
        <View style={styles.navigationbutton}>
          <Image style={styles.navigationbuttonicon} source={require('./assets/chatbuttonicon.png')}/>
        </View>
      </Pressable>

      <Pressable style={styles.navigationbutton}
                        onPress={() => navigation.navigate('Calendar')}>
        <View style={styles.navigationbutton}>
          <Image style={styles.navigationbuttonicon} source={require('./assets/calendarbuttonicon.png')}/>
        </View>
      </Pressable>

    </View>
  );
}
