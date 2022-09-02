import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailMovie from '../Detail'
import Schedule from '../Schedule'
//import MovieTabStack from './tabs/MovieTabStack'
const Stack = createNativeStackNavigator()

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MovieType1 from './tabs/MovieType1';
import MovieType2 from './tabs/MovieType2';

const Tab = createMaterialTopTabNavigator();

const MovieTabStack = () => {
  return (
        <Tab.Navigator screenOptions={{
          swipeEnabled: false
        }}>
          <Tab.Screen name="MovieType1" component={MovieStack} options={{ title: "En cartelera", tabBarActiveTintColor: "#fff", tabBarStyle: {
            backgroundColor: "#000", 
          } }}/>
          <Tab.Screen name="MovieType2" component={MovieStack2} options={{ title: "Proximamente", tabBarActiveTintColor: "#fff", tabBarStyle: {
            backgroundColor: "#000", 
          } }}/>
        </Tab.Navigator>
  )
}

const MovieStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="MovieTab" component={MovieType1} options={{ title: ``, headerShown: true,
      headerTransparent: true,headerTintColor: 'white' }}/> 
          <Stack.Screen name="DetailMovie" component={DetailMovie} options={({ route }) => ({ title: ``, headerShown: true,
      headerTransparent: true,headerTintColor: 'white' })}/>
          <Stack.Screen name="Schedule" component={Schedule} options={({ route }) => ({ title: `${route.params.title}`})}/>
      </Stack.Navigator>
  )
}

const MovieStack2 = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="MovieTab" component={MovieType2} options={{ title: ``, headerShown: true,
      headerTransparent: true,headerTintColor: 'white' }}/> 
          <Stack.Screen name="DetailMovie" component={DetailMovie} options={({ route }) => ({ title: ``, headerShown: true,
      headerTransparent: true,headerTintColor: 'white' })}/>
          <Stack.Screen name="Schedule" component={Schedule} options={({ route }) => ({ title: `${route.params.title}`})}/>
      </Stack.Navigator>
  )
}

export default MovieTabStack