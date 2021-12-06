import * as React from 'react';
import {styles} from './stylesheet';
import {NavigationBar} from './navigationbar';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput} from 'react-native';

export function QuestionScreen({ navigation }) {
  return (
    <View style={styles.screen}>

      <View style={styles.screencontent}>
        <View style={styles.questionscreen}>

          <View>
            <Text>Search</Text>
          </View>

          <View style={styles.questionslist}>

            <View style={styles.question}>
              <Text>Question 1</Text>
            </View>

            <View style={styles.question}>
              <Text>Question 2</Text>
            </View>

            <View style={styles.question}>
              <Text>Question 3</Text>
            </View>

          </View>

        </View>
      </View>

      <NavigationBar navigation={navigation}/>

    </View>
  );
}
