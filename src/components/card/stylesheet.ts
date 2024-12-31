import { StyleSheet } from "react-native";

export default StyleSheet.create({
    card: {
        backgroundColor: "#213555",
        borderColor: "#F5EFE7",
        borderStyle: "solid",
        flexDirection: "row",
        marginVertical: 5,
        borderRadius: 20,
        borderWidth: 2,
        padding: 10,
        gap: 15,
    },
    cardImage: {
        borderRadius: 15,
        height: 100,
        width: 100,
    },
    cardSection: {
        gap: 5
    },
    text: {
        color: "#F5EFE7",
        fontSize: 16,
    }
});
