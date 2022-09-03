import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useState, createContext } from 'react'

const Stack = createNativeStackNavigator()
export const AppContext = createContext()

import Login from './screens/Login/Login'
import Register2 from './screens/Register2/Register2'
import Profile from './screens/Profile/Profile'
import MainNavigation from './screens/Home/MainNavigation'

export default function App() {

  const [globalUsername, setGlobalUsername] = useState(null)
  const [globalFirstname, setGlobalFirstname] = useState(null)
  const [globalLastname, setGlobalLastname] = useState(null)
  const [globalEmail, setGlobalEmail] = useState(null)
  const [globalCardNumber, setGlobalCardNumber] = useState(null)
  
  return (
  <AppContext.Provider
      value={{
        globalUsername,
        setGlobalUsername,
        globalFirstname,
        setGlobalFirstname,
        globalLastname,
        setGlobalLastname,
        globalEmail,
        setGlobalEmail,
        globalCardNumber,
        setGlobalCardNumber
      }}
    >
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register2" component={Register2} options={({ route }) => ({ title: `Registro` })}/>
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: 'Profile' }}
        />
         <Stack.Screen name="Main" component={MainNavigation} options={{ headerShown: false,
    headerTransparent: true,headerTintColor: 'white' }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </AppContext.Provider>
  )
}
