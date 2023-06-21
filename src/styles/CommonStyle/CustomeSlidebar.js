import { StyleSheet } from 'react-native';
import {Colors, Fonts,SH,SW,SF} from '../../utils';

export default StyleSheet.create({
  customslidebarmenu: {
    paddingHorizontal:SH(20),
    paddingTop:SH(10),  
  },
  hometextstyle: {
    color:Colors.black_text_color,
    fontSize:SF(18),
    fontFamily: Fonts.Poppins_Medium,
    paddingLeft:SH(20),
    opacity:0.7,
  },
  flexrowset: {
    flexDirection:'row',
    alignItems:'center',
    borderBottomColor:'lightgray',
    borderBottomWidth:1.5,
    paddingVertical:SH(15),
    borderStyle:'dotted',
  },
  settingandlogout: {
    paddingTop:SH(40),
  },
  logoimage: {
    width:SW(20),
    height:SH(20),
  },
});