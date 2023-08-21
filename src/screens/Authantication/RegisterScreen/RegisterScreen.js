import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Input, Button, CheckBox, Spacing, Countrycode, VectoreIcons } from '../../../components';
import { SH, SF } from '../../../utils';
import { RouteName } from '../../../routes';
import { Login, Style } from '../../../styles';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import { API_URL } from '../../../../configure';

const Register = (props) => {
    const {navigation} = props;
    const { Colors } = useTheme();
    const Logins = useMemo(() => Login(Colors), [Colors]);
    const stateArray = {
        username: "",
        emailId: "",
        mobileNumber: "",
        textInputPassword: "",
        toggleCheckBox: false,
    };
    const stateErrorArray = {
        username: "",
        emailId: "",
        mobileNumber: "",
        textInputPassword: "",
        toggleCheckBox: false,
    };
    const handleSignup = async () => {
        try {
          const response = await fetch(`${API_URL}users/signup`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: state.username,
              email: state.emailId,
              mobileNumber: state.mobileNumber,
              password: state.textInputPassword,
            }),
          });
      
          const responseBody = await response.json(); // Parse response body as JSON
          console.log("signup", responseBody);
      
          if (responseBody.success) {
            // Signup successful, navigate to another screen
            navigation.navigate(RouteName.OTP_VERYFY_SCREEN, {
                email: state.emailId,
              });
          } else {
            // Signup failed, show an error message to the user
            alert(`Signup failed: ${responseBody.message}`);

          }
        } catch (error) {
          console.error('Error signing up:', error);
          // Handle signup error (e.g., show a general error message to the user)
          alert('Signup failed. Please try again later.');
        }
      };


    const [state, setState] = useState(stateArray);
    const [stateError, setStateError] = useState(stateErrorArray);
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const { t } = useTranslation();
    const onChangeText = (text, type) => {
        if (text === 'TextInputPassword') setPasswordVisibility(!passwordVisibility);
    };
    const [checked, setChecked] = React.useState(true);
    const toggleCheckbox = () => setChecked(!checked);
    return (
        <View style={Logins.MinViewBgColor}>
            <ScrollView
                contentContainerStyle={Style.ScrollViewStyle}>
                <View style={Logins.Container}>
                    <View style={Style.MinViewContent}>
                        <View style={Logins.TopSpaceRegister}>
                            <Text style={Logins.RegisterText}>{t("Sign_Up_Text")}</Text>
                        </View>
                        <Input
                            title={t("Enter_Your_Name")}
                            placeholder={t("Enter_Your_Name")}
                            onChangeText={(text) => setState({ ...state, username: text })}
                            value={state.username}
                        />
                        <Spacing space={SH(20)} />
                        <View style={Style.FlexRowPassword}>
                            <View style={Style.InputViewWidth}>
                                <View style={Style.CountryCodeIconCenter} >
                                    <Countrycode />
                                </View>
                                <Input
                                    title={t("Mobile_Number")}
                                    placeholder={t("Mobile_Number")}
                                    onChangeText={(text) => setState({ ...state, mobileNumber: text })}
                                    value={state.mobileNumber}
                                    maxLength={10}
                                    inputType="numeric"
                                    placeholderTextColor={Colors.gray_text_color}
                                    inputStyle={Style.PaddingLeftCountryInput}
                                />
                            </View>
                        </View>
                        <Spacing space={SH(20)} />
                        <Input
                            title={t("Enter_Your_Email")}
                            placeholder={t("Enter_Your_Email")}
                            onChangeText={(text) => setState({ ...state, emailId: text })}
                            value={state.emailId}
                            placeholderTextColor={Colors.gray_text_color}
                        />
                        <Spacing space={SH(20)} />
                        <View style={Style.FlexRowPassword}>
                            <View style={Style.InputViewWidth}>
                                <Input
                                    title={t("Password_Text")}
                                    name="password"
                                    value={state.textInputPassword}
                                    placeholder={t("Password_Text")}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    placeholderTextColor={Colors.gray_text_color}
                                    textContentType="newPassword"
                                    secureTextEntry={passwordVisibility}
                                    enablesReturnKeyAutomatically
                                    onChangeText={(text) => setState({ ...state, textInputPassword: text })}
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
                        <Spacing space={SH(20)} />
                        <View style={Logins.FlexRowChekBox}>
                            <View style={Logins.CheckBoxView}>
                                <CheckBox
                                    checked={checked}
                                    onPress={toggleCheckbox}
                                    iconType="material-community"
                                    checkedIcon="checkbox-marked"
                                    uncheckedIcon="checkbox-blank-outline"
                                    checkedColor={Colors.theme_background}
                                />
                            </View>
                            <Text style={Logins.SimpleTextStyle}>{t("I_Agree_Text")} <Text style={Logins.borderbottomTwo}><Text style={Logins.bluecolor} onPress={() => Linking.openURL('https://myaccount.google.com/')}> {t("Terms_Of_Service")}  </Text></Text>{t("And_text")}  <Text onPress={() => Linking.openURL('https://myaccount.google.com/')} style={Logins.bluecolor}>{t("Privacy_Policy")}</Text></Text>
                        </View>
                        <Spacing space={SH(20)} />
                        <View style={Logins.ButtonView}>
                            <Button
                                title={t("Sign_Up_Text")}
                                 onPress={handleSignup}
                            />
                        </View>
                        <Spacing space={SH(20)} />
                        <View style={Logins.TopSpace}>
                            <View style={Logins.AlredyAndLoginBox}>
                                <Text style={Logins.MemberTextStyle}>{t("Already_Member")}</Text>
                                <TouchableOpacity onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)}>
                                    <Text style={Logins.LoginScreenText}>{t("Login_Text")}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
export default Register;
