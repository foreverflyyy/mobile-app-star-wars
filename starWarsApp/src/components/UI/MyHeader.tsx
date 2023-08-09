import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {StyleSheet} from "react-native";
import {headerLinks} from "../../data/headerLinks";

interface Props {
    titleScreen: string
}

const MyHeader = ({titleScreen}: Props) => {

    const navigation: NavigationProp<any> = useNavigation();

    return (
        <View style={styles.headerSection}>
            <Text style={styles.headerTitle}> {titleScreen} </Text>
            <View style={styles.headerSectionLinks}>
                {headerLinks.map(link => (
                    <TouchableOpacity key={link} onPress={() => navigation.navigate(link)}>
                        <Text style={styles.headerLink}> {link} </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerSection: {
        height: 60,
        width: "100%",
        backgroundColor: "#243759",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 5
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

export default MyHeader;
