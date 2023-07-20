import React, { useMemo, useState } from 'react';
import { Text, TouchableOpacity, View, Image, StatusBar, ScrollView } from 'react-native';
import { SF, SH, Colors } from '../../utils';
import { FavouriteScreenStyle, DetailsScreenStyle } from '../../styles';
import { useTranslation } from 'react-i18next';
import { useTheme, useNavigation } from '@react-navigation/native';
import { Spacing, VectoreIcons, Container, Button } from '..';
import images from '../../images';


const ListTransport = (props) => {

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
                            <Image source={{ uri: item.image }} style={FavouriteScreenStyles.dishbannerIMG} />
                        </View>
                        <View style={[FavouriteScreenStyles.PopularNearbyDataBox, FavouriteScreenStyles.RecomandationWith, { flexDirection: 'row' }]} >
                            <View>
                                <Text style={FavouriteScreenStyles.PlaceNameStyle}>{t(item.model)}</Text>
                                <Spacing space={SH(5)} />
                                <View >
                                        <Text style={[FavouriteScreenStyles.LocationStyle]}>{item.tarif}  TND /Person </Text>
                                </View>
                                <Spacing />
                            </View>
                           
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>

        </Container>




    )
}


export default ListTransport;