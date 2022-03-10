import * as React from 'react';
import {styles} from '../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput, Divider } from 'react-native';

export function CreationScreen({ navigation }) {
  const [accessCode, codeText] = React.useState('');
  const [email, emailText] = React.useState('');
  const [username, userText] = React.useState('');
  const [password, pswdText] = React.useState('');

  return (
    <View style={styles.screen}>

      <View style={styles.screencontent}>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>

          <TextInput style={styles.logininput} 
                     placeholder = "Access Code"
                     onChangeText = {accessCode => codeText(accessCode)} 
                     defaultValue = {accessCode}/>

          <TextInput style={styles.logininput} 
                     placeholder = "Recovery Email"
                     onChangeText = {email => emailText(email)} 
                     defaultValue = {email}/>

          <TextInput style={styles.logininput} 
                     placeholder = "Username"
                     onChangeText = {username => userText(username)} 
                     defaultValue = {username}/>

          <TextInput style={styles.logininput} 
                     placeholder = "Password"
                     onChangeText = {password => pswdText(password)} 
                     defaultValue = {password}
                     secureTextEntry/>

        <Pressable style={styles.loginoption}
                              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginoptiontext}>Return to Login</Text>
        </Pressable>

        {/* Need to add what happens to other data, preferebly a record in database */}
        <Pressable style={styles.loginbutton} 
                     onPress={(accessCode == '123456') ? () => navigation.navigate('Home') : null}>
              <Text style={styles.loginbuttontext}> Submit </Text>
          </Pressable>

        </View>
      </View>
    </View>
  );
}
