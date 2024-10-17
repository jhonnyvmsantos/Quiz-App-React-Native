import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
        gap: 20
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        margin: 5
    },
    button: {
        width: "80%",
        padding: 10,
        borderRadius: 16,
        backgroundColor: "cyan",
        justifyContent: "center",
        alignItems: "center"
    },
    btnText: {
        fontWeight: "bold",
        textAlign: "center",
        overflow: "hidden",
    },
    btnContainer: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-around",
    }
});
