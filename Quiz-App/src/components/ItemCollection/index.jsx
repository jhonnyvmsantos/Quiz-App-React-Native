import * as React from 'react';
import { styles } from './style';
import { Text, TouchableOpacity, View } from "react-native";

export function ItemCollection({ count, collection }) {
  return (
    <View style={styles.container}>
      {collection >= 1 ? <>
        {Array(collection).fill(null).map((e, i) => (
          <TouchableOpacity key={i} style={styles.button}>
            <Text style={styles.text}>Items ({10 * (i + 1)})</Text>
          </TouchableOpacity>
        ))}
      </> : <>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Items ({count})</Text>
        </TouchableOpacity>
      </>}

      {!Number.isInteger(count / 10) && collection >= 1 && (
        <TouchableOpacity style={[styles.button, {backgroundColor: "#7DDA58", marginTop: 15}]}>
          <Text style={styles.text}>Max ({count})</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}