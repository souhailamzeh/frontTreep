import React from 'react';
import Slider from '@react-native-community/slider';

const SliderFilter = (props) => {
    const { style, minimumValue, maximumValue, minimumTrackTintColor, maximumTrackTintColor, thumbTintColor, step, value, onValueChange } = props
    return (
        <Slider
            style={style}
            minimumValue={minimumValue}
            maximumValue={maximumValue}
            minimumTrackTintColor={minimumTrackTintColor}
            maximumTrackTintColor={maximumTrackTintColor}
            thumbTintColor={thumbTintColor}
            step={step}
            value={value}
            onValueChange={onValueChange}
        />
    )
}

export default SliderFilter