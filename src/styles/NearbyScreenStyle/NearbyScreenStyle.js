
import { StyleSheet, Dimensions } from 'react-native';
import { SF, SH, SW, Fonts, Colors, widthPercent } from '../../utils';
import { width } from 'react-native-bottom-tab/src/AnimatedTabBar/utils';

export default NearbyScreenStyle = (Colors) => StyleSheet.create({
// export default StyleSheet.create({
    MainView: {
        // height: '100%',
        width: '100%'
    },
    NearbyBox: {
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
        padding: SH(5),
        overflow: 'hidden'
    },
    NearbyBox: {
        width: '100%',
        height: SH(180),
        position: 'relative',
        borderRadius: SW(10),
        marginBottom: SH(15),
        overflow: 'hidden'
    },
    dishbannerIMG: {
        width: '100%',
        height: '100%',
        borderRadius: SW(10)
    },
    PopularNearbyDataBox: {
        padding: SH(10),
    },
    LinearGradientBottom: {
        position: 'absolute',
        bottom: SH(0),
        height: SH(100)
    },
    NearbyInfoBox: {
        position: 'absolute',
        bottom: SH(0),
        zIndex: 1,
        width: '100%',
        paddingHorizontal: SH(15)
    },
    FlextRowJusSpBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    FlexRowAc: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    StarRateNumberStyle: {
        fontFamily: Fonts.OpenSans_Regular,
        fontSize: SF(14),
        color: Colors.startrate,
    },
    ReviewNumberStyle: {
        fontFamily: Fonts.OpenSans_Regular,
        fontSize: SF(14),
        color: Colors.white_text_color,
    },
    FlexRowAc: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    PriceStyle: {
        color: Colors.white_text_color,
        fontFamily: Fonts.OpenSans_Medium,
        fontSize: SF(16)
    },
    DisPriceBoxStyle: {
        paddingLeft: SH(10)
    },
    DisPriceStyle: {
        color: Colors.red,
        fontFamily: Fonts.OpenSans_Medium,
        fontSize: SF(13),
        textDecorationLine: 'line-through'
    },
    PlaceNameStyle: {
        fontFamily: Fonts.brandon_Medium,
        fontSize: SF(18),
        color: Colors.white_text_color,
    },
    RecomandationFlatContainer: {
        paddingHorizontal: SH(20)
    },
    NearbyHeadBox: {
        paddingHorizontal: SH(20)
    },
    NearbyHeadTitleStyle: {
        fontFamily: Fonts.OpenSans_Bold,
        color: Colors.black_text_color,
        fontSize: SF(18)
    },
    NearbyHeadTitleSubStyle: {
        fontFamily: Fonts.OpenSans_Medium,
        color: Colors.gray_text_color,
        fontSize: SF(16)
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
    PriceBox: {
        backgroundColor: Colors.theme_background,
        paddingHorizontal: SH(10),
        paddingVertical: SH(5),
        borderRadius: SW(5)
    },
    SortbyStyle: {
        fontFamily: Fonts.OpenSans_Medium,
        color: Colors.gray_text_color,
        fontSize: SF(16),
        paddingRight: SH(10)
    }
});
