import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        padding: 20,
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 15,
        gap: 10
    },
    item: {
        flex: 1
    },
    buttons: {
        width: "auto",
        height: '100%',
        flexDirection: "row",
        gap: 15

    },
    title: {
        fontSize: 17
    }
})