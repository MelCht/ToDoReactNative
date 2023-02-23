import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import Delete from './deleteModal';

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
  }
});
  
const sampleGoals = [
  "Faire les courses",
  "Aller à la salle de sport 3 fois par semaine",
  "Monter à plus de 5000m d altitude",
  "Acheter mon premier appartement",
  "Perdre 5 kgs",
  "Gagner en productivité",
  "Apprendre un nouveau langage",
  "Faire une mission en freelance",
  "Organiser un meetup autour de la tech",
  "Faire un triathlon",
];

export default function ToDoList(props) { 

const [modalVisible, setModalVisible] = useState(false);
const [goals, setGoals] = useState([...sampleGoals]);
const [newGoal, setNewGoal] = useState("");
    
const handleAddGoal = () => {
  if (newGoal !== "") {
    setGoals([...goals, newGoal]);
    setNewGoal("");
  }
};

const handleDeleteGoal = (index) => {
  const updatedGoals = [...goals];
  updatedGoals.splice(index, 1);
  setGoals(updatedGoals);
};
    
return (
  <View>
  <FlatList 
  contentContainerStyle
  data={goals} 
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item, index }) => 
  ( 
    <> 
      <View style={styles.flatlist}>
          <Text key={index} style={{paddingRight: '2%', marginBottom: '2%'}}>{item}</Text>
        <Delete 
        handleDeleteGoal={handleDeleteGoal} 
        index={index}
      />
      </View>
    </>
  )}    
  />
    <View style={styles.row}>
      <TextInput
        style={{height: 40, borderColor: '#FF6962', borderWidth: 3}}
        placeholder="Ajouter un objectif"
        value={newGoal}
        onChangeText={text => setNewGoal(text)}
      />
      <TouchableOpacity
      style={{backgroundColor: 'purple'}}
      onPress={handleAddGoal}>
        <Text style={{paddingTop: '2.5%'}}>Ajouter</Text>
      </TouchableOpacity>
    </View>
  </View>
)
}
