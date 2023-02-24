import { StatusBar } from 'expo-status-bar';
import ToDoList from './component/list';
import { StyleSheet, Text, View,  ImageBackground} from 'react-native';

export default function App() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },

    title: {
      color: '#C58552', 
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 40,
      marginBottom: '5%'
    },

    main: {
      height: '100%', 
      paddingTop: '25%'
    }
  });
 
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/background.webp')} resizeMode='stretch'>
        <View style={styles.main}>
          <Text style={styles.title}>TO DO LIST</Text>
          <StatusBar style="auto" />
          <ToDoList></ToDoList>
        </View>
      </ImageBackground>
    </View>

  );
}




