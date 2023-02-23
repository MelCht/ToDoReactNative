import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#FF4B4B', 
    fontWeight: 'normal',
  },

  row: {
    display: 'flex',
    flexDirection: 'row',
  },


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

export default function App() {

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
    <View style={styles.container}>
      <Text style={styles.title}>Faisons une <Text style={{fontWeight: 'bold'}}>app</Text> en React Native!</Text>
      <StatusBar style="auto" />
        {goals.map((goal, index) => (
      <>
        <Text key={index}>{goal}</Text>
          <TouchableOpacity
          style={{ backgroundColor: 'orange',
          width: 35}}
          onPress={() => handleDeleteGoal(index)}
          >
          <Text style={{textAlign: 'center'}}>X</Text>
      </TouchableOpacity>
      </>
        ))}
      <View style={styles.row}>
        <TextInput
          style={{height: 40, borderColor: 'pink', borderWidth: 3}}
          placeholder="Ajouter un objectif"
          value={newGoal}
          onChangeText={text => setNewGoal(text)}
        />
        <Button
          title="Ajouter"
          onPress={handleAddGoal}
        />
      </View>
    </View>

  );
}




