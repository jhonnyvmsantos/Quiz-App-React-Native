import * as React from 'react';
import { styles } from './style';
import { View, Modal, Text, TouchableOpacity } from "react-native";
import { db } from '../../database';
import { ItemCollection } from '../ItemCollection';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";

export function ModeModal({ visible, close, mode }) {
    const navigation = useNavigation();

    const [display, setDisplay] = React.useState(null)

    const redirection = (element) => {
        close();
        navigation.navigate("Quiz", {redirector: "Game", mode: mode, limited: element})
    }

    const collection = async () => {
        const count = await db.getFirstAsync("SELECT COUNT(id) AS qtd FROM tbl_question;")
        const collection = (Math.floor(count.qtd / 10))
        setDisplay(<ItemCollection collection={collection} count={count.qtd} pressing={(e) => redirection(e)}/>)
    }

    React.useEffect(() => {
        collection();
    }, [mode]);

    return (
        <View style={styles.container}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={visible}
                onRequestClose={close}
            >
                <View style={styles.container}>
                    <View style={styles.content}>
                        <Text style={styles.title}>{mode} MODE</Text>
                        {display}
                        <TouchableOpacity style={styles.modalCloseBtn} onPress={close}>
                            <MaterialCommunityIcons name="close-circle-outline" size={30} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}