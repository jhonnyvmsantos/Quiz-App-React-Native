import { styles } from './style';
import { View, Modal, Text, Pressable } from "react-native";

export function SimpleModal({ visible, close }) {
    return (
        <View style={styles.container}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={visible}
                onRequestClose={close}>
                <View style={styles.container}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Pressable
                            style={styles.button}
                            onPress={close}>
                            <Text numberOfLines={1} style={styles.textStyle}>CLOSE</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
}