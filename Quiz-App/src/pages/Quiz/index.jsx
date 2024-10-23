import React from "react";
import { styles } from './style';
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { QuizAlt } from "../../components/QuizAlt";

export function QuizPage({ redirector }) {

    return (
        <View style={styles.container}>
            <View style={[styles.content, { flex: 0.65, maxHeight: 300 }]}>
                <Text>aaaaaaaa</Text>
            </View>
            <View style={[styles.content, { flex: 1, maxHeight: 420 }]}>
                <ScrollView VerticalScrollIndicator={false} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={{ flex: 1, width: "100%" }} contentContainerStyle={styles.scrollContent}>
                    <QuizAlt />
                    <QuizAlt />
                    <QuizAlt />
                    <QuizAlt />
                </ScrollView>
            </View>
        </View>
    );
}