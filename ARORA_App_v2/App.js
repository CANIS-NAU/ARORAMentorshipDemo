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
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput } from 'react-native';
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

function LoginScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <View style={styles.screencontent}>

        <TextInput style={styles.logininput} placeholder="Username"/>
        <TextInput style={styles.logininput} placeholder="Password"
                                                              secureTextEntry/>
        <View style={styles.loginoptions}>

          <Pressable style={styles.loginoption}>
            <Text style={styles.loginoptiontext}>Create An Account</Text>
          </Pressable>

          <Pressable style={styles.loginoption}>
            <Text style={styles.loginoptiontext}>Forgot Password?</Text>
          </Pressable>

        </View>

        <Pressable style={styles.loginbutton}
                            onPress={() => navigation.navigate('Home')}>
          <Text style={styles.loginbuttontext}>Login</Text>
        </Pressable>

      </View>
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

      <View style={styles.navigationbar}>

        <Pressable style={styles.navigationbutton}
                              onPress={() => navigation.navigate('Profile')}>
          <View style={styles.navigationbutton}>
            <Text style={styles.navbuttontext}>Profile</Text>
          </View>
        </Pressable>

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
                          onPress={() => navigation.navigate('Chat')}>
          <View style={styles.navigationbutton}>
            <Text style={styles.navbuttontext}>Chat</Text>
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

function Profile({ navigation }) {
  return (
    <View style={styles.screen}>

      <View style={styles.screencontent}>

      </View>

      <View style={styles.navigationbar}>

        <Pressable style={styles.navigationbutton}
                              onPress={() => navigation.navigate('Profile')}>
          <View style={styles.navigationbutton}>
            <Text style={styles.navbuttontext}>Profile</Text>
          </View>
        </Pressable>

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
                          onPress={() => navigation.navigate('Chat')}>
          <View style={styles.navigationbutton}>
            <Text style={styles.navbuttontext}>Chat</Text>
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
                              onPress={() => navigation.navigate('Profile')}>
          <View style={styles.navigationbutton}>
            <Text style={styles.navbuttontext}>Profile</Text>
          </View>
        </Pressable>

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
                          onPress={() => navigation.navigate('Chat')}>
          <View style={styles.navigationbutton}>
            <Text style={styles.navbuttontext}>Chat</Text>
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

      <View style={styles.menteescreenbuttons}>

        <View style={styles.menteebuttonsection}>
          <Pressable style={styles.menteebutton}
                                onPress={() => navigation.navigate('Chat')}>
            <Image style={styles.menteeicons} source={require('./assets/chaticon.png')}/>
            <Text style={styles.menteeicontext}>Chat</Text>
          </Pressable>

          <Pressable style={styles.menteebutton}
                                  onPress={() => navigation.navigate('Calendar')}>
            <Image style={styles.menteeicons} source={require('./assets/calendaricon.png')}/>
            <Text style={styles.menteeicontext}>Calendar</Text>
          </Pressable>
        </View>

        <View style={styles.menteebuttonsection}>
          <Pressable style={styles.menteebutton}
                              onPress={() => navigation.navigate('Calendar')}>
            <Image style={styles.menteeicons} source={require('./assets/greenbutterflybuttonicon.png')}/>
            <Text style={styles.menteeicontext}>Low</Text>
            </Pressable>

          <Pressable style={styles.menteebutton}
                                onPress={() => navigation.navigate('Calendar')}>
            <Image style={styles.menteeicons} source={require('./assets/yellowbutterflybuttonicon.png')}/>
            <Text style={styles.menteeicontext}>Medium</Text>
          </Pressable>

          <Pressable style={styles.menteebutton}
                                onPress={() => navigation.navigate('Calendar')}>
            <Image style={styles.menteeicons} source={require('./assets/redbutterflybuttonicon.png')}/>
            <Text style={styles.menteeicontext}>High</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.menteecurrentrisk}>
        <Text>Current Risk:</Text>
        <Image style={styles.menteeicons} source={require('./assets/greenbutterflybuttonicon.png')}/>
      </View>

      <View style={styles.moodreportlist}>

        <View style={styles.moodreport}>
          <Text>Mood Report</Text>
        </View>

        <View style={styles.moodreport}>
          <Text >Mood Report</Text>
        </View>

        <View style={styles.moodreport}>
          <Text >Mood Report</Text>
        </View>

      </View>

    </View>
  );
}

