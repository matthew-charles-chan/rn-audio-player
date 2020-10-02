import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import EpisodeList from './src/components/EpisodeList';
import episodes from './src/episodes';
import TrackPlayer from 'react-native-track-player';

export default function App() {
  useEffect(() => {
    TrackPlayer.setupPlayer().then(async () => {
      // The player is ready to be used
      console.log('Player ready');
      console.log(episodes);
      // add the array of songs in the playlist
      await TrackPlayer.reset();
      await TrackPlayer.add(episodes[1]);
      TrackPlayer.play();

      //add listener on track change
    });
  }, []);

  return (
    <View style={styles.screen}>
      <EpisodeList />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
