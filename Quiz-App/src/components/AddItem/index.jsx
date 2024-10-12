import * as React from 'react';
import { styles } from "./style";
import { View, Text, TouchableOpacity } from "react-native";
import { Entry } from '../Entry';

export function AddItem() {
    const [visible, setVisible] = React.useState(false);
    const [data, setData] = React.useState({
        id: '',
        title: '',
        question: '',
        answer: '',
        altA: '',
        altB: '',
        altC: ''
    })

    const changeData = (name, value) => {
        setData({ ...data, [name]: value })
        console.log(data)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>ITEM FORM</Text>
            {visible ? <>
                    <Entry text="ALTERNATIVE (1)" name="altA" value={data.altA} changeValue={(name, value) => changeData(name, value)} />
                    <Entry text="ALTERNATIVE (1)" name="altB" value={data.altB} changeValue={(name, value) => changeData(name, value)} />
                    <Entry text="ALTERNATIVE (1)" name="altC" value={data.altC} changeValue={(name, value) => changeData(name, value)} />
                </> : <>
                    <Entry text="TITLE" name="title" value={data.title} changeValue={(name, value) => changeData(name, value)} />
                    <Entry text="QUESTION TEXT" name="question" value={data.question} changeValue={(name, value) => changeData(name, value)} />
                    <Entry text="QUESTION ANSWER" name="answer" value={data.answer} changeValue={(name, value) => changeData(name, value)} />
                </>
            }
        </View>
    )
}