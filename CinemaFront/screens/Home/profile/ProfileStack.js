import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from './Profile'
const Stack = createNativeStackNavigator()

const ProfileStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="ProfileSetting" component={Profile} options={{ title: ``, headerShown: true,
      headerTransparent: true,headerTintColor: 'white' }}/> 
      </Stack.Navigator>
  )
}

export default ProfileStack