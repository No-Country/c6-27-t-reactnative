import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

import Login from './screens/Login/Login'
import Profile from './screens/Profile/Profile'
import Home from './screens/Home/Home'
import DetailMovie from './screens/Home/Detail'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: 'Profile' }}
        />
        <Stack.Screen name="Home" component={Home}  options={{ title: 'Cartelera',  headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff', }}/>
        <Stack.Screen name="DetailMovie" component={DetailMovie} options={({ route }) => ({ title: `Película ${route.params.title}` })}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
