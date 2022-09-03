import React, { useEffect, useState } from 'react'
import { Text, View, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Profile = ({ navigation}) => {

const [user, setUser] = useState(null)

useEffect(() => {
  const getUser = async() => {
    const username = await AsyncStorage.getItem('username');
    const firstname = await AsyncStorage.getItem('firstname');
    const lastname = await AsyncStorage.getItem('lastname');
    const cardnumber = await AsyncStorage.getItem('cardnumber');
    console.log(user);
    setUser({
      username, firstname, lastname, cardnumber
    })
  } 
  getUser()
}, [])


  const logout = () => {
    navigation.navigate('Login')
  }

  return (
    <View>
        <ScrollView>
          <View style= {{ padding: 10, width: '100%', backgroundColor: '#000', height: 150}}>
          </View>
          {user && 
          <View style={{alignItems: 'center'}}>
            <Image source={require('../../Login/login.png')} style={{ width: 140, height: 140, borderRadius: 100, marginTop: -70, backgroundColor: '#fff', borderColor:'blue', borderWidth: 5}}></Image>
            <Text style={{ fontSize: 25, fontWeight: 'bold', padding: 10}}>{user.username}</Text>
            <View style={{ alignSelf: 'center', backgroundColor:"#fff", width: '90%', padding: 20, borderRadius: 10, shadowOpacity: 80, elevation: 10, marginVertical: 5 }}>
              <Text style={{ fontSize: 15, fontWeight: 'bold', color:'grey'}}>Nombre: {user.firstname}</Text>
            </View>
            <View style={{ alignSelf: 'center', backgroundColor:"#fff", width: '90%', padding: 20, borderRadius: 10, shadowOpacity: 80, elevation: 10, marginVertical: 5 }}>
              <Text style={{ fontSize: 15, fontWeight: 'bold', color:'grey'}}>Apellidos: {user.lastname}</Text>
            </View>
            <View style={{ alignSelf: 'center', backgroundColor:"#fff", width: '90%', padding: 20, borderRadius: 10, shadowOpacity: 80, elevation: 10, marginVertical: 5 }}>
              <Text style={{ fontSize: 15, fontWeight: 'bold', color:'grey'}}>Tarjeta: {user.cardnumber}</Text>
            </View>
          </View>
          }
          <View style={styles.button_container}>
              <TouchableOpacity style={styles.button} onPress={()=> logout()}>
                  <Text style={styles.text_button}>Cerrar Sesión</Text>
              </TouchableOpacity>
          </View>
        </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  button_container: {
    width: '70%',
    alignSelf: 'center',
    marginBottom: 10
  },
  button: {
      marginTop: 10,
      backgroundColor: "#000",
      borderRadius: 10,
      paddingVertical: 10
  },
  text_button: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 16
  },
})

export default Profile