import React, {useState, useEffect} from 'react';
import {styles} from '../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput, Divider } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAsyncItem, setAsyncItem, removeAsyncItem, getUser } from '../databasehelpers/asyncstoragecalls';
import { menteesExample } from '../databasehelpers/exampledata';

export function CreationScreen({ navigation }) {
  const [accessCode, setCode] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const storeUsername = async(value) => {
    try {
      var value = await AsyncStorage.setItem("userName", value);
      setUsername(value);
      return value;
    } 

    catch (err) {
      console.log(err);
    }
  }

  const storePassword = async(value) => {
    try {
      var value = await AsyncStorage.setItem("userPass", value)
      setPassword(value);
      return value;
    } 

    catch (err) {
      console.log(err);
    }
  }

  const onSubmission = async() => {
    console.log("We're in onSubmission!");
    if((email == "fhe2@nau.edu") && (accessCode == "123456")) {
      try {
        var placeUsername = await storeUsername(username)
        var placePassword = await storePassword(password);
        navigation.navigate('Login')
        return true;
      } 

      catch (err) {
        console.log(err);
        return false;
      }
    }

    else {
      return false;
    }
  }

  return (
    <View style={styles.screen}>

      <View style={styles.screencontent}>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>

          <TextInput style={styles.logininput} 
                     placeholder = "Access Code"
                     onChangeText = {accessCode => setCode(accessCode)} 
                     defaultValue = {accessCode}/>

          <TextInput style={styles.logininput} 
                     placeholder = "Name"
                     onChangeText = {name => setName(name)} 
                     defaultValue = {name}/>

          <TextInput style={styles.logininput} 
                     placeholder = "Recovery Email"
                     onChangeText = {email => setEmail(email)} 
                     defaultValue = {email}/>

          <TextInput style={styles.logininput} 
                     placeholder = "Username"
                     onChangeText = {username => setUsername(username)} 
                     defaultValue = {username}/>

          <TextInput style={styles.logininput} 
                     placeholder = "Password"
                     onChangeText = {password => setPassword(password)} 
                     defaultValue = {password}
                     secureTextEntry/>

        <Pressable style={styles.loginoption}
                              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginoptiontext}>Return to Login</Text>
        </Pressable>

        {/* Need to add what happens to other data, preferebly a record in database */}
        <Pressable style={styles.loginbutton} 
                     onPress={() => {
                        getAsyncItem("accesscodes").then(codes => {
                          if (codes.includes(accessCode) && email.includes("@") && email.includes(".") && username != '' && password != ''){
                            console.log("in")
                            getAsyncItem("users").then(users => {
                              
                              users.push(
                                {
                                  name: name,
                                  username: username,
                                  password: password,
                                  email: email,
                                  authority: "mentor",
                                  mentors: null,
                                  mentees: [1, 2],
                                  messages: [
                                      /**
                                       * Mock message data
                                       */
                                      // example of system message
                                      {
                                        _id: 0,
                                        text: 'New room created.',
                                        createdAt: new Date().getTime(),
                                        system: true
                                      }
                                  ],
                                  events: [{
                                      activity: "active",
                                      date: '05/10/2022',
                                      time: '12:30 PM',
                                      desc: 'Meeting with John Smith'
                                    },
                                    {
                                      activity: "active",
                                      date: '05/12/2022',
                                      time: '6:00 PM',
                                      desc: 'Jane Doe\'s birthday'
                                    }],
                                })

                              setAsyncItem("users", users);

                              const indexToDelete = codes.indexOf(accessCode);
                              console.log(indexToDelete)
                              codes.splice(indexToDelete, 1);
                              setAsyncItem("accesscodes", codes);

                              navigation.navigate("Login");

                            })

                          }
                        })
                     }}>
              <Text style={styles.loginbuttontext}> Submit </Text>
          </Pressable>

        </View>
      </View>
    </View>
  );
}
