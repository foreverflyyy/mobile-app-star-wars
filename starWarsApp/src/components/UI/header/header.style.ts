import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    headerSection: {
        height: 60,
        width: "100%",
        backgroundColor: "dimgray",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    headerSectionLinks: {
        display: "flex",
        flexDirection: "row"
    },
    headerTitle: {
        color: "white",
        fontSize: 24
    },
    headerLink: {
        color: "white",
        fontSize: 20
    }
})