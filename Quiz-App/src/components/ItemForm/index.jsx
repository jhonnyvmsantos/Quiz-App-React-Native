import * as React from 'react';
import { styles } from "./style";
import { View, Text, TouchableOpacity } from "react-native";
import { Entry } from '../Entry';
import Ionicons from '@expo/vector-icons/Ionicons';
import { db } from '../../database';

export function ItemForm({ finish, item }) {
    const [visible, setVisible] = React.useState(false);
    const [data, setData] = React.useState({})

    const changeData = (name, value) => {
        setData({ ...data, [name]: value })
    }

    const visibleSwitch = () => {
        setVisible(!visible)
    }

    React.useEffect(() => {
        setData({
            id: item.id,
            title: item.title,
            question: item.question_text,
            answer: item.correctly_alt,
            altA: item.alt_A,
            altB: item.alt_B,
            altC: item.alt_C
        })
    }, [item]);

    const createItemQuiz = async () => {
        db.runAsync(`INSERT INTO tbl_question (title, question_text, correctly_alt, alt_A, alt_B, alt_C) VALUES (?, ?, ?, ?, ?, ?)`, [data.title, data.question, data.answer, data.altA, data.altB, data.altC])
            .then(() => {
                console.warn("Item Quiz Create.");
                finish();
            })
            .catch(() => {
                console.warn("Error Creating Quiz Item.");
            })
    };

    const updateItemQuiz = async () => {
        db.runAsync(`UPDATE tbl_question SET title = ?, question_text = ?, correctly_alt = ?, alt_A = ?, alt_B = ?, alt_C = ? WHERE id = ?`, [data.title, data.question, data.answer, data.altA, data.altB, data.altC, data.id])
            .then(() => {
                console.warn("Item Quiz Update.");
                finish();
            })
            .catch(() => {
                console.warn("Error Updating Quiz Item.");
            })
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>ITEM FORM</Text>
            {visible ? <>
                <Entry text="ALTERNATIVE (1)" name="altA" value={data.altA} changeValue={(name, value) => changeData(name, value)} />
                <Entry text="ALTERNATIVE (2)" name="altB" value={data.altB} changeValue={(name, value) => changeData(name, value)} />
                <Entry text="ALTERNATIVE (3)" name="altC" value={data.altC} changeValue={(name, value) => changeData(name, value)} />
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={{ width: "auto" }} onPress={visibleSwitch}>
                        <Ionicons name="arrow-back-circle-outline" size={30} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { flex: 0.8 }]} onPress={() => {
                        if (data.id !== undefined) {
                            updateItemQuiz();
                        } else {
                            createItemQuiz();
                        }
                    }}>
                        <Text numberOfLines={1} style={styles.btnText}>{item.id ? "UPDATE" : "CREATE"}</Text>
                    </TouchableOpacity>
                </View>
            </> : <>
                <Entry text="TITLE" name="title" value={data.title} changeValue={(name, value) => changeData(name, value)} />
                <Entry text="QUESTION TEXT" name="question" value={data.question} changeValue={(name, value) => changeData(name, value)} />
                <Entry text="QUESTION ANSWER" name="answer" value={data.answer} changeValue={(name, value) => changeData(name, value)} />
                <TouchableOpacity style={styles.button} onPress={visibleSwitch}>
                    <Text numberOfLines={1} style={styles.btnText}>NEXT STEP</Text>
                </TouchableOpacity>
            </>
            }
        </View>
    )
}