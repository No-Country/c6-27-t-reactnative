// Login.jsx

import { Platform } from 'react-native'
import { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native'

// import AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage'
// Formik
import { Formik } from 'formik'
// Yup
import * as yup from 'yup'
// Axios
import axios from 'axios'

const loginValidationSchema = yup.object().shape({
  username: yup
    .string()
    .min(
      3,
      ({ min }) =>
        `Nombre de usuario muy corto. Debe tener al menos ${min} caracteres!`
    )
    .required('El campo no debe estar vacio'),
  firstname: yup
    .string()
    .min(
      3,
      ({ min }) =>
        `Nombre muy corto. Debe tener al menos ${min} caracteres!`
    )
    .required('El campo no debe estar vacio'),
  lastname: yup
    .string()
    .min(
      3,
      ({ min }) =>
        `Apellido muy corto. Debe tener al menos ${min} caracteres!`
    )
    .required('El campo no debe estar vacio'),
  password: yup
    .string()
    .min(7, ({ min }) => `Tu password debe tener al menos ${min} caracteres`)
    .required('El campo no debe estar vacio'),
  password2: yup
    .string()
    .min(7, ({ min }) => `Tu password debe tener al menos ${min} caracteres`)
    .required('El campo no debe estar vacio')    
    .oneOf([yup.ref('password'), null], 'Tus passwords no coinciden'),
   cardNumber: yup
    .string()
    .matches(/^[0-9]+$/, "Solo puedes ingresar numeros sin espacios")
    .min(16, ({ min }) => `Tu tarjeta debe tener al menos ${min} numeros`)
    .required('El campo no debe estar vacio')
})

const Register2 = ({ navigation }) => {
  const baseUrl1 = 'https://gruporeactnative-server.herokuapp.com'
  const [isLoading, setIsLoading] = useState(false)
  const [loginResponse, setLoginResponse] = useState(0)

  const handleSubmit = async (values) => {
    setLoginResponse(0)
    setIsLoading(true)
    try {
      const response = await axios({
        method: 'post',
        url: `${baseUrl1}/api/v1/users/create`,
        data: {
          username: values.username.toLowerCase(),
          firstname: values.firstname,
          lastname: values.firstname,
          password: values.password,
          cardNumber: values.cardNumber
        }
      })
      console.log(response)
      if (response.status === 200) {
        console.log(response)
        if (response.data.status === 200) {
          AsyncStorage.setItem('token', response.data.token)
          setLoginResponse(200)
          setTimeout(() => {
            setLoginResponse(0)
            navigation.navigate('Profile', {
              name: values.username.toLowerCase()
            })
          }, 3000)
        } else {
          setLoginResponse(403)
          setTimeout(() => {
            setLoginResponse(0)
          }, 3000)
        }
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  console.log(loginResponse)

  const handleNavigate = () => {
    navigation.navigate('Login')
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behaviour={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.loginContainer}
        >
        <ScrollView style={styles.scrollView}>
          <Text
            style={{
              fontSize: 24,
              color: 'black',
              padding: 24,
              fontWeight: 'bold'
            }}
          >
            CINEMA APP - Sign Up
          </Text>          
          {loginResponse === 200 && (
                  <Text style={{ fontSize: 16, color: 'green', padding: 5 }}>
                    Registro Exitoso
                  </Text>
                )}
                {loginResponse === 403 && (
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'red',
                      padding: 5,
                    }}
                  >
                    El Registro Fallo
                  </Text>
                )}
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{
              username: '',
              password: '',
              password2: '',
              firstname: '',
              lastname: '',
              cardNumber: ''
            }}
            onSubmit={(values) => handleSubmit(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              touched,
              errors,
              isValid
            }) => (
              <>
                {!isLoading && loginResponse !== 200 && (
                  <TextInput
                    name="username"
                    placeholder="Nombre de Usuario"
                    style={styles.textInput}
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={values.username}
                    keyboardType="default"
                    autoCapitalize="none"
                  />
                )}

                {errors.username && touched.username && (
                  <Text style={{ fontSize: 16, color: 'red', padding: 5 }}>
                    {errors.username}
                  </Text>
                )}
                {!isLoading && loginResponse !== 200 && (
                  <TextInput
                    name="firstname"
                    placeholder="Tu Nombre"
                    style={styles.textInput}
                    onChangeText={handleChange('firstname')}
                    onBlur={handleBlur('firstname')}
                    value={values.firstname}
                    autoCapitalize="none"                   
                  />
                )}
                {errors.lastname && touched.lastname && (
                  <Text style={{ fontSize: 16, color: 'red', padding: 5 }}>
                    {errors.lastname}
                  </Text>
                )}
                {!isLoading && loginResponse !== 200 && (
                  <TextInput
                    name="lastname"
                    placeholder="Tu Apellido"
                    style={styles.textInput}
                    onChangeText={handleChange('lastname')}
                    onBlur={handleBlur('lastname')}
                    value={values.lastname}
                    autoCapitalize="none"                   
                  />
                )}
                {errors.lastname && touched.lastname && (
                  <Text style={{ fontSize: 16, color: 'red', padding: 5 }}>
                    {errors.lastname}
                  </Text>
                )}
                {!isLoading && loginResponse !== 200 && (
                  <TextInput
                    name="password"
                    placeholder="Password"
                    style={styles.textInput}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    autoCapitalize="none"
                    secureTextEntry
                  />
                )}
                {errors.password && touched.password && (
                  <Text style={{ fontSize: 16, color: 'red', padding: 5 }}>
                    {errors.password}
                  </Text>
                )}
                {!isLoading && loginResponse !== 200 && (
                  <TextInput
                    name="password2"
                    placeholder="Repite tu Password"
                    style={styles.textInput}
                    onChangeText={handleChange('password2')}
                    onBlur={handleBlur('password2')}
                    value={values.password2}
                    autoCapitalize="none"
                    secureTextEntry
                  />
                )}
                {errors.password2 && touched.password2 && (
                  <Text style={{ fontSize: 16, color: 'red', padding: 5 }}>
                    {errors.password2}
                  </Text>
                )}
                 {!isLoading && loginResponse !== 200 && (
                  <TextInput
                    name="cardNumber"
                    placeholder="Numero de Tarjeta"
                    style={styles.textInput}
                    onChangeText={handleChange('cardNumber')}
                    onBlur={handleBlur('cardNumber')}
                    value={values.cardNumber}
                    autoCapitalize="none"                    
                  />
                )}
                {errors.cardNumber && touched.cardNumber && (
                  <Text style={{ fontSize: 16, color: 'red', padding: 5 }}>
                    {errors.cardNumber}
                  </Text>
                )}
                <TouchableOpacity onPress={handleNavigate}>
                  <Text style={styles.registrate}>
                    ¿Ya tienes una cuenta? Logueate!{' '}
                  </Text>
                </TouchableOpacity>
                {!isLoading && loginResponse !== 200 && (
                  <TouchableOpacity
                    style={styles.button}
                    onPress={handleSubmit}
                  >
                    <Text style={{ fontSize: 24 }}>Crear Cuenta</Text>
                  </TouchableOpacity>
                )}
              </>
            )}
          </Formik>
        </ScrollView>
        </KeyboardAvoidingView>
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
    backgroundColor: 'white',
    padding: 0

  },
  loginContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 5
  },
  textInput: {
    height: 60,
    width: '100%',
    marginTop: 10,
    marginBotton: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    padding: 10,
    fontSize: 24
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'lightblue',
    padding: 12,
    borderRadius: 10
  },
  registrate: {
    alignItems: 'center',
    color: 'black',
    padding: 16,
    fontWeight: 'bold'
  },
  scrollView: {
   width: "90%"
  }
})

export default Register2
