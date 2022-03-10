import React, {useState} from 'react';
import {styles} from '../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput, FlatList, RefreshControl } from 'react-native';

export default function Question( {question} ) {
    const [text, setText] = useState('Currently no responses.');
    const [textsave, setTextSave] = useState("")
    return(
    <View style={styles.question}>
      <View style={{flexDirection: "row"}}>
        <Text>{question.questiontext}</Text>
        <Image style={{width: 20, height: 20}} source={require('../../assets/redbutterflybuttonicon.png')}/>
      </View>
      <Text>Responses:</Text>
      <Text>{text.toString()}</Text>
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
                    setText(textsave)
                    setTextSave('')
                }
            }/>
  </View>
    )
}