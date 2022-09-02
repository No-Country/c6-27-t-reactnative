import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

import Login from './screens/Login/Login'
import Register2 from './screens/Register2/Register2'
import Profile from './screens/Profile/Profile'
import MainNavigation from './screens/Home/MainNavigation'

export default function App() {
  return (
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
  )
}
