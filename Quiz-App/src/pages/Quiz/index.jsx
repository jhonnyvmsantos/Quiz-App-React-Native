import React from "react";
import { styles } from './style';
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { QuizAlt } from "../../components/QuizAlt";
import { db } from "../../database";
import { random } from "../../functions/randomizer";

export function QuizPage({ route }) {

    const [item, setItem] = React.useState([]);
    const [quiz, setQuiz] = React.useState();
    const [alt, setAlt] = React.useState([]);

    const getRandomQuizItem = async () => {
        const dt = await db.getAllAsync("SELECT * FROM tbl_question ORDER BY RANDOM();")
        setItem(dt)
        setQuiz(dt[0])

        const alts = [dt[0].alt_A, dt[0].alt_B, dt[0].alt_C, dt[0].correctly_alt]
        const randomic = await random(alts)
        setAlt(randomic)
    };

    React.useEffect(() => {
        switch (route.params.redirector) {
            case "Home":
                getRandomQuizItem()
                break;
        }
    }, [route.params.redirector]);

    return (
        <>
            {quiz && (
                <View style={styles.container}>
                    <View style={[styles.content, { flex: 0.65, maxHeight: 300 }]}>
                        <Text>{quiz.question_text || ""}</Text>
                    </View>
                    <View style={[styles.content, { flex: 1, maxHeight: 420 }]}>
                        <ScrollView VerticalScrollIndicator={false} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={{ flex: 1, width: "100%" }} contentContainerStyle={styles.scrollContent}>
                            {alt.map((e, i) => <QuizAlt key={i} text={e} />)}
                        </ScrollView>
                    </View>
                </View>
            )}
        </>
    );
}