import React, { useState } from "react";
import { Rating } from 'react-native-ratings';
import { Colors } from "../../utils";
import { Style } from "../../styles";


const RatingScreen = (props) => {
  return (
    <Rating
      type='custom'
      ratingColor={Colors.amber_color}
      ratingBackgroundColor={Colors.chinese_silver}
      ratingCount={5}
      tintColor={Colors.white_text_color}
      imageSize={35}
      startingValue={4.5}
      isDisabled={false}
      style={Style.RatingStyale}
    />
  );
};
export default RatingScreen;