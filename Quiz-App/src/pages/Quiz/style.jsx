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
        backgroundColor: "#85E85E",
    },
    text: {
        fontWeight: "500",
        fontSize: 17.5,
    },
    disabled: {
        borderStyle: "solid",
        borderWidth: 0.5,
        backgroundColor: "#CECECE"
    }
})