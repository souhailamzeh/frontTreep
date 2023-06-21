import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Colors, SF } from '../../utils';
import { VectoreIcons } from '../../components';

function HeaderLeftMenuIcon(props) {
    const { navigation } = props;
    return (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <VectoreIcons
                color={Colors.theme_background}
                name="navicon"
                icon="EvilIcons"
                size={SF(35)}
            />
        </TouchableOpacity>
    );
};

export default HeaderLeftMenuIcon;