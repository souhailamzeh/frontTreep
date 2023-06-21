import React, { useState, useMemo } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { HelpScreenStyles } from '../../styles';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import {VectoreIcons} from '../../components';

const FAQData = (props) => {
    const { t } = useTranslation();
    const { item } = props;
    const [show, setShow] = useState(null);
    const toggleHandler = (id) => {
        (id === show) ? setShow(null) : setShow(id)
    };
    const { Colors } = useTheme();
    const HelpScreenStyle = useMemo(() => HelpScreenStyles(Colors), [Colors]);
    return (
        <TouchableOpacity style={HelpScreenStyle.BgColorWhite} onPress={() => toggleHandler(item.id)}>
            <View>
                <View style={HelpScreenStyle.FlexRowArrowLeftThree}>
                    <View style={HelpScreenStyle.FlexRowCreditCard}>
                        <View style={HelpScreenStyle.TextWidth}>
                            <Text style={HelpScreenStyle.CreditCardText}>{t(item.smalltext)}</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => toggleHandler(item.id)}>
                            {show === item.id ? <VectoreIcons icon="AntDesign" name='up' size={21} /> : <VectoreIcons icon="AntDesign" name='down' size={21} />}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {show === item.id ? <View>
                <View style={HelpScreenStyle.ParegraPhViewStyle}>
                    <Text style={HelpScreenStyle.ParegraphTextHelp}>{t(item.paymentparegraph)}</Text>
                </View>
            </View> : null}
        </TouchableOpacity>
    );
}
export default FAQData;