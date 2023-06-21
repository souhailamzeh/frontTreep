import React, { useMemo } from 'react';
import { Modal, View, Image, TouchableOpacity } from 'react-native';
import propTypes from 'prop-types';
import { ModalStyle } from '../../styles';
import { useTheme } from '@react-navigation/native';
import images from '../../index';

function ModalComponent({ children, modalVisible, setModalVisible, close, ModalViewStyle, modalbuttonClose }) {
  
  const { colors } = useTheme();
  const styles = useMemo(() => ModalStyle(colors), [colors]);

  return <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      setModalVisible(!modalVisible);
    }}
  >
    <View style={styles.ModalCenteredView}>
      <View style={[styles.ModalView, { ...ModalViewStyle }]}>
        <TouchableOpacity
          style={styles.CloseView}
          onPress={() => close ? close() : null}
        >
          {close ?
            <TouchableOpacity
              style={[styles.ModalButtonClose, { ...modalbuttonClose }]}
              onPress={() => close()}
            >
              <Image resizeMode='cover' source={images.close} />
            </TouchableOpacity>
            : null}
          {children}
        </TouchableOpacity>
      </View>
    </View>
  </Modal>;
}

Modal.defaultProps = {
  setModalVisible: () => { },
  modalVisible: false
};

ModalComponent.propTypes = {
  setModalVisible: propTypes.func,
  modalVisible: propTypes.boolean
};

export default ModalComponent;
