/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
*/

import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, View, Text, Button, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function NavigationBar() {
  return (
    <View style={styles.navigationbar}>
      <Pressable style={styles.navigationbutton}
                            onPress={() => navigation.navigate('Questions')}>
        <View style={styles.navigationbutton}>
          <Text style={styles.navbuttontext}>Questions</Text>
        </View>
      </Pressable>

      <Pressable style={styles.navigationbutton}
                        onPress={() => navigation.navigate('Home')}>
        <View style={styles.navigationbutton}>
          <Text style={styles.navbuttontext}>Home</Text>
        </View>
      </Pressable>

      <Pressable style={styles.navigationbutton}
                        onPress={() => navigation.navigate('Home')}>
        <View style={styles.navigationbutton}>
          <Text style={styles.navbuttontext}>Calendar</Text>
        </View>
      </Pressable>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.screen}>

      <View style={styles.screencontent}>

        <View style={styles.homescreen}>
          <Text>Shining Sky Logo</Text>
          <Text>Your Mentee's</Text>

          <Pressable style={styles.homescreenmenteelist}
                              onPress={() => navigation.navigate('John Smith')}>
            <View style={styles.homescreenmentee}>
              <Text>John Smith</Text>
            </View>
          </Pressable>

          <Pressable style={styles.homescreenmentee}
                              onPress={() => navigation.navigate('Jane Doe')}>
            <View style={styles.homescreenmentee}>
              <Text>Jane Doe</Text>
            </View>
          </Pressable>
        </View>

      </View>

      <View style={styles.navigationbar}>
        <Pressable style={styles.navigationbutton}
                              onPress={() => navigation.navigate('Questions')}>
          <View style={styles.navigationbutton}>
            <Text style={styles.navbuttontext}>Questions</Text>
          </View>
        </Pressable>

        <Pressable style={styles.navigationbutton}
                          onPress={() => navigation.navigate('Home')}>
          <View style={styles.navigationbutton}>
            <Text style={styles.navbuttontext}>Home</Text>
          </View>
        </Pressable>

        <Pressable style={styles.navigationbutton}
                          onPress={() => navigation.navigate('Calendar')}>
          <View style={styles.navigationbutton}>
            <Text style={styles.navbuttontext}>Calendar</Text>
          </View>
        </Pressable>
      </View>

    </View>
  );
}

function QuestionsScreen({ navigation }) {
  return (
    <View style={styles.screen}>

      <View style={styles.screencontent}>
        <View style={styles.questionscreen}>

          <View style={styles.searchbar}>
            <Text>SearchBar</Text>
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

      <View style={styles.navigationbar}>
        <Pressable style={styles.navigationbutton}
                              onPress={() => navigation.navigate('Questions')}>
          <View style={styles.navigationbutton}>
            <Text style={styles.navbuttontext}>Questions</Text>
          </View>
        </Pressable>

        <Pressable style={styles.navigationbutton}
                                  onPress={() => navigation.navigate('Home')}>
          <View style={styles.navigationbutton}>
            <Text style={styles.navbuttontext}>Home</Text>
          </View>
        </Pressable>

        <Pressable style={styles.navigationbutton}
                          onPress={() => navigation.navigate('Calendar')}>
          <View style={styles.navigationbutton}>
            <Text style={styles.navbuttontext}>Calendar</Text>
          </View>
        </Pressable>
      </View>

    </View>
  );
}

function MockQScreen( {navigation} ) {
  return (
    <View style ={{ flex: 1, alignItems: 'center', justifyContent: 'center '}}>
      <Text>This is what a mock question looks like</Text>
      <Button
        title="Return to Questions"
        onPress={() => navigation.navigate('Questions')}
      />
    </View>
  );
}

function MockQScreen2( {navigation} ) {
  return (
    <View style ={{ flex: 1, alignItems: 'center', justifyContent: 'center '}}>
      <Text>This is another mock question</Text>
      <Button
        title="Return to Questions"
        onPress={() => navigation.navigate('Questions')}
      />
    </View>
  );
}

function JohnSmith( {navigation} )
{
  return (
    <View style={styles.menteescreen}>

      <View style={styles.moodreportlist}>

        <View style={styles.moodreport}>
          <Text>Mood Report</Text>
        </View>

        <View style={styles.moodreport}>
          <Text>Mood Report</Text>
        </View>

        <View style={styles.moodreport}>
          <Text>Mood Report</Text>
        </View>

      </View>

      <View style={styles.menteescreencontact}>
        <Pressable style={styles.menteechat}
                              onPress={() => navigation.navigate('Chat')}>
          <Text style={styles.menteechattext}>Chat</Text>
        </Pressable>
      </View>

      <View style={styles.menteescreencalendar}>
        <Pressable style={styles.menteecalendar}
                              onPress={() => navigation.navigate('Calendar')}>
          <Text style={styles.menteecalendartext}>Calendar</Text>
        </Pressable>
      </View>

    </View>
  );
}

function JaneDoe( {navigation} )
{
  return (
    <View />
  );
}

function Chat( {navigation} )
{
  return (
    <View />
  );
}

function Calendar( {navigation} )
{
  return (
    <View style={styles.screen}>

      <View style={styles.screencontent}>
        <Text>Google Calendar</Text>
      </View>

      <View style={styles.navigationbar}>
        <Pressable style={styles.navigationbutton}
                              onPress={() => navigation.navigate('Questions')}>
          <View style={styles.navigationbutton}>
            <Text style={styles.navbuttontext}>Questions</Text>
          </View>
        </Pressable>

        <Pressable style={styles.navigationbutton}
                          onPress={() => navigation.navigate('Home')}>
          <View style={styles.navigationbutton}>
            <Text style={styles.navbuttontext}>Home</Text>
          </View>
        </Pressable>

        <Pressable style={styles.navigationbutton}
                          onPress={() => navigation.navigate('Calendar')}>
          <View style={styles.navigationbutton}>
            <Text style={styles.navbuttontext}>Calendar</Text>
          </View>
        </Pressable>
      </View>

    </View>
  );
}

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Questions" component={QuestionsScreen} />
        <Stack.Screen name="Mock Question" component ={MockQScreen} />
        <Stack.Screen name="Mock Question 2" component ={MockQScreen2} />
        <Stack.Screen name="John Smith" component ={JohnSmith} />
        <Stack.Screen name="Jane Doe" component ={JaneDoe} />
        <Stack.Screen name="Chat" component = {Chat} />
        <Stack.Screen name="Calendar" component ={Calendar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",

  },
  screencontent: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  navigationbar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "grey",
    justifyContent: "space-evenly",
  },

  navigationbutton: {
    margin: 10,
    alignSelf: "center",
    width: "auto",
    height: "auto",
  },

  navbuttontext: {
    fontSize: "100%",
    alignSelf: "center",
  },

  homescreen: {

  },

  homescreenmenteelist: {

  },

  homescreenmentee: {

  },

  menteescreen: {

  },

  moodreportlist: {

  },

  moodreport: {

  },

  menteescreencontact: {

  },

  menteescreencalendar: {

  },

})

export default App;
