import React, { useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import images from '../../index';
import { Style } from '../../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { color_picker_set_action } from "../../redux/action/CommonAction";
import { RouteName } from '../../routes';
import { Lottie } from '../../components';
import { Colors } from '../../utils';
import { useSelector } from "react-redux";

const SplashScreen = ({ navigation }) => {
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            AsyncStorage.getItem('user_id').then((value) =>
                navigation.replace(RouteName.HOME_SCREEN)
            );
        }, 10);
        {
            colorrdata != '' ?
                dispatch(color_picker_set_action(colorrdata))
                :
                dispatch(color_picker_set_action(Colors.theme_background))
        }
    }, []);
    return (
        <View style={Style.SplashMinView}>
            <StatusBar backgroundColor={Colors.background} barStyle={'dark-content'} />
            <View style={Style.MinViewStyleSplash}>
                <Lottie source={images.Splash_Swiper} />
            </View>
        </View>
    );
};
export default SplashScreen;
