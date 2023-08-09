import React from 'react';
import {StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {selectCatalog, setPage} from "../../store/features/catalogSlice";
import {CountingPages} from "../../helpers/CountingPages";

const MyPagination = ({allItems}: {allItems: number}) => {

    const resultPages = CountingPages(allItems);
    const arrayPages = new Array(resultPages).fill(null).map((_, i) => i + 1);

    return (
        <View style={styles.sectionPagination}>
            {arrayPages.map(page => (
                <SinglePage key={page} page={page}/>
            ))}
        </View>
    );
};

const SinglePage = ({page}: { page: number }) => {

    const {page: currentPage} = useSelector(selectCatalog);
    const dispatch = useDispatch();

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
        paddingVertical: 10,
        paddingHorizontal: 13,
        marginHorizontal: 2
    },
    btnActive: {
        borderWidth: 2,
        borderColor: "gray",
        borderRadius: 5,
        backgroundColor: "white",
        paddingVertical: 10,
        paddingHorizontal: 13,
        marginHorizontal: 2
    },
})

export default MyPagination;
