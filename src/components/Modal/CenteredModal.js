import React from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import { BasicButton } from '../Button/BasicButton';

export const CenteredModal = ({
  children,
  animationType,
  visible,
  closeModal,
}) => {
  return (
    <Modal
      animationType={animationType}
      visible={visible}
      transparent={true}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {children}
          <BasicButton
            styles={styles.closeModalBtn}
            text="Close"
            onPress={closeModal}
          />
        </View>
      </View>
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
