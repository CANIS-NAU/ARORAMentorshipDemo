import React, {useState, useEffect} from 'react';
import {styles} from '../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput, FlatList, RefreshControl } from 'react-native';
import { getAsyncItem, setAsyncItem, removeAsyncItem } from '../databasehelpers/asyncstoragecalls';
import { menteesExample } from '../databasehelpers/exampledata';

export default function Question( {question, username} ) {
    const [text, setText] = useState("");
    const [textsave, setTextSave] = useState("");
    const [flagged, setFlagged] = useState('');

    useEffect(() => {
      console.log(question)
      setText(question.responsetext)
      if (question.flagged == true){
        setFlagged("Flagged!")
      }
      else{
        setFlagged("")
      }
    }, []);

    return(
    <View style={styles.question}>
      <View style={{flexDirection: "row"}}>
        <Text>{question.questiontext}</Text>
        <Pressable onPress={() => {
              getAsyncItem("questions").then( questionsList => {
                for (var index = 0; index < questionsList.length; index++){
                  if (questionsList[index].askerid == question.askerid
                        && questionsList[index].date == question.date
                        && questionsList[index].id == question.id){

                    if (flagged == ""){
                      setFlagged("Flagged!");
                      questionsList[index].flagged = true;
                      console.log(questionsList[index].flagged)
                    }
                    else{
                      setFlagged("");
                      questionsList[index].flagged = false;
                    }
                    break;
                  }

                }
                setAsyncItem("questions", questionsList)
              })
          }}>
          <Image style={{width: 20, height: 20}} source={require('../../assets/redbutterflybuttonicon.png')}/>
        </Pressable>
      </View>
      <Text>{flagged}</Text>
      <Text>Responses:</Text>
      <Text>{text}</Text>
      <TextInput
          multiline={false}
          placeholder="Type a response..."
          onChangeText={typing => setTextSave(typing)}
          defaultValue = {textsave}
          style={styles.textEdit}
      />
      <Button title="Submit" 
            onPress={() => {
                    console.log("clicked")
                    getAsyncItem("questions").then( questionsList => {
                      for (var index = 0; index < questionsList.length; index++){
                        if (questionsList[index].askerid == question.askerid
                              && questionsList[index].date == question.date
                              && questionsList[index].id == question.id){
      
                          questionsList[index].responsetext = textsave;
                          break;
                        }
      
                      }
                      setAsyncItem("questions", questionsList)
                      setText(textsave)
                      setTextSave('')
                    })
                }
            }/>
  </View>
    )
}