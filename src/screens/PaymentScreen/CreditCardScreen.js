import React, { useState, useMemo } from "react";
import { Text, View, Image, ScrollView, TextInput, } from "react-native";
import { Creditcard, } from '../../styles';
import { Button, Container, AppHeader, Input, Spacing, VectoreIcons } from '../../components';
import images from '../../index';
import RouteName from '../../routes/RouteName';
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import { Colors, SH, SF } from "../../utils";

const CreditCardScreen = (props) => {
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const Creditcards = useMemo(() => Creditcard(Colors), [Colors]);

  const { navigation } = props;
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const [mobileNumber, setMobileNumber] = useState('');
  const [CvvNumber, setCvvNumber] = useState('');
  const [CardNumber, setCardNumber] = useState('');
  const [card, setCard] = useState('');


  const onChangeText = (text, type) => {
    if (type === 'mobile') setMobileNumber(text);
    if (type === 'password') setPassword(text);
    if (type === 'CvvNumber') setCvvNumber(text);
    if (type === 'CardNumber') setCardNumber(text);
  };
  return (
    <Container backgroundColor={Colors.background}>
      <Spacing space={SH(20)} />
      <AppHeader Iconname={true}  onPress={() => navigation.replace(RouteName.PAYMENT_SCREEN)} />
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
                    placeholder="John Doi"
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
                    placeholder="8644 4356 8243 8070"
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
                      onChangeText={(text) => onChangeText(text, 'mobile')}
                      value={mobileNumber}
                      maxLength={4}
                      inputType="numeric"
                      inputStyle={Creditcards.inputstyleData}
                    />
                  </View>
                  <View style={Creditcards.setstyleinputtexttwo}>
                    <Text style={Creditcards.textstyle}>{t("cvv_Label")}</Text>
                    <Spacing />
                    <Input
                      placeholder="502"
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
                    onPress={() => navigation.replace(RouteName.PATMENT_SUCCESSFULL_SCREEN)}
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
