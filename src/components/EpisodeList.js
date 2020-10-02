import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import episodes from '../episodes';

export default function EpisodeList() {
  return (
    <View>
      <FlatList
        data={episodes}
        keyExtractor={(item, index) => item.id}
        renderItem={(itemData) => (
          <TouchableOpacity>
            <View style={styles.todoItem}>
              <Text>{itemData.item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
    padding: 10,
  },
});
