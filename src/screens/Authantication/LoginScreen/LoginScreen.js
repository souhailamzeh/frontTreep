import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, } from 'react-native';
import { Button, ConfirmationAlert, Container, ErrorAlert, Input, Spacing, VectoreIcons } from '../../../components';
import { RouteName } from '../../../routes';
import { Style, Login, Otpstyle } from '../../../styles';
import { SH, SF } from '../../../utils';
import { useTheme } from '@react-navigation/native';
import images from '../../../index';
import { useTranslation } from "react-i18next";
import { API_URL } from '../../../../configure';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = (props) => {
    const { Colors } = useTheme();
    const Logins = useMemo(() => Login(Colors), [Colors]);
    const {navigation} = props;
    const [mobileNumber, setMobileNumber] = useState('');
    const [passwordVisibility, setpasswordVisibility] = useState(true);
    const [TextInputPassword, setTextInputPassword] = useState('');
    const Otpstyles = useMemo(() => Otpstyle(Colors), [Colors]);

    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [okbutton, Setokbutton] = useState('');
    const [ErroralertVisible, setErrorAlertVisible] = useState(false);
    const [ErroralertMessage, setErrorAlertMessage] = useState('');

    const onoknutton = () => {
        if (okbutton === false) okbutton;
        if (okbutton === true) navigation.navigate(RouteName.HOME_SCREEN)
    }

    const onChangeText = (text) => {
        if (text === 'TextInputPassword') setpasswordVisibility(!passwordVisibility);
    };
    const { t } = useTranslation();

    const OnRegisterPress = () => {
        navigation.navigate(RouteName.REGISTER_SCREEN);
    }

    const handleLogin = async () => {
        try {
          const response = await fetch(`${API_URL}users/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: mobileNumber,
              password: TextInputPassword,
            }),
          });
      
          const responseBody = await response.json();
          console.log("login", responseBody);
      
          if (responseBody.success) {
            // Login successful, navigate to the appropriate screen
            setAlertMessage(responseBody.message);
            setAlertVisible(true)
            Setokbutton(true)
            await AsyncStorage.setItem('accessToken', responseBody.accessToken);
           // navigation.navigate(RouteName.HOME_SCREEN); // Change to the desired screen
          } else {
            // Login failed, show an error message to the user
            if (responseBody.message) {
              setErrorAlertMessage(responseBody.message);
            } else {
              setErrorAlertMessage('Login failed. Please try again.');
            }
            setErrorAlertVisible(true);
          }
        } catch (error) {
          console.error('Error logging in:', error);
          setErrorAlertMessage('An error occurred while logging in. Please try again.');
          setErrorAlertVisible(true);
        }
      };

    return (
        <Container>
            <View style={Logins.MinViewScreen}>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={Style.ScrollViewStyles}>
                    <View style={Logins.Container}>
                        <View style={Style.MinViewContent}>
                            <View style={Logins.ManViewLogins}>
                                <Image style={Logins.ImageSet} resizeMode='contain' source={images.App_logo} />
                            </View>
                            <Text style={Logins.LoginText}>{t("Login_Text")}</Text>
                            <Spacing space={SH(20)} />
                            <View style={Logins.InputSpaceView}>
                                <Input
                                    title={t("Email")}
                                    placeholder={t("Email")}
                                    onChangeText={(value) => setMobileNumber(value)}
                                    value={mobileNumber}
                                    placeholderTextColor={Colors.gray_text_color}
                                />
                            </View>
                            <Spacing space={SH(20)} />
                            <View style={Style.FlexRowPassword}>
                                <View style={Style.InputViewWidth}>
                                    <Input
                                        name="password"
                                        title={t("Password_Text")}
                                        value={TextInputPassword}
                                        placeholder={t("Password_Text")}
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        placeholderTextColor={Colors.gray_text_color}
                                        textContentType="newPassword"
                                        secureTextEntry={passwordVisibility}
                                        enablesReturnKeyAutomatically
                                        onChangeText={(text) => setTextInputPassword(text)}
                                    />
                                    <TouchableOpacity style={Style.IconPostionAboluteTwo} onPress={() => { onChangeText("TextInputPassword") }}>
                                        <VectoreIcons
                                            name={passwordVisibility ? 'eye-off' : 'eye'}
                                            size={SF(25)}
                                            color={Colors.gray_text_color}
                                            icon="Ionicons"
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Spacing space={SH(10)} />
                            <View style={Logins.ViewTextStyle}>
                                <Text style={Logins.TextStyle}>{t("Dont_Have_Account")} <Text style={Logins.registerTextStyle} onPress={() => OnRegisterPress()}> {t("Register_Text")}</Text></Text>
                            </View>
                            <Spacing space={SH(40)} />
                            <View style={Logins.LoginButton}>
                                <Button
                                    title={t("Login_Text")}
                                    onPress={() => handleLogin()}
                                />
                            </View>
                            <Spacing space={SH(10)} />
                            <TouchableOpacity onPress={() => navigation.navigate(RouteName.FORGOT_PASSWORD)}>
                                <Text style={Logins.ForgetPasswordStyles}>{t("Forgot_Password")}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
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
        </Container>
    );
}
export default LoginScreen;