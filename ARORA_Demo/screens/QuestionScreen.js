/*import EditScreenInfo from "../components/EditScreenInfo";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "../components/Themed";
import HomeScreen from "../screens/HomeScreen";

export default function QuestionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Questions Screen</Text>
      <Button
        onPress={() => alert("This is an alert")}
        //onPress={() => TabOneNavigator()}
        title="Mock Question"
        color="#841584"
        accessibilityLabel="Question 1"
      />
      <Button
          title="Go to URL"
          onPress={() => this.props.navigation.navigate('url')}
        />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
const TabOneStack = createStackNavigator();
function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: "Tab One Title" }}
      />
    </TabOneStack.Navigator>
  );
}*/

import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Profile"
                    onPress={() => this.props.navigation.navigate('Profile')}
                />
            </View>
        );
    }
}
class ProfileScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Profile Screen</Text>
            </View>
    );
    }
}

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Profile: ProfileScreen
    },
    {
        initialRouteName: "Home"
    }
);

const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}  
