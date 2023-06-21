import React, { useMemo, useState } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { SF, SH, Colors } from '../../utils';
import { HomeTabStyle } from '../../styles';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import { Spacing, VectoreIcons } from '../../components';
import { API_URL } from '../../../configure';

const PopularNearbyFlatFun = (props) => {
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const HomeTabStyles = useMemo(() => HomeTabStyle(Colors), [Colors]);
    const { item, onPress, index , campingData , isLiked  } = props;
    const [liked, setLiked] = useState([]);
    const [listeFavoris, setListFavoris ]= useState([]);

    const AddFavorie = async () => {
 
        try {
          
            let data = {
                "name": item.namecentre,
                "image": item.imagecentre,
                "rating": item.ratingcentre,
                "prix" :item.tarifcentre
            }
            console.log(data)
            
            const response = await fetch(`${API_URL}favorie/favoriePost`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  // Ajoutez ici les headers supplémentaires nécessaires pour votre API
                },
                body: JSON.stringify({
                   data, // ou d'autres données à envoyer dans la requête
                }),
               
              });

              if(response.ok) {
                // Succès de la requête
                console.log('Données enregistrées avec succès dans l\'API');
              } else {
                // Erreur de la requête
                console.log('Erreur lors de l\'enregistrement des données dans l\'API');
              }


        } catch (error) {
          console.log('Une erreur s\'est produite lors de la requête API:', error);
        }

    }

    console.log(isLiked)
    
      const deleteFavorie = async () => {
        const favorie = listeFavoris.find(data=> item.namecentre === data.name )
        try {
          const response = await fetch(`${API_URL}favorie/deleteFavorie/${favorie._id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          
          const responseData = await response.json();
          
          if (response.ok && responseData.success) {
            // Suppression réussie
            console.log(responseData.message);
            // Effectuer d'autres actions ou mises à jour après la suppression
          } else {
            // Gérer le cas où la suppression a échoué
            console.log(responseData.message);
          }
        } catch (error) {
          // Gérer les erreurs de requête
          console.error(error);
        }
      };

      const getAllFavorie = async () => {
        try {
          const response = await fetch(`${API_URL}favorie/favorieGetAll`);
          
          if (response.ok) {
            const favorieList = await response.json();
            // Traiter la liste des éléments favorie récupérée
            setListFavoris(favorieList)
          } else {
            console.log('Erreur lors de la récupération des éléments favorie');
          }
        } catch (error) {
          console.error(error);
        }
      };

      //console.log(item)

      

    const LikeUnlike = async () => {
  
        if (liked.includes(index)) {
          let unlike = liked.filter(elem => elem !== index);
          setLiked(unlike);
          console.log('unlike')
          deleteFavorie()
          getAllFavorie()
        } else {
          setLiked([...liked, index]);
          console.log('like')
           AddFavorie()
          getAllFavorie()

          //deleteFavorie()
        }
      
      };
      

    

    return (
        <TouchableOpacity style={HomeTabStyles.WhatIcanCookWrap} onPress={() => onPress()}>
            <View style={HomeTabStyles.dishbannerIMGWrap}>
                <Image source={{ uri : item.imagecentre }} style={HomeTabStyles.dishbannerIMG} />
                <TouchableOpacity
                    onPress={() => { LikeUnlike() }} style={HomeTabStyles.HeartIconLike}>
                    <VectoreIcons icon="AntDesign" name={'heart'} size={SF(20)} color={liked.includes(index)  ? Colors.red : Colors.gray_text_color} />
                </TouchableOpacity>
                <View style={HomeTabStyles.OfferBox}>
                    <Text style={HomeTabStyles.DisTagStyle}>{t(item.DisTag)}</Text>
                </View>
            </View>
            <View style={HomeTabStyles.PopularNearbyDataBox}>
                <View style={HomeTabStyles.FlextRowJusSpBtn}>
                    <View style={HomeTabStyles.FlexRowAc}>
                        <View style={HomeTabStyles.FlexRowAc}>
                            <VectoreIcons icon="FontAwesome" name="dollar" size={SF(14)} color={Colors.theme_background} /><Text style={HomeTabStyles.tarifcentre}>{t(item.tarifcentre)}</Text>
                        </View>
                        <View style={[HomeTabStyles.FlexRowAc, HomeTabStyles.DisPriceBoxStyle]}>
                            <VectoreIcons icon="FontAwesome" name="dollar" size={SF(11)} color={Colors.red} />
                            <Text style={HomeTabStyles.DisPriceStyle}>{t(item.oldratingcentre)}</Text>
                        </View>
                    </View>
                    <View style={HomeTabStyles.FlexRowAc}>
                        <VectoreIcons icon="Entypo" name='star' size={SF(14)} color={Colors.startrate} />
                        <Text style={HomeTabStyles.StarRateNumberStyle}>{" "}{t(item.ratingcentre)}</Text>

{/*                         <Text style={HomeTabStyles.ReviewNumberStyle}>{" "}{t(item.ratingcentre)}</Text>
 */}                  
   </View>
                </View>
                <Spacing space={SH(5)} />
                <View>
                    <Text style={HomeTabStyles.PlaceNameStyle}>{t(item.namecentre)}</Text>
                    <Spacing space={SH(5)} />
                    <View style={HomeTabStyles.FlexRowAc}>
                        <VectoreIcons icon="MaterialIcons" name="location-pin" size={SF(14)} color={Colors.theme_background} />
                        <Text style={HomeTabStyles.LocationStyle}>{t(item.adressecentre)}</Text>
                    </View>
                    <Spacing space={SH(5)} />
                </View>
            </View>
        </TouchableOpacity>
    )

}



export default PopularNearbyFlatFun;