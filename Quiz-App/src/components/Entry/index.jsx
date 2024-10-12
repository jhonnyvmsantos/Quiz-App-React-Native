import * as React from 'react';
import { styles } from "./style";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

export function Entry({ text, name, value, changeValue }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{text}</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={event => changeValue(name, event)}
            />
        </View>
    )
}