import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Colors, SF, SH, SW } from '../../utils';
import { useSelector } from "react-redux";
import { VectoreIcons } from '../../components';

function DropdownComponent({
    width,
    data,
    labelField,
    valueField,
    placeholder,
    searchPlaceholder,
    onChange,
    maxHeight,
    value,
    labelStyle,
    placeholderStyle,
    selectedTextStyle,
    dropdownStyle
}) {
    const styles = useMemo(
        () =>
            StyleSheet.create({
                container: { width: width },
                dropdownStyle: {
                    borderWidth: SH(1),
                    borderColor: Colors.input_border,
                    borderRadius: SH(8),
                    fontSize: SF(14),
                    lineHeight: SF(17),
                    color: Colors.black_text_color,
                    fontWeight: '400',
                    padding: SH(5),
                    height: SH(47),
                    ...dropdownStyle
                },
                icon: {
                    paddingRight: SW(5),
                },
                label: {
                    position: 'absolute',
                    backgroundColor: Colors.white_text_color,
                    paddingHorizontal: SW(8),
                    fontSize: SF(20),
                    color: Colors.gray_text_color,
                    ...labelStyle
                },
                placeholderStyle: {
                    fontSize: SF(18),
                    lineHeight: SF(21),
                    color: Colors.gray_text_color,
                    ...placeholderStyle
                },
                selectedTextStyle: {
                    fontSize: SF(18),
                    ...selectedTextStyle
                },
                IconStyle: {
                    width: SW(20),
                    height: SH(20),
                },
            }),
        [dropdownStyle, labelStyle, placeholder, selectedTextStyle]
    )

    const { colorrdata } = useSelector(state => state.commonReducer) || {};

    return (
        <View style={styles.container}>
            <Dropdown
                style={styles.dropdownStyle}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={[styles.selectedTextStyle, { color: colorrdata }]}
                inputSearchStyle={styles.inputSearchStyle}
                IconStyle={styles.IconStyle}
                data={data}
                searchPlaceholder={searchPlaceholder}
                maxHeight={maxHeight}
                renderRightIcon={() => (
                    <VectoreIcons
                        icon="Entypo"
                        IconStyle={styles.icon}
                        color="black"
                        name="chevron-down"
                        size={SF(20)}
                    />
                )}
                labelField={labelField}
                valueField={valueField}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                itemTextStyle={{ color: Colors.black_text_color }}
            />
        </View>
    );
};

export default DropdownComponent;
