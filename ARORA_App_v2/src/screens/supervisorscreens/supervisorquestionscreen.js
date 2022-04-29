import React, {useState, useEffect} from 'react';
import {styles} from '../../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput, FlatList, SectionList, RefreshControl, ScrollView} from 'react-native';
import Question from '../../components/question.js'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAsyncItem, setAsyncItem, removeAsyncItem, getAsyncKeys, clearAsyncStorage, getLogin, questionsExample } from '../../databasehelpers/asyncstoragecalls';
import { loginsExample, mentorsExample, menteesExample, accessCodesExample} from '../../databasehelpers/exampledata';


export function SupervisorQuestionScreen({ navigation }) {
  const username = navigation.getParent().getState().routes[1].params.params.params.username

  const [questions, setQuestions] = React.useState([])
  const [searchQuestions, setSearchQuestions] = React.useState([])

  useEffect(() => {
    //setAsyncItem("mentees", menteesExample)
    getFlaggedQuestions("questions")
  }, []);

  const searchQueryQuestions = (query) => {
    if (query == ''){
      setSearchQuestions(questions)
    }
    else{
      let queryQuestions = []
      for (let question of questions ){
        if (question.questiontext.toLowerCase().includes(query.toLowerCase())
            || question.date.includes(query)){
          queryQuestions.push(question)
        }
      }
      setSearchQuestions(queryQuestions)

    }
  }


  const getQuestionItem = (item) => {
    return (
      <Question question={item} username ={username}/>
    );
  }

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
          setSearchQuestions(flaggedQuestions)
          return flaggedQuestions;
      })
    }

    catch(err){
      console.log(err);
    }
  }


  const responseItem = ({response}) => (
    <View style={styles.homescreenmenteelist}>
        <View style={styles.homescreenmentee}>
          <Text>{response.username}:  </Text>
          <Text>{response.text}</Text>
        </View>
    </View>
  )


  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    getFlaggedQuestions("questions")
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <View style={styles.screen}>

      <View style={styles.screencontent}>
        <View style={{margin: 10}}>
          <View>
            <TextInput style={styles.logininput}
              placeholder="Search"
              onChangeText = {searchQuery => searchQueryQuestions(searchQuery)}
              />
          </View>

          <View>
              <FlatList 
                keyboardShouldPersistTaps="always"
                contentContainerStyle={{flexGrow:1}}
                data={searchQuestions}
                keyExtractor={(item, index) => index}
                renderItem={(item) => getQuestionItem(item.item)}
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