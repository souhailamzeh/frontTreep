import React, { useState, useMemo } from "react";
import { Text, View, Image, ScrollView, TextInput, } from "react-native";
import { Creditcard, } from '../../styles';
import { Button, Container, AppHeader, Input, Spacing, VectoreIcons } from '../../components';
import images from '../../index';
import RouteName from '../../routes/RouteName';
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useTheme, useNavigation } from '@react-navigation/native';
import { Colors, SH, SF } from "../../utils";
import { API_URL } from '../../../configure';

const CreditCardScreen = ({ route }) => {
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const Creditcards = useMemo(() => Creditcard(Colors), [Colors]);

  //const { navigation } = props;
  const navigation = useNavigation()
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const [mobileNumber, setMobileNumber] = useState('');
  const [CvvNumber, setCvvNumber] = useState('');
  const [CardNumber, setCardNumber] = useState('');
  const [card, setCard] = useState('');
  const [exp_month, setExpMonth] = useState('');
  const [exp_year, setExpYear] = useState('');

  const { total, type , details, selectedMateriel, departureDate,endDate,detailsRandonne, checkedItems, checkedItemsGuid,departureDatee ,endDatee } = route?.params ?? {};
  console.log("total", total)
  console.log("toReserMaterieltal", selectedMateriel)

  const onChangeText = (text, type) => {
    if (type === 'mobile') setMobileNumber(text);
    if (type === 'password') setPassword(text);
    if (type === 'CvvNumber') setCvvNumber(text);
    if (type === 'CardNumber') setCardNumber(text);
  };
  console.log("paaaaayment",details)

  const handleReservationRandonne= async () => {
    try {
      const response = await fetch(`${API_URL}resevationrandonne/reservationrandonnePost`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: "2",
          datedepart: departureDatee,
          datearrive: endDatee,
          nameRandonne: detailsRandonne.namerandonne,
          guide: checkedItemsGuid,
          transport: checkedItems,

        }),
      });
     

      if (response.ok) {
        console.log("reservation succes")
      }
      
      // You can perform any additional actions after successful payment here
    } catch (error) {
      console.error('Error in payment:', error);
     
      // You can perform any additional actions if payment fails
    }
  };

  const handleReservationCamping = async () => {
    try {
      const response = await fetch(`${API_URL}resevationcentre/reservationcentrePost`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: "1",
          datedepart: departureDate,
          datearrive: endDate,
          nameCentre: details.namecentre,
          materiel: selectedMateriel,
        }),
      });
      if (response.ok) {
        console.log("reservation succes")
      }
      // You can perform any additional actions after successful payment here
    } catch (error) {
      console.error('Error in payment:', error);
      // You can perform any additional actions if payment fails
    }
  };
  const handlePayment = async () => {
    const [month, year] = mobileNumber.split('/');
    setExpMonth(month);
    setExpYear(year);
    try {
      const response = await fetch(`${API_URL}payment/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currency: "eur",
          amount: total, // Replace 'total' with the actual variable containing the payment amount
          customer_id: "ac4228d3ouu1d-c7ds84-42s8c-82d3-7fa8j8d05fcac3d6", // Replace with the actual customer ID
          materiels: [{}],
          type: type,
          number: card,
          exp_month: parseInt(month), // Store the month separately
          exp_year: parseInt(year),   // Store the year separately
          cvc: CvvNumber,
        }),
      });
  

      if (response.ok) {
         handleReservationCamping()
         handleReservationRandonne()
        
        navigation.navigate(RouteName.PATMENT_SUCCESSFULL_SCREEN);
      }
    
      // You can perform any additional actions after successful payment here
    } catch (error) {
      console.error('Error in payment:', error);
    
      // You can perform any additional actions if payment fails
    }
  };
  return (
    <Container backgroundColor={Colors.background}>
      <Spacing space={SH(20)} />
      <AppHeader Iconname={true} onPress={() => navigation.replace(RouteName.INDEX_Reservation)} />
      <View style={Creditcards.minstyleviewphotograpgy}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          style={Creditcards.ContentContainerStyle}>
          <View style={Creditcards.keybordtopviewstyle}>
            <View style={Creditcards.minflexview}>
              <View style={Creditcards.minviewsigninscreen}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                  <VectoreIcons icon="AntDesign" name='carryout' size={SF(22)} color={Colors.blue_text_color} />
                  <View style={{ borderBottomWidth: 1, borderBottomColor: 'black', width: 90, marginHorizontal: 10 }} />
                  <VectoreIcons icon="AntDesign" name='wallet' size={SF(22)} color='blue' />
                  <View style={{ borderBottomWidth: 1, borderBottomColor: 'black', width: 90, marginHorizontal: 10 }} />
                  <VectoreIcons icon="AntDesign" name='check' size={SF(22)} color={Colors.blue_text_color} />
                </View>
                <View style={Creditcards.setwidthimage}>
                  <Image source={images.Creditcard} resizeMode='cover' style={Creditcards.Creditcards} />
                </View>
                <View style={Creditcards.setstyleinputtext}>
                  <Text style={Creditcards.textstyle}>{t("Name_Label")}</Text>
                  <Spacing />
                  <Input
                    //placeholder="John Doi"
                    onChangeText={setCardNumber}
                    inputStyle={Creditcards.inputstyle}
                    value={CardNumber}
                  />
                </View>
                <Text></Text>
                <View style={Creditcards.setstyleinputtext}>
                  <Text style={Creditcards.textstyle}>{t("Card_Number")}</Text>
                  <Spacing />
                  <Input
                    // placeholder="8644 4356 8243 8070"
                    inputType="numeric"
                    maxLength={16}
                    onChangeText={setCard}
                    value={card}
                    inputStyle={Creditcards.inputstyle}
                  />
                </View>
                <View style={Creditcards.flexrowsetinput}>
                  <View style={Creditcards.setstyleinputtexttwo}>
                    <Text style={Creditcards.textstyle}>{t("mm_yy_Label")}</Text>
                    <Spacing />
                    <Input
                      placeholder="02/24"
                      onChangeText={(text) => setMobileNumber(text)} // Store the whole value in mobileNumber
                      value={mobileNumber}
                      maxLength={7} // Update the max length to include "/"
                      inputType="numeric"
                      inputStyle={Creditcards.inputstyleData}
                    />
                  </View>
                  <View style={Creditcards.setstyleinputtexttwo}>
                    <Text style={Creditcards.textstyle}>{t("cvv_Label")}</Text>
                    <Spacing />
                    <Input
                      // placeholder="502"
                      onChangeText={(text) => onChangeText(text, 'CvvNumber')}
                      value={CvvNumber}
                      maxLength={3}
                      inputType="numeric"
                      inputStyle={Creditcards.inputstyleData}
                    />
                  </View>
                </View>
                <View style={Creditcards.setbuttonstyle}>
                  <Button title={t("Pay_with_Card")}
                    // onPress={() => navigation.replace(RouteName.PATMENT_SUCCESSFULL_SCREEN)}
                    onPress={handlePayment}
                    buttonStyle={Creditcards.setbuttonCreditcardsavecard}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </Container>

  );
};

export default CreditCardScreen;
