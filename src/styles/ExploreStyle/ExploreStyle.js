
import { StyleSheet, Dimensions } from 'react-native';
import { SF, SH, SW, Fonts, Colors, widthPercent } from '../../utils';
import { width } from 'react-native-bottom-tab/src/AnimatedTabBar/utils';

export default ExploreStyle = (Colors) => StyleSheet.create({
// export default StyleSheet.create({
    MainView: {
        // height: '100%',
        width: '100%'
    },
    WhatIcanCookWrap: {
        // marginRight: SH(15),
        backgroundColor: Colors.bgwhite,
        shadowColor: '#b5b2b2',
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 22 : 50,
            minHeight: '100%',
        },
        shadowOpacity: 1,
        shadowRadius: Platform.OS === 'ios' ? 2 : 50,
        elevation: Platform.OS === 'ios' ? 1 : 6,
        overflow: 'hidden',
        borderRadius: SH(12),
        marginBottom: SH(10),
        width: '45%',
        marginHorizontal: '2.5%'
    },
    dishbannerIMGWrap: {
        width: '100%',
        height: SH(130),
        position: 'relative',
        borderRadius: SW(10)
    },
    dishbannerIMG: {
        width: '100%',
        height: '100%',
        borderRadius: SW(10)
    },
    ExplorFlatContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    FlexRowOnly: {
        flexDirection: 'row'
    },
    LocationStyle: {
        fontFamily: Fonts.OpenSans_Regular,
        fontSize: SF(13),
        color: Colors.black_text_color,
        flex: 1
    },
    ExplorePlaceNameBox: {
        borderWidth: SW(0.5),
        borderColor: Colors.black_text_color,
        borderRadius: SW(7),
        paddingHorizontal: SH(10),
        paddingVertical: SH(5),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: SH(10)
    },
    ExplorePlaceNameBoxLike: {
        borderWidth: SW(0.5),
        borderColor: Colors.theme_background,
        borderRadius: SW(7),
        paddingHorizontal: SH(10),
        paddingVertical: SH(5),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: SH(10),
        backgroundColor: Colors.theme_background
    },
    ExplorePlaceNameStle: {
        fontFamily: Fonts.OpenSans_Medium,
        fontSize: SF(18),
        color: Colors.black_text_color
    },
    ExplorePlaceNameStleSelect: {
        fontFamily: Fonts.OpenSans_Medium,
        fontSize: SF(18),
        color: Colors.white_text_color
    },
    ExplorePlaceFlatContainer: {
        paddingLeft: SH(10)
    }


});
