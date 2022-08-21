// App.js
import { Platform } from 'react-native';
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
  KeyboardAvoidingView
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
  password: yup
    .string()
    .min(7, ({ min }) => `Tu password debe tener al menos ${min} caracteres`)
    .required('El campo no debe estar vacio')
})

const App = () => {
  const baseUrl1 = 'https://gruporeactnative-server.herokuapp.com'
  const [isLoading, setIsLoading] = useState(false)
  const [loginResponse, setLoginResponse] = useState(0)

  const handleSubmit = async (values) => {
    setLoginResponse(0)
    setIsLoading(true)
    try {
      const response = await axios({
        method: 'post',
        url: `${baseUrl1}/api/v1/users/login`,
        data: {
          username: values.username.toLowerCase(),
          password: values.password
        }
      })
      console.log(response)
      if (response.status === 200) {
        console.log(response)
        if (response.data.status === 200) {
          AsyncStorage.setItem('token', response.data.token)
          setLoginResponse(200)
          setTimeout(() => {
            console.log('nuevo timeout')
            setLoginResponse(0)
          }, 3000)
        } else {
          setLoginResponse(403)
          setTimeout(() => {
            console.log('nuevo timeout')
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

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behaviour={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.loginContainer}
        >
          <View>
            <Image
              style={styles.splashImage}
              source={require('./login.png')}
            />
          </View>
          <Text
            style={{
              fontSize: 24,
              color: 'black',
              padding: 24,
              fontWeight: 'bold'
            }}
          >
            CINEMA APP
          </Text>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ username: '', password: '' }}
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
                  <TouchableOpacity
                    style={styles.button}
                    onPress={handleSubmit}
                  >
                    <Text style={{ fontSize: 24 }}>Ingresar</Text>
                  </TouchableOpacity>
                )}

                {loginResponse === 200 && (
                  <Text style={{ fontSize: 16, color: 'green', padding: 5 }}>
                    Login Exitoso
                  </Text>
                )}
                {loginResponse === 403 && (
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'red',
                      padding: 5,
                      position: 'absolute',
                      bottom: -10
                    }}
                  >
                    Usuario o contraseña incorrectas
                  </Text>
                )}
              </>
            )}
          </Formik>
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
    backgroundColor: 'white'
  },
  splashImage: {
    width: 100,
    height: 100,
    display: 'flex',
    aspectRatio: 1,
    resizeMode: 'contain'
  },
  loginContainer: {
    width: '95%',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20
  },
  textInput: {
    height: 60,
    width: '100%',
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    padding: 10,
    fontSize: 24
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'lightblue',
    padding: 12,
    borderRadius: 10
  }
})

export default App