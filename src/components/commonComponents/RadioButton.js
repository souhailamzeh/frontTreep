import React from 'react';
import { CheckBox } from 'react-native-elements';

const RadioButton = (props) => {
    const { checked, onPress, checkedIcon, uncheckedIcon, checkedColor } = props;
    return (
        <CheckBox
            checked={checked}
            onPress={onPress}
            checkedIcon={checkedIcon}
            uncheckedIcon={uncheckedIcon}
            checkedColor={checkedColor}
        />
    )
}

export default RadioButton
