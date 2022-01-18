/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
*/

import {HomeScreen} from './screens/homescreen';
import {LoginScreen} from './screens/loginscreen';
import {ProfileScreen} from './screens/profilescreen';
import {ChatScreen} from './screens/chatscreen';
import {CalendarScreen} from './screens/calendarscreen';
import {QuestionScreen} from './screens/questionscreen';
import {MenteeScreen} from './screens/menteescreen';
import {styles} from './stylesheet';

import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const images = {
  'calendarbuttonicon.png': require("../assets/calendarbuttonicon.png"),
  'homebuttonicon.png':     require("../assets/homebuttonicon.png"),
  'chatbuttonicon.png':     require("../assets/chatbuttonicon.png"),
  'profilebuttonicon.png':  require("../assets/profilebuttonicon.png"),
  'questionbuttonicon.png': require("../assets/questionbuttonicon.png"),

  'calendaricon.png':       require("../assets/calendaricon.png"),
  'chaticon.png':           require("../assets/chaticon.png"),


  'greenbutterflybuttonicon.png':   require("../assets/greenbutterflybuttonicon.png"),
  'yellowbutterflybuttonicon.png':  require("../assets/yellowbutterflybuttonicon.png"),
  'redbutterflybuttonicon.png':     require("../assets/redbutterflybuttonicon.png"),

  'greenbutterflyicon.png':   require("../assets/greenbutterflyicon.png"),
  'yellowbutterflyicon.png':  require("../assets/yellowbutterflyicon.png"),
  'redbutterflyicon.png':     require("../assets/redbutterflyicon.png"),
};

const Stack = createNativeStackNavigator();
function HomeScreenStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Mentee Screen" component ={MenteeScreen}
                  options={({route}) => ({ title: route.params.screenname})}/>
        <Stack.Screen name="Chat" component = {ChatScreen} />
        <Stack.Screen name="Calendar" component ={CalendarScreen} />
      </Stack.Navigator>
  )};
export {HomeScreenStack};

function ProfileScreenStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Login" component ={LoginScreen}
                  options={({route}) => ({ title: route.params.screenname})}/>
      </Stack.Navigator>
  )};

export {ProfileScreenStack};
const Tab = createBottomTabNavigator();
function NavigationBar() {
  return(
        <Tab.Navigator initialRouteName="Home"
          tabBarOptions = {{
            tabStyle: {justifyContent: 'center'},
            labelStyle: {marginBottom: 5, fontsize: 8},
            style: {padding: 5, height: 70}
          }}
        >
          <Tab.Screen name="Profile" component={ProfileScreenStack}
              options={{ headerShown: false, tabBarIcon: ({size, focused, color}) => {
              return (<Image style={styles.navbaricons} source={require('../assets/profilebuttonicon.png')}/>)}}}/>

          <Tab.Screen name="Questions" component={QuestionScreen}
              options={{ tabBarIcon: ({size, focused, color}) => {
              return (<Image style={styles.navbaricons} source={require('../assets/questionbuttonicon.png')}/>)}}}/>

          <Tab.Screen name="Home" component={HomeScreenStack} options={{ headerShown: false }}
              options={{ headerShown: false, tabBarIcon: ({size, focused, color}) => {
              return (<Image style={styles.navbaricons} source={require('../assets/homebuttonicon.png')}/>)}}}/>

          <Tab.Screen name="Chat" component = {ChatScreen}
              options={{ tabBarIcon: ({size, focused, color}) => {
              return (<Image style={styles.navbaricons} source={require('../assets/chatbuttonicon.png')}/>)}}}/>

          <Tab.Screen name="Calendar" component ={CalendarScreen}
              options={{ tabBarIcon: ({size, focused, color}) => {
              return (<Image style={styles.navbaricons} source={require('../assets/calendarbuttonicon.png')}/>)}}}/>

        </Tab.Navigator>
  )};
export {NavigationBar};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initalRouteName = "Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={NavigationBar} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )};
