import React from "react";
import OTPInputView from '@twotalltotems/react-native-otp-input';

function OTPInput(props) {
    const { style, pinCount, autoFocusOnLoad, codeInputFieldStyle,codeInputHighlightStyle ,onCodeFilled } = props;
    return (
        <OTPInputView
            style={style}
            pinCount={pinCount}
            autoFocusOnLoad={autoFocusOnLoad}
            codeInputFieldStyle={codeInputFieldStyle}
            codeInputHighlightStyle={codeInputHighlightStyle}
            onCodeFilled={onCodeFilled} // Pass the onCodeFilled callback to OTPInputView

            
        />
    );
};
export default OTPInput;