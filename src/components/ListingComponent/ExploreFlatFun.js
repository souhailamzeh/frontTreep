import React, { useMemo, useState } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { SF, SH, SW, Fonts, Colors } from '../../utils';
import { HomeTabStyle, ExploreStyle } from '../../styles';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { Spacing, VectoreIcons } from '../../components';

const PopularNearbyFlatFun = (props) => {
    
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const HomeTabStyles = useMemo(() => HomeTabStyle(Colors), [Colors]);
    const ExploreStyles = useMemo(() => ExploreStyle(Colors), [Colors]);
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
        <TouchableOpacity style={ExploreStyles.WhatIcanCookWrap} onPress={() => onPress()}>
            <View style={ExploreStyles.dishbannerIMGWrap}>
                <Image source={{ uri : item.imagerandonne }} style={ExploreStyles.dishbannerIMG} />
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
                        <Text style={HomeTabStyles.ReviewNumberStyle}>{" "}{t(item.ReviewNumber)}</Text>
                    </View>
                </View>
                <Spacing space={SH(5)} />
                <View>
                    <Text style={HomeTabStyles.PlaceNameStyle}>{t(item.namerandonne)}</Text>
                    <Spacing space={SH(5)} />
                    <View style={ExploreStyles.FlexRowOnly}>
                        <VectoreIcons icon="MaterialIcons" name="location-pin" size={SF(14)} color={Colors.theme_background} />
                        <Text style={ExploreStyles.LocationStyle}>{t(item.adresserandonne)}</Text>
                    </View>
                    <Spacing space={SH(5)} />
                </View>
            </View>
        </TouchableOpacity>
    )
}


export default PopularNearbyFlatFun;