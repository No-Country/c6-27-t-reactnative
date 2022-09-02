import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MovieType1 from './MovieType1';
import MovieType2 from './MovieType2';

const Tab = createMaterialTopTabNavigator();

const MovieTabStack = () => {
  return (
        <Tab.Navigator >
          <Tab.Screen name="MovieType1" component={MovieType1} options={{ title: "En cartelera", tabBarActiveTintColor: "#fff", tabBarStyle: {
            backgroundColor: "#000", 
          } }}/>
          <Tab.Screen name="MovieType2" component={MovieType2} options={{ title: "Proximamente", tabBarActiveTintColor: "#fff", tabBarStyle: {
            backgroundColor: "#000", 
          } }}/>
           <Tab.Screen name="MovieType3" component={MovieType2} options={{ title: "Proximamente", tabBarActiveTintColor: "#fff", tabBarStyle: {
            backgroundColor: "#000", 
          } }}/>
        </Tab.Navigator>
  )
}

export default MovieTabStack