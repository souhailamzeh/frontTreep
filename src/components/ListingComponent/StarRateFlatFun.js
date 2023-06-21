import React, { useMemo } from 'react';
import { Text, TouchableOpacity, } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { FilterScreenStyle } from '../../styles';
import { Colors, SF } from '../../utils';
import { VectoreIcons } from '../../components';

const StarRateFlatFun = (props) => {

  const { item, index, onPress, starRate, setStarRate } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const FilterScreenStyles = useMemo(() => FilterScreenStyle(Colors), [Colors]);

  return (
    <TouchableOpacity onPress={() => { setStarRate(index); onPress(); }} style={starRate == index ? FilterScreenStyles.RateSeleceBoxLike : FilterScreenStyles.RateSeleceBox}>
      <VectoreIcons icon="FontAwesome" name='star' size={SF(18)} color={starRate === index ? Colors.white_text_color : Colors.startrate} /><Text style={starRate === index ? FilterScreenStyles.RateSeleceTextLike : FilterScreenStyles.RateSeleceText}>{t(item.startNumber)}</Text>
    </TouchableOpacity>
  )
}

export default StarRateFlatFun