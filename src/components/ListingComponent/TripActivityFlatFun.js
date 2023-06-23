import React, { useMemo } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { Colors } from '../../utils';
import { VectoreIcons } from '../commonComponents';
import { DetailsScreenStyle } from '../../styles';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';


const TripActivityFlatFun = (props) => {

    const { t } = useTranslation();
    const { Colors } = useTheme();
    const { item, onPress } = props;
    const DetailsScreenStyles = useMemo(() => DetailsScreenStyle(Colors), [Colors]);
   

    return (
        <TouchableOpacity style={DetailsScreenStyles.TripBox} onPress={() => onPress()}>
            <Image source={{ uri : item }} style={DetailsScreenStyles.ImageBoxStyle} resizeMode="cover" />
         {/*    <TouchableOpacity style={DetailsScreenStyles.BottomBox}>
                <Text style={DetailsScreenStyles.BtnText}>{t("Lorium_Lipsume_Label")}</Text>
                <VectoreIcons icon="AntDesign" name='doubleright' color={Colors.white_text_color} />
            </TouchableOpacity> */}
        </TouchableOpacity>
    )
}

export default TripActivityFlatFun;