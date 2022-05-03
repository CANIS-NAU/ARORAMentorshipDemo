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
    <View style={styles.screen}>
      <View style={styles.profilecontent}>
    
        <View>
          <Text>Create Supervisor Access Code</Text>
        </View>
            {/* Supervisor only needs to make new blanks with a set access code*/}
        <View>
          <TextInput style={styles.logininput} 
                        placeholder = "Access Code"
                        onChangeText = {accessCode => setCode(accessCode)} 
                        defaultValue = {accessCode}/>
        </View>
            {/* Need to add what happens to other data, preferebly a record in database */}
        <View style={{marginBottom: 50}}>
                <Button
                  title="Submit"
                  color="#7897AB"
                        onPress={() => {

                          if (accessCode != "" && parseInt(accessCode) >= 0){
                            getAsyncItem("accesscodes").then(codesList => {
                              codesList.push({code: accessCode, authority: "supervisor"})
                              console.log(codesList)
                              setAsyncItem("accesscodes", codesList)
                            })
                          }

                        }}/>
        </View>

          <View style={{marginBottom: 30}}>
            <Button
              title="Set Default Data"
              color = "#7897AB"
                        onPress={() => {

                          setAsyncItem("users", loginsExample) // only has a supervisor
                          setAsyncItem("mentees", menteesExample)
                          setAsyncItem("accesscodes", accessCodesExample)
                          setAsyncItem("questions", questionsExample)

                        }}/>
          </View>

          <View style={{marginBottom: 10}}>
            <Button style={styles.loginbutton} 
              title= "Clear Users"
              color = "#7897AB"
                        onPress={() => {

                          clearAsyncStorage()
                          setAsyncItem("users", adminDefault)
                          setAsyncItem("accesscodes", [])
                          setAsyncItem("questions", questionsExample)
                          setAsyncItem("mentees", menteesExample)

                        }}/>
          </View>
            
        
      </View>
  </View>
  );
}
