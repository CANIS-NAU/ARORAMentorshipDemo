import * as React from 'react';
import {styles} from '../../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput, Divider } from 'react-native';

export function SupervisorChangePasswordScreen({ navigation }) {
  const [email, emailText] = React.useState('');

  return (
    <View style={styles.screen}>

      <View style={styles.screencontent}>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>

            <Text style={{fontSize: 20, paddingBottom: 0, marginBottom: 0,}}>Enter your account email to recieve a password change request.</Text>

          <TextInput style={styles.changepasswordinput} 
                     placeholder="Recovery Email"
                     onChangeText = {email => emailText(email)} 
                     defaultValue = {email}/>

          <Pressable style={styles.changepasswordoption}
                              onPress={() => navigation.navigate('Supervisor Profile')}>
                <Text style={styles.changepasswordtext}>Return to Profile</Text>
          </Pressable>
        
          <Pressable style={styles.changepasswordbutton}
                   onPress={email == 'hello@nau.edu' ? () => navigation.navigate('Supervisor Profile') : null}>
              <Text style={styles.changepasswordbuttontext}>Submit</Text>
          </Pressable>

        </View>
      </View>
    </View>
  );
}
