import React, { useMemo, useState } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { SF, SH,  Colors } from '../../utils';
import { FavouriteScreenStyle } from '../../styles';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { Spacing, VectoreIcons } from '../../components';

const FavouriteFlatFun = (props) => {
 
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const FavouriteScreenStyles = useMemo(() => FavouriteScreenStyle(Colors), [Colors]);
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
        <TouchableOpacity style={FavouriteScreenStyles.RecomandationBox} onPress={() => onPress()}>
            <View style={FavouriteScreenStyles.RecomandationnIMGWrap}>
                <Image source={item.dishbannerIMG} style={FavouriteScreenStyles.dishbannerIMG} />
            </View>
            <View style={[FavouriteScreenStyles.PopularNearbyDataBox, FavouriteScreenStyles.RecomandationWith]}>
                <Text style={FavouriteScreenStyles.PlaceNameStyle}>{t(item.placeName)}</Text>
                <Spacing space={SH(5)} />
                <View style={FavouriteScreenStyles.FlexRowAc}>
                    <VectoreIcons icon="MaterialIcons" name="location-pin" size={SF(14)} color={Colors.theme_background} />
                    <Text style={FavouriteScreenStyles.LocationStyle}>{t(item.Location)}</Text>
                </View>
                <Spacing />
                <View style={FavouriteScreenStyles.FlextRowJusSpBtn}>
                    <View style={FavouriteScreenStyles.FlexRowAc}>
                        <VectoreIcons icon="Entypo" name='star' size={SF(14)} color={Colors.startrate} />
                        <Text style={FavouriteScreenStyles.StarRateNumberStyle}>{" "}{t(item.rating)}</Text>
                        <Text style={FavouriteScreenStyles.ReviewNumberStyle}>{" "}{t(item.ReviewNumber)}</Text>
                    </View>
                    <Spacing />
                    <TouchableOpacity
                        onPress={() => { LikeUnlike() }} style={FavouriteScreenStyles.HeartIconLike}>
                        <VectoreIcons icon="AntDesign" name={'heart'} size={SF(20)} color={liked.includes(index) ? Colors.gray_text_color : Colors.red} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[FavouriteScreenStyles.FlexRowAc, FavouriteScreenStyles.PriceBox]}>
                <VectoreIcons icon="FontAwesome" name="dollar" size={SF(14)} color={Colors.white_text_color} /><Text style={FavouriteScreenStyles.PriceStyle}>{t(item.Price)}</Text>
            </View>
        </TouchableOpacity>
    )
}


export default FavouriteFlatFun;