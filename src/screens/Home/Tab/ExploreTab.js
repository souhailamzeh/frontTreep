import React, { useState, useMemo,useEffect } from 'react';
import { View, TouchableOpacity, FlatList, ScrollView, } from 'react-native';
import { Container, Input, Spacing, VectoreIcons, ExploreFlatFun, ExplorPlaceTab } from '../../../components';
import { Colors, SF, explorPlaceData, SH, exploreData } from '../../../utils';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { HomeTabStyle, ExploreStyle } from '../../../styles';
import { RouteName } from '../../../routes';
import { API_URL } from '../../../../configure';
const ExploreTab = (props) => {
  
  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const HomeTabStyles = useMemo(() => HomeTabStyle(Colors), [Colors]);
  const ExploreStyles = useMemo(() => ExploreStyle(Colors), [Colors]);

  const [text, onChangeText] = useState('');
  const [select, setSelect] = useState(1);
  const [randonne, setrandonne ]= useState();

  const handleRondonne =  async () => {
    try {
        const response = await fetch(`${API_URL}randonne/randonneGetAll`).then((response)=>response.json()
        ) //   <------ this line 
        .then(async (response)=>{
          setrandonne(response)
         

        });
      } catch (error) {
        console.error(error);
      }          
      }
      
      useEffect(() => {
     
        handleRondonne();
       },[]);





  return (
    <Container backgroundColor={Colors.background}>      
      <ScrollView>
        <View style={ExploreStyle.MainView}>
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
          <FlatList
            data={explorPlaceData}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <ExplorPlaceTab item={item} index={index}
                select={select}
                setSelect={setSelect}
                onPress={() => setSelect(index)}
              />)}
            keyExtractor={(item) => item.id}
            contentContainerStyle={ExploreStyles.ExplorePlaceFlatContainer}
          />
          <Spacing space={SH(20)} />
          <FlatList
            data={randonne}
            numColumns={2}
            renderItem={({ item, index }) => (< ExploreFlatFun item={item} index={index} onPress={() => navigation.navigate(RouteName.DETAILS_SCREEN)} />)}
            keyExtractor={item => item.id}
            contentContainerStyle={ExploreStyles.ExplorFlatContainer}
          />
        </View>
      </ScrollView>
    </Container>
  );
};
export default ExploreTab;