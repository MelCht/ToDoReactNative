import { StatusBar } from 'expo-status-bar';
import ToDoList from './component/list';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground} from 'react-native';

export default function App() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      justifyContent: 'center',
    },

    title: {
      color: 'purple', 
      fontWeight: 'normal',
      textAlign: 'center',
      marginBottom: '5%'
    },
  });
 
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('./assets/backgroundRainbow.jpg')} resizeMode='stretch'>
        <View style={{height: '100%', paddingTop: '45%'}}>
          <Text style={styles.title}>Faisons une <Text style={{fontWeight: 'bold'}}>app</Text> en React Native!</Text>
          <StatusBar style="auto" />
          <ToDoList></ToDoList>
        </View>
      </ImageBackground>
    </SafeAreaView>

  );
}




