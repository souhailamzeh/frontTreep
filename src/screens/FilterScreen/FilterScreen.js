import React, { useState, useMemo } from 'react';
import { View, Text, FlatList, ScrollView, } from 'react-native';
import { Container, Spacing, AppHeader, Button, VectoreIcons, FilterPlaceFlatFun, StarRateFlatFun, SliderFilter } from '../../components';
import { Colors, SF, SH, FilterData, startRateData } from '../../utils';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { FilterScreenStyle } from '../../styles';
import { RouteName } from '../../routes';

const FilterScreen = (props) => {
   const { navigation } = props;
   const { t } = useTranslation();
   const { Colors } = useTheme();
   const FilterScreenStyles = useMemo(() => FilterScreenStyle(Colors), [Colors]);

   const ArrayList = {
      sliderValue: 20,
      sliderMaxValue: 200,
   }
   const [value, setValue] = useState(ArrayList);
   const [select, setSelect] = useState(1);
   const [starRate, setStarRate] = useState(4);

   return (
      <Container backgroundColor={Colors.background}>
         <Spacing space={SH(20)} />
         <AppHeader Iconname={true} headerTitle={t("Filter_Label")} onPress={() => navigation.replace(RouteName.HOME_SCREEN)} />
         <ScrollView>
            <Spacing />
            <View style={FilterScreenStyles.MainView}>
               <View style={FilterScreenStyles.MainboxSlider}>
                  <Spacing space={SH(20)} />
                  <Text style={FilterScreenStyles.MinivalueStyle}>{t("Minvalue_Label")}</Text>
                  <Spacing />
                  <View style={[FilterScreenStyles.MinValueBox, FilterScreenStyles.FlexRow]}>
                     <VectoreIcons icon="FontAwesome" name='dollar' size={SF(16)} color={Colors.black_text_color} /><Text style={FilterScreenStyles.ValueStyle}>{value.sliderValue}</Text>
                  </View>
                  <SliderFilter
                     style={FilterScreenStyles.MinLengthSlider}
                     minimumValue={20}
                     maximumValue={150}
                     minimumTrackTintColor={Colors.theme_background}
                     maximumTrackTintColor="#000000"
                     thumbTintColor={Colors.theme_background}
                     step={1}
                     value={value.sliderValue}
                     onValueChange={
                        (minValue) => setValue({ ...value, sliderValue: minValue })
                     }
                  />
               </View>
               <Spacing space={SH(20)} />
               <View style={FilterScreenStyles.MainboxSlider}>
                  <Text style={FilterScreenStyles.MinivalueStyle}>{t("MaxValue_Label")}</Text>
                  <Spacing />
                  <View style={[FilterScreenStyles.MinValueBox, FilterScreenStyles.FlexRow]}>
                     <VectoreIcons icon="FontAwesome" name='dollar' size={SF(16)} color={Colors.black_text_color} />
                     <Text style={FilterScreenStyles.ValueStyle}>{value.sliderMaxValue}</Text>
                  </View>
                  <SliderFilter
                     style={FilterScreenStyles.MinLengthSlider}
                     minimumValue={0}
                     maximumValue={200}
                     minimumTrackTintColor={Colors.theme_background}
                     maximumTrackTintColor="#000000"
                     thumbTintColor={Colors.theme_background}
                     step={1}
                     value={value.sliderMaxValue}
                     onValueChange={
                        (maxValue) => setValue({ ...value, sliderMaxValue: maxValue })
                     }
                  />
               </View>
               <Spacing />
               <View style={FilterScreenStyles.FiletrTabBox}>
                  <Text style={FilterScreenStyles.FilterHeadingStyle}>{t("Popular_Filter_Label")}</Text>
                  <Spacing space={SH(20)} />
                  <FlatList
                     data={FilterData}
                     numColumns={2}
                     renderItem={({ item, index }) => (<FilterPlaceFlatFun item={item} index={index} select={select} setSelect={setSelect} onPress={() => setSelect(index)} />)}
                     keyExtractor={item => item.id}
                     contentContainerStyle={FilterScreenStyles.FilterPlaceContainerStyle}
                  />
               </View>
               <Spacing />
               <View style={FilterScreenStyles.FiletrTabBox}>
                  <Text style={FilterScreenStyles.FilterHeadingStyle}>{t("Popular_Filter_Label")}</Text>
                  <Spacing space={SH(20)} />
                  <FlatList
                     data={startRateData}
                     numColumns={5}
                     renderItem={({ item, index }) => (<StarRateFlatFun item={item} index={index} starRate={starRate} setStarRate={setStarRate} onPress={() => setStarRate(index)} />)}
                     keyExtractor={item => item.id}
                     contentContainerStyle={FilterScreenStyles.FilterPlaceContainerStyle}
                  />
               </View>
            </View>
         </ScrollView>
         <View style={[FilterScreenStyles.FlextRowJusSpBtn, FilterScreenStyles.BtnWarp]}>
            <Button title={t("ClearAll_Label")} buttonStyle={FilterScreenStyles.ClearBtnStyle} buttonTextStyle={FilterScreenStyles.ClearBtnText} />
            <Button title={t("Apply_Label")} buttonStyle={FilterScreenStyles.BtnStyle} onPress={() => navigation.navigate(RouteName.HOME_SCREEN)} />
         </View>
      </Container>
   );
};
export default FilterScreen;
