import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import { RadioButton } from '../../components';
import { Colors } from '../../utils';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { DetailsScreenStyle } from '../../styles';

const PackagesFlatFun = (props) => {
    const { setIndex, item, index, selectedIndex } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const DetailsScreenStyles = useMemo(() => DetailsScreenStyle(Colors), [Colors]);

    return (
        <TouchableOpacity onPress={() => setIndex(index)} style={[DetailsScreenStyles.flexRow, DetailsScreenStyles.PackageBoxStyle]}>
            <RadioButton
                checked={selectedIndex === index}
                onPress={() => setIndex(index)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checkedColor={Colors.theme_background}
            />
            <View>
                <Text style={DetailsScreenStyles.TitleLabel}>{t(item.packageInfo)}</Text>
                <Text style={DetailsScreenStyles.PackageData}>{t(item.packageDate)}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PackagesFlatFun
