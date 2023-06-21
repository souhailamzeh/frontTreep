import React, { useEffect, useMemo } from "react";
import { Text, View, Image, ScrollView, TouchableOpacity, } from "react-native";
import { Payment } from '../../styles';
import images from '../../index';
import { useSelector } from "react-redux";
import RouteName from '../../routes/RouteName';
import { useTranslation } from "react-i18next";
import { Container, AppHeader, Spacing } from '../../components';
import { useTheme } from '@react-navigation/native';
import { Colors, SH } from "../../utils";

const PaytmSuccessFully = (props) => {
  const { t } = useTranslation();
  const { navigation } = props;
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const { Colors } = useTheme();
  const Payments = useMemo(() => Payment(Colors), [Colors])


  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      navigation.navigate(RouteName.REVIEWS_SCREEN);
      clearInterval(interval);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container backgroundColor={Colors.background}>     
      <Spacing space={SH(20)} />
      <AppHeader Iconname={true} headerTitle={t("Payment_SUCCESS_Label")} onPress={() => navigation.replace(RouteName.PAYMENT_SCREEN)} />
      <View style={Payments.minstyleviewphotograpgy}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          style={Payments.ContentContainerStyle}>
          <View style={Payments.keybordtopviewstyle}>
            <View style={Payments.minflexview}>
              <View style={Payments.minviewsigninscreen}>
                <TouchableOpacity style={Payments.imagecebter}>
                  <Image source={images.Pymentsuceeful_img} resizeMode='cover' style={Payments.paymentsuccesfullimg} />
                </TouchableOpacity>
                <View style={Payments.textcenterview}>
                  <Text style={[Payments.textcenterpayment, { color: colorrdata }]}>{t("PAYMENT_SUCCESSFULL")}</Text>
                </View>
                <Text style={Payments.textcenterpaymenttwo}>{t("Payment_Scucessfull_Massage")}</Text>
                <TouchableOpacity style={Payments.flexrowcoffitext}>
                  <Text style={Payments.totalamountpaid}>{t("PAYED_BY")}</Text>
                  <Text style={Payments.proicetextset}>{t("Paytm_Label")}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Payments.flexrowcoffitexttwo}>
                  <Text style={Payments.totalamountpaid}>{t("TRANCATION_DATE")}</Text>
                  <Text style={Payments.proicetextset}>{t("Transaction_Date")}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </Container>
  );
};
export default PaytmSuccessFully;
