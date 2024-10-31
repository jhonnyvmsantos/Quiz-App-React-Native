import React from "react";
import { styles } from './style';
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import Octicons from '@expo/vector-icons/Octicons';
import { QuizAlt } from "../../components/QuizAlt";
import { db } from "../../database";
import { random } from "../../functions/randomizer";

export function QuizPage({ route }) {

    const [items, setItems] = React.useState([]);
    const [quiz, setQuiz] = React.useState(null);
    const [alt, setAlt] = React.useState([]);
    const [choice, setChoice] = React.useState(null);
    const [next, setNext] = React.useState({
        transfer: false,
        choice: false
    });

    const confirmChoice = () => {
        if (alt[choice] === quiz.correctly_alt) {
            setNext({ transfer: true, choice: true })
        } else {
            setNext({ ...choice, transfer: true })
        }

        setTimeout(() => {
            const filtered = filterActual()
            if (filtered !== null) {
                setItems(filtered);
                setQuiz(filtered[0]);
                randomicAlts(filtered[0]);

                setNext({ transfer: false, choice: false });
                setChoice(null);
            } else {
                setItems([]);
                setQuiz(null);
                setAlt([]);
                setNext({ transfer: false, choice: false });
            }
        }, 1500);
    };

    const filterActual = () => {
        return items.length > 1 ? items.filter((item) => item.id !== quiz.id) : null
    };

    const getQuizItems = async (rnd) => {
        let op = rnd ? "SELECT * FROM tbl_question ORDER BY RANDOM()" : "SELECT * FROM tbl_question"
        if (route.params.limited > 0) {
            op = op + ` LIMIT ${route.params.limited}`
        }
        const dt = await db.getAllAsync(op)
        setItems(dt)
        setQuiz(dt[0])

        randomicAlts(dt[0])
    };

    const randomicAlts = async (actual) => {
        const alts = [actual.alt_A, actual.alt_B, actual.alt_C, actual.correctly_alt]
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
            {!next.transfer && quiz !== null && (
                <View style={styles.container}>
                    <View style={[styles.content, { flex: 0.65, maxHeight: 300 }]}>
                        <Text>{quiz.question_text || ""}</Text>
                    </View>
                    <View style={[styles.content, { flex: 1, maxHeight: 515 }]}>
                        <ScrollView VerticalScrollIndicator={false} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={{ flex: 1, width: "100%" }} contentContainerStyle={styles.scrollContent}>
                            {alt.map((e, i) => <QuizAlt key={i} text={e} choice={i === choice ? true : false} pressing={() => setChoice(i === choice ? null : i)} />)}
                            <TouchableOpacity disabled={choice !== null ? false : true} style={[styles.button, choice === null && styles.disabled]} onPress={confirmChoice}>
                                <Text style={styles.text}>CONFIRM</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
            )}

            {next.transfer && (
                <View style={[styles.container, { justifyContent: "center" }]}>
                    {next.choice && route.params.mode !== "HIDDEN" ? <Octicons
                        name="check-circle-fill"
                        size={120}
                        color="green"
                    /> : <>
                        {route.params.mode !== "HIDDEN" ? <Octicons
                            name="x-circle-fill"
                            size={120}
                            color="red"
                        /> : <Octicons
                            name="question"
                            size={120}
                            color="black"
                        />}
                    </>}
                </View>
            )}

            {quiz === null && (
                <View style={[styles.container, { justifyContent: "center" }]}>
                    <Text style={styles.title}>Acabou o(s) Quiz(es) !? Apenas faça outro(s)...</Text>
                </View>
            )}
        </>
    );
}