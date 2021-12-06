import * as React from 'react';
import {styles} from './stylesheet';
import {NavigationBar} from './navigationbar';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput } from 'react-native';

export function HomeScreen ({navigation}) {
  return(
    <View style={styles.screen}>
      <View style={styles.screencontent}>
        <View style={styles.homescreen}>

          <Image style={{width: 40, height: 40}} source={require('./assets/teamshiningskyicon.png')}/>

          <Text>Your Mentee's</Text>

          <Pressable style={styles.homescreenmenteelist}
                              onPress={() => navigation.navigate('John Smith')}>
            <View style={styles.homescreenmentee}>
              <Image style={styles.homescreenmenteeicons} source={require('./assets/greenbutterflyicon.png')}/>
              <Text>John Smith</Text>
            </View>
          </Pressable>

          <Pressable style={styles.homescreenmentee}
                              onPress={() => navigation.navigate('Jane Doe')}>
            <View style={styles.homescreenmentee}>
              <Image style={styles.homescreenmenteeicons} source={require('./assets/yellowbutterflyicon.png')}/>
              <Text>Jane Doe</Text>
            </View>
          </Pressable>
        </View>

      </View>
      <NavigationBar navigation={navigation}/>

    </View>
  );
}
