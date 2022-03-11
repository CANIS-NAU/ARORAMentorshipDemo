import * as React from 'react';
import {styles} from '../../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput, Divider } from 'react-native';
import { getAsyncItem, setAsyncItem, removeAsyncItem,  } from '../../databasehelpers/asyncstoragecalls';
import { menteesExample } from '../../databasehelpers/exampledata';

export function SupervisorMentorAccessCodeScreen({ navigation }) {
  const [accessCode, setCode] = React.useState('');

  return (
    <View style={styles.screen}>
      <View style={styles.screencontent}>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>

          {/* Supervisor only needs to make new blanks with a set access code*/}
          <TextInput style={styles.logininput} 
                     placeholder = "Access Code"
                     onChangeText = {accessCode => setCode(accessCode)} 
                     defaultValue = {accessCode}/>

        <Pressable style={styles.loginoption}
                              onPress={() => {
                                          navigation.navigate('Supervisor Profile')
                                        }}>
              <Text style={styles.loginoptiontext}>Return to Profile</Text>
        </Pressable>

        {/* Need to add what happens to other data, preferebly a record in database */}
        <Pressable style={styles.loginbutton} 
                     onPress={() => {

                      if (accessCode != "" && parseInt(accessCode) > 0){
                        getAsyncItem("accesscodes").then(codesList => {
                          codesList.push(accessCode)
                          console.log(codesList)
                          setAsyncItem("accesscodes", codesList)
                          navigation.navigate('Supervisor Profile')
                        })
                      }

                    }}>
              <Text style={styles.loginbuttontext}> Submit </Text>
          </Pressable>

        </View>
      </View>
    </View>
  );
}
