import React, { useState, useMemo } from "react";
import { Text, View, Image, ScrollView, FlatList, TouchableOpacity, } from "react-native";
import { PaymentStyle } from '../../styles';
import images from '../../index';
import RouteName from '../../routes/RouteName';
import { useSelector } from "react-redux";
import { SF, SH, Colors } from "../../utils";
import { AppHeader, Container, Spacing, VectoreIcons } from "../../components";
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const PaymentScreen = (props) => {
  const { t } = useTranslation();
  const { navigation } = props;
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const { Colors } = useTheme();
  const PaymentStyles = useMemo(() => PaymentStyle(Colors), [Colors]);

  const [Paymentdata] = useState([
    {
      "id": 1,
      "paymentparegraph": "Payment_screen_Paragraph_One",
      "image": <Image source={images.Upi} resizeMode='center' style={PaymentStyles.setbgimage} />,
      "smalltext": "Pay_Via_UPI_Label",
      "walletstextset": t("Wallets_Lebal"),
    },
    {
      "id": 2,
      "paymentparegraph": "Payment_screen_Paragraph_Two",
      "image": <Image source={images.paytem} resizeMode='center' style={PaymentStyles.setbgimage} />,
      "smalltext": t("Paytm_Label"),
    },
    {
      "id": 3,
      "paymentparegraph": "Payment_screen_Paragraph_Three",
      "image": <Image source={images.Mobikwikimage} resizeMode='center' style={PaymentStyles.setbgimage} />,
      "smalltext": t("MobikWik_Label"),
    },
    {
      "id": 4,
      "paymentparegraph": "Payment_screen_Paragraph_Four",
      "image": <Image source={images.freechargelogo} resizeMode='center' style={PaymentStyles.setbgimage} />,
      "smalltext": t("Freecharge_Label"),
    },

  ]);
  const [show, setShow] = useState(null);
  const toggleHandler = (id) => {
    (id === show) ? setShow(null) : setShow(id)
  };
  const ItemRender = (item, index) => {
    return (
      <TouchableOpacity onPress={() => toggleHandler(item.id)}>
        <View>
          <View style={PaymentStyles.setflexrowarrowleftthree}>
            <View style={PaymentStyles.flexrowcreditcard}>
              <View style={PaymentStyles.iconsetborderwidth}>
                {item.image}
              </View>
              <View style={PaymentStyles.settextwidth}>
                <Text style={PaymentStyles.creditcardtext}>{t(item.smalltext)}</Text>
                <Text style={PaymentStyles.youneedstext}>{t(item.paymentparegraph)}</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => toggleHandler(item.id)}>
                <VectoreIcons icon="AntDesign" name={show === item.id ? 'up' : 'down'} size={SF(21)} color={Colors.black_text_color} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {show === item.id ? <View>
          <View style={PaymentStyles.setparegraphviewstyle}>
            <Text style={PaymentStyles.paregraphtextPaymentStyleset}>{t("PaytmDetails")}</Text>
          </View>
        </View> : null}
      </TouchableOpacity>
    );
  }
  return (
    <Container backgroundColor={Colors.background}>     
      <Spacing space={SH(20)} />
      <AppHeader Iconname={true} headerTitle={t("Payment_Label")} onPress={() => navigation.replace(RouteName.DETAILS_SCREEN)} />
      <View style={PaymentStyles.minstyleviewphotograpgy}>
        <ScrollView style={PaymentStyles.ContentContainerStyle}>
          <View style={PaymentStyles.minflexview}>
            <View style={PaymentStyles.minviewsigninscreen}>
              <Text style={[PaymentStyles.cardtextstyle, { color: colorrdata }]}>{t("Cards_Label")}</Text>
              <TouchableOpacity style={PaymentStyles.setflexrowarrowleft} onPress={() => navigation.replace(RouteName.CREDIT_CARD_SCREEN)}>
                <View style={PaymentStyles.flexrowcreditcard}>
                  <View style={PaymentStyles.iconsetborderwidth}>
                    <VectoreIcons icon="AntDesign" name="creditcard" size={SF(25)} color={Colors.gray_text_color} />
                  </View>
                  <Text style={PaymentStyles.creditcardtext}>{t("Credit_ATM_Debit_Cards")}</Text>
                </View>
                <View>
                  <VectoreIcons icon="AntDesign" name="right" size={SF(21)} color={Colors.black_text_color} />
                </View>
              </TouchableOpacity>
              <View style={PaymentStyles.setflexrowarrowlefttwo}>
              </View>
              {/* START PAYPAL */}
              <TouchableOpacity style={[PaymentStyles.flexrowcreditcardtwo, PaymentStyles.bottomborder]} onPress={() => navigation.replace(RouteName.PATMENT_SUCCESSFULL_SCREEN)}>
                <View style={PaymentStyles.iconsetborderwidth}>
                  <Image source={images.Paypal} resizeMode='center' style={PaymentStyles.setbgimage} />
                </View>
                <Text style={PaymentStyles.creditcardtext}>{t("Paypal_Label")}</Text>
              </TouchableOpacity>
              {/* END PAYPAL */}
              <Text style={[PaymentStyles.cardtextstyletwo, { color: colorrdata }]}>{t("UPI_Label")}</Text>
              <TouchableOpacity style={PaymentStyles.flexrowcreditcardtwo} onPress={() => navigation.replace(RouteName.PATMENT_SUCCESSFULL_SCREEN)}>
                <View style={PaymentStyles.iconsetborderwidth}>
                  <Image source={images.paytem} resizeMode='center' style={PaymentStyles.setbgimage} />
                </View>
                <Text style={PaymentStyles.creditcardtext}>{t("Paytm_UPI_Label")}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={PaymentStyles.flexrowcreditcardtwo} onPress={() => navigation.replace(RouteName.PATMENT_SUCCESSFULL_SCREEN)}>
                <View style={PaymentStyles.iconsetborderwidth}>
                  <Image source={images.Upi} resizeMode='center' style={PaymentStyles.setbgimage} />
                </View>
                <Text style={PaymentStyles.creditcardtext}>{t("Google_Pay_Label")}</Text>
              </TouchableOpacity>
              <Text style={[PaymentStyles.cardtextstylethree, { color: colorrdata }]}>{t("Wallets_Label")}</Text>
              <FlatList
                data={Paymentdata}
                renderItem={({ item, index }) => ItemRender(item, index)}
                keyExtractor={item => item.id}
                style={PaymentStyles.flatelist}
              />
              <Spacing />
            </View>
          </View>
          <Spacing space={SH(50)} />
        </ScrollView>
      </View>
    </Container>

  );
};

export default PaymentScreen;
