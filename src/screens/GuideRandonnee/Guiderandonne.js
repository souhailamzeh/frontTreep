import React, { useEffect, useMemo, useState } from 'react';
import { View, FlatList, ScrollView, TouchableOpacity,Text } from 'react-native';
import { Container, Spacing, ListMateriel, Button, ListGuide, ListTransport } from '../../components';
import { Colors, nearbyData, PopularNearbyData } from '../../utils';
import { useTheme, useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { FavouriteScreenStyle, DetailsScreenStyle } from '../../styles';
import { RouteName } from '../../routes';
import { API_URL } from '../../../configure';
import { IndexReservation } from '../Reservation';


const Guiderandonne = ({ route }) => {

  const navigation = useNavigation()
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const FavouriteScreenStyles = useMemo(() => FavouriteScreenStyle(Colors), [Colors]);
  const DetailsScreenStyles = useMemo(() => DetailsScreenStyle(Colors), [Colors]);
 
  const [checkedItems, setCheckedItems] = useState([]);
  const [checkedItemsGuid, setCheckedItemsGuid] = useState([]);



  const { detailsRandonne ,departureDatee,endDatee} = route?.params?? {};

  const handleContinue = () => {
   console.log("")
    if (checkedItems || checkedItemsGuid)  {
      navigation.navigate(RouteName.Reservation_Randonne, { detailsRandonne, checkedItems, checkedItemsGuid,departureDatee,endDatee});
    } else {
      console.log("erreur")
      // Handle case when count is less than 1 or no materiel is selected
      // Display an error message or show a notification to the user
    }
  }
  

 const handleCheckedItems = (isChecked, item) => {
    if (isChecked) {
      // Si la case à cocher est cochée, ajoutez l'élément à l'array checkedItems
      setCheckedItems((prevCheckedItems) => [...prevCheckedItems, {...item}]);
    } else {
      // Si la case à cocher est décochée, supprimez l'élément de l'array checkedItems
      setCheckedItems((prevCheckedItems) =>
        prevCheckedItems.filter((checkedItem) => checkedItem !== item)
      );
     
    }
  };
  const handleCheckedItemsGuid = (isChecked, item) => {
    if (isChecked) {
     
      // Si la case à cocher est cochée, ajoutez l'élément à l'array checkedItems
      setCheckedItemsGuid((prevCheckedItems) => [...prevCheckedItems, {...item}]);
    } else {
      // Si la case à cocher est décochée, supprimez l'élément de l'array checkedItems
      setCheckedItemsGuid((prevCheckedItems) =>
        prevCheckedItems.filter((checkedItem) => checkedItem !== item)
      );
     
    }
  };

  useEffect(() => { 
    console.log("transport",checkedItems)
    console.log("Guideee",checkedItemsGuid)
 
   },[checkedItems,checkedItemsGuid]);

  return (
    <Container backgroundColor={Colors.background}>
      <ScrollView>
        <View style={FavouriteScreenStyles.MainView}>
        
          <Spacing />
          <FlatList
            data={detailsRandonne.guide}
            numColumns={1}
            renderItem={({ item, index }) => (<ListGuide checked={checkedItemsGuid.includes(item)} onCheckedItemsChangeGuid={handleCheckedItemsGuid}  item={item} index={index}  />)}
            keyExtractor={item => item.id}
            contentContainerStyle={FavouriteScreenStyles.RecomandationFlatContainer}
          />
          <FlatList
            data={detailsRandonne.transport}
            numColumns={1}
            renderItem={({ item, index }) => (<ListTransport  checked={checkedItems.includes(item)} onCheckedItemsChange={handleCheckedItems}   item={item} index={index} />)}
            keyExtractor={item => item.id}
            contentContainerStyle={FavouriteScreenStyles.RecomandationFlatContainer}
          />
          <Spacing />

          
        </View>
      </ScrollView>

      <View style={[DetailsScreenStyles.FlextRowJusSpBtn, DetailsScreenStyles.BtnWarp]}>
        <View>
          <View style={DetailsScreenStyles.flexRow}>
          <Text>{t("continue")}</Text>
          </View>
        </View>
        <Button title={t("continue")} buttonStyle={[DetailsScreenStyles.BtnStyle]} onPress={handleContinue} />
      </View>

    </Container>
  );
};
export default Guiderandonne;
