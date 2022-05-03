import React, {useState, useEffect} from 'react';
import {styles} from '../../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput } from 'react-native';
import { getAsyncItem, setAsyncItem, removeAsyncItem, getEvents, getUser } from '../../databasehelpers/asyncstoragecalls';

export function SupervisorProfileScreen({ navigation }) {
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
        </View>

        <View>
          <Text style={{fontSize: 20, paddingBottom: 0, marginBottom: 0,}}>Username: {username}</Text>
        </View>

        <View>
          <Text style={{fontSize: 20, paddingBottom: 0, marginBottom: 20,}}>Password: {password}</Text>
        </View>

        <View style={{marginBottom: 10}}>
          <Button
            title = "Create Mentor Access Code"
            color = "#7897AB"
                        onPress={() => navigation.navigate('Supervisor Mentor Access Code')}/>
        </View>
      
        <Button
          title = "Log Out"
          color = "#7897AB"
                   onPress={() => navigation.navigate("Login")}/>

      </View>
    </View>
  );
}
