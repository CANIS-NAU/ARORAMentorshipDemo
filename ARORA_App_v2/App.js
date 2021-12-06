/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
*/

import {HomeScreen} from './homescreen';
import {LoginScreen} from './loginscreen';
import {ProfileScreen} from './profilescreen';
import {ChatScreen} from './chatscreen';
import {CalendarScreen} from './calendarscreen';
import {QuestionScreen} from './questionscreen';
import {JohnSmithScreen} from './johnsmithscreen';
import {JaneDoeScreen} from './janedoescreen';
import {styles} from './stylesheet';

import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const images = {
  'calendarbuttonicon.png': require("./assets/calendarbuttonicon.png"),
  'homebuttonicon.png':     require("./assets/homebuttonicon.png"),
  'chatbuttonicon.png':     require("./assets/chatbuttonicon.png"),
  'profilebuttonicon.png':  require("./assets/profilebuttonicon.png"),
  'questionbuttonicon.png': require("./assets/questionbuttonicon.png"),

  'calendaricon.png':       require("./assets/calendaricon.png"),
  'chaticon.png':           require("./assets/chaticon.png"),


  'greenbutterflybuttonicon.png':   require("./assets/greenbutterflybuttonicon.png"),
  'yellowbutterflybuttonicon.png':  require("./assets/yellowbutterflybuttonicon.png"),
  'redbutterflybuttonicon.png':     require("./assets/redbutterflybuttonicon.png"),

  'greenbutterflyicon.png':   require("./assets/greenbutterflyicon.png"),
  'yellowbutterflyicon.png':  require("./assets/yellowbutterflyicon.png"),
  'redbutterflyicon.png':     require("./assets/redbutterflyicon.png"),
};

function MockQScreen( {navigation} ) {
  return (
    <View style ={{ flex: 1, alignItems: 'center', justifyContent: 'center '}}>
      <Text>This is what a mock question looks like</Text>
      <Button
        title="Return to Questions"
        onPress={() => navigation.navigate('Questions')}
      />
    </View>
  );
}

function MockQScreen2( {navigation} ) {
  return (
    <View style ={{ flex: 1, alignItems: 'center', justifyContent: 'center '}}>
      <Text>This is another mock question</Text>
      <Button
        title="Return to Questions"
        onPress={() => navigation.navigate('Questions')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Questions" component={QuestionScreen} />
        <Stack.Screen name="Mock Question" component ={MockQScreen} />
        <Stack.Screen name="Mock Question 2" component ={MockQScreen2} />
        <Stack.Screen name="John Smith" component ={JohnSmithScreen} />
        <Stack.Screen name="Jane Doe" component ={JaneDoeScreen} />
        <Stack.Screen name="Chat" component = {ChatScreen} />
        <Stack.Screen name="Calendar" component ={CalendarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
