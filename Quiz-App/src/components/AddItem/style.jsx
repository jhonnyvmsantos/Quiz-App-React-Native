import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "80%",
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 40,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        gap: 20
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        margin: 5
    }
});
