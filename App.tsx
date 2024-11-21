import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './src/components/Home'
import Categories from './src/components/Categories'
import ShowImage from './src/components/ShowImage'
import ShowResult from './src/components/ShowResult'

const Stack=createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name='Home'
          options={{headerShown:false}}
          component={Home}/>
          <Stack.Screen 
          name='Categories'
          options={{headerShown:false}}
          component={Categories}/>
          <Stack.Screen 
          name='ShowResult'
          options={{headerShown:false}}
          component={ShowResult}/>
          <Stack.Screen 
          name='ShowImage'
          options={{headerShown:false}}
          component={ShowImage}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
