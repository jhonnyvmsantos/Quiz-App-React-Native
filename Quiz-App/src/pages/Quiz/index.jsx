import React from "react";
import { styles } from './style';
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

export function QuizPage() {

    return (
        <View style={styles.container}>
            <View style={[styles.content, { flex: 0.75 }]}>

            </View>
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={styles.content}>
                
            </ScrollView>
        </View>
    );
}