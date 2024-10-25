import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        maxWidth: 400,
        height: 85,
        paddingHorizontal: 15,
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 15,
        gap: 20
    },
    content: {
        flex: 1,
        justifyContent: "center",
        height: "100%"
    },
    button: {
        padding: 12.5,
        width: "auto",
        height: '100%',
        borderLeftWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    removed: {
        backgroundColor: "#CECECE"
    }
})