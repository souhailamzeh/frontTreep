import React, { useMemo } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StatusBar} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { SwiperStyle } from '../../styles';
import { Button, Spacing } from '../../components';
import { RouteName } from '../../routes';
import { Swiperdata, SH, Colors } from '../../utils';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const App = ({ navigation }) => {
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const SwiperStyles = useMemo(() => SwiperStyle(Colors), [Colors]);

  const RenderItem = ({ item }) => {
    return (
      <View>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={SwiperStyles.ScrollViewStyle}>
          <View>
            <View style={SwiperStyles.AnimationViewStyle}>
              {item.animation}
            </View>
          </View>
        </ScrollView>
        <Text style={SwiperStyles.TitleStyles}>
          {t(item.title)}
        </Text>
        <Text style={SwiperStyles.Textstyle}>
          {t(item.text)}
        </Text>
      </View>
    );
  };
  const _renderDoneButton = () => {
    return (
      <View style={SwiperStyles.BgButtonView}>
        <View style={SwiperStyles.ButtonCircle}>
          <Button
            title={t("Get_Started")}
            onPress={
              () => navigation.navigate(RouteName.SELECT_LANGUAGE)
            }
          />
        </View>
      </View>
    );
  };
  const _renderNextButton = () => {
    return (
      <View style={SwiperStyles.BgButtonView}>
        <Spacing space={SH(12)} />
        <Text style={SwiperStyles.NextTextStyle}>{t("Next_Text")}</Text>
      </View>
    );
  };
  const _renderSkipButton = () => {
    return (
      <View style={SwiperStyles.BgButtonView}>
        <TouchableOpacity onPress={() => navigation.navigate(RouteName.SELECT_LANGUAGE)}>
          <Spacing space={SH(12)} />
          <Text style={SwiperStyles.NextTextStyle}>{t("Skip_Text")}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <>
      <StatusBar backgroundColor={Colors.background} barStyle={'dark-content'} />

      <AppIntroSlider
        data={Swiperdata}
        renderItem={RenderItem}
        renderNextButton={_renderNextButton}
        renderSkipButton={_renderSkipButton}
        renderDoneButton={_renderDoneButton}
        showSkipButton={true}
        activeDotStyle={SwiperStyles.ActiveDotStyles}
        dotStyle={SwiperStyles.DotSwiperStyle}
      />
    </>
  );
};
export default App;

