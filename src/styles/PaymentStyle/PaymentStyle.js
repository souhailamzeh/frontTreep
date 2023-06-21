import { SF, SW, wp, hp, SH, Fonts, Colors, } from '../../utils';
import { StyleSheet, Dimensions } from 'react-native';
const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = 0;
const HEADER_HEIGHT = 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

// export default StyleSheet.create({
export default PaymentStyle = (Colors) => StyleSheet.create({
  bgColorset: {
    backgroundColor: Colors.BGScreen
  },
  // minviewsigninscreen: {
  //   width: '90%',
  //   height: '100%',
  //   marginHorizontal: '5%',
  //   paddingBottom: 30,
  // },

  cardtextstyle: {
    fontSize: SF(20),
    fontFamily: Fonts.NunitoSans_SemiBold,
    fontWeight: '600',
    // paddingTop: SH(30),
    paddingBottom: SH(15),
    color: Colors.Colordata
  },
  cardtextstyletwo: {
    fontSize: SF(20),
    fontFamily: Fonts.NunitoSans_SemiBold,
    fontWeight: '600',
    paddingTop: SH(30),
    paddingBottom: SH(15),
  },
  cardtextstylethree: {
    fontSize: SF(20),
    fontFamily: Fonts.NunitoSans_SemiBold,
    fontWeight: '600',
    paddingTop: SH(30),
    borderTopColor: Colors.gray_text_color,
    borderTopWidth: SW(.3),
    paddingBottom: SH(15),
    marginTop: SH(30),

  },
  flexrowcreditcard: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  flexrowcreditcardtwo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SH(30),
  },
  bottomborder: {
    borderBottomColor: Colors.gray_text_color,
    borderBottomWidth: SW(0.5),
    paddingBottom: SH(20)
  },
  creditcardtext: {
    fontSize: SF(15),
    fontFamily: Fonts.NunitoSans_SemiBold,
    fontWeight: '600',
    marginLeft: SH(20),
    color: Colors.black_text_color
  },
  youneedstext: {
    fontSize: SF(13),
    fontFamily: Fonts.NunitoSans_SemiBold,
    fontWeight: '600',
    marginLeft: SH(20),
    paddingTop: SH(5),
    lineHeight: SH(19),
    color: Colors.black_text_color
  },
  paregraphtextPaymentStyleset: {
    color: Colors.black_text_color
  },
  setflexrowarrowleft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: SH(30),
  },
  setflexrowarrowlefttwo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: SH(15),
    borderBottomWidth: SW(0.3),
    borderBottomColor: Colors.gray_text_color,
    paddingBottom: SH(25),
  },
  setflexrowarrowleftthree: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: SH(30),
  },
  iconsetborderwidth: {
    borderWidth: SW(1),
    borderColor: Colors.gray_text_color,
    paddingLeft: SH(7),
    paddingRight: SH(7),
    borderRadius: SW(5),
  },
  setbgimage: {
    width: SW(35),
    height: SH(35),
  },
  settextwidth: {
    width: '75%'
  },
  sodexoimgwidth: {
    width: SH(30),
    height: SH(30),
  },
  paregraphtextstyleset: {
    fontSize: SF(15),
    fontFamily: Fonts.NunitoSans_SemiBold,
    fontWeight: '600',
    paddingTop: SH(5),
    lineHeight: SH(22),
    color: Colors.TextGreyColor,
    borderTopWidth: SW(1),
    borderTopColor: Colors.gray_text_color,
    paddingTop: SH(20),
  },
  setparegraphviewstyle: {
    marginLeft: SH(70),
    paddingTop: SH(20),
    paddingBottom: SH(20),
  },
  PersonBox: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  RchOpratorBoxImg: {
    width: '100%',
    maxWidth: SW(80),
    justifyContent: 'center',
    alignItems: 'center',
  },
  RchHeadTextStyle: {
    fontFamily: Fonts.NunitoSans_SemiBold,
    color: Colors.black_text_color,
    fontSize: SF(20),
  },
  RchSubheadTextStyle: {
    fontFamily: Fonts.NunitoSans_Regular,
    color: Colors.black_text_color,
    fontSize: SF(17),
    lineHeight: SH(16),
    paddingTop: SH(5)
  },
  BAnkAcountText: {
    fontFamily: Fonts.NunitoSans_Regular,
    color: Colors.black_text_color,
    fontSize: SF(20),
    lineHeight: SH(16),
    paddingTop: SH(8)
  },
  RchOpratorInDataTextWidthSet: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  BackArrowBoxWidthSet: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: SH(10),
    zIndex: 1,
    top: SH(20)
  },
  TouchableSet: {
    position: 'relative',
    zIndex: 1
  },
  RchOpratorBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: SH(15),
    paddingLeft: SH(10)
  },
  BankIcon: {
    width: SW(16),
    height: SH(16),
    marginRight: SH(5),
    marginTop: SH(3)
  },
  BankAcBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SH(5)
  },
  OpratorPriceTextTwo: {
    fontFamily: Fonts.Metropolis_SemiBold,
    fontSize: SF(50),
    color: Colors.black_text_color,
  },
  Paymentinput: {
    fontFamily: Fonts.Metropolis_SemiBold,
    color: Colors.black_text_color,
    fontSize: SF(40),
    paddingRight: SH(5),
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: SH(40)
  },
  Mrtop: {
    marginTop: '10%'
  },
  PaymentTextinput: {
    fontFamily: Fonts.NunitoSans_SemiBold,
    color: Colors.black_text_color,
    fontSize: SF(18),
    paddingHorizontal: SH(10),
    minWidth: SW(150)
  },
  PaymentTextinputBox: {
    backgroundColor: '#e8edf1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SW(5),
    marginHorizontal: SH(15)
  },
  RchHeadProceedBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: SH(20)
  },
  RchHeadProceedBtnMain: {
    marginTop: SH(90),
    borderWidth: SW(0.5),
    borderColor: Colors.BorderBox,
    borderRadius: SW(10),
    paddingBottom: SH(15),
    paddingTop: SH(15),
    marginHorizontal: SH(10)
  },
  RchHeadProceedBtnChild: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  OpratorImg: {
    width: SW(40),
    height: SH(40),
    overflow: 'hidden'
  },
  PaymentFromBox: {
    borderWidth: SW(0.5),
    borderColor: Colors.BorderBox,
    borderRadius: SW(200),
    width: SW(50),
    height: SH(50),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SH(20)
  },
  PaymentShowMainBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SH(20),
    position: 'relative'
  },
  PaymentPayText: {
    fontFamily: Fonts.NunitoSans_Regular,
    color: Colors.LightBlackText,
    fontSize: SF(14)
  },
  PaymentPayABnkText: {
    fontFamily: Fonts.NunitoSans_SemiBold,
    color: Colors.black_text_color,
    fontSize: SF(16),
    paddingVertical: SH(5)
  },
  PaymentPayBalanceext: {
    fontFamily: Fonts.NunitoSans_Regular,
    color: Colors.LightBlackText,
    fontSize: SF(14),
    paddingBottom: SH(10)
  },
  PaymenntDownArroBox: {
    position: 'absolute',
    right: SH(20),
    top: SH(20),
    color: Colors.BGScreenBox
  },
  PayUsingtext: {
    fontFamily: Fonts.NunitoSans_SemiBold,
    fontSize: SF(22),
    color: Colors.black_text_color,
    paddingTop: SH(10),
    paddingBottom: SH(15)
  },
  PayBottomShetBox: {
    paddingHorizontal: SH(20)
  },
  PayUsingRadiobtnbox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: SH(5)
  },
  PaymentRadioSet: {
    marginLeft: SH(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%'
  },

  minstyleviewphotograpgy: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },

  minflexview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

  minviewsigninscreen: {
    width: '90%',
    marginHorizontal: '5%',
    marginTop: '5%',
  },
  relative: {
    position: 'relative',
    height: '100%'
  },
  ContentContainerStyle: {
    width: '100%',
    height: 'auto',
  },
});
