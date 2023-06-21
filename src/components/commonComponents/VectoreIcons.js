import React from "react";
import IconF from 'react-native-vector-icons/Feather';
import IconA from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconL from 'react-native-vector-icons/MaterialIcons';
import IconN from 'react-native-vector-icons/Ionicons';
import IconT from 'react-native-vector-icons/FontAwesome';
import IconE from 'react-native-vector-icons/EvilIcons';
import IconG from 'react-native-vector-icons/Entypo';
import IconV from 'react-native-vector-icons/FontAwesome5';
import IconP from "react-native-vector-icons/Foundation";
import IconFO from "react-native-vector-icons/Fontisto";


const TabBarIcon = (props) => {
    const { icon = "", name, color, size, iconStyle } = props
    return (
        icon == "Feather" ?
            <IconF name={name} color={color} size={size} style={iconStyle} />
            :
            icon == "AntDesign" ?
                <IconA name={name} color={color} size={size} style={iconStyle}/>
                :
                icon == "MaterialCommunityIcons" ?
                    <IconM name={name} color={color} size={size} style={iconStyle}/>
                    :
                    icon == "FontAwesome" ?
                        <IconT name={name} color={color} size={size} style={iconStyle}/>
                        :
                        icon == "EvilIcons" ?
                            <IconE name={name} color={color} size={size} style={iconStyle}/>
                            :
                            icon == "Entypo" ?
                                <IconG name={name} color={color} size={size} style={iconStyle}/>
                                :
                                icon == "FontAwesome5" ?
                                    <IconV name={name} color={color} size={size} style={iconStyle}/>
                                    :
                                    icon == "Ionicons" ?
                                        <IconN name={name} color={color} size={size} style={iconStyle}/>
                                        :
                                        icon == "Foundation" ?
                                            <IconP name={name} color={color} size={size} style={iconStyle}/>
                                            :
                                            icon == "MaterialIcons" ?
                                                <IconL name={name} color={color} size={size} style={iconStyle}/>
                                                :
                                                icon == "Fontisto" ?
                                                    <IconFO name={name} color={color} size={size} style={iconStyle}/>
                                                    :
                                                    icon == "emplacement" ?
                                                    <IconFO name={name} color={color} size={size} style={iconStyle}/>
                                                    :
                                                    null
    )
}
export default TabBarIcon;