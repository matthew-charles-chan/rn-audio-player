import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

import episodes from './src/episodes';
import TrackPlayer from 'react-native-track-player';

export default function App() {

  useEffect(() => {
    TrackPlayer.setupPlayer().then(async () => {
      // The player is ready to be used
      console.log('Player ready');
      console.log(episodes)
      // add the array of songs in the playlist
      await TrackPlayer.reset();
      await TrackPlayer.add(episodes[1]);
      TrackPlayer.play();

      //add listener on track change
    })
  }, []);

  return (
    <View style={styles.screen}>
      <FlatList
        data={episodes}
        keyExtractor={(item, index) => item.id}
        renderItem={itemData => (
          <TouchableOpacity onTouch={() => TrackPlayer.stop()}>
            <View style={styles.todoItem}>
              <Text>{itemData.item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  todoItem: {
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 2,
    padding: 10
  }
});
