// Profile.jsx
import { useContext } from 'react'
import { AppContext} from "../../App"

import {
  Platform,
  SafeAreaView,
  StyleSheet,  
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,  
} from 'react-native'

const Profile = ({ navigation, route }) => {

  const {globalUsername, setGlobalUsername} = useContext(AppContext);
  const {globalFirstname, setGlobalFirstname} = useContext(AppContext);
  const {globalLastname, setGlobalLastname} = useContext(AppContext);
  const {globalCardNumber, setGlobalCardNumber} = useContext(AppContext);

const handleSubmit = () => {
  /*if (Platform.OS !== 'web') navigation.navigate('Main')
  else {*/
    navigation.navigate('Main')
  //}
}

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.splashImage}
          source={require('./../Login/login.png')}
        />
        <Text> Usuario: {globalUsername}</Text>
        <Text>  </Text>
        <Text> Nombre: {globalFirstname} </Text>
        <Text> Apellido: {globalLastname} </Text>
        <Text> Tarjeta de Credito: {globalCardNumber?globalCardNumber:"No registrada"} </Text>
        <Text>  </Text>
        <Text>Hola {globalFirstname} {globalLastname} ¿como estas?. </Text>
        <Text> ¿Con ganas de ver una pelicula ? </Text>
        <Text>  </Text>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={{ fontSize: 24 }}>Reservar una Pelicula </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={ () => setGlobalUsername(null)}>
          <Text style={{ fontSize: 24 }}> Salir / Log Out </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  )
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
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: 'lightblue',
    padding: 12,
    borderRadius: 10
  }
})

export default Profile
