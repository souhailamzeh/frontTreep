import React, { useEffect, useMemo ,useState } from 'react';
import { View, FlatList, ScrollView ,TouchableOpacity} from 'react-native';
import { Container , Spacing, ListMateriel ,Button, ListGuide, ListTransport} from '../../components';
import { Colors, nearbyData ,PopularNearbyData } from '../../utils';
import { useTheme ,useNavigation} from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { FavouriteScreenStyle ,DetailsScreenStyle} from '../../styles';
import { RouteName } from '../../routes';
import { API_URL } from '../../../configure';
import { IndexReservation } from '../Reservation';
import { CheckBox, Icon } from '@rneui/themed';

const Guiderandonne = ({ route }) => {

  const navigation = useNavigation()
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const FavouriteScreenStyles = useMemo(() => FavouriteScreenStyle(Colors), [Colors]);
  const DetailsScreenStyles = useMemo(() => DetailsScreenStyle(Colors), [Colors]);
  const [matriel, setmatriel ]= useState();
  const [selectedMateriel, setSelectedMateriel] = useState([]);

  

  const { detailsRandonne } = route.params;
  console.log("guide",detailsRandonne)
 
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
 

  useEffect(() => {
    handlematriel();
   },[]);
  return (
    <Container backgroundColor={Colors.background}>     
      <ScrollView>
        <View style={FavouriteScreenStyles.MainView}>
          <Spacing />
          <FlatList
            data={detailsRandonne.guide}
            numColumns={1}
            renderItem={({ item, index }) => (<ListGuide materielData={matriel}  selectedMateriel={selectedMateriel}  setSelectedMateriel={setSelectedMateriel} item={item} index={index}  onPress={() => setSelectedMateriel(item)} />)}
            keyExtractor={item => item.id}
            contentContainerStyle={FavouriteScreenStyles.RecomandationFlatContainer}
          />
            <FlatList
            data={detailsRandonne.transport}
            numColumns={1}
            renderItem={({ item, index }) => (<ListTransport materielData={matriel}  selectedMateriel={selectedMateriel}  setSelectedMateriel={setSelectedMateriel} item={item} index={index}  onPress={() => setSelectedMateriel(item)} />)}
            keyExtractor={item => item.id}
            contentContainerStyle={FavouriteScreenStyles.RecomandationFlatContainer}
          />
          <Spacing />
            <CheckBox
           checked={checked}
           onPress={toggleCheckbox}
           // Use ThemeProvider to make change for all checkbox
           iconType="material-community"
           checkedIcon="checkbox-marked"
           uncheckedIcon="checkbox-blank-outline"
           checkedColor="red"
         />
        </View>
      </ScrollView>
     
      <View style={[DetailsScreenStyles.FlextRowJusSpBtn, DetailsScreenStyles.BtnWarp ]}>
                <View>
                    <View style={DetailsScreenStyles.flexRow}>
                    </View>
                </View> 
                <Button title={t("continue")} buttonStyle={[DetailsScreenStyles.BtnStyle]} />
            </View>
 
    </Container>
  );
};
export default Guiderandonne;
