import React, {useRef} from 'react';
import {Animated, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

interface Props {
    title: string,
    onPress: () => void,
}

const MyButton = ({title, onPress}: Props) => {

    const handlerClick = () => {
        onPress();
    }

    return (
        <TouchableHighlight
            style={styles.btn}
            onPress={handlerClick}
            underlayColor={"white"}
        >
            <Text style={styles.btnText}>{title}</Text>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    btn: {
        width: 100,
        borderRadius: 10,
        backgroundColor: "#243759",
        padding: 10,
        marginHorizontal: 10,
    },
    btnText: {
        color: "white",
        fontSize: 16,
        textAlign: "center"
    }
})

export default MyButton;
