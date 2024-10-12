import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 15
    },
    scrollContent: {
        paddingVertical: 13,
        gap: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold"
    }
})