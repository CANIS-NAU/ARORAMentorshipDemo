import React, {useState, useEffect} from 'react';
import {styles} from '../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput } from 'react-native';
import { getAsyncItem, setAsyncItem, removeAsyncItem, getEvents, getUser } from '../databasehelpers/asyncstoragecalls';

export function ProfileScreen({ navigation }) {
  const username = navigation.getParent().getState().routes[2].params.params.username

  const [name, updateName] = useState('');
  const [email, updateEmail] = useState('');
  const [password, updatePassword] = useState('');

  useEffect(() => {
    //setAsyncItem("events", JSON.stringify(eventsExample))
    //console.log(navigation.getParent().getState().routes[1].params.params.params.username)
    getUser(username).then(user => {
      updateName(user.name)
      updateEmail(user.email)
      updatePassword(user.password)
    })
  }, []);


  return (
    <View style={styles.screen}>
      <View style={styles.profilecontent}>

        <Text style={{fontSize: 30, paddingBottom: 0, marginBottom: 20,}}>{name}'s Profile</Text>

        <View>
          <Text style={{fontSize: 20, paddingBottom: 0, marginBottom: 0,}}>Email: {email}</Text>
          <Pressable style={styles.profilebutton}
                     onPress={() => navigation.navigate('Change Email')}>
            <Text style={{marginBottom: 10}}>Change Email</Text>
          </Pressable>
        </View>

        <View>
          <Text style={{fontSize: 20, paddingBottom: 0, marginBottom: 10,}}>Username: {username}</Text>
        </View>

        <View>
          <Text style={{fontSize: 20, paddingBottom: 0, marginBottom: 0,}}>Password: {password}</Text>
          <Pressable style={{paddingBottom: 10}}
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
