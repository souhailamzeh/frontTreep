import React, { useState, useMemo, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList, ScrollView, StatusBar, ImageBackground } from 'react-native';
import { Container, Spacing, LinearGradientComp, TripActivityFlatFun, Button, PackagesFlatFun, VectoreIcons, DetailsMateriel } from '../../components';
import { Colors, SF, SH, tripActivityData, packagesData } from '../../utils';
import { useNavigation, useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { DetailsScreenStyle, FavouriteScreenStyle } from '../../styles';
import images from '../../index';
import { RouteName } from '../../routes';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { API_URL } from '../../../configure';
import Icon from 'react-native-vector-icons/FontAwesome';
import { IndexMateriel } from '../Materiel';
import Reservation from 'react-native-calendars/src/agenda/reservation-list/reservation';






const ReservationRandonne = ({ route }) => {
    //const { navigation } = props;
    const navigation = useNavigation()
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const DetailsScreenStyles = useMemo(() => DetailsScreenStyle(Colors), [Colors]);
    const FavouriteScreenStyles = useMemo(() => FavouriteScreenStyle(Colors), [Colors]);
    const [selectedIndex, setIndex] = useState(1);
    const [count, setCount] = useState(1);
    const [selected, setSelected] = useState('');

    const [departureDate, setDepartureDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const [meteo, setmeteo] = useState('');
    const [filterData, setFilterData] = useState();
   
    const [total, setTotal] = useState();
    const { details, selectedMateriel } = route?.params;
  
    console.log("detailssReservation", selectedMateriel)
    

    const PeoplePlusCount = () => {
        setCount(count + 1)
    }
    const PeopleMinusCount = () => {
        setCount(count - 1)
        if (count >= 1) {
            setCount(1)
        }
    }
    useEffect(() => {
        calculateTotalReservation()

    }, []);

    const calculateTotalReservation = () => {
        const reservation = parseFloat(details.tarifcentre);
        console.log("rese", reservation)
        let total = 0;
        for (let i = 0; i < selectedMateriel.length; i++) {
          const item = selectedMateriel[i];
          total += item.PrixMatriel * item.count ;
        }
        const totalWithReservation = total + reservation;
        setTotal(totalWithReservation)
        console.log( "totaal",total)
        return total;
      };

    /* carryout,check ,wallet*/
    return (

        <Container backgroundColor={Colors.background}>
            <StatusBar translucent backgroundColor="transparent" barStyle={'light-content'} />
            <ScrollView>
                <View style={DetailsScreenStyles.MainView}>
                    <View>
                        <ImageBackground source={{ uri: details.imagecentre }} style={[DetailsScreenStyles.BannerImageStyle, { width: 395, height: 430 }]}>
                            <TouchableOpacity onPress={() => navigation.navigate(RouteName.INDEX_Materiel)} style={DetailsScreenStyles.BackArrowBox}>
                                <VectoreIcons icon="AntDesign" name='arrowleft' size={SF(22)} color={Colors.white_text_color} />
                            </TouchableOpacity>
                            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, alignItems: 'center', paddingTop: 45 }}>
                                <Text style={{ fontSize: 24, color: Colors.white_text_color }}>Confirmation</Text>
                                <Spacing space={SH(40)} />
                                <View style={{ flexDirection: 'row' }}>
                                    <VectoreIcons icon="AntDesign" name='carryout' size={SF(22)} color={Colors.blue_text_color} />
                                    <View style={{ borderBottomWidth: 1, borderBottomColor: 'white', width: 90, marginHorizontal: 10 }} />
                                    <VectoreIcons icon="AntDesign" name='wallet' size={SF(22)} color={Colors.white_text_color} />
                                    <View style={{ borderBottomWidth: 1, borderBottomColor: 'white', width: 90, marginHorizontal: 10 }} />
                                    <VectoreIcons icon="AntDesign" name='check' size={SF(22)} color={Colors.white_text_color} />
                                </View>
                                <Spacing space={SH(60)} />
                                <Text style={{ fontSize: 24, color: Colors.white_text_color }}>Hey</Text>
                                <Text style={{ fontSize: 24, color: Colors.white_text_color }}>Everything is prepared</Text>
                                <Text style={{ fontSize: 24, color: Colors.white_text_color }}>for you </Text>
                            </View>
                            <LinearGradientComp start={{ x: 0, y: 1.3 }} end={{ x: 0, y: 0 }} colors={[Colors.black_text_color, 'transparent']} LinearGradientStyle={DetailsScreenStyles.LinearGradientBottom} />
                        </ImageBackground>
                    </View>
                    <Spacing space={SH(20)} />
                    <Spacing space={SH(20)} />
                    <Spacing space={SH(20)} />
                    <Spacing space={SH(20)} />

                    <View style={[DetailsScreenStyles.FlextRowJusSpBtn, DetailsScreenStyles.Padd20]}>
                        <Text style={{ fontSize: 20 }} >{"Reservation : "}</Text>
                        <TouchableOpacity><Text style={DetailsScreenStyles.SeeAllText}>{details.tarifcentre}</Text></TouchableOpacity>
                    </View>
                    <Spacing space={SH(20)} />
                    <View style={{ borderBottomWidth: 0.2, width: '90%', alignSelf: 'flex-start' ,marginHorizontal: 20 }}>
                        <FlatList
                            data={selectedMateriel}
                            numColumns={1}
                            renderItem={({ item, index }) => (<DetailsMateriel materielData={selectedMateriel} item={item} index={index} />)}
                            keyExtractor={item => item.id}
                            contentContainerStyle={FavouriteScreenStyles.RecomandationFlatContainer}
                            ListFooterComponent={<View style={{ marginBottom: 20 }} />}
                        />
                    </View>
                    <Spacing />
                    <Spacing space={SH(10)} />
                    <View style={[DetailsScreenStyles.FlextRowJusSpBtn, DetailsScreenStyles.Padd20]}>
                        <Text style={[DetailsScreenStyles.TitleLabel, DetailsScreenStyles.Padd20]} >{"TOTAL   : "}</Text>
                        <TouchableOpacity><Text style={[DetailsScreenStyles.SeeAllText , { fontSize: 23}]}>{total}</Text></TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <View style={[DetailsScreenStyles.FlextRowJusSpBtn, { alignItems: 'center', justifyContent: 'center' }]}>

                <Button title={"Continue to payment "} buttonStyle={DetailsScreenStyles.BtnStyle} onPress={() => navigation.navigate(RouteName.CREDIT_CARD_SCREEN)} />
            </View>
        </Container>
    );
};
export default ReservationRandonne;
