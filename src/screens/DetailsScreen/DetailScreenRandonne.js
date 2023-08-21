import React, { useState, useMemo , useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView, StatusBar, ImageBackground } from 'react-native';
import { Container, Spacing, LinearGradientComp, Button, PackagesFlatFun, VectoreIcons } from '../../components';
import { Colors, SF, SH, tripActivityData, packagesData } from '../../utils';
import { useNavigation, useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { DetailsScreenStyle } from '../../styles';
import images from '../../index';
import { RouteName } from '../../routes';
import { API_URL } from '../../../configure';
import ListeActiviteRandonne from '../../components/ListingComponent/ListeActiviteRandonne';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/FontAwesome';



const DetailsScreenRandonne = ({route}) => {
    //const { navigation } = props;
    const navigation = useNavigation()
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const DetailsScreenStyles = useMemo(() => DetailsScreenStyle(Colors), [Colors]);
    const [selectedIndex, setIndex] = useState(1);
    const [count, setCount] = useState(1);
    const [detail, setDetails] = useState([]);
    const [selected, setSelected] = useState('');
    const [meteo, setmeteo] = useState('');
    const [filterData, setFilterData] = useState();

    const { detailsRandonne } = route?.params;
    const [departureDatee, setDepartureDatee] = useState('');
    const [endDatee, setEndDatee] = useState('');

    console.log("randonneDe",detailsRandonne)

    let price = detailsRandonne.tarifrandonne;
    const PeoplePlusCount = () => {
        setCount(count + 1)
    }
    const PeopleMinusCount = () => {
        setCount(count - 1)
        if (count >= 1) {
            setCount(1)
        }
    }

    const Meteo = async () => {
        try {
            const response = await fetch(`${API_URL}meteo/meteoGetAll`).then((response) => response.json()
            ) //   <------ this line 
                .then(async (response) => {
                    setmeteo(response)
                  
                });
        } catch (error) {
            console.error(error);
        }
    }

    const HandleDate = (Datee) => {
        if (!departureDatee) {
            setDepartureDatee(Datee);
            setEndDatee('');
        } else if (!endDatee && Datee > departureDatee) {
            setEndDatee(Datee);
        } else {
            setDepartureDatee(Datee);
            setEndDatee('');
        }
        console.log("depart", departureDatee)

        const filteredData = meteo.find((item) => item.date === Datee);
        console.log("filter", filteredData)
        if (filteredData) {
            setFilterData(filteredData);
            setFilterData(filteredData);
        }
        else {
            setFilterData('Pas tempretaure dispo');
        }
    }
    const navigateToIndexReservation = () => {
        navigation.navigate(RouteName.INDEX_Guiderandonne, {
            detailsRandonne,
            departureDatee: departureDatee || null, // Pass as a string directly (already in ISO format)
            endDatee: endDatee || null, // Pass as a string directly (already in ISO format)
        });
        console.log("testDate",departureDatee)
    };

    useEffect(() => {
        Meteo();
        //console.warn('deb',departureDate , 'fin' , endDate)
        console.log("meeeteo",meteo)
    }, []);

    return (
        <Container backgroundColor={Colors.background}>
            <StatusBar translucent backgroundColor="transparent" barStyle={'light-content'}/>
            <ScrollView>
                <View style={DetailsScreenStyles.MainView}>
                    <View>
                        <ImageBackground source={{ uri : detailsRandonne.imagerandonne }} style={DetailsScreenStyles.BannerImageStyle}>
                            <TouchableOpacity onPress={() => navigation.navigate(RouteName.HOME_SCREEN)} style={DetailsScreenStyles.BackArrowBox}>
                                <VectoreIcons icon="AntDesign" name='arrowleft' size={SF(22)} color={Colors.white_text_color} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate(RouteName.HOME_SCREEN)} style={DetailsScreenStyles.BackArrowBox}>
                                <VectoreIcons icon="emplacement" name='arrowleft' size={SF(22)} color={Colors.white_text_color} />
                            </TouchableOpacity>
                            <View style={[DetailsScreenStyles.FlexRowAcSpBtn, DetailsScreenStyles.DetailsOfPlaceBox]}>
                                <View>
                                    <Text style={DetailsScreenStyles.PalceNameStyle}>{t(detailsRandonne.adressecentre)}</Text>
                                    <Text style={DetailsScreenStyles.PalceNameLocaStyle}>{t("Lorium_Lipsume_Label")}</Text>
                                </View>
                                <View>
                                    <View style={DetailsScreenStyles.RateBoxStyle}>
                                        <Text style={DetailsScreenStyles.RateStyle}>{t(detailsRandonne.ratingcentre)}</Text>
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
                        data={detailsRandonne.activite}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => (<ListeActiviteRandonne item={item} index={index}  />)}
                        keyExtractor={item => item.id}
                        contentContainerStyle={DetailsScreenStyles.DetailsFlatContainer}
                    /> 
                    <Spacing space={SH(10)} />
                    <Text style={[DetailsScreenStyles.TitleLabel, DetailsScreenStyles.Padd20]}>{t("Select_Label")}</Text>
                    <Spacing space={SH(10)} />
                    <Calendar

                        onDayPress={day => HandleDate(day.dateString)}
                        markedDates={{
                            [departureDatee]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' },
                            [endDatee]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' },
                        }}
                    />

                    {departureDatee ? (
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                            <Icon name="thermometer" size={20} color="black" />
                            <Text style={[DetailsScreenStyles.TitleLabel, DetailsScreenStyles.Padd20]}>
                                {t(filterData.temperature)}
                            </Text>
                        </View>
                    ) : null}
                    <Text style={[DetailsScreenStyles.TitleLabel, DetailsScreenStyles.Padd20]}>
                        {departureDatee ? parseInt(departureDatee.slice(-2)) : null}
                        {departureDatee && endDatee ? " - " : null}
                        {endDatee ? parseInt(endDatee.slice(-2)) : null}
                    </Text>
                    {/* <FlatList
                        data={packagesData}
                        numColumns={1}
                        renderItem={({ item, index }) => (<PackagesFlatFun item={item} index={index}
                            selectedIndex={selectedIndex}
                            onPress={() => setIndex(index)}
                            setIndex={setIndex}
                        />)}
                        keyExtractor={item => item.id}
                        contentContainerStyle={DetailsScreenStyles.DetailsTripFlatContainer}

                    /> */}
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
                <Button title={t("Continue_Label")} buttonStyle={DetailsScreenStyles.BtnStyle} onPress={navigateToIndexReservation} />
            </View>
        </Container>
    );
};
export default DetailsScreenRandonne;
