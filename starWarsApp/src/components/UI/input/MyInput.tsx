import React from 'react';
import {styles} from './input.style'
import {TextInput, TextInputProps, View} from "react-native";

interface Props extends TextInputProps{}

const MyInput = ({...props}: Props) => {
    return (
        <TextInput
            {...props}
            style={styles.input}
        />
    );
};

export default MyInput;
