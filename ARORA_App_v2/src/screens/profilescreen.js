import * as React from 'react';
import {styles} from '../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput } from 'react-native';

export function ProfileScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <View style={styles.screencontent}>

        <Text style={{fontSize: 20, paddingBottom: 0, marginBottom: 0,}}>Y/N's Profile</Text>

        <View>
          <Text style={{fontSize: 20, paddingBottom: 0, marginBottom: 0,}}>Email:  y/n@gmail.com</Text>
          <Pressable style={styles.profilebutton}
                     onPress={() => navigation.navigate('Change Email')}>
            <Text style={styles.profilebuttontext}>Change Email</Text>
          </Pressable>
        </View>

        <View>
          <Text style={{fontSize: 20, paddingBottom: 0, marginBottom: 0,}}>Password:  **********</Text>
          <Pressable style={styles.profilebutton}
                     onPress={() => navigation.navigate('Change Password')}>
            <Text style={styles.profilebuttontext}>Change Password</Text>
          </Pressable>
        </View>

        <Pressable style={styles.loginbutton}
                   onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginbuttontext}>Log out</Text>
        </Pressable>

      </View>
    </View>
  );
}
