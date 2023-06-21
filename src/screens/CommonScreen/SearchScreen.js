import React, { useState, useMemo } from 'react';
import { TouchableOpacity } from "react-native";
import { SF } from '../../utils';
import { Input, VectoreIcons } from '../../components';
import { HomeTabStyle } from '../../styles';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const SearchScreenset = (props) => {
    const [mobileNumber, setMobileNumber] = useState('');
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const HomeTabStyles = useMemo(() => HomeTabStyle(Colors), [Colors]);

    return (
        <TouchableOpacity style={HomeTabStyles.WidthSet}>
            <Input
                placeholder={t("Search")}
                onChangeText={(value) => setMobileNumber(value)}
                value={mobileNumber}
                maxLength={10}
                leftIcon={<VectoreIcons name="search1" icon="AntDesign" color={Colors.theme_background} size={SF(25)} />}
                placeholderTextColor={Colors.gray_text_color}
                inputStyle={HomeTabStyles.SearchInputBorder}
            />
        </TouchableOpacity>
    );
};
export default SearchScreenset;
