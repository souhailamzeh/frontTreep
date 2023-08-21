import React, { useState, useMemo } from "react";
import { Text, View, ScrollView, ImageBackground, KeyboardAvoidingView, TouchableOpacity, } from "react-native";
import {Otpstyle} from '../../../styles';
import images from '../../../index';
import RouteName from '../../../routes/RouteName';
import { Button, ConfirmationAlert,ErrorAlert,OTPInput } from '../../../components';
import { useTranslation } from "react-i18next";
import { useNavigation, useTheme } from '@react-navigation/native';
import { API_URL } from "../../../../configure";

const OtpScreenset = ({route}) => {
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const Otpstyles = useMemo(() => Otpstyle(Colors), [Colors]);
    const navigation = useNavigation()
    const { email } = route.params ?? {};
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [okbutton, Setokbutton] = useState('');
    const [otpCode, setOtpCode] = useState(''); // State to hold the OTP code input


    const [ErroralertVisible, setErrorAlertVisible] = useState(false);
    const [ErroralertMessage, setErrorAlertMessage] = useState('');


    console.log(email)
    var alertdata = {
        'logout': t("Resand_Otp_Text_Modal"),
        'loginSuccess': t("Login_Successfull"),
    }
    const onoknutton = () => {
        if (okbutton === false) okbutton;
        if (okbutton === true) navigation.navigate(RouteName.LOGIN_SCREEN)
    }


    const handleVerifyOtp = async () => {
        try {
          const response = await fetch(`${API_URL}users/activate`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: email,
              code: otpCode,
            }),
          });
    
          const responseBody = await response.json();
          console.log("verify", JSON.stringify({
            email: email,
            code: otpCode,
          }));

          if (responseBody.success) {
            // Verification successful, navigate to the appropriate screen
            setAlertVisible(true);
            setAlertMessage(responseBody.message);
            Setokbutton(true);
          } else {
            // Verification failed, show an error message to the user
            if (responseBody.error) {
              setErrorAlertMessage(responseBody.message);
            } else {
              setErrorAlertMessage('OTP verification failed. Please try again.');
            }
            setErrorAlertVisible(true);
          }
        } catch (error) {
          console.error('Error verifying OTP:', error);
          setErrorAlertMessage('An error occurred while verifying OTP. Please try again.');
          setErrorAlertVisible(true);
        }
      };

    return (
        <ImageBackground source={images.full_bg_img_hospital} resizeMode='cover'>
            <View style={Otpstyles.MinViewScreen}>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={Otpstyles.ScrollViewStyle}>
                    <KeyboardAvoidingView enabled>
                        <View style={Otpstyles.MinFlexView}>
                            <View style={Otpstyles.MinViewSecond}>
                                <Text style={Otpstyles.EnterSixDigitText}>{t("Enter_Six_Digit_OTP")}</Text>
                                <Text style={Otpstyles.paregraph}>{t("Enter_The_Otp_Title")}</Text>
                                <OTPInput
                                    style={Otpstyles.OtpViewStyles}
                                    pinCount={6}
                                    autoFocusOnLoad={false}
                                    codeInputFieldStyle={Otpstyles.CodeInputStyles}
                                    codeInputHighlightStyle={Otpstyles.CodeInputStyles}
                                    onCodeFilled = {(code => {
                                        setOtpCode(code)
                                    })}
                                
                                />
                                <View style={Otpstyles.FlexRowText}>
                                    <Text style={Otpstyles.ParegraPhotpBottom}>{t("Didnt_Recevip_Otp")}</Text>
                                    <TouchableOpacity onPress={() => {
                                        setAlertVisible(true);
                                        setAlertMessage(alertdata.logout);
                                        Setokbutton(false);
                                    }}>
                                        <Text style={Otpstyles.ResendTextBold}>{t("Resend")}</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Button onPress={() => {
                                       handleVerifyOtp()
                                    }} title={t("Verify_Text")} />
                                </View>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
                <ConfirmationAlert
                    message={alertMessage}
                    modalVisible={alertVisible}
                    setModalVisible={setAlertVisible}
                    onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
                    buttonminview={Otpstyles.buttonotp}
                    iconVisible={true}
                    buttonText={t("Ok")}
                />
                 <ErrorAlert
                    message={ErroralertMessage}
                    modalVisible={ErroralertVisible}
                    setModalVisible={setErrorAlertVisible}
                    onPress={() => { setErrorAlertVisible(!ErroralertVisible), onoknutton() }}
                    buttonminview={Otpstyles.buttonotp}
                    iconVisible={true}
                    buttonText={t("Ok")}
                />
            </View>
        </ImageBackground>
    );
};
export default OtpScreenset;
