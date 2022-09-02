import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Home'
import HomeWeb from '../HomeWeb'
import DetailMovie from '../Detail'
import Schedule from '../Schedule'
import { Platform } from 'react-native'
const Stack = createNativeStackNavigator()

const HomeStack = () => {
  return (
      <Stack.Navigator>
          <Stack.Screen name="Home" component={Platform.OS !== 'web' ? Home : HomeWeb}  options={{ headerShown: false }}/>
          {/*<Stack.Screen name="HomeWeb" component={HomeWeb}  options={{ title: 'Cartelera',  headerStyle: {
              backgroundColor: '#000',
          },
          headerTintColor: '#fff', }}/>   */}     
          <Stack.Screen name="DetailMovie" component={DetailMovie} options={({ route }) => ({ title: ``, headerShown: true,
      headerTransparent: true,headerTintColor: 'white' })}/>
          <Stack.Screen name="Schedule" component={Schedule} options={({ route }) => ({ title: `${route.params.title}`})}/>
      </Stack.Navigator>
  )
}

export default HomeStack