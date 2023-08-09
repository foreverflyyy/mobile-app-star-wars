import React from 'react';
import {StyleSheet} from "react-native";
import {TextInput, TextInputProps, View} from "react-native";

interface Props extends TextInputProps{}

const MyInput = ({...props}: Props) => {
    return (
        <TextInput
            {...props}
            placeholderTextColor={"#243759"}
            style={styles.input}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        color: "#243759",
        paddingVertical: 5,
        paddingHorizontal: 10,
        margin: 10,
        borderRadius: 4,
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 2
    }
})

export default MyInput;
