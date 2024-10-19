import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import screen_01 from './Screens/screen_01';
import screen_02 from './Screens/screen_02';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='screen_01' screenOptions={{headerShown:false}}>
        {/* <Stack.Screen name="screen_01" component={screen_01} /> */}
        <Stack.Screen name="screen_02" component={screen_02} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

