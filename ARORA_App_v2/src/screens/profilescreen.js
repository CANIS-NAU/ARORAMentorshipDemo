import * as React from 'react';
import {styles} from '../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, TextInput } from 'react-native';

export function ProfileScreen({ navigation }) {
  return (
    <View style={styles.screen}>

      <View style={styles.screencontent}>

      {/* IF THEY ARE A SUPERVISOR */}
            <Pressable style={styles.loginoption}
                        onPress={() => navigation.navigate('CreateMentor')}>
              <Text style={styles.loginoptiontext}>Create New Mentor</Text>
            </Pressable>
            
      </View>
    </View>
  );
}
