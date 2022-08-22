// // Home.jsx
//  import {
//      API_URL
// } from 'react-native-dotenv';

import {
  SafeAreaView,
  StyleSheet,  
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,  
} from 'react-native'

// Axios
import axios from 'axios'

const { API_URL } = process.env;

const Home = ({ navigation, route }) => {

const handleSubmit = async () => { 
    
        try {
          const response = await axios({
            method: 'get',
            url: API_URL
          })
          console.log(response)
          if (response.status === 200) {
            console.log(response)
            if (response.data.status === 200) {
              
            } else {
            }
          }
        } catch (error) {
          console.log(error)
        } finally {
          
        }
      }    

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.splashImage}
          source={require('./../Login/login.png')}
        />        
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={{ fontSize: 24 }}> Reservar una Pelicula </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </> )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  splashImage: {
    width: 100,
    height: 100,
    display: 'flex',
    aspectRatio: 1,
    resizeMode: 'contain'
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'lightblue',
    padding: 12,
    borderRadius: 10
  }
})

export default Home