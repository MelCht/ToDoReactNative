import React, {useState} from 'react';
import { Modal, StyleSheet, Text, Pressable, View, ImageBackground} from 'react-native';

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: '#C58552',
    borderRadius: 20,
    padding: 75,
  },
  button: {
    borderRadius: 50,
    padding: 5,
  },
  buttonDelete: {
    backgroundColor: '#C58552',
  },
  buttonCloseNo: {
    backgroundColor: '#E6F9EF',
  },
  buttonCloseYes: {
    backgroundColor: '#F28081',
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textStyleDelete: {
    color: 'black',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
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
        <View>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>On supprime?</Text>
            <View style={styles.buttonRow}>
              <Pressable
                style={[styles.button, styles.buttonCloseNo]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyleDelete}>Non</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonCloseYes]}
                onPress={() => {handleDeleteGoal(index); setModalVisible(!modalVisible)}}>
                <Text style={styles.textStyleDelete}>Oui</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonDelete]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>X</Text>
      </Pressable>
    </View>
  );
};



export default Delete;