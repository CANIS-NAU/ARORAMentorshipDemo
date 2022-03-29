import React, {useState, useEffect} from 'react';
import {styles} from '../../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput, FlatList, RefreshControl, ScrollView} from 'react-native';
import Question from '../../components/question.js'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAsyncItem, setAsyncItem, removeAsyncItem, getAsyncKeys, clearAsyncStorage, getLogin, questionsExample } from '../../databasehelpers/asyncstoragecalls';
import { loginsExample, mentorsExample, menteesExample, accessCodesExample} from '../../databasehelpers/exampledata';


export function SupervisorQuestionScreen({ navigation }) {
  const username = navigation.getParent().getState().routes[1].params.params.params.username

  const [anonQuestions, setQuestions] = useState('');

  const getFlaggedQuestions = async(value) => {
    try{
      getAsyncItem("questions").then( questions => {
          let flaggedQuestions = [];
          for (var index = 0; index < questions.length; index++){
            if (questions[index].flagged == true){
              flaggedQuestions.push(questions[index])
            }
          }

          //console.log("________________________")
          //var keys = await AsyncStorage.getAllKeys()
          //console.log(JSON.parse(value))
          //console.log(keys)
          //console.log("________________________")
          setQuestions(flaggedQuestions)
          return flaggedQuestions;
      })
    }

    catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    //makeQuestions("questions", JSON.stringify(questionsExample))
    getFlaggedQuestions("questions")
  }, []);


  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <View style={styles.screen}>

      <View style={styles.screencontent}>
        <View style={{margin: 10}}>
          <View>
            <TextInput
              multiline={false}
              style={{ textAlignVertical: 'top', backgroundColor: "#ffffff", marginBottom: 20}}
            />
          </View>

          <View>
              <FlatList 
                keyboardShouldPersistTaps="always"
                contentContainerStyle={{flexGrow:1}}
                data={anonQuestions}
                keyExtractor={(item, index) => index}
                renderItem={(item) => <Question question={item.item} username ={username}/>}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                  />
                }/>
          </View>

        </View>
      </View>

    </View>
  );
}