import * as React from 'react';
import {styles} from '../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput, Divider } from 'react-native';

export function ResetScreen({ navigation }) {
  const [email, emailText] = React.useState('');
  const [password, pswdTest] = React.useState('');


  return (
    <View style={styles.screen}>

      <View style={styles.screencontent}>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>

          <TextInput style={styles.logininput} 
                     placeholder="Recovery Email"
                     onChangeText = {email => emailText(email)} 
                     defaultValue = {email}/>

          <Pressable style={styles.loginoption}
                              onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginoptiontext}>Return to Login</Text>
          </Pressable>
        
        {/* Need to add actual password sendback */}
          <Pressable style={styles.loginbutton}
                   onPress={email == '@nau.edu' ? () => navigation.navigate('Login') : null}>
              <Text style={styles.loginbuttontext}>Submit</Text>
          </Pressable>

        </View>
      </View>
    </View>
  );
}
