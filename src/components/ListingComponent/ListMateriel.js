import React, { useMemo, useState } from 'react';
import { Text, TouchableOpacity, View, Image, StatusBar, ScrollView } from 'react-native';
import { SF, SH, Colors } from '../../utils';
import { FavouriteScreenStyle, DetailsScreenStyle } from '../../styles';
import { useTranslation } from 'react-i18next';
import { useTheme, useNavigation } from '@react-navigation/native';
import { Spacing, VectoreIcons, Container, Button } from '../../components';
import images from '../../images';


const ListMateriel = (props) => {

    const { t } = useTranslation();
    const navigation = useNavigation()
    const { Colors } = useTheme();
    const DetailsScreenStyles = useMemo(() => DetailsScreenStyle(Colors), [Colors]);
    const FavouriteScreenStyles = useMemo(() => FavouriteScreenStyle(Colors), [Colors]);
    const [liked, setLiked] = useState([]);
    const { item, onPress, index } = props;
    const [count, setCount] = useState(0);
    const { selectedMateriel, setSelectedMateriel } = props;
    const items = [props.item];



    const LikeUnlike = () => {
        if (liked.includes(index)) {
            let unlike = liked.filter((elem) => elem !== index);
            setLiked(unlike);
        } else {
            setLiked([...liked, index]);
        }
    }

    //let price = item.PrixMatriel;
    const PeoplePlusCount = () => {
        setCount(count + 1)
    }

    const PeopleMinusCount = () => {
        setCount(count - 1)
        if (count >= 1) {
            setCount(0)
        }
    }

    const handlePress = () => {
        if (count >= 1) {
            const updatedMateriel = [...selectedMateriel, { ...item, count }];
            setSelectedMateriel(updatedMateriel);
            console.log("updatedMateriel", updatedMateriel);
          }
    };
    return (
        <Container backgroundColor={Colors.background}>
            <StatusBar translucent backgroundColor="transparent" barStyle={'light-content'} />
            <ScrollView>
                {items.map((item, index) => (
                    <TouchableOpacity key={index} style={FavouriteScreenStyles.RecomandationBox} onPress={handlePress}>
                        <View style={FavouriteScreenStyles.RecomandationnIMGWrap}>
                            <Image source={{ uri: item.ImageMatriel }} style={FavouriteScreenStyles.dishbannerIMG} />
                        </View>
                        <View style={[FavouriteScreenStyles.PopularNearbyDataBox, FavouriteScreenStyles.RecomandationWith, { flexDirection: 'row' }]} >
                            <View>
                                <Text style={FavouriteScreenStyles.PlaceNameStyle}>{t(item.NameMatriel)}</Text>
                                <Spacing space={SH(5)} />
                                <View >
                                    {count == 0 ? (
                                        <Text style={[FavouriteScreenStyles.LocationStyle]}>{item.PrixMatriel}  TND /Person </Text>
                                    ) : (
                                        <Text style={[FavouriteScreenStyles.LocationStyle, { color: 'blue' }]}>
                                            {t(item.PrixMatriel * count)}  TND / Person
                                        </Text>
                                    )}
                                </View>
                                <Spacing />
                            </View>
                            <View style={[DetailsScreenStyles.flexRow, DetailsScreenStyles.Padd20, DetailsScreenStyles.Width33]}>
                                <TouchableOpacity onPress={() => PeopleMinusCount()} style={DetailsScreenStyles.BtnIncrDecr}>
                                    <VectoreIcons icon="AntDesign" name="minuscircle" size={SF(25)} color={Colors.red} />
                                </TouchableOpacity>
                                <Text style={DetailsScreenStyles.TitleLabel}>{count}</Text>
                                <TouchableOpacity onPress={() => PeoplePlusCount()} style={DetailsScreenStyles.BtnIncrDecr}>
                                    <VectoreIcons icon="AntDesign" name="pluscircle" size={SF(25)} color={Colors.vividmalachite} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>

        </Container>




    )
}


export default ListMateriel;