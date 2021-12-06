import * as React from 'react';
import {styles} from './stylesheet';
import {NavigationBar} from './navigationbar';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput } from 'react-native';

export function LoginScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <View style={styles.screencontent}>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
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
    </View>
  );
}
