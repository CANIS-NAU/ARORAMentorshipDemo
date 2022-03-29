import React, {useState, useEffect} from 'react';
import {styles} from '../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput, FlatList, RefreshControl } from 'react-native';
import { getAsyncItem, setAsyncItem, removeAsyncItem } from '../databasehelpers/asyncstoragecalls';
import { menteesExample } from '../databasehelpers/exampledata';

export default function Question( {question, username} ) {
    const [text, setText] = useState("");
    const [textsave, setTextSave] = useState("");
    const [flagged, setFlagged] = useState('');
    const [responses, setResponses] = useState([]);

    useEffect(() => {
      setText(question.responsetext)
      if (question.flagged == true){
        setFlagged("Flagged!")
      }
      else{
        setFlagged("")
      }
    }, []);

    const ResponseItem = ({response}) => (
      <View style={styles.homescreenmenteelist}>
          <View style={styles.homescreenmentee}>
            <Text>{response.username}:  </Text>
            <Text>{response.text}</Text>
          </View>
      </View>
    )
  
    const renderResponse = ({ item: responseItem }) => (
      <ResponseItem response = {responseItem} />
    )
  
    const [refreshing, setRefreshing] = React.useState(false);
  
    const wait = (timeout) => {
      return new Promise(resolve => setTimeout(resolve, timeout));
    }
  
    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
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
      <FlatList 
            contentContainerStyle={{flexGrow:1}}
            data={question.responses}
            keyExtractor={(item, index) => index}
            renderItem={renderResponse}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
      }/>
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
      
                          questionsList[index].username = username;
                          questionsList[index].responses.push({username: username, text: textsave});
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