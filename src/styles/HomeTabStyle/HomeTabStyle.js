
import { StyleSheet, Dimensions } from 'react-native';
import { SF, SH, SW, Fonts, Colors, widthPercent } from '../../utils';
import { width } from 'react-native-bottom-tab/src/AnimatedTabBar/utils';

export default HomeTabStyle = (Colors) => StyleSheet.create({
// export default StyleSheet.create({
    MainView: {
        // height: '100%',
        width: '100%'
    },
    SearchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: SH(20)
    },

    SearchView: {
        width: '75%',
        backgroundColor: Colors.bgwhite,
        shadowColor: '#b5b2b2',
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 25,
        },
        shadowOpacity: 1,
        shadowRadius: Platform.OS === 'ios' ? 2 : 25,
        elevation: Platform.OS === 'ios' ? 1 : 2,
        borderRadius: SW(7),
    },
    FilterChildBox: {
        width: SW(50),
        height: SH(50),
        backgroundColor: Colors.theme_background,
        shadowColor: '#b5b2b2',
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 25,
        },
        shadowOpacity: 0.58,
        shadowRadius: Platform.OS === 'ios' ? 2 : 25,
        elevation: Platform.OS === 'ios' ? 1 : 2,
        borderRadius: SW(7),
        justifyContent: 'center',
        alignItems: 'center'
    },
    SearchInputBorder: {
        borderWidth: 0,
    },
    WidthSet: {
        width: '100%',
        height: SH(50),
    },
    CatagoryBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // width: SW(100),
        paddingHorizontal: SW(20),
        paddingVertical: SH(10),
        backgroundColor: Colors.bgwhite,
        shadowColor: Colors.theme_background,
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 25,
        },
        shadowOpacity: 0.58,
        shadowRadius: Platform.OS === 'ios' ? 2 : 25,
        elevation: Platform.OS === 'ios' ? 1 : 2,
        borderRadius: SW(7),
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: SH(10)
    },
    IconStyle: {
        width: SW(30),
        height: SH(30)
    },
    CategoryFlatContainer: {
        padding: SH(10)
    },
    TitleLabel: {
        fontFamily: Fonts.OpenSans_Medium,
        fontSize: SF(18),
        color: Colors.black_text_color,
    },
    CategoryNameStyle: {
        fontFamily: Fonts.brandon_Regular,
        fontSize: SF(18),
        color: Colors.black_text_color,
        paddingLeft: SH(10)
    },
    FlextRowJusSpBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    SeeAllText: {
        fontFamily: Fonts.brandon_Regular,
        fontSize: SF(16),
        color: Colors.theme_background,
    },
    Padd20: {
        paddingHorizontal: SH(20)
    },
    WhatIcanCookWrap: {
        marginRight: SH(15),
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
        width: SW(180),
    },
    dishbannerIMGWrap: {
        width: SW(180),
        height: SH(130),
        position: 'relative',
        borderRadius: SW(10)
    },
    dishbannerIMG: {
        width: '100%',
        height: '100%',
        borderRadius: SW(10)
    },
    PopularNearbyDataBox: {
        padding: SH(10),
    },
    dishnametag1: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(14),
        color: Colors.black_text_color,
        textAlign: 'left'
    },
    FlexRowAc: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    PriceStyle: {
        color: Colors.theme_background,
        fontFamily: Fonts.OpenSans_Medium,
        fontSize: SF(16)
    },
    DisPriceStyle: {
        color: Colors.red,
        fontFamily: Fonts.OpenSans_Medium,
        fontSize: SF(13),
        textDecorationLine: 'line-through'
    },
    DisPriceBoxStyle: {
        paddingLeft: SH(10)
    },
    StarRateNumberStyle: {
        fontFamily: Fonts.OpenSans_Regular,
        fontSize: SF(14),
        color: Colors.startrate,
    },
    ReviewNumberStyle: {
        fontFamily: Fonts.OpenSans_Regular,
        fontSize: SF(14),
        color: Colors.gray_text_color,
    },
    PlaceNameStyle: {
        fontFamily: Fonts.brandon_Medium,
        fontSize: SF(18),
        color: Colors.black_text_color,
    },
    LocationStyle: {
        fontFamily: Fonts.OpenSans_Regular,
        fontSize: SF(13),
        color: Colors.black_text_color,
        flexWrap: 'wrap'
    },
    PopularNearbyFlatContainer: {
        paddingLeft: SH(20),
        paddingRight: SH(5)
    },
    HeartIconLike: {
        position: 'absolute',
        right: SH(10),
        top: SH(10),
        width: SW(35),
        height: SW(35),
        borderRadius: SW(35),
        backgroundColor: Colors.rgbalight,
        justifyContent: 'center',
        alignItems: 'center'
    },
    OfferBox: {
        backgroundColor: Colors.tagcolor,
        paddingHorizontal: SH(10),
        paddingVertical: SH(5),
        position: 'absolute',
        left: SW(0),
        top: SH(0),
        borderBottomRightRadius: SW(7)
    },
    DisTagStyle: {
        fontFamily: Fonts.brandon_Regular,
        fontSize: SF(13),
        color: Colors.white_text_color,
    },
    RecomandationBox: {
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
        width: '100%',
        flexDirection: 'row',
        padding: SH(5)
    },
    RecomandationnIMGWrap: {
        width: SW(100),
        height: SH(100),
        position: 'relative',
        borderRadius: SW(10)
    },
    RecomandationFlatContainer: {
        paddingHorizontal: SH(20)
    },
    RecomandationWith: {
        width: widthPercent(60)
    },


});
