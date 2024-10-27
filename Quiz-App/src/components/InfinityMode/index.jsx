import * as React from 'react';
import { styles } from './style';
import { Text, TouchableOpacity, View } from "react-native";

export function InfinityMode({ count, collection }) {

  return (
    <View style={styles.container}>
      {collection >= 1 ? <>
        {Array(collection).fill(null).map((e, i) => (
          <TouchableOpacity key={i} style={styles.button}>
            <Text>Items ({10 * (i + 1)})</Text>
          </TouchableOpacity>
        ))}
      </> : <>
        <TouchableOpacity style={styles.button}>
          <Text>Items ({count})</Text>
        </TouchableOpacity>
      </>}

      {!Number.isInteger(count / 10) && collection >= 1 && (
        <TouchableOpacity>
          <Text>Max ({count})</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}