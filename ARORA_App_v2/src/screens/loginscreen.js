import * as React from 'react';
import {styles} from '../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

console.log(AsyncStorage.getAllKeys());

export function LoginScreen({ navigation }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [retrievedUsername, setRUsername] = React.useState('');
  const [retrievedPassword, setRPassword] = React.useState('');

  const supervisor = false;

   //This will place the retrieved username to retrievedUsername const
  const getUsername = async(value) => {
      try{
        var value = await AsyncStorage.getItem(value);
        setRUsername(value);
        console.log(value);
        return value;
      }

      catch(err){
        console.log(err);
      }
    }

  //This will place the retrieved password to retrievedpassword const
  const getPassword = async(value) => {
      try{
        var pass = await AsyncStorage.getItem(value);
        setRPassword(pass);
        console.log(pass);
        return pass;
      }

      catch(err){
        console.log(err);
        return;
      }
    }


  const onSubmission = async() => {
    // console.log("We're in onSubmission");
    let herpderp = await getUsername("userName");
    herpderp = await getPassword("userPass");

    if((username == retrievedUsername) && (password == retrievedPassword)) {
      
      if (supervisor == false){
        navigation.navigate('Home')
      }

      else{
        navigation.navigate('Supervisor Home')
      }

      return true;
    }
    
    return false;
  }


  return (
    <View style={styles.screen}>
      <View style={styles.screencontent}>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          
          <View style={{flex: .1, justifyContent: "center", alignItems: "center", flexDirection: "row"}}>
          <Image style={{width: 30, height: 30}} source={require('../../assets/teamshiningskyicon.png')}/>
          <Text style = {{marginLeft: 15, fontSize: 30, fontFamily:'arial', color: "#f5cbed"}}>ARORA</Text>
          </View>
          
          <TextInput style={styles.logininput}
                     placeholder="Username"
                     onChangeText = {username => setUsername(username)}
                     defaultValue = {username}/>

          <TextInput style={styles.logininput}
                     placeholder="Password"
                     onChangeText = {password => setPassword(password)}
                     defaultValue = {password}
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
