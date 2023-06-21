import React, { useMemo, useState } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { SF, SH, SW, Fonts, Colors } from '../../utils';
import { NearbyScreenStyle } from '../../styles';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { Spacing, LinearGradientComp, VectoreIcons } from '../../components';

const NearbyFlatList = (props) => {
 
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const NearbyScreenStyles = useMemo(() => NearbyScreenStyle(Colors), [Colors]);
    const { item, onPress, index } = props;
    const [liked, setLiked] = useState([]);

    const LikeUnlike = () => {
        if (liked.includes(index)) {
            let unlike = liked.filter((elem) => elem !== index);
            setLiked(unlike);
        } else {
            setLiked([...liked, index]);
        }
    }

    return (
        <TouchableOpacity style={NearbyScreenStyles.NearbyBox} onPress={() => onPress()}>
            <View style={NearbyScreenStyles.RecomandationnIMGWrap}>
                <Image source={{ uri : item.imagecentre }} style={NearbyScreenStyles.dishbannerIMG} />
                <View style={NearbyScreenStyles.NearbyInfoBox}>
                    <View style={NearbyScreenStyles.FlextRowJusSpBtn}>
                        <View>
                            <View style={NearbyScreenStyles.FlexRowAc}>
                                <VectoreIcons icon="Entypo" name='star' size={SF(14)} color={Colors.startrate} />
                                <Text style={NearbyScreenStyles.StarRateNumberStyle}>{" "}{t(item.ratingcentre)}</Text>
                                <Text style={NearbyScreenStyles.ReviewNumberStyle}>{" "}{t(item.ReviewNumber)}</Text>
                            </View>
                            <Text style={NearbyScreenStyles.PlaceNameStyle}>{t(item.namecentre)}</Text>
                        </View>
                        <Spacing />
                        <View style={[NearbyScreenStyles.FlexRowAc, NearbyScreenStyles.PriceBox]}>
                            <VectoreIcons icon="FontAwesome" name="dollar" size={SF(14)} color={Colors.white_text_color} /><Text style={NearbyScreenStyles.PriceStyle}>{t(item.tarifcentre)}</Text>
                        </View>
                    </View>
                    <Spacing />
                </View>
                <TouchableOpacity
                    onPress={() => { LikeUnlike() }} style={NearbyScreenStyles.HeartIconLike}>
                    <VectoreIcons icon="AntDesign" name={'heart'} size={SF(20)} color={liked.includes(index) ? Colors.red : Colors.gray_text_color} />
                </TouchableOpacity>
                <LinearGradientComp start={{ x: 0, y: 1.3 }} end={{ x: 0, y: 0 }} colors={[Colors.black_text_color, 'transparent']} LinearGradientStyle={NearbyScreenStyles.LinearGradientBottom} />
            </View>
        </TouchableOpacity>
    )
}


export default NearbyFlatList;