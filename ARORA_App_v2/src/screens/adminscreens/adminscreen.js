import React, {useState, useEffect} from 'react';
import {styles} from '../../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAsyncItem, setAsyncItem, getAllSupervisors, getAllUsers, removeAsyncItem, getAsyncKeys, clearAsyncStorage, getLogin } from '../../databasehelpers/asyncstoragecalls';
import { loginsExample, adminDefault, mentorsExample, menteesExample, accessCodesExample, questionsExample} from '../../databasehelpers/exampledata';

export function AdminScreen({ navigation }) {
  //const {username} = route.params;
  const [mentors, setMentors] = React.useState([])
  const [supervisors, setSupervisors] = React.useState([])
  const [accessCode, setCode] = React.useState()

  useEffect(() => {
    //setAsyncItem("mentors", mentorsExample)
    getAllUsers("supervisor").then(supervisorsList => setSupervisors(supervisorsList))
    getAllUsers("mentor").then(mentorsList => setMentors(mentorsList))
  }, []);

  const MentorItem = ({mentor}) => (
    <View style={styles.homescreenmenteelist}>
      <Pressable style={styles.homescreenmentee}
                          onPress={() => navigation.navigate("Supervisor Mentor Screen", {screenname: mentor.name, username: username, mentor: mentor})}>
        <View style={styles.homescreenmentee}>
          <Text>{mentor.name}</Text>
        </View>
      </Pressable>
    </View>
  )

  const renderMentor = ({ item: mentorItem }) => (
    <MentorItem mentor = {mentorItem} />
  )

  const [refreshing, setRefreshing] = React.useState(false);

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <View>
      <View>
        <Text>Create Supervisor Access Code</Text>
        {/* Supervisor only needs to make new blanks with a set access code*/}
        <TextInput style={styles.logininput} 
                     placeholder = "Access Code"
                     onChangeText = {accessCode => setCode(accessCode)} 
                     defaultValue = {accessCode}/>

        {/* Need to add what happens to other data, preferebly a record in database */}
        <Pressable style={styles.loginbutton} 
                     onPress={() => {

                      if (accessCode != "" && parseInt(accessCode) > 0){
                        getAsyncItem("accesscodes").then(codesList => {
                          codesList.push({code: accessCode, authority: "supervisor"})
                          console.log(codesList)
                          setAsyncItem("accesscodes", codesList)
                        })
                      }

                    }}>
              <Text style={styles.loginbuttontext}> Submit </Text>
        </Pressable>
      </View>

      <View>
        <Text>Set Default Data</Text>
        <Pressable style={styles.loginbutton} 
                     onPress={() => {

                      setAsyncItem("users", loginsExample) // only has a supervisor
                      setAsyncItem("mentees", menteesExample)
                      setAsyncItem("accesscodes", accessCodesExample)
                      setAsyncItem("questions", questionsExample)

                    }}>
              <Text style={styles.loginbuttontext}> Set </Text>
        </Pressable>
      </View>

      <View>
        <Text>Clear All Data</Text>
        <Pressable style={styles.loginbutton} 
                     onPress={() => {

                      clearAsyncStorage()
                      setAsyncItem("users", adminDefault)

                    }}>
              <Text style={styles.loginbuttontext}> Clear</Text>
        </Pressable>
      </View>
        
        
    </View>
  );
}
