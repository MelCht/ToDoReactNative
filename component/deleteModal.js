import React, {useState} from 'react';
import { Modal, StyleSheet, Text, Pressable, View} from 'react-native';

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
  },
  button: {
    borderRadius: 50,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: 'pink',
  },
  buttonCloseNo: {
    backgroundColor: 'green',
  },
  buttonCloseYes: {
    backgroundColor: 'red',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

const Delete = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { handleDeleteGoal, index} = props;

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View >
          <View style={styles.modalView}>
            <Text style={styles.modalText}>On supprime?</Text>
            <Pressable
              style={[styles.button, styles.buttonCloseNo]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Non</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonCloseYes]}
              onPress={() => {handleDeleteGoal(index); setModalVisible(!modalVisible)}}>
              <Text style={styles.textStyle}>Oui</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>X</Text>
      </Pressable>
    </View>
  );
};



export default Delete;