function JaneDoe( {navigation} )
{
  return (
    <View style={styles.menteescreen}>

      <View style={styles.menteescreenbuttons}>

        <View style={styles.menteebuttonsection}>
          <Pressable style={styles.menteebutton}
                                onPress={() => navigation.navigate('Chat')}>
            <Image style={styles.menteeicons} source={require('./assets/chaticon.png')}/>
            <Text style={styles.menteeicontext}>Chat</Text>
          </Pressable>

          <Pressable style={styles.menteebutton}
                                  onPress={() => navigation.navigate('Calendar')}>
            <Image style={styles.menteeicons} source={require('./assets/calendaricon.png')}/>
            <Text style={styles.menteeicontext}>Calendar</Text>
          </Pressable>
        </View>

        <View style={styles.menteebuttonsection}>
          <Pressable style={styles.menteebutton}
                              onPress={() => navigation.navigate('Calendar')}>
            <Image style={styles.menteeicons} source={require('./assets/greenbutterflybuttonicon.png')}/>
            <Text style={styles.menteeicontext}>Low</Text>
            </Pressable>

          <Pressable style={styles.menteebutton}
                                onPress={() => navigation.navigate('Calendar')}>
            <Image style={styles.menteeicons} source={require('./assets/yellowbutterflybuttonicon.png')}/>
            <Text style={styles.menteeicontext}>Medium</Text>
          </Pressable>

          <Pressable style={styles.menteebutton}
                                onPress={() => navigation.navigate('Calendar')}>
            <Image style={styles.menteeicons} source={require('./assets/redbutterflybuttonicon.png')}/>
            <Text style={styles.menteeicontext}>High</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.menteecurrentrisk}>
        <Text>Current Risk:</Text>
        <Image style={styles.menteeicons} source={require('./assets/yellowbutterflybuttonicon.png')}/>
      </View>

      <View style={styles.moodreportlist}>

        <View style={styles.moodreport}>
          <Text>Mood Report</Text>
        </View>

        <View style={styles.moodreport}>
          <Text >Mood Report</Text>
        </View>

        <View style={styles.moodreport}>
          <Text >Mood Report</Text>
        </View>

      </View>

    </View>
  );
}

function Chat( {navigation} )
{
  return (
    <View style={styles.screen}>

      <View style={styles.screencontent}>

      </View>

      <View style={styles.navigationbar}>

        <Pressable style={styles.navigationbutton}
                              onPress={() => navigation.navigate('Profile')}>
          <View style={styles.navigationbutton}>
            <Text style={styles.navbuttontext}>Profile</Text>
          </View>
        </Pressable>

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
                          onPress={() => navigation.navigate('Chat')}>
          <View style={styles.navigationbutton}>
            <Text style={styles.navbuttontext}>Chat</Text>
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

function Calendar( {navigation} )
{
  return (
    <View style={styles.screen}>

      <View style={styles.screencontent}>
        <Text>Google Calendar</Text>
      </View>

      <View style={styles.navigationbar}>

        <Pressable style={styles.navigationbutton}
                              onPress={() => navigation.navigate('Profile')}>
          <View style={styles.navigationbutton}>
            <Text style={styles.navbuttontext}>Profile</Text>
          </View>
        </Pressable>

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
                          onPress={() => navigation.navigate('Chat')}>
          <View style={styles.navigationbutton}>
            <Text style={styles.navbuttontext}>Chat</Text>
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
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={Profile} />
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

  loginoptions: {
    flexDirection: "row",
  },

  logininput: {
    margin: 3,
    backgroundColor: "#ffffff",
  },

  loginoption: {
    margin: 5,
  },

  loginoptiontext: {
    fontSize: 8,
  },

  loginbutton: {
    padding: 3,
    backgroundColor: "#dddddd"
  },

  homescreen: {

  },

  homescreenmenteelist: {

  },

  homescreenmentee: {
    flexDirection: "row",
    alignItems: "center",
  },

  homescreenmenteeicons: {
    width: 15,
    height: 15,
  },

  menteescreen: {
    margin: 10,
  },

  moodreportlist: {
    justifyContent: "flex-start",
    alignItems: "stretch",
  },

  moodreport: {
    flex: 1,
    backgroundColor: "grey",
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
  },

  menteescreencontact: {
    flexDirection: "row",
    justifyContent: "center",

  },

  menteeicons: {
    width: 50,
    height: 50,
  },

  menteescreenbuttons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  menteebuttonsection:
  {
    flexDirection: "row",
    alignItems: "left",
  },

  menteebutton: {
    flex: 1,
    margin: 5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  menteecurrentrisk: {
    flexDirection: "row",
    jusifyContent: "center",
    alignItems: "center",
  },

})

export default App;
