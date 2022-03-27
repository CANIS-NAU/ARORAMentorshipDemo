import * as React from 'react';
import {styles} from '../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput, Divider } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function CreationScreen({ navigation }) {
  const [accessCode, setCode] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

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
                     onPress={() => onSubmission()}>
            <Text style={styles.loginbuttontext}> Submit </Text>
          </Pressable>

        </View>
      </View>
    </View>
  );
}
