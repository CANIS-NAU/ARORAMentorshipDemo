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
import {CreationScreen} from './screens/creationscreen';
import {ResetScreen} from './screens/resetscreen';
import {styles} from './stylesheet';
import {ChangeEmailScreen} from './screens/changeemailscreen';
import {ChangePasswordScreen} from './screens/changepasswordscreen';
import {ChatroomScreen} from './screens/chatroomscreen';


// supervisor
import {SupervisorMentorScreen} from './screens/supervisorscreens/supervisormentorscreen';
import {SupervisorMenteeScreen} from './screens/supervisorscreens/supervisormenteescreen';
import {SupervisorHomeScreen} from './screens/supervisorscreens/supervisorhomescreen';
import {SupervisorChatScreen} from './screens/supervisorscreens/supervisorchatscreen';
import {SupervisorProfileScreen} from './screens/supervisorscreens/supervisorprofilescreen';
import {SupervisorQuestionScreen} from './screens/supervisorscreens/supervisorquestionscreen';
import {SupervisorCalendarScreen} from './screens/supervisorscreens/supervisorcalendarscreen';
import {SupervisorMentorAccessCodeScreen} from './screens/supervisorscreens/supervisormentoraccesscodescreen';
import {SupervisorChangeEmailScreen} from './screens/supervisorscreens/supervisorchangeemailscreen';
import {SupervisorChangePasswordScreen} from './screens/supervisorscreens/supervisorchangepasswordscreen';
import { SupervisorChatroomScreen } from './screens/supervisorscreens/supervisorchatroomscreen'

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

//supervisor view
function SupervisorHomeScreenStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Supervisor Home" component={SupervisorHomeScreen} />
        <Stack.Screen name="Supervisor Mentor Screen" component ={SupervisorMentorScreen}
                  options={({route}) => ({ title: route.params.screenname})}/>
        <Stack.Screen name="Supervisor Mentee Screen" component ={SupervisorMenteeScreen}
                  options={({route}) => ({ title: route.params.screenname})}/>
        <Stack.Screen name="Supervisor Chat" component = {SupervisorChatScreen} />
        <Stack.Screen name="Supervisor Chat Screen" component = {SupervisorChatScreen} />
        <Stack.Screen name="Supervisor Calendar" component ={SupervisorCalendarScreen} />
      </Stack.Navigator>
  )};
export {SupervisorHomeScreenStack};

function LoginScreenStack(){
  return(
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Creation" component ={CreationScreen}
                  options={({route}) => ({ title: route.params.screenname})}/>
        <Stack.Screen name="Reset" component ={ResetScreen}
                  options={({route}) => ({ title: route.params.screenname})}/>
      </Stack.Navigator>
  )};
export {LoginScreenStack};

function ProfileScreenStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Change Email" component={ChangeEmailScreen} />
        <Stack.Screen name="Change Password" component={ChangePasswordScreen} />
      </Stack.Navigator>
  )};
export {ProfileScreenStack};

function ChatScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Chat Room" component ={ChatroomScreen}
                    options={({route}) => ({ title: route.params.screenname})}/>
    </Stack.Navigator>
  )};
export {ChatScreenStack};

function SupervisorChatScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Supervisor Chat" component={SupervisorChatScreen} />
      <Stack.Screen name="Supervisor Chat Room" component ={SupervisorChatroomScreen}
                    options={({route}) => ({ title: route.params.screenname})}/>
    </Stack.Navigator>
  )};
export {SupervisorChatScreenStack};

function SupervisorProfileScreenStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Supervisor Profile" component={SupervisorProfileScreen} />
        <Stack.Screen name="Change Email" component={SupervisorChangeEmailScreen} />
        <Stack.Screen name="Change Password" component={SupervisorChangePasswordScreen} />
        <Stack.Screen name="Supervisor Mentor Access Code" component={SupervisorMentorAccessCodeScreen} />
      </Stack.Navigator>
  )};
export {SupervisorProfileScreenStack};

const Tab = createBottomTabNavigator();
function NavigationBar() {
  return(
        <Tab.Navigator initialRouteName="Home"
        screenOptions = {{
          "tabBarShowLabel": false,
          "tabBarLabelStyle": {
            "marginBottom": 30,
          },
          "tabBarStyle": [
            {
              "backgroundColor": "#7897AB",
              "display": "flex",
              "height": '10%'
            },
            null
          ],
          tabBarHideOnKeyboard: true
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

          <Tab.Screen name="Chat" component = {ChatScreenStack}
                      options={{ headerShown: false, tabBarIcon: ({size, focused, color}) => {
              return (<Image style={styles.navbaricons} source={require('../assets/chatbuttonicon.png')}/>)}}}/>

          <Tab.Screen name="Calendar" component ={CalendarScreen}
              options={{ tabBarIcon: ({size, focused, color}) => {
              return (<Image style={styles.navbaricons} source={require('../assets/calendarbuttonicon.png')}/>)}}}/>

        </Tab.Navigator>
  )};
export {NavigationBar};

function SupervisorNavigationBar() {
  return(
        <Tab.Navigator initialRouteName="Supervisor Home"
          screenOptions = {{
            "tabBarShowLabel": false,
          "tabBarLabelStyle": {
            "marginBottom": 30,
          },
          "tabBarStyle": [
            {
              "backgroundColor": "#7897AB",
              "display": "flex",
              "height": '10%'
            },
            null
          ],
          tabBarHideOnKeyboard: true
          }}
        >
          <Tab.Screen name="Supervisor Profile" component={SupervisorProfileScreenStack}
              options={{ headerShown: false, tabBarIcon: ({size, focused, color}) => {
              return (<Image style={styles.navbaricons} source={require('../assets/profilebuttonicon.png')}/>)}}}/>

          <Tab.Screen name="Supervisor Questions" component={SupervisorQuestionScreen}
              options={{ tabBarIcon: ({size, focused, color}) => {
              return (<Image style={styles.navbaricons} source={require('../assets/questionbuttonicon.png')}/>)}}}/>

          <Tab.Screen name="Supervisor Home" component={SupervisorHomeScreenStack} options={{ headerShown: false }}
              options={{ headerShown: false, tabBarIcon: ({size, focused, color}) => {
              return (<Image style={styles.navbaricons} source={require('../assets/homebuttonicon.png')}/>)}}}/>

          <Tab.Screen name="Supervisor Chat" component = {SupervisorChatScreenStack}
                      options={{ headerShown: false, tabBarIcon: ({size, focused, color}) => {
              return (<Image style={styles.navbaricons} source={require('../assets/chatbuttonicon.png')}/>)}}}/>

          <Tab.Screen name="Supervisor Calendar" component ={SupervisorCalendarScreen}
              options={{ tabBarIcon: ({size, focused, color}) => {
              return (<Image style={styles.navbaricons} source={require('../assets/calendarbuttonicon.png')}/>)}}}/>

        </Tab.Navigator>
  )};
export {SupervisorNavigationBar};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initalRouteName = "Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Creation" component={CreationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Reset" component={ResetScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={NavigationBar} options={{ headerShown: false }} />
        <Stack.Screen name="Supervisor Home" component={SupervisorNavigationBar} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )};
