import React, { useMemo, useState ,useEffect } from 'react';
import { Text, TouchableOpacity, View, Image, StatusBar, ScrollView } from 'react-native';
import { SF, SH, Colors } from '../../utils';
import { FavouriteScreenStyle, DetailsScreenStyle } from '../../styles';
import { useTranslation } from 'react-i18next';
import { useTheme, useNavigation } from '@react-navigation/native';
import { Spacing, VectoreIcons, Container, Button } from '../../components';
import images from '../../images';
import { CheckBox } from 'react-native-elements'



const ListGuide = ({ item, checked, onCheckedItemsChangeGuid ,index}) => {

    const { t } = useTranslation();
    const { Colors } = useTheme();
    const FavouriteScreenStyles = useMemo(() => FavouriteScreenStyle(Colors), [Colors]);
    const [isChecked, setIsChecked] = useState(checked);

    useEffect(() => {
        setIsChecked(checked);
      }, [checked]);
  
      const handleCheckBoxChange = () => {
        const newCheckedValue = !isChecked;
        setIsChecked(newCheckedValue);
        onCheckedItemsChangeGuid(newCheckedValue, item);
        console.log("tt",newCheckedValue)
      };


   
    return (
        <Container backgroundColor={Colors.background}>
            <StatusBar translucent backgroundColor="transparent" barStyle={'light-content'} />
            <ScrollView>
                
                    <TouchableOpacity key={index} style={FavouriteScreenStyles.RecomandationBox}>
                        <View style={FavouriteScreenStyles.RecomandationnIMGWrap}>
                            <Image source={{ uri: item.image }} style={FavouriteScreenStyles.dishbannerIMG} />
                        </View>
                        <View style={[FavouriteScreenStyles.PopularNearbyDataBox, FavouriteScreenStyles.RecomandationWith, { flexDirection: 'row' }]} >
                            <View>
                                <Text style={FavouriteScreenStyles.PlaceNameStyle}>{t(item.name)}</Text>
                                <Spacing space={SH(5)} />
                                <View >
                                    <Text style={[FavouriteScreenStyles.LocationStyle]}>{item.tarif}  TND / Person </Text>

                                </View>
                                <Spacing />
                            </View>
                            <Spacing space={SH(50)} />
                            <View style={{ marginLeft: 80 }}>
                                <CheckBox
                                checked={isChecked} // Assign the 'checked' state to the checkbox
                                onPress={handleCheckBoxChange} // Assign the function to handle checkbox click
                            />
                            </View>
                            <Spacing />
                        </View>
                      
                    </TouchableOpacity>
              
            </ScrollView>

        </Container>




    )
}


export default ListGuide;