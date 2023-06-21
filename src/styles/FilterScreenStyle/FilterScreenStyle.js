
import { StyleSheet, Dimensions } from 'react-native';
import { SF, SH, SW, Fonts, Colors, widthPercent } from '../../utils';
import { width } from 'react-native-bottom-tab/src/AnimatedTabBar/utils';

export default FilterScreenStyle = (Colors) => StyleSheet.create({
// export default StyleSheet.create({
    MainView: {
        // height: '100%',
        width: '100%'
    },
    BtnStyle: {
        width: '80%'
    },
    ClearBtnStyle: {
        backgroundColor: Colors.bgwhite,
        width: '70%'
    },
    ClearBtnText: {
        color: Colors.red
    },
    BtnWarp: {
        paddingVertical: SH(10),
        paddingHorizontal: SH(20),
        backgroundColor: Colors.background,
        shadowColor: '#b5b2b2',
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
    FlextRowJusSpBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    MinLengthSlider: {
        height: SH(40),
    },
    MinivalueStyle: {
        fontFamily: Fonts.OpenSans_Medium,
        fontSize: SF(17),
        color: Colors.black_text_color
    },
    MainboxSlider: {
        paddingHorizontal: SH(20)
    },
    MinValueBox: {
        borderWidth: SW(1),
        borderColor: Colors.gray_text_color,
        width: SW(70),
        paddingVertical: SH(5),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SW(7)
    },
    FlexRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ValueStyle: {
        fontFamily: Fonts.OpenSans_Medium,
        fontSize: SF(19),
        color: Colors.black_text_color,
        marginLeft: SH(5)
    },
    FilterHeadingStyle: {
        fontFamily: Fonts.OpenSans_Medium,
        fontSize: SF(19),
        color: Colors.black_text_color,
    },
    FiletrTabBox: {
        paddingHorizontal: SH(20)
    },
    FilterPlaceFlatFunStyleLike: {
        borderWidth: SW(0.5),
        borderColor: Colors.theme_background,
        paddingVertical: SH(10),
        paddingHorizontal: SW(15),
        backgroundColor: Colors.theme_background,
        borderRadius: SW(7),
        marginBottom: SH(15),
        width: '45%',
        marginHorizontal: '2.5%'
    },
    FilterPlaceFlatFunStyle: {
        borderWidth: SW(0.5),
        borderColor: Colors.gray_text_color,
        paddingVertical: SH(10),
        paddingHorizontal: SW(15),
        borderRadius: SW(7),
        marginBottom: SH(15),
        width: '45%',
        marginHorizontal: '2.5%'
    },
    FilterTextStyeLike: {
        fontFamily: Fonts.OpenSans_Regular,
        fontSize: SF(16),
        color: Colors.white_text_color,
    },
    FilterTextStye: {
        fontFamily: Fonts.OpenSans_Regular,
        fontSize: SF(16),
        color: Colors.black_text_color,
    },
    RateSeleceBoxLike: {
        borderWidth: SW(0.5),
        borderColor: Colors.theme_background,
        paddingVertical: SH(10),
        paddingHorizontal: SW(15),
        backgroundColor: Colors.theme_background,
        borderRadius: SW(7),
        marginBottom: SH(15),
        width: '18%',
        marginHorizontal: '1%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    RateSeleceBox: {
        borderWidth: SW(0.5),
        borderColor: Colors.theme_background,
        paddingVertical: SH(10),
        paddingHorizontal: SW(15),
        backgroundColor: Colors.bgwhite,
        borderRadius: SW(7),
        marginBottom: SH(15),
        width: '18%',
        marginHorizontal: '1%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    RateSeleceTextLike: {
        fontFamily: Fonts.OpenSans_Regular,
        fontSize: SF(16),
        color: Colors.white_text_color,
        marginLeft: SH(4)
    },
    RateSeleceText: {
        fontFamily: Fonts.OpenSans_Regular,
        fontSize: SF(16),
        color: Colors.theme_background,
        marginLeft: SH(4)

    },




});
