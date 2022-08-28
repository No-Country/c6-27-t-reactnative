import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

import Login from './screens/Login/Login'
import Register2 from './screens/Register2/Register2'
import Profile from './screens/Profile/Profile'
import Home from './screens/Home/Home'
import HomeWeb from './screens/Home/HomeWeb'
import DetailMovie from './screens/Home/Detail'
import Schedule from './screens/Home/Schedule'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home}  options={{ title: 'Cartelera',  headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff', }}/>
          <Stack.Screen name="HomeWeb" component={HomeWeb}  options={{ title: 'Cartelera',  headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff', }}/>        
        <Stack.Screen name="DetailMovie" component={DetailMovie} options={({ route }) => ({ title: ``, headerShown: true,
    headerTransparent: true,headerTintColor: 'white' })}/>
        <Stack.Screen name="Schedule" component={Schedule} options={({ route }) => ({ title: `${route.params.title}`})}/>

        <Stack.Screen name="Register2" component={Register2} options={({ route }) => ({ title: `Registro` })}/>

       
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: 'Profile' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
