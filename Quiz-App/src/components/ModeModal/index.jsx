import * as React from 'react';
import { styles } from './style';
import { View, Modal, Text, TouchableOpacity } from "react-native";
import { db } from '../../database';
import { InfinityMode } from '../InfinityMode';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export function ModeModal({ visible, close, mode }) {

    const [display, setDisplay] = React.useState(null)

    React.useEffect(() => {
        switch (mode) {
            case "INFINITY":
                const count = db.getFirstSync("SELECT COUNT(id) AS qtd FROM tbl_question;")
                const collection = (Math.floor(count.qtd / 10))
                setDisplay(<InfinityMode collection={collection} count={count.qtd} />)
                break;
            case "DEFAULT":
                setDisplay(null)
                break;
            case "HIDDEN":
                setDisplay(null)
                break;
        }
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