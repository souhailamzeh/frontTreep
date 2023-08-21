import React, { useMemo, useState,useEffect } from 'react';
import { Text, TouchableOpacity, View, Image, StatusBar, ScrollView } from 'react-native';
import { SF, SH, Colors } from '../../utils';
import { FavouriteScreenStyle, DetailsScreenStyle } from '../../styles';
import { useTranslation } from 'react-i18next';
import { useTheme, useNavigation } from '@react-navigation/native';
import { Spacing, VectoreIcons, Container, Button } from '../../components';
import images from '../../images';


const DetailsTransport = (props) => {

    const { t } = useTranslation();
    const navigation = useNavigation()
    const { Colors } = useTheme();
    const DetailsScreenStyles = useMemo(() => DetailsScreenStyle(Colors), [Colors]);
    const FavouriteScreenStyles = useMemo(() => FavouriteScreenStyle(Colors), [Colors]);
    const [liked, setLiked] = useState([]);
    const { item, onPress, index  } = props;
    const [count, setCount] = useState(0);
    const { selectedMateriel, setSelectedMateriel } = props;
    const items = [props.item];
   
   


  

   
 
    

  
    return (
        <Container backgroundColor={Colors.background}>
            <StatusBar translucent backgroundColor="transparent" barStyle={'light-content'} />
            <ScrollView>
        
                        <View style={[DetailsScreenStyles.FlextRowJusSpBtn, DetailsScreenStyles.Padd20]}>
                        <Text style={{ fontSize: 20 }}>{item.model} :</Text>
                            <Text style={DetailsScreenStyles.SeeAllText}>{item.tarif}</Text>
                        </View>
                    
              
            </ScrollView>

        </Container>




    )
}


export default DetailsTransport;