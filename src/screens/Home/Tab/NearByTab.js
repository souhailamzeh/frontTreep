import React, { useMemo , useState , useEffect  } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView, } from 'react-native';
import { Container, Spacing, NearbyFlatList, VectoreIcons } from '../../../components';
import { Colors, SF, SH, NearbyData } from '../../../utils';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { NearbyScreenStyle } from '../../../styles';
import { RouteName } from '../../../routes';
import { API_URL } from '../../../../configure';

const NearByTab = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const NearbyScreenStyles = useMemo(() => NearbyScreenStyle(Colors), [Colors]);
  const [camping, setCamping] = useState();


  const handleetablisement =  async () => {
    try {
        const response = await fetch(`${API_URL}camping/campingGetAll`).then((response)=>response.json()
        ) //   <------ this line 
        .then(async (response)=>{
          setCamping(response)
        });
      } catch (error) {
        console.error(error);
      }          
      }

      useEffect(() => {
        handleetablisement();
       
       },[]);





  return (
    <Container backgroundColor={Colors.background}>      
      <ScrollView>
        <View style={NearbyScreenStyles.MainView}>
          <View style={[NearbyScreenStyles.NearbyHeadBox, NearbyScreenStyles.FlextRowJusSpBtn]}>
            <View>
              <Text style={NearbyScreenStyles.NearbyHeadTitleStyle}>{t("Popular_Packages_Label")}</Text>
              <Text style={NearbyScreenStyles.NearbyHeadTitleSubStyle}>{t("Result_Found_Label")}</Text>
            </View>
            <View style={NearbyScreenStyles.FlexRowAc}>
              <Text style={NearbyScreenStyles.SortbyStyle}>{t("Sortby_Label")}</Text>
              <TouchableOpacity onPress={() => navigation.navigate(RouteName.FILER_SCREEN)}>
                <VectoreIcons icon="Ionicons" name='filter' color={Colors.black_text_color} size={SF(25)} />
              </TouchableOpacity>
            </View>
          </View>
          <Spacing />
          <FlatList
            data={camping}
            numColumns={1}
            renderItem={({ item, index }) => (< NearbyFlatList item={item} index={index} onPress={() => navigation.navigate(RouteName.DETAILS_SCREEN)} />)}
            keyExtractor={item => item.id}
            contentContainerStyle={NearbyScreenStyles.RecomandationFlatContainer}
          />
          <Spacing />
        </View>
      </ScrollView>
    </Container>
  );
};
export default NearByTab;
