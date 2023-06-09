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
      <Stack.Screen name='ProductScreen' component={Products} options={{
        title:'Dükkan',
        headerStyle:{backgroundColor:'#90caf9'},
        headerTitleStyle:{color:'#ffffff'}
      }} />
      <Stack.Screen name='DetailScreen' component={Detail} options={{
        title:'Dükkan',
        headerStyle:{backgroundColor:'#90caf9'},
        headerTitleStyle:{color:'#ffffff'},
        headerTintColor:'#ffffff',
        
      }}  />
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Router;