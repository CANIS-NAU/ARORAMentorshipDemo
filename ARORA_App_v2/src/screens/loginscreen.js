import * as React from 'react';
import {styles} from '../stylesheet';
import {NavigationBar} from '../components/navigationbar';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput } from 'react-native';

export function LoginScreen({ navigation }) {
  const [username, userText] = React.useState('');
  const [password, pswdText] = React.useState('');
  

  return (
    <View style={styles.screen}>
      <View style={styles.screencontent}>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>

          <TextInput style={styles.logininput} 
                     placeholder="Username"
                     onChangeText = {username => userText(username)} 
                     defaultValue = {username}/>

          <TextInput style={styles.logininput} 
                     placeholder="Password"
                     onChangeText = {password => pswdText(password)} 
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
          
          {/* Obviously need to change to be from database */}
          <Pressable style={styles.loginbutton} 
                     onPress={(username == 'Username' && password == 'Password') ? () => navigation.navigate('Home') : null}>
              <Text style={styles.loginbuttontext}> Login </Text>
          </Pressable>

        </View>
      </View>
    </View>
  );
}
