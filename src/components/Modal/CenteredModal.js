import React from 'react';
import { StyleSheet, View, Modal, TouchableWithoutFeedback } from 'react-native';
import { BasicButton } from '../Button/BasicButton';

export const CenteredModal = ({
  children,
  visible,
  animationType,
  closeModal,
  closeOnOverlay = true,
  transparent = true,
}) => {
  return (
    <Modal
      animationType={animationType}
      visible={visible}
      transparent={transparent}
    >
      <TouchableWithoutFeedback onPress={closeOnOverlay ? closeModal : null}>
        <View style={styles.centeredView}>
          <TouchableWithoutFeedback>
            <View style={styles.modalView}>
              {children}
              <BasicButton
                styles={styles.closeModalBtn}
                text="Close"
                onPress={closeModal}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    margin: 16,
  },
  closeModalBtn: {
    alignSelf: 'flex-end',
    backgroundColor: '#E94560',
    width: 100,
    marginTop: 32,
  },
});
