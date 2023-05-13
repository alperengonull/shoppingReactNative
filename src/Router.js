import { SafeAreaView, View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from './pages/Products/Products';
import Detail from './pages/Detail/Detail';

const Stack = createNativeStackNavigator();


const Router = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='ProductScreen' component={Products} />
      <Stack.Screen name='DetailScreen' component={Detail} />
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Router