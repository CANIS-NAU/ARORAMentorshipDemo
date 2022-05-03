import React, {useState, useEffect} from 'react';
import {styles} from '../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAsyncItem, setAsyncItem, removeAsyncItem, getAsyncKeys, clearAsyncStorage, getLogin } from '../databasehelpers/asyncstoragecalls';
import { loginsExample, adminDefault, mentorsExample, menteesExample, accessCodesExample, questionsExample} from '../databasehelpers/exampledata';

export function LoginScreen({ navigation }) {
  const [usernameinput, setUsername] = React.useState('');
  const [passwordinput, setPassword] = React.useState('');
  //const [retrievedUsername, setRUsername] = React.useState('test');
  //const [retrievedPassword, setRPassword] = React.useState('test');

  //const supervisor = false;

  useEffect(() => {
    getAsyncItem("users").then(result => {
      if (result == null){
        setAsyncItem("users", adminDefault)
      }

    })

    //getAsyncItem("accesscodes").then(result => console.log(result))
    //getAsyncItem("users").then(result => console.log(result))
    //getAsyncItem("questions").then(result => console.log(result))
    //getAsyncKeys()
  }, []);

   //This will place the retrieved username to retrievedUsername const
  //const getUsername = async(value) => {
    //  try{
      //  var value = await AsyncStorage.getItem(value);
       // setRUsername(value);
        //console.log(value);
        //return value;
      //}

      //catch(err){
        //console.log(err);
      //}
    //}

  //This will place the retrieved password to retrievedpassword const
  //const getPassword = async(value) => {
  //    try{
  //      var pass = await AsyncStorage.getItem(value);
  //      setRPassword(pass);
  //      console.log(pass);
  //      return pass;
  //    }
//
  //    catch(err){
   //     console.log(err);
   //     return;
   //   }
   // }


  const onSubmission = async() => {
    // console.log("We're in onSubmission");
    getLogin(usernameinput, passwordinput).then((loggedin) => {
      const success = loggedin[0];
      if (success){
        var authority = loggedin[1];
        var username = loggedin[2];
        if (authority == "supervisor"){
          navigation.navigate("Supervisor Navigation Bar",
                  {screen: "Supervisor Home Stack",
                   params: {screen: "Supervisor Home",
                            params: {username: username}}})
        }
        else if (authority == "ADMIN"){
          navigation.navigate("Admin Navigation")
        }
        else{
          navigation.navigate("Home Navigation Bar",
                  {screen: "Home Stack",
                   params: {screen: "Home",
                            params: {username: username}}})
        }

        return true;
      }

      return false;
    })
  }


  return (
    <View style={styles.screen}>
      <View style={styles.screencontent}>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>

          <TextInput style={styles.logininput}
                     placeholder= "Username"
                     onChangeText = {usernameinput => setUsername(usernameinput)}/>

          <TextInput style={styles.logininput}
                     placeholder="Password"
                     onChangeText = {passwordinput => setPassword(passwordinput)}
                     secureTextEntry/>

          <View style={styles.loginoptions}>

            <Pressable style={styles.loginoption}
                       onPress={() => navigation.navigate('Creation')}>
              <Text style={styles.loginoptiontext}>Create An Account</Text>
            </Pressable>

            <Pressable style={styles.loginoption}
                        onPress={() => navigation.navigate('Reset')}>
              <Text style={styles.loginoptiontext}>Forgot Password?</Text>
            </Pressable>

          </View>

          <Pressable style={styles.loginbutton}
                     onPress={() => onSubmission()}>
              <Text style={styles.loginbuttontext}> Login </Text>
          </Pressable>

        </View>
      </View>
    </View>
  );
}
