import React from 'react';
import {TypeCatalog} from "../../models/enums/TypeCatalog";
import {Picker} from "@react-native-picker/picker";
import {useDispatch, useSelector} from "react-redux";
import {selectCatalog, setTypeCatalog} from "../../store/features/catalogSlice";

const values = Object.values(TypeCatalog);

const CatalogSelect = () => {

    const {typeCatalog} = useSelector(selectCatalog);
    const dispatch = useDispatch();

    return (
        <Picker
            style={{ width: 180 }}
            selectedValue={typeCatalog}
            onValueChange={(itemValue, itemIndex) =>
                dispatch(setTypeCatalog(itemValue))
            }>
            {values.map(value => (
                <Picker.Item key={value} color={"#243759"} style={{fontSize: 20}} label={value} value={value}/>
            ))}
        </Picker>
    );
};

export default CatalogSelect;
