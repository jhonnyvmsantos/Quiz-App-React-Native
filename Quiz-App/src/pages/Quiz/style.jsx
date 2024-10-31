import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        gap: 5
    },
    content: {
        flex: 1,
        width: "100%",
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center"
    },
    scrollContent: {
        padding: 10,
        gap: 20,
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        maxWidth: 400,
        height: 75,
        paddingHorizontal: 15,
        borderRadius: 15,
        backgroundColor: "#5DE2E7",
    },
    text: {
        fontWeight: "500",
        fontSize: 17.5,
    },
    disabled: {
        borderStyle: "solid",
        borderWidth: 0.5,
        backgroundColor: "#CECECE"
    },
    finishContent: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10
    },
    title: {
        fontSize: 16,
        fontWeight: "600"
    },
    elevation: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 9,
        marginBottom: 15
    },
})