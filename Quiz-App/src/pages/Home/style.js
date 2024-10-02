import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        width: "100%",
        height: "50%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 15,
        fontWeight: "bold"
    },
    img: {
        width: "70%",
        height: "70%",
        resizeMode: "contain"
    },
    button: {
        width: "70%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "cyan",
        padding: 10,
        borderRadius: 10
    }
})