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
    }
})