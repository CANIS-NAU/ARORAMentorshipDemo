import * as React from 'react';
import {styles} from '../../../../../Desktop/Colleg/Spring 2022/CS486C/Testing/2-7/ARORAMentorshipDemo-main/ARORA_App_v2/src/stylesheet';
import {NavigationBar} from '../../../../../Desktop/Colleg/Spring 2022/CS486C/Testing/2-7/ARORAMentorshipDemo-main/ARORA_App_v2/src/components/navigationbar';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

//Connection to database
//const database = openDatabase({name: 'database.db', createFromLocation: 1});

/*
//runs an SQL query and if there is a row that has this username and password, allow login
let confirmLogin = () => {
    database.transaction((trans) => {
        trans.executeSql(
            'SELECT * FROM loginCredentials where username = ? AND password = ?', [username], [password],
            (trans, results) => {
                var length = results.rows.length;
                //add logging here maybe?
                if(length > 0) {
                    return true;
                }
                else {
                    return false;
                }
            }
        )
    })
}
*/

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
                     onPress={confirmLogin() ? () => navigation.navigate('Home') : null}>
              <Text style={styles.loginbuttontext}> Login </Text>
          </Pressable>

        </View>
      </View>
    </View>
  );
}
