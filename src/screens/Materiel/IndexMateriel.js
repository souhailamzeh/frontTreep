import React, { useEffect, useMemo ,useState } from 'react';
import { View, FlatList, ScrollView ,TouchableOpacity} from 'react-native';
import { Container , Spacing, ListMateriel ,Button} from '../../components';
import { Colors, nearbyData ,PopularNearbyData } from '../../utils';
import { useTheme ,useNavigation} from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { FavouriteScreenStyle ,DetailsScreenStyle} from '../../styles';
import { RouteName } from '../../routes';
import { API_URL } from '../../../configure';
import { IndexReservation } from '../Reservation';

const IndexMateriel = ({ route }) => {

  const navigation = useNavigation()
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const FavouriteScreenStyles = useMemo(() => FavouriteScreenStyle(Colors), [Colors]);
  const DetailsScreenStyles = useMemo(() => DetailsScreenStyle(Colors), [Colors]);
  const [matriel, setmatriel ]= useState();
  const [selectedMateriel, setSelectedMateriel] = useState([]);
  

  
  const { details } = route.params;
 
  const handlematriel = async () => {
    try {
      const response = await fetch(`${API_URL}matriel/matrielGetAll`).then((response) => response.json()
      ) //   <------ this line 
        .then(async (response) => {
          setmatriel(response)
        });
    } catch (error) {
      console.error(error);
    }
  }
  const handleContinue = () => {
    console.log("tteeest",details)
    if (selectedMateriel) {
      navigation.navigate(RouteName.INDEX_Reservation, { details, selectedMateriel });
     
    } else {
      console.log("erreur")
      // Handle case when count is less than 1 or no materiel is selected
      // Display an error message or show a notification to the user
    }
  }


  useEffect(() => {
    handlematriel();
   },[]);
  return (
    <Container backgroundColor={Colors.background}>     
      <ScrollView>
        <View style={FavouriteScreenStyles.MainView}>
          <Spacing />
          <FlatList
            data={matriel}
            numColumns={1}
            renderItem={({ item, index }) => (< ListMateriel materielData={matriel}  selectedMateriel={selectedMateriel}  setSelectedMateriel={setSelectedMateriel} item={item} index={index}  onPress={() => setSelectedMateriel(item)} />)}
            keyExtractor={item => item.id}
            contentContainerStyle={FavouriteScreenStyles.RecomandationFlatContainer}
          />
          <Spacing />
        </View>
      </ScrollView>
     
      <View style={[DetailsScreenStyles.FlextRowJusSpBtn, DetailsScreenStyles.BtnWarp ]}>
                <View>
                    <View style={DetailsScreenStyles.flexRow}>
                    </View>
                </View>
                <Button title={t("Continue_Label")} buttonStyle={[DetailsScreenStyles.BtnStyle]}   onPress={handleContinue}/>
            </View>
 
    </Container>
  );
};
export default IndexMateriel;
