import React, {useState} from 'react';
import {styles} from '../../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput, FlatList, RefreshControl, ScrollView} from 'react-native';
import Question from '../../components/question.js'

const anonQuestions = [
  {
    id: 1,
    askerid: 27984, 
    date: "1/23/2022",
    questiontext: "How do I eliminate stress in my life?",
    flagged: false
  },
  {
    id: 2,
    askerid: 27985, 
    date: "1/24/2022",
    questiontext: "How do I improve my moods?",
    flagged: false
  },
  {
    id: 3,
    askerid: 27986, 
    date: "1/25/2022",
    questiontext: "How I keep my depression from taking over my life?",
    flagged: false
  },
  {
    id: 4,
    askerid: 27986, 
    date: "1/25/2022",
    questiontext: "How I keep my depression from taking over my life?",
    flagged: false
  },
  {
    id: 5,
    askerid: 27986, 
    date: "1/25/2022",
    questiontext: "How I keep my depression from taking over my life?",
    flagged: false
  },
  {
    id: 6,
    askerid: 27986, 
    date: "1/25/2022",
    questiontext: "How I keep my depression from taking over my life?",
    flagged: false
  },
  {
    id: 7,
    askerid: 27986, 
    date: "1/25/2022",
    questiontext: "How I keep my depression from taking over my life?",
    flagged: false
  }
]

export function SupervisorQuestionScreen({ navigation }) {

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
                renderItem={(item) => <Question question={item.item}/>}
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
