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
  const [confirmPassword, setConfirmPassword] = useState('');
  const [inputError, setInputError] = React.useState('');

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
          <View>
            <Text style={{color: "red"}}>{inputError}</Text>
          </View>

          <TextInput style={styles.forminput} 
                     placeholder = "Access Code"
                     onChangeText = {accessCode => setCode(accessCode)} 
                     defaultValue = {accessCode}/>

          <TextInput style={styles.forminput} 
                     placeholder = "Name"
                     onChangeText = {name => setName(name)} 
                     defaultValue = {name}/>

          <TextInput style={styles.forminput} 
                     placeholder = "Recovery Email"
                     onChangeText = {email => setEmail(email)} 
                     defaultValue = {email}/>

          <TextInput style={styles.forminput} 
                     placeholder = "Username"
                     onChangeText = {username => setUsername(username)} 
                     defaultValue = {username}/>

          <TextInput style={styles.forminput} 
                     placeholder = "Password"
                     onChangeText = {password => setPassword(password)} 
                     defaultValue = {password}
                     secureTextEntry/>
          
          <TextInput style={styles.forminput} 
                     placeholder = "Confirm Password"
                     onChangeText = {password => setConfirmPassword(password)} 
                     defaultValue = {confirmPassword}
                     secureTextEntry/>

        <Pressable style={styles.loginoption}
                              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginoptiontext}>Return to Login</Text>
        </Pressable>

        {/* Need to add what happens to other data, preferebly a record in database */}
        <Pressable style={styles.loginbutton} 
                     onPress={() => {
                        getAsyncItem("accesscodes").then(codes => {
                          for (let code of codes){

                            if (code.code == accessCode && email.includes("@") && email.includes(".") && username != '' && password != ''){
                              if (password == confirmPassword){

                                setInputError('')
                                getAsyncItem("users").then(users => {
                                  
                                  if (code.authority == "mentor"){
                                    users.push(
                                      {
                                        name: name,
                                        username: username,
                                        password: password,
                                        email: email,
                                        authority: code.authority,
                                        mentors: [],
                                        mentees: [1, 2, 3, 4],
                                        messages: [
                                          [
                                            /**
                                             * Mock message data
                                             */
                                            // example of system message
                                            {
                                              _id: 0,
                                              text: 'New room created.',
                                              createdAt: new Date().getTime(),
                                              system: true
                                            },
                                            {
                                              _id: 1,
                                              text: 'Henlo!',
                                              text: 'Thanks for all your help.',
                                              createdAt: new Date().getTime(),
                                              user: {
                                                _id: 2,
                                                name: 'Test User'
                                              }
                                            },
                                          ],
                                          [
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
                                          [
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
                                          [
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
                                          ]
                                
                                      ],
                                        events: [],
                                      })
                                  }
                                  else{
                                    users.push(
                                      {
                                        name: name,
                                        username: username,
                                        password: password,
                                        email: email,
                                        authority: code.authority,
                                        mentors: [ "mentor" ],
                                        mentees: [],
                                        messages: [],
                                        events: [],
                                      })
                                  }

                                  setAsyncItem("users", users);

                                  const indexToDelete = codes.indexOf(accessCode);
                                  codes.splice(indexToDelete, 1);
                                  setAsyncItem("accesscodes", codes);

                                  navigation.navigate("Login");

                                })
                              
                              }
                              else{
                                setInputError("Passwords do not match.")
                              }
                            }
                            else{
                              if (code.code != accessCode){
                                setInputError("Invalid Access Code.")
                              }
                              else{
                                setInputError("Invalid Input.\nYou must enter a username, password, and valid email address.")
                              }
                            }
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