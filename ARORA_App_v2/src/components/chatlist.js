import * as React from 'react';
import {styles} from '../stylesheet';
import { StyleSheet, View, Text, Button, Pressable, Image, FlatList, RefreshControl } from 'react-native';
import { FindMRButterfly, FindAVGHelper, FindAVGButterfly } from '../../functions/butterflyfuncts.js';

export default function ChatList( {navigation} ) {
  const mentees = [
    {
    name: 'John Smith'
    },
    {
      name: 'Jane Doe'
    }
  ]

  const ChatItem = ({mentee}) => (
    <View style={styles.homescreenmenteelist}>
      <Pressable style={styles.homescreenmentee}
                 onPress={() => navigation.navigate("Chat", {screenname: mentee.name, mentee: mentee})}>
        <View style={styles.homescreenmentee}>
          <Text>{mentee.name}</Text>
        </View>
      </Pressable>
    </View>
  )

  const renderChat = ({ item: menteeItem }) => (
    <ChatItem mentee = {menteeItem} />
  )

  const [refreshing, setRefreshing] = React.useState(false);

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);



  return (<FlatList
    contentContainerStyle={{flexGrow:1}}
    data={mentees}
    keyExtractor={(item) => item.id}
    renderItem={renderChat}
    refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    }/>)
}