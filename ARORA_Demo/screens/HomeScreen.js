/*import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ARORA Home Screen</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
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
*/
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
