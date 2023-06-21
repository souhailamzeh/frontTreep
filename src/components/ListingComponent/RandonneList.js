import React, { useMemo, useState } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { SF, SH, Colors } from '../../utils';
import { HomeTabStyle } from '../../styles';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { Spacing, VectoreIcons } from '../../components';

const RandonneList = (props) => {
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const HomeTabStyles = useMemo(() => HomeTabStyle(Colors), [Colors]);
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
        <TouchableOpacity style={HomeTabStyles.WhatIcanCookWrap} onPress={() => onPress()}>
            <View style={HomeTabStyles.dishbannerIMGWrap}>
                <Image source={{ uri : item.imagerandonne }} style={HomeTabStyles.dishbannerIMG} />
                <TouchableOpacity
                    onPress={() => { LikeUnlike() }} style={HomeTabStyles.HeartIconLike}>
                    <VectoreIcons icon="AntDesign" name={'heart'} size={SF(20)} color={liked.includes(index) ? Colors.red : Colors.gray_text_color} />
                </TouchableOpacity>
                <View style={HomeTabStyles.OfferBox}>
                    <Text style={HomeTabStyles.DisTagStyle}>{t(item.DisTag)}</Text>
                </View>
            </View>
            <View style={HomeTabStyles.PopularNearbyDataBox}>
                <View style={HomeTabStyles.FlextRowJusSpBtn}>
                    <View style={HomeTabStyles.FlexRowAc}>
                        <View style={HomeTabStyles.FlexRowAc}>
                            <VectoreIcons icon="FontAwesome" name="dollar" size={SF(14)} color={Colors.theme_background} /><Text style={HomeTabStyles.PriceStyle}>{t(item.tarifrandonne)}</Text>
                        </View>
                        <View style={[HomeTabStyles.FlexRowAc, HomeTabStyles.DisPriceBoxStyle]}>
                            <VectoreIcons icon="FontAwesome" name="dollar" size={SF(11)} color={Colors.red} />
                            <Text style={HomeTabStyles.DisPriceStyle}>{t(item.oldtarif)}</Text>
                        </View>
                    </View>
                    <View style={HomeTabStyles.FlexRowAc}>
                        <VectoreIcons icon="Entypo" name='star' size={SF(14)} color={Colors.startrate} />
                        <Text style={HomeTabStyles.StarRateNumberStyle}>{" "}{t(item.ratingrandonne)}</Text>

{/*                         <Text style={HomeTabStyles.ReviewNumberStyle}>{" "}{t(item.ratingcentre)}</Text>
 */}                  
   </View>
                </View>
                <Spacing space={SH(5)} />
                <View>
                    <Text style={HomeTabStyles.PlaceNameStyle}>{t(item.namerandonne)}</Text>
                    <Spacing space={SH(5)} />
                    <View style={HomeTabStyles.FlexRowAc}>
                        <VectoreIcons icon="MaterialIcons" name="location-pin" size={SF(14)} color={Colors.theme_background} />
                        <Text style={HomeTabStyles.LocationStyle}>{t(item.adresserandonne)}</Text>
                    </View>
                    <Spacing space={SH(5)} />
                </View>
            </View>
        </TouchableOpacity>
    )

}



export default RandonneList;