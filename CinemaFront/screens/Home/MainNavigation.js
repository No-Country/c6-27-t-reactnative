import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStack from './home/HomeStack';
import MovieStack from './movies/MovieStack';
import ProfileStack from './profile/ProfileStack';


const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeStack') {
            iconName = focused
              ? 'home'
              : 'home';
          } else if (route.name === 'ProfileStack') {
            iconName = focused ? 'account' : 'account';
          } else if (route.name === 'MovieStack') {
            iconName = focused ? 'movie-settings' : 'movie-settings';
          }
          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarStyle: {
            backgroundColor: '#000'
        }
      })}>
      <Tab.Screen name="HomeStack" component={HomeStack} options= {{ title:'Inicio' }}/>
      <Tab.Screen name="MovieStack" component={MovieStack} options= {{ title:'Películas' }}/>
      <Tab.Screen name="ProfileStack" component={ProfileStack} options= {{ title:'Perfil' }}/>
    </Tab.Navigator>
  )
}

export default MainNavigation