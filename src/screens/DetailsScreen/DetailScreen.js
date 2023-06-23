import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView, StatusBar, ImageBackground } from 'react-native';
import { Container, Spacing, LinearGradientComp, TripActivityFlatFun, Button, PackagesFlatFun, VectoreIcons } from '../../components';
import { Colors, SF, SH, tripActivityData, packagesData } from '../../utils';
import { useNavigation, useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { DetailsScreenStyle } from '../../styles';
import images from '../../index';
import { RouteName } from '../../routes';



const DetailsScreen = ({route}) => {
    //const { navigation } = props;
    const navigation = useNavigation()
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const DetailsScreenStyles = useMemo(() => DetailsScreenStyle(Colors), [Colors]);
    const [selectedIndex, setIndex] = useState(1);
    const [count, setCount] = useState(1);
    const [detail, setDetails] = useState([]);

    const { details } = route.params;

    console.log(details)

    let price = details.tarifcentre;
    const PeoplePlusCount = () => {
        setCount(count + 1)
    }
    const PeopleMinusCount = () => {
        setCount(count - 1)
        if (count >= 1) {
            setCount(1)
        }
    }

    return (
        <Container backgroundColor={Colors.background}>
            <StatusBar translucent backgroundColor="transparent" barStyle={'light-content'}/>
            <ScrollView>
                <View style={DetailsScreenStyles.MainView}>
                    <View>
                        <ImageBackground source={{ uri : details.imagecentre }} style={DetailsScreenStyles.BannerImageStyle}>
                            <TouchableOpacity onPress={() => navigation.navigate(RouteName.HOME_SCREEN)} style={DetailsScreenStyles.BackArrowBox}>
                                <VectoreIcons icon="AntDesign" name='arrowleft' size={SF(22)} color={Colors.white_text_color} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate(RouteName.HOME_SCREEN)} style={DetailsScreenStyles.BackArrowBox}>
                                <VectoreIcons icon="emplacement" name='arrowleft' size={SF(22)} color={Colors.white_text_color} />
                            </TouchableOpacity>
                            <View style={[DetailsScreenStyles.FlexRowAcSpBtn, DetailsScreenStyles.DetailsOfPlaceBox]}>
                                <View>
                                    <Text style={DetailsScreenStyles.PalceNameStyle}>{t(details.adressecentre)}</Text>
                                    <Text style={DetailsScreenStyles.PalceNameLocaStyle}>{t("Lorium_Lipsume_Label")}</Text>
                                </View>
                                <View>
                                    <View style={DetailsScreenStyles.RateBoxStyle}>
                                        <Text style={DetailsScreenStyles.RateStyle}>{t(details.ratingcentre)}</Text>
                                    </View>
                                </View>
                            </View>
                            <LinearGradientComp start={{ x: 0, y: 1.3 }} end={{ x: 0, y: 0 }} colors={[Colors.black_text_color, 'transparent']} LinearGradientStyle={DetailsScreenStyles.LinearGradientBottom} />
                        </ImageBackground>
                    </View>
                    <Spacing space={SH(20)} />
                    <View style={DetailsScreenStyles.SummeryBox}>
                        <Text style={DetailsScreenStyles.SummeryText}>{t("DetailsSummery_Label")}</Text>
                    </View>
                    <Spacing space={SH(20)} />
                    <View style={[DetailsScreenStyles.FlextRowJusSpBtn, DetailsScreenStyles.Padd20]}>
                        <Text style={DetailsScreenStyles.TitleLabel}>{t("Trip_Activity_Label")}</Text>
                        <TouchableOpacity><Text style={DetailsScreenStyles.SeeAllText}>{t("SeeAll_Label")}</Text></TouchableOpacity>
                    </View>
                    <Spacing space={SH(20)} />
                    <FlatList
                        data={details.activite}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => (<TripActivityFlatFun item={item} index={index}  />)}
                        keyExtractor={item => item.id}
                        contentContainerStyle={DetailsScreenStyles.DetailsFlatContainer}
                    />
                    <Spacing space={SH(10)} />
                    <Text style={[DetailsScreenStyles.TitleLabel, DetailsScreenStyles.Padd20]}>{t("Select_Label")}</Text>
                    <Spacing space={SH(10)} />
                    <FlatList
                        data={packagesData}
                        numColumns={1}
                        renderItem={({ item, index }) => (<PackagesFlatFun item={item} index={index}
                            selectedIndex={selectedIndex}
                            onPress={() => setIndex(index)}
                            setIndex={setIndex}
                        />)}
                        keyExtractor={item => item.id}
                        contentContainerStyle={DetailsScreenStyles.DetailsTripFlatContainer}

                    />
                    <Spacing space={SH(20)} />
                    <Text style={[DetailsScreenStyles.TitleLabel, DetailsScreenStyles.Padd20]}>{t("Select_Person")}</Text>
                    <Spacing space={SH(15)} />
                    <View style={[DetailsScreenStyles.flexRow, DetailsScreenStyles.Padd20, DetailsScreenStyles.Width33]}>
                        <TouchableOpacity onPress={() => PeopleMinusCount()} style={DetailsScreenStyles.BtnIncrDecr}>
                            <VectoreIcons icon="AntDesign" name="minuscircle"
                                size={SF(25)} color={Colors.red} />
                        </TouchableOpacity >
                        <Text style={DetailsScreenStyles.TitleLabel}>{count}</Text>
                        <TouchableOpacity onPress={() => PeoplePlusCount()} style={DetailsScreenStyles.BtnIncrDecr}>
                            <VectoreIcons icon="AntDesign" name="pluscircle"
                                size={SF(25)} color={Colors.vividmalachite} />
                        </TouchableOpacity>
                    </View>
                    <Spacing space={SH(20)} />
                </View>
            </ScrollView>
            <View style={[DetailsScreenStyles.FlextRowJusSpBtn, DetailsScreenStyles.BtnWarp]}>
                <View>
                    <View style={DetailsScreenStyles.flexRow}>
                        <VectoreIcons icon="FontAwesome" name="dollar" size={SF(14)} color={Colors.black_text_color} /><Text style={DetailsScreenStyles.PriceStyle}>{count * price}</Text>
                    </View>
                    <Text style={DetailsScreenStyles.PerPersionStyle}>{t("Total_Label")}</Text>
                </View>
                <Button title={t("Continue_Label")} buttonStyle={DetailsScreenStyles.BtnStyle} onPress={() => navigation.navigate(RouteName.PAYMENT_SCREEN)} />
            </View>
        </Container>
    );
};
export default DetailsScreen;
