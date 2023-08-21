import React, { useState, useMemo } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Login, Otpstyle, Style } from '../../../styles';
import IconM from 'react-native-vector-icons/MaterialIcons';
import { Button, ConfirmationAlert, Spacing, AppHeader, Input, ErrorAlert, } from '../../../components';
import { SH, SF } from '../../../utils';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import { RouteName } from "../../../routes";
import { API_URL } from "../../../../configure";

const ForgotPassword = (props) => {
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const { navigation } = props;
  const Logins = useMemo(() => Login(Colors), [Colors]);
  const [email, setEmailValidError] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [verificationCodeSent, setVerificationCodeSent] = useState(false);
  const [okbutton, Setokbutton] = useState('');
  const [ErroralertVisible, setErrorAlertVisible] = useState(false);
  const [ErroralertMessage, setErrorAlertMessage] = useState('');
  const Otpstyles = useMemo(() => Otpstyle(Colors), [Colors]);

  var alertdata = {
    'logout': t("Email_Successfull"),
  }
  const onoknutton = () => {
    if (okbutton === false) okbutton;
    if (okbutton === true) navigation.navigate(RouteName.LOGIN_SCREEN)
}

  const sendVerificationCode = async () => {
    try {
      // Make API call for sending verification code
      const response = await fetch(`${API_URL}users/forgot`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email, // Use the email state
        }),
      });
  
      const responseBody = await response.json();
  
      if (responseBody.success) {
        // Verification code sent successfully, update the state
        setVerificationCodeSent(true);
        setAlertVisible(true);
        setAlertMessage(responseBody.message);
      } else {
        // Show error message to the user
        setErrorAlertVisible(true);
        setErrorAlertMessage(responseBody.message);
      }
    } catch (error) {
      console.error('Error sending verification code:', error);
      setErrorAlertVisible(true);
      setErrorAlertMessage('An error occurred while sending verification code.');
    }
  };

  const resetPassword = async () => {
    try {
      // Make API call for password reset
      const response = await fetch(`${API_URL}users/reset`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: verificationCode, // Use the email state as token
          newPassword: newPassword,
          confirmPassword: repeatPassword,
        }),
      });
  
      const responseBody = await response.json();
  
      if (responseBody.success) {
        // Password reset successful, show success message
        setAlertVisible(true);
        setAlertMessage(responseBody.message);
        Setokbutton(true)
      } else {
        // Password reset failed, show error message
        setErrorAlertVisible(true);
        setErrorAlertMessage(responseBody.message);
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      setErrorAlertVisible(true);
      setErrorAlertMessage('An error occurred while resetting password.');
    }
  };

  return (
    <View style={{ width: '100%' }}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={Style.ScrollViewStyles}>
        <AppHeader onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)} Iconname={true} headerTitle={t("Forget_Password")} />
        <View style={Logins.TabMinView}>
          <View>
            <View style={Logins.TabMinViewChild}>
              <View style={Logins.BorderWidth}>
                <TouchableOpacity style={Logins.WidthSet}>
                  <Input
                    placeholder={t("Enter_Email")}
                    inputStyle={Logins.SearchInputBorder}
                    onChangeText={(e) => setEmailValidError(e)}
                    keyboardType={'email-address'}
                    value={email}
                    leftIcon={<IconM style={Logins.Marginright} name="email" size={SF(25)} />}
                  />

                </TouchableOpacity>


              </View>
              <Spacing space={SH(20)} />
              <Text style={Logins.SeTextStyleForget}><Text style={Logins.StarColor}> * </Text> {t("We_Well_Sand_Message")}</Text>

              <Spacing space={SH(20)} />

              {verificationCodeSent ? (
  <>
   
   <View style={Logins.BorderWidth}>
                <TouchableOpacity style={Logins.WidthSet}>
                  <Input
                    placeholder={t("Enter_Verification_Code")}
                    inputStyle={Logins.SearchInputBorder}
                    onChangeText={(code) => setVerificationCode(code)}
                    value={verificationCode}
                    leftIcon={<IconM style={Logins.Marginright} name="code" size={SF(25)} />}
                  />

                </TouchableOpacity>

              </View>

              <Spacing space={SH(20)} />



              <View style={Logins.BorderWidth}>
                <TouchableOpacity style={Logins.WidthSet}>
                  <Input
                    placeholder={t("Enter_New_Password")}
                    inputStyle={Logins.SearchInputBorder}
                    onChangeText={(password) => setNewPassword(password)}
                    secureTextEntry
                    value={newPassword}
                    leftIcon={<IconM style={Logins.Marginright} name="lock" size={SF(25)} />}
                  />

                </TouchableOpacity>

              </View>



              <Spacing space={SH(20)} />



              <View style={Logins.BorderWidth}>
                <TouchableOpacity style={Logins.WidthSet}>

                  <Input
                    placeholder={t("Repeat_New_Password")}
                    inputStyle={Logins.SearchInputBorder}
                    onChangeText={(password) => setRepeatPassword(password)}
                    secureTextEntry
                    value={repeatPassword}
                    leftIcon={<IconM style={Logins.Marginright} name="lock" size={SF(25)} />}

                  // Add any additional props you need
                  />

                </TouchableOpacity>

              </View>

              <Spacing space={SH(20)} />

              <Button onPress={() => {
                resetPassword()
              }} title={t("Reset")} />
  </>
) : (
  <Button onPress={() => {
    // Simulate successful verification code sending
    // You would have your actual logic here
    sendVerificationCode()
  }} title={t("Send Verification Code")} />
)}


              <Spacing space={SH(20)} />





              <ConfirmationAlert
                message={alertMessage}
                buttonminview={Logins.CenterButton}
                modalVisible={alertVisible}
                setModalVisible={setAlertVisible}
                onPressCancel={() => setAlertVisible(!alertVisible)}
                onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
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
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default ForgotPassword;
