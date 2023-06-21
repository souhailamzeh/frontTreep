import React, { useMemo } from 'react';
import { Text, TouchableOpacity, } from 'react-native';
import { ExploreStyle } from '../../styles';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const ExplorPlaceTab = (props) => {
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const { item, index, setSelect, select, onPress } = props;
    const ExploreStyles = useMemo(() => ExploreStyle(Colors), [Colors]);
    return (
        <TouchableOpacity style={select === index ? ExploreStyles.ExplorePlaceNameBoxLike : ExploreStyles.ExplorePlaceNameBox} onPress={() => { setSelect(index); onPress() }}>
            <Text style={[select === index ? ExploreStyles.ExplorePlaceNameStleSelect : ExploreStyles.ExplorePlaceNameStle]}>{t(item.exsplorePlaceName)}</Text>
        </TouchableOpacity>
    )
}

export default ExplorPlaceTab