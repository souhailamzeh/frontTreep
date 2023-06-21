import React, { useMemo } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { SF, SH, Colors } from '../../utils';
import { HomeTabStyle } from '../../styles';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { Spacing, VectoreIcons } from '../../components';

const RecommondationFlatFun = (props) => {
    const { navigation } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const HomeTabStyles = useMemo(() => HomeTabStyle(Colors), [Colors]);
    const { item, onPress, index } = props;

    return (
        <TouchableOpacity style={HomeTabStyles.RecomandationBox} onPress={() => onPress()}>
            <View style={HomeTabStyles.RecomandationnIMGWrap}>
                <Image source={item.dishbannerIMG} style={HomeTabStyles.dishbannerIMG} />
            </View>
            <View style={[HomeTabStyles.PopularNearbyDataBox, HomeTabStyles.RecomandationWith]}>
                <Text style={HomeTabStyles.PlaceNameStyle}>{t(item.placeName)}</Text>
                <Spacing space={SH(5)} />
                <View style={HomeTabStyles.FlexRowAc}>
                    <VectoreIcons icon="MaterialIcons" name="location-pin" size={SF(14)} color={Colors.theme_background} />
                    <Text style={HomeTabStyles.LocationStyle}>{t(item.Location)}</Text>
                </View>
                <Spacing />
                <View style={HomeTabStyles.FlextRowJusSpBtn}>
                    <View style={HomeTabStyles.FlexRowAc}>
                        <VectoreIcons icon="Entypo" name='star' size={SF(14)} color={Colors.startrate} />
                        <Text style={HomeTabStyles.StarRateNumberStyle}>{" "}{t(item.starRateNumber)}</Text>
                        <Text style={HomeTabStyles.ReviewNumberStyle}>{" "}{t(item.ReviewNumber)}</Text>
                    </View>
                    <Spacing />
                    <View style={HomeTabStyles.FlexRowAc}>
                        <View style={HomeTabStyles.FlexRowAc}>
                            <VectoreIcons icon="FontAwesome" name="dollar" size={SF(14)} color={Colors.theme_background} /><Text style={HomeTabStyles.PriceStyle}>{t(item.Price)}</Text>
                        </View>
                        <View style={[HomeTabStyles.FlexRowAc, HomeTabStyles.DisPriceBoxStyle]}>
                            <VectoreIcons icon="FontAwesome" name="dollar" size={SF(11)} color={Colors.red} />
                            <Text style={HomeTabStyles.DisPriceStyle}>{t(item.DisPrice)}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}


export default RecommondationFlatFun;