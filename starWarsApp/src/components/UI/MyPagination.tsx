import React, {useState} from 'react';
import {StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {selectCatalog, setPage} from "../../store/features/catalogSlice";

const pages = [1, 2, 3, 4, 5];

const SinglePage = ({page}: { page: number }) => {

    const {page: currentPage} = useSelector(selectCatalog);
    const dispatch = useDispatch();

    const [isPress, setIsPress] = useState(false);

    const touchProps = {
        activeOpacity: 1,
        underlayColor: 'gray',
        style: currentPage === page ? styles.btnActive : styles.btnNormal,
    }

    return (
        <TouchableHighlight
            key={page}
            {...touchProps}
            onPress={() => dispatch(setPage(page))}
        >
            <Text style={currentPage === page ? styles.pageTextActive : styles.pageText}>
                {page}
            </Text>
        </TouchableHighlight>
    )
}

const MyPagination = () => {
    return (
        <View style={styles.sectionPagination}>
            {pages.map(page => (
                <SinglePage key={page} page={page}/>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    sectionPagination: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        paddingVertical: 7
    },
    pageText: {
        color: "white",
        fontSize: 16
    },
    pageTextActive: {
        color: "gray",
        fontSize: 16
    },
    btnNormal: {
        borderWidth: 2,
        borderColor: "gray",
        borderRadius: 5,
        backgroundColor: "#243759",
        paddingVertical: 7,
        paddingHorizontal: 10,
        marginHorizontal: 2
    },
    btnActive: {
        borderWidth: 2,
        borderColor: "gray",
        borderRadius: 5,
        backgroundColor: "white",
        paddingVertical: 7,
        paddingHorizontal: 10,
        marginHorizontal: 2
    },
})

export default MyPagination;
