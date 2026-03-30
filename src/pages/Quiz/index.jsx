import React from "react";
import { styles } from './style';
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import Octicons from '@expo/vector-icons/Octicons';
import * as Progress from 'react-native-progress';
import { QuizAlt } from "../../components/QuizAlt";
import { db } from "../../database";
import { random } from "../../functions/randomizer";
import { useNavigation } from "@react-navigation/native";

export function QuizPage({ route }) {
    const navigation = useNavigation();

    const [items, setItems] = React.useState([]);
    const [quiz, setQuiz] = React.useState(null);
    const [alt, setAlt] = React.useState([]);
    const [choice, setChoice] = React.useState(null);
    const [next, setNext] = React.useState({
        transfer: false,
        choice: false
    });
    const [count, setCount] = React.useState({
        total: 0,
        correct: 0
    });
    const [nothing, setNothing] = React.useState(false);

    const confirmChoice = () => {
        if (alt[choice] === quiz.correctly_alt) {
            setNext({ transfer: true, choice: true })
            setCount({ ...count, correct: count.correct + 1 })
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
                setChoice(null);
                setNext({ transfer: false, choice: false });
                setNothing(true);
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

        if (dt.length > 0) {
            console.log("aaaaaaaaaaa")
            setItems(dt)
            setCount({ ...count, total: dt.length })
            setQuiz(dt[0])

            randomicAlts(dt[0])
        } else {
            console.log("bbbbbbbb")
            setNothing(true);
        }
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
            {!next.transfer && quiz !== null && !nothing && (
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

            {next.transfer && !nothing && (
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

            {nothing && (
                <View style={[styles.container, { justifyContent: "center" }]}>
                    <View style={[styles.finishContent, { flex: 0.5 }]}>
                        <Text style={styles.title}>Acabou o(s) Quiz(es) !? Apenas faça outro(s)...</Text>
                        {count.total > 0 && (
                            <Text style={styles.title}>SUA QUANTIDADE DE ACERTO: ({count.correct}/{count.total})</Text>
                        )}
                    </View>

                    <View style={styles.finishContent}>
                        {count.total > 0 && (
                            <Progress.Circle
                                formatText={() => `${((count.correct / count.total) * 100).toFixed(1)}%`}
                                showsText={true}
                                borderWidth={1.5}
                                size={200}
                                progress={count.correct / count.total}
                            />
                        )}
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate("Tabs")} style={[styles.button, styles.elevation, { height: 65, backgroundColor: '#f8f8ff' }]}>
                        <Text style={styles.title}>BACK TO HOME</Text>
                    </TouchableOpacity>
                </View>
            )}
        </>
    );
}