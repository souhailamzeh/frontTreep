import React, { useState, useMemo, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView, } from 'react-native';
import { Container, Input, Spacing, CategoryFlatFun, PopularNearbyFlatFun, RecommondationFlatFun, VectoreIcons } from '../../../components';
import { Colors, SF, categoryData, SH, PopularNearbyData } from '../../../utils';
import { useNavigation, useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { HomeTabStyle } from '../../../styles';
import { RouteName } from '../../../routes';
import { API_URL } from '../../../../configure';
import RandonneList from '../../../components/ListingComponent/RandonneList';


const HomeTab = () => {
  //const { navigation } = props;
  const navigation = useNavigation()
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const HomeTabStyles = useMemo(() => HomeTabStyle(Colors), [Colors]);
  const [text, onChangeText] = useState('');
  const [camping, setCamping] = useState();
  const [randonne, setrandonne] = useState();
  const [listeFavoris, setListFavoris] = useState([]);
  const [filteredCamping, setFilteredCamping] = useState([]);
  const [filteredRandonne, setFilteredRandonne] = useState([]);


  const handleCategory = (category) => {
    if (category === 'All') {
      handleetablisement();
      handleRondonne();
      setFilteredCamping(camping); // Set filteredCamping to the original camping data
      setFilteredRandonne(randonne); // Set filteredRandonne to the original randonne data
    } else {
      const filteredCampingData = camping.filter((item) => item.Category === category);
      setFilteredCamping(filteredCampingData);
      const filteredRandonneData = randonne.filter((item) => item.Category === category);
      setFilteredRandonne(filteredRandonneData);
    }
  };
  

  const handleetablisement = async () => {
    try {
      const response = await fetch(`${API_URL}camping/campingGetAll`).then((response) => response.json()
      ) //   <------ this line 
        .then(async (response) => {
          setCamping(response)
        });
    } catch (error) {
      console.error(error);
    }

  }


  const handleRondonne = async () => {
    try {
      const response = await fetch(`${API_URL}randonne/randonneGetAll`).then((response) => response.json()
      ) //   <------ this line 
        .then(async (response) => {
          setrandonne(response)
        });
    } catch (error) {
      console.error(error);
    }
  }

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
    handleetablisement();
    handleRondonne();
    getAllFavorie();


  }, []);


  return (
    <Container backgroundColor={Colors.background}>
      <ScrollView>
        <View style={HomeTabStyles.MainView}>
          <Spacing />
          <View style={HomeTabStyles.SearchBox}>
            <View style={HomeTabStyles.SearchView}>
              <TouchableOpacity style={HomeTabStyles.WidthSet}>
                <Input
                  placeholder={t("Search_Label")}
                  onChangeText={(value) => onChangeText(value)}
                  value={text}
                  leftIcon={<VectoreIcons icon="AntDesign" name="search1" size={SF(20)} color={Colors.gray_text_color} />}
                  placeholderTextColor={Colors.gray_text_color}
                  inputStyle={HomeTabStyles.SearchInputBorder}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={HomeTabStyles.FilterChildBox} onPress={() => navigation.navigate(RouteName.FILER_SCREEN)}>
              <VectoreIcons icon="Entypo" name='flow-parallel' size={SF(20)} color={Colors.white_text_color} />
            </TouchableOpacity>
          </View>
          <Spacing space={SH(20)} />
          <View style={[HomeTabStyles.FlextRowJusSpBtn, HomeTabStyles.Padd20]}>
            <Text style={HomeTabStyles.TitleLabel}>{t("Category_Label")}</Text>
            <TouchableOpacity><Text style={HomeTabStyles.SeeAllText}>{t("SeeAll_Label")}</Text></TouchableOpacity>
          </View>
          <FlatList
            data={categoryData}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (<CategoryFlatFun
              item={item} onPress={() => handleCategory(item.categoryName)}
            />)}
            keyExtractor={item => item.id}
            contentContainerStyle={HomeTabStyles.CategoryFlatContainer}
          />
          <Spacing space={SH(20)} />
          <View style={[HomeTabStyles.FlextRowJusSpBtn, HomeTabStyles.Padd20]}>
            <Text style={HomeTabStyles.TitleLabel}>{t("Camping")}</Text>
            <TouchableOpacity onPress={() => navigation.navigate(RouteName.NEAR_BY_TAB)}>

              <Text style={HomeTabStyles.SeeAllText}>{t("SeeAll_Label")}</Text>
              <TouchableOpacity onPress={() => navigation.navigate(RouteName.EXPLOR_TAB)}></TouchableOpacity>
            </TouchableOpacity>
          </View>
          <Spacing />
          <FlatList
            data={filteredCamping.length > 0 ? filteredCamping : camping}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (< PopularNearbyFlatFun item={item} campingData={camping} isLiked={listeFavoris.find(data => item.namecentre === data.name)} index={index} onPress={() => navigation.navigate(RouteName.DETAILS_SCREEN, { details: item })} />)}
            keyExtractor={item => item.id}
            contentContainerStyle={HomeTabStyles.PopularNearbyFlatContainer}
          />

          <Spacing space={SH(20)} />
          <View style={[HomeTabStyles.FlextRowJusSpBtn, HomeTabStyles.Padd20]}>
            <Text style={HomeTabStyles.TitleLabel}>{t("Randonne")}</Text>
            <TouchableOpacity onPress={() => navigation.navigate(RouteName.EXPLOR_TAB)}>
              <Text style={HomeTabStyles.SeeAllText}>{t("SeeAll_Label")}</Text></TouchableOpacity>
          </View>
          <Spacing />
          <FlatList
            data={filteredRandonne.length > 0 ? filteredRandonne : randonne}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (< RandonneList item={item} index={index} onPress={() => navigation.navigate(RouteName.DETAILS_SCREEN)} />)}
            keyExtractor={item => item.id}
            contentContainerStyle={HomeTabStyles.PopularNearbyFlatContainer}
          />
          <Spacing space={SH(20)} />
          <View style={[HomeTabStyles.FlextRowJusSpBtn, HomeTabStyles.Padd20]}>
            <Text style={HomeTabStyles.TitleLabel}>{t("Recomandation_Label")}</Text>
          </View>
          <Spacing />
          <FlatList
            data={PopularNearbyData}
            numColumns={1}
            renderItem={({ item, index }) => (< RecommondationFlatFun item={item} index={index} onPress={() => navigation.navigate(RouteName.DETAILS_SCREEN)} />)}
            keyExtractor={item => item.id}
            contentContainerStyle={HomeTabStyles.RecomandationFlatContainer}
          />
          <Spacing />
        </View>
      </ScrollView>
    </Container>
  );
};
export default HomeTab;