import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    item: {
        borderColor: "#243759",
        borderWidth: 2,
        borderRadius: 4,
        borderStyle: "solid",
        padding: 5,
        marginVertical: 7,
        marginHorizontal: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    itemTitle: {
        fontSize: 18,
        color: "#243759"
    },
    itemInfo: {
        marginLeft: 8
    }
})