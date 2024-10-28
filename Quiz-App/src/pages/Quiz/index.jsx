import React from "react";
import { styles } from './style';
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { QuizAlt } from "../../components/QuizAlt";
import { db } from "../../database";
import { random } from "../../functions/randomizer";

export function QuizPage({ route }) {

    const [items, setItems] = React.useState([]);
    const [quiz, setQuiz] = React.useState();
    const [alt, setAlt] = React.useState([]);
    const [choice, setChoice] = React.useState(null);

    const getQuizItems = async (rnd) => {
        let op = rnd ? "SELECT * FROM tbl_question ORDER BY RANDOM()" : "SELECT * FROM tbl_question"
        if (route.params.limited > 0) {
            op = op + ` LIMIT ${route.params.limited}`
        }
        const dt = await db.getAllAsync(op)
        setItems(dt)
        setQuiz(dt[0])

        const alts = [dt[0].alt_A, dt[0].alt_B, dt[0].alt_C, dt[0].correctly_alt]
        const randomic = await random(alts)
        setAlt(randomic)
    };

    React.useEffect(() => {
        switch (route.params.redirector) {
            case "Home":
                getQuizItems(false)
                break;
            case "Game":
                getQuizItems(route.params.mode === "DEFAULT" ? false : true)
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
                    <View style={[styles.content, { flex: 1, maxHeight: 515 }]}>
                        <ScrollView VerticalScrollIndicator={false} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={{ flex: 1, width: "100%" }} contentContainerStyle={styles.scrollContent}>
                            {alt.map((e, i) => <QuizAlt key={i} text={e} choice={i === choice ? true : false} pressing={() => setChoice(i === choice ? null : i)}/>)}
                            <TouchableOpacity disabled={ choice !== null ? false : true} style={[styles.button, choice === null && styles.disabled]}>
                                <Text style={styles.text}>CONFIRM</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
            )}
        </>
    );
}