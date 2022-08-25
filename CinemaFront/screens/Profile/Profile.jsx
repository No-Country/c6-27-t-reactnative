// Profile.jsx

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

const handleSubmit = () => {
  if (Platform.OS !== 'web') navigation.navigate('Home')
  else {
    navigation.navigate('HomeWeb')
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
        <Text> Usuario: {route.params.name}</Text>
        <Text>  </Text>
        <Text> Nombre: XXXXXX </Text>
        <Text> Apellido: XXXXXX </Text>
        <Text> Tarjeta de Credito: XXXXXX </Text>
        <Text>  </Text>
        <Text>Hola {route.params.name} ¿como estas?. </Text>
        <Text> ¿Con ganas de ver una pelicula ? </Text>
        <Text>  </Text>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={{ fontSize: 24 }}>Reservar una Pelicula </Text>
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
    alignItems: 'center',
    backgroundColor: 'lightblue',
    padding: 12,
    borderRadius: 10
  }
})

export default Profile
