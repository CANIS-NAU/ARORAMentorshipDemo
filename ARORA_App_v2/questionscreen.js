import * as React from 'react';
import {styles} from './stylesheet';
import {NavigationBar} from './navigationbar';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput} from 'react-native';

export function QuestionScreen({ navigation }) {
  return (
    <View style={styles.screen}>

      <View style={styles.screencontent}>
        <View style={{margin: 10}}>

          <View>
            <TextInput
              multiline={false}
              style={{ textAlignVertical: 'top', backgroundColor: "#ffffff", justifyContent: "stretch", marginBottom: 20}}
            />
          </View>

          <View style={{marginBottom: 50}}>

            <View style={styles.question}>
              <View style={{flexDirection: "row"}}>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Text>
                <Image style={{width: 20, height: 20}} source={require('./assets/redbutterflybuttonicon.png')}/>
              </View>
              <TextInput
                  multiline={true}
                  numberOfLines={2}
                  style={{height:100, width:150, margin: 20, textAlignVertical: 'top', backgroundColor: "#ffffff"}}
              />
              <Button title="Submit"/>
            </View>

            <View style={styles.question}>
              <View style={{flexDirection: "row"}}>
                <Text>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?</Text>
                <Image style={{width: 20, height: 20}} source={require('./assets/redbutterflybuttonicon.png')}/>
              </View>
              <TextInput
                  multiline={true}
                  numberOfLines={2}
                  style={{height:100, width:150, margin: 20, textAlignVertical: 'top', backgroundColor: "#ffffff"}}
              />
              <Button title="Submit"/>
            </View>

            <View style={styles.question}>
              <View style={{flexDirection: "row"}}>
                <Text>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?</Text>
                <Image style={{width: 20, height: 20}} source={require('./assets/redbutterflybuttonicon.png')}/>
              </View>
              <TextInput
                  multiline={true}
                  numberOfLines={2}
                  style={{height:100, width:150, margin: 20, textAlignVertical: 'top', backgroundColor: "#ffffff"}}
              />
              <Button title="Submit"/>
            </View>

          </View>

        </View>
      </View>

      <NavigationBar navigation={navigation}/>

    </View>
  );
}
