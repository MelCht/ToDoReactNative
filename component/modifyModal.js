import { StyleSheet, View, Modal, TextInput, TouchableOpacity, Text } from 'react-native';
import React, {useState} from 'react';

const styles = StyleSheet.create({
  modalBox: {
    margin: 20,
    backgroundColor: '#C58552',
    borderRadius: 20,
    padding: 75,
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttons: {
    borderRadius: 50,
    padding: 5,
    backgroundColor: "#FFDBBA",
    marginTop: '3%',
  },
  input: {
    color: 'white',
    height: 40,
    borderColor: '#FFDBBA',
    borderWidth: 3,
    borderRadius: 25,
    marginBottom: '2%',
    paddingLeft: 5,
  },
  modifyButton: {
    backgroundColor: '#C58552',
    borderColor: '#C58552',
    borderWidth: 3,
    borderRadius: 25,
    marginLeft: '10%',
  },
  modifyText: {
    color: 'white',
    textAlign: 'center',
  }
})

const Modify = (props) => {
  const { handleReplaceGoal, index, item, initialValue } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [modifiedGoal, setModifiedGoal] = useState(initialValue); 

  return (
    <View>
      <Modal
        animamationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <>
          <View style={styles.modalBox}>
            <TextInput
              style={styles.input}
              value={modifiedGoal}
              onChangeText={text => setModifiedGoal(text)}
            />
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={styles.buttons}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text>Annuler</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttons}
                onPress={() => {handleReplaceGoal(index, modifiedGoal); setModalVisible(!modalVisible)}}
              >
                <Text>Modifier</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      </Modal>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.modifyButton}
      >
        <Text style={styles.modifyText}>Modifier</Text>
      </TouchableOpacity>
    </View>
  )
};



export default Modify;