import { styles } from './style';
import { View, Modal, Text, TouchableOpacity } from "react-native";

export function SimpleModal({ visible, close, display }) {

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