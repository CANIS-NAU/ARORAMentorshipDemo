import React, {useState, useEffect} from 'react';
import {styles} from '../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput, FlatList, RefreshControl, ScrollView} from 'react-native';
import Question from '../components/question.js'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAsyncItem, setAsyncItem, removeAsyncItem, getAsyncKeys, clearAsyncStorage, getLogin, questionsExample } from '../databasehelpers/asyncstoragecalls';
import { loginsExample, mentorsExample, menteesExample, accessCodesExample} from '../databasehelpers/exampledata';

export function QuestionScreen({ navigation }) {
  const username = navigation.getParent().getState().routes[1].params.params.params.username

  const [questions, setQuestions] = React.useState([])
  const [searchQuestions, setSearchQuestions] = React.useState([])

  useEffect(() => {
    //setAsyncItem("mentees", menteesExample)
    getAsyncItem("questions").then(results => {
      setQuestions(results)
      setSearchQuestions(results)
    })}, []);

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

  useEffect(() => {
    //makeQuestions("questions", JSON.stringify(questionsExample))
    //console.log(navigation.getParent().getState().routes[1].params.params.params.username)
    getAsyncItem("questions").then(results => {
      setQuestions(results)
    
    })}, []);

  const getQuestionItem = (item) => {
      return (
        <Question question={item} username ={username}/>
      );
  }

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    getAsyncItem("questions").then(results => {
      setQuestions(results)
    })

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