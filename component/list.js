import { StyleSheet, Text, View, TextInput, FlatList, Pressable } from 'react-native';
import React, { useState } from 'react';
import Delete from './deleteModal';
import Modify from './modifyModal';
import { KeyboardAvoidingView } from 'react-native-web';

const styles = StyleSheet.create({

  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '5%',
  },

  flatlist: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  contentContainerStyle: {
    alignItems: 'center'
  },

  item: {
    paddingRight: '2%', 
    marginBottom: '2%'
  },

  add: {
    height: 40, 
    borderColor: '#C58552', 
    borderWidth: 3, 
    borderRadius: 25, 
    marginRight: '2%',
  },

  addText: {
    paddingTop: 5,
  },
  scroll: {
    height: "75%",
  }
});
  
const sampleGoals = [
  "Acheter les croquettes",
  "Laver la fontaine",
  "Changer l'eau des bols",
  "Dépoiler le canapé",
  "Changer la litière",
  "Jouer avec le chaton",
  "Dépoiler les plaids",
  "Nourrir les chats",
  "Laver les gamelles",
  "Dépoiler les vêtements",
];

export default function ToDoList(props) { 

const [goals, setGoals] = useState([...sampleGoals]);
const [newGoal, setNewGoal] = useState("");
    
const handleAddGoal = () => {
  if (newGoal !== "") {
    setGoals([...goals, newGoal]);
    setNewGoal("");
  }
};

const handleDeleteGoal = (index, item) => {
  const updatedGoals = [...goals];
  updatedGoals.splice(index, 1);
  setGoals(updatedGoals);
};

const handleReplaceGoal = (index, modifiedGoal) => {
  const modif = goals.map((goal, indexMap) => (
    (indexMap == index) ? 
    modifiedGoal
    : goal
    ))
    setGoals(modif)
  }


    
return (
  <View>
    <View style={styles.scroll}>
      <FlatList 
      data={goals} 
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => 
      ( 
        <> 
          <View style={styles.flatlist}>
              <Text key={index} style={styles.item}>{item}</Text>
            <Delete 
              handleDeleteGoal={handleDeleteGoal} 
              index={index}
            />
            <Modify
              handleReplaceGoal={handleReplaceGoal}
              index={index}
              initialValue={item}
            />
          </View>
        </>
      )}    
      />
      </View>
    <View style={styles.row}>
      <TextInput
        style={styles.add}
        placeholder="Ajouter un objectif"
        value={newGoal}
        onChangeText={text => setNewGoal(text)}
      />
      <Pressable
        android_ripple={{color: "#C58552", radius: 28}}
        style={styles.add}
        onPress={handleAddGoal}>
        <Text style={styles.addText}>Ajouter</Text>
      </Pressable>
    </View>
  </View>
)
}
