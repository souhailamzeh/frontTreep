import React, { useMemo } from "react";
import { StyleSheet, } from 'react-native';
import { SW, Colors } from '../../utils';
import LinearGradient from 'react-native-linear-gradient';

const LinearGradientComp = (props) => {

    const { LinearGradientStyle, start, end, colors } = props;

    const styles = useMemo(() =>
        StyleSheet.create({
            LinearGradientStyle: {
                width: '100%',
            },
        }),
    );

    return (
        <LinearGradient
            start={start} end={end}
            colors={colors}
            style={[styles.LinearGradientStyle, { ...LinearGradientStyle }]} >
        </LinearGradient>
    );
};
export default LinearGradientComp;