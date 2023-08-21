import React, { useEffect, useMemo ,useState } from "react";
import { Text, View, Image, ScrollView, TouchableOpacity, } from "react-native";
import { Payment } from '../../styles';
import images from '../../index';
import { useSelector } from "react-redux";
import RouteName from '../../routes/RouteName';
import { useTranslation } from "react-i18next";
import { Container, AppHeader, Spacing } from '../../components';
import { useTheme } from '@react-navigation/native';
import { Colors, SH } from "../../utils";
import moment from 'moment';

const PaytmSuccessFully = (props) => {
  const { t } = useTranslation();
  const { navigation } = props;
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const { Colors } = useTheme();
  const Payments = useMemo(() => Payment(Colors), [Colors])

  const [transactionDateTime, setTransactionDateTime] = useState(""); 
  useEffect(() => {
    const updateDateTime = () => {
   
      const currentDate = new Date();
      const formattedDateTime = moment(currentDate).format('YYYY-MM-DD HH:mm:ss'); 
      setTransactionDateTime(formattedDateTime); 
      // Calculer le temps restant jusqu'à la prochaine minute complète
      const nextMinute = 60000 - (currentDate.getTime() % 60000);
      // Programmer la prochaine mise à jour
      setTimeout(updateDateTime, nextMinute);
    };
    // Lancer la première mise à jour
    updateDateTime();

    return () => {
      // Arrêter la mise à jour lorsque le composant est démonté
      clearTimeout();
    };
  }, []);
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
      <AppHeader Iconname={true} headerTitle={t("Payment_SUCCESS_Label")} onPress={() => navigation.replace(RouteName.HOME_TAB)} />
      <View style={Payments.minstyleviewphotograpgy}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          style={Payments.ContentContainerStyle}>
          <View style={Payments.keybordtopviewstyle}>
            <View style={Payments.minflexview}>
              <View style={Payments.minviewsigninscreen}>
                <TouchableOpacity style={Payments.imagecebter}>
                  <Image source={images.Icon_Succes} resizeMode='cover' style={Payments.paymentsuccesfullimg} />
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
                  <Text style={Payments.proicetextset}>{transactionDateTime}</Text>
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
