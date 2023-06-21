import React, { useMemo, } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { SF, SH, SW, Fonts, Colors } from '../../utils';
import { HomeTabStyle } from '../../styles';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';

const CategoryFlatFun = (props) => {   
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const HomeTabStyles = useMemo(() => HomeTabStyle(Colors), [Colors]);
    const { item, onPress } = props;

    return (
        <TouchableOpacity style={HomeTabStyles.CatagoryBox} onPress={()=> onPress()}>
            <Image source={item.bannerImg} style={HomeTabStyles.IconStyle} resizeMode='contain' />
            <Text style={HomeTabStyles.CategoryNameStyle}>{t(item.categoryName)}</Text>
        </TouchableOpacity>
    )
}

export default CategoryFlatFun;