import * as React from 'react';
import {styles} from '../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput, Divider } from 'react-native';

export function ChangeEmailScreen({ navigation }) {
  const [email, emailText] = React.useState('');

  return (
    <View style={styles.screen}>

      <View style={styles.screencontent}>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>

            <Text style={{fontSize: 20, paddingBottom: 0, marginBottom: 0,}}>Enter your recovery account email to recieve a change of email request.</Text>

          <TextInput style={styles.changeemailinput} 
                     placeholder = "Recovery Email"
                     onChangeText = {email => emailText(email)} 
                     defaultValue = {email}/>

          <Pressable style={styles.changeemailoption}
                              onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.changeemailtext}>Return to Profile</Text>
          </Pressable>
        
          <Pressable style={styles.changeemailbutton}
                   onPress={email == '@nau.edu' ? () => navigation.navigate('Profile') : null}>
              <Text style={styles.changeemailbuttontext}>Submit</Text>
          </Pressable>

        </View>
      </View>
    </View>
  );
}
