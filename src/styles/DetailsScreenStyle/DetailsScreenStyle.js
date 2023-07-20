
import { StyleSheet, Dimensions } from 'react-native';
import { SF, SH, SW, Fonts, Colors, widthPercent } from '../../utils';
import { width } from 'react-native-bottom-tab/src/AnimatedTabBar/utils';

export default DetailsScreenStyle = (Colors) => StyleSheet.create({
    // export default StyleSheet.create({
    MainView: {
        // height: '100%',
        width: '100%'
    },
    BannerImageStyle: {
        width: '100%',
        height: SH(300),
        // borderRadius: SW(30),
        borderBottomLeftRadius: SW(30),
        borderBottomEndRadius: SW(30),
        overflow: 'hidden',
        position: 'relative',
        shadowColor: '#b5b2b2',
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 5,
            minHeight: '100%',
        },
        shadowOpacity: 1,
        shadowRadius: Platform.OS === 'ios' ? 2 : 50,
        elevation: Platform.OS === 'ios' ? 1 : 6,
    },
    BackArrowBox: {
        position: 'absolute',
        left: SW(20),
        top: SH(40),
        width: SW(35),
        height: SH(35),
        backgroundColor: Colors.rgba_extralight,
        borderRadius: SW(7),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: SW(0.5),
        borderColor: Colors.white_text_color
    },
    FlexRowAcSpBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    DetailsOfPlaceBox: {
        position: 'absolute',
        bottom: SH(25),
        width: '100%',
        paddingHorizontal: SH(20),
        zIndex: 1
    },
    PalceNameStyle: {
        fontFamily: Fonts.OpenSans_Bold,
        fontSize: SF(20),
        color: Colors.white_text_color
    },
    PalceNameLocaStyle: {
        fontFamily: Fonts.OpenSans_Regular,
        fontSize: SF(16),
        color: Colors.white_text_color
    },
    LinearGradientBottom: {
        position: 'absolute',
        width: '100%',
        bottom: SH(0),
        height: SH(160)
    },
    RateStyle: {
        fontFamily: Fonts.OpenSans_Regular,
        fontSize: SF(16),
        color: Colors.white_text_color
    },
    RateBoxStyle: {
        backgroundColor: Colors.rgba_extralight,
        paddingVertical: SH(5),
        paddingHorizontal: SH(10),
        borderRadius: SW(10),
        borderWidth: SW(0.5),
        borderColor: Colors.white_text_color
    },
    SummeryText: {
        fontFamily: Fonts.brandon_Regular,
        fontSize: SF(18),
        color: Colors.gray_text_color
    },
    SummeryBox: {
        paddingHorizontal: SH(20)
    },
    FlextRowJusSpBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    Padd20: {
        paddingHorizontal: SH(20)
    },
    TitleLabel: {
        fontFamily: Fonts.OpenSans_Medium,
        fontSize: SF(18),
        color: Colors.black_text_color,
    },
    SeeAllText: {
        fontFamily: Fonts.brandon_Regular,
        fontSize: SF(16),
        color: Colors.theme_background,
    },
    TripBox: {
        width: SW(230),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SW(15),
        marginRight: SH(10)
    },
    ImageBoxStyle: {
        width: SW(230),
        height: SH(160),
        borderRadius: SW(15),
    },
    DetailsFlatContainer: {
        paddingLeft: SH(20),
        paddingRight: SH(10)
    },
    DetailsTripFlatContainer:{
        paddingLeft: SH(20),
        paddingRight: SH(20)
    },
    BottomBox: {
        position: 'relative',
        bottom: SH(20),
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: SW(20),
        backgroundColor: Colors.theme_background,
        paddingHorizontal: SH(10),
        paddingVertical: SH(5),
        zIndex: 1
    },
    BtnText: {
        fontFamily: Fonts.brandon_Regular,
        fontSize: SF(17),
        color: Colors.white_text_color,
        paddingRight: SH(10)
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    PriceStyle: {
        color: Colors.theme_background,
        fontFamily: Fonts.OpenSans_Bold,
        fontSize: SF(22)
    },
    PerPersionStyle: {
        color: Colors.black_text_color,
        fontFamily: Fonts.OpenSans_Regular,
        fontSize: SF(17)
    },
    BtnStyle: {
        width: '100%'
    },
    BtnWarp: {
        paddingVertical: SH(10),
        paddingHorizontal: SH(20),
        backgroundColor: Colors.background,
        shadowColor: '#333',
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 5,
            minHeight: '100%',
        },
        shadowOpacity: 1,
        shadowRadius: Platform.OS === 'ios' ? 2 : 50,
        elevation: Platform.OS === 'ios' ? 1 : 6,
        overflow: 'hidden',
    },
    LabelStyle: {
        color: Colors.black_text_color,
        fontFamily: Fonts.OpenSans_Regular,
        fontSize: SF(17)
    },
    PackageData: {
        color: Colors.gray_text_color,
        fontFamily: Fonts.OpenSans_Regular,
        fontSize: SF(16)
    },
    PackageBoxStyle: {
        backgroundColor: Colors.bgwhite,
        borderRadius: SW(7),
        borderBottomWidth: SW(0.5),
        borderBottomColor: Colors.gray_text_color,
        shadowColor: '#b5b2b2',
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 5,
            minHeight: '100%',
        },
        shadowOpacity: 1,
        shadowRadius: Platform.OS === 'ios' ? 2 : 50,
        elevation: Platform.OS === 'ios' ? 1 : 6,
    },
    BtnIncrDecr: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: SH(5),
        paddingHorizontal: SH(10)
    },
    BottomBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        padding: 10,
      },



});
