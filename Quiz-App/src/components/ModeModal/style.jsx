import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "80%",
    backgroundColor: "white",
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
  },
  button: {
    width: "50%",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2196F3",
  },
  text: {
    marginBottom: 15,
    textAlign: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    overflow: "hidden",
  },
  mode: {
    width: '100%'
  }
});