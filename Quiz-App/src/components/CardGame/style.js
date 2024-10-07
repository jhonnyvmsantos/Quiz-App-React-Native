import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        minWidth: 225,
        width: 275,
        maxWidth: "90%",
        padding: 20,
        borderStyle: "solid",
        borderRadius: 20,
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20
    },
    img: { 
        width: 200,
        height: 200,
        resizeMode: "contain"
    },
    title: {
        fontSize: 17.5,
        fontWeight: "bold"
    }
})