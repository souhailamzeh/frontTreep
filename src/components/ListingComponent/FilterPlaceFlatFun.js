import React, { useMemo } from 'react';
import { Text, TouchableOpacity, } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { FilterScreenStyle } from '../../styles';

const FilterPlaceFlatFun = (props) => {

    const { item, index, onPress, select, setSelect } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const FilterScreenStyles = useMemo(() => FilterScreenStyle(Colors), [Colors]);

    return (
        <TouchableOpacity onPress={() => { setSelect(index); onPress(); }} style={select == index ? FilterScreenStyles.FilterPlaceFlatFunStyleLike : FilterScreenStyles.FilterPlaceFlatFunStyle}>
            <Text style={select === index ? FilterScreenStyles.FilterTextStyeLike : FilterScreenStyles.FilterTextStye}>{t(item.FilterTabStyle)}</Text>
        </TouchableOpacity>
    )
}

export default FilterPlaceFlatFun