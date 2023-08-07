import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {styles} from "./header.style";
import {headerLinks} from "../../../data/headerLinks";

interface Props {
    titleScreen: string
}

const Header = ({titleScreen}: Props) => {

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

export default Header;
