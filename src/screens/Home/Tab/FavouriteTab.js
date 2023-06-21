import React, { useEffect, useMemo ,useState } from 'react';
import { View, FlatList, ScrollView, } from 'react-native';
import { Container, Spacing, FavouriteFlatFun } from '../../../components';
import { Colors, nearbyData } from '../../../utils';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { FavouriteScreenStyle } from '../../../styles';
import { RouteName } from '../../../routes';
import { API_URL } from '../../../../configure';

const FavouriteTab = (props) => {

  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const FavouriteScreenStyles = useMemo(() => FavouriteScreenStyle(Colors), [Colors]);
  const [listeFavoris, setListFavoris ]= useState([]);


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

  useEffect(() => {
    
    getAllFavorie();


   
   },[]);
  return (
    <Container backgroundColor={Colors.background}>     
      <ScrollView>
        <View style={FavouriteScreenStyles.MainView}>
          <Spacing />
          <FlatList
            data={listeFavoris}
            numColumns={1}
            renderItem={({ item, index }) => (< FavouriteFlatFun item={item} index={index} onPress={() => navigation.navigate(RouteName.DETAILS_SCREEN)} />)}
            keyExtractor={item => item.id}
            contentContainerStyle={FavouriteScreenStyles.RecomandationFlatContainer}
          />
          <Spacing />
        </View>
      </ScrollView>
    </Container>
  );
};
export default FavouriteTab;
