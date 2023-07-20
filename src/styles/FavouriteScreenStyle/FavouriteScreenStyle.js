
import { StyleSheet, Dimensions } from 'react-native';
import { SF, SH, SW, Fonts, Colors, widthPercent } from '../../utils';

export default FavouriteScreenStyle = (Colors) => StyleSheet.create({
    // export default StyleSheet.create({
    MainView: {
        // height: '100%',
        width: '100%'
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
        padding: SH(5),
        position: 'relative'
    },
    RecomandationnIMGWrap: {
        width: SW(100),
        height: SH(100),
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
    RecomandationWith: {
        width: widthPercent(60)
    },
    PlaceNameStyle: {
        fontFamily: Fonts.brandon_Medium,
        fontSize: SF(18),
        color: Colors.black_text_color,
    },
    FlexRowAc: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    LocationStyle: {
        fontFamily: Fonts.OpenSans_Regular,
        fontSize: SF(13),
        color: Colors.black_text_color,
        flexWrap: 'wrap'
    },
    FlextRowJusSpBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
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
    PriceStyle: {
        color: Colors.white_text_color,
        fontFamily: Fonts.OpenSans_Medium,
        fontSize: SF(16)
    },
    PriceBox: {
        backgroundColor: Colors.theme_background,
        paddingHorizontal: SH(10),
        paddingVertical: SH(5),
        borderRadius: SW(7),
        position: 'absolute',
        right: SW(10),
        top: SH(10)
    },
    
    RecomandationFlatContainer: {
        paddingHorizontal: SH(20)
    },

});
