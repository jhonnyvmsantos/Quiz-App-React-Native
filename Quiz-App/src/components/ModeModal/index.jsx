import * as React from 'react';
import { styles } from './style';
import { View, Modal, Text, TouchableOpacity } from "react-native";
import { db } from '../../database';
import { InfinityMode } from '../InfinityMode';

export function ModeModal({ visible, close, mode }) {

    const [display, setDisplay] = React.useState(null)

    React.useEffect(() => {
        switch (mode) {
            case "Infinity":
                const count = db.getFirstSync("SELECT COUNT(id) AS qtd FROM tbl_question;")
                const collection = (Math.floor(count.qtd / 10))
                setDisplay(<InfinityMode collection={collection} count={count.qtd} />)
                break;
            case "Default":
                break;
            case "Hidden":
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
                        <Text style={styles.text}>Hello World!</Text>
                        {display}
                        <TouchableOpacity
                            style={styles.button}
                            onPress={close}
                        >
                            <Text numberOfLines={1} style={styles.buttonText}>CLOSE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}