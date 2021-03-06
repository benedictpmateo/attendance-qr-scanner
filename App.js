import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native'

import Scanner from './src/screens/Scanner';
import Home from './src/screens/Home'
import RegisterUser from './src/screens/RegisterUser';
import Users from './src/screens/Users';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
// });

const Stack = createStackNavigator();

const options = {
  headerBackground: () => (
    <BlurView tint="light" intensity={1000} style={StyleSheet.absoluteFill} />
  )
};

const App = () => {
  return (
    <Provider
      store={store}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={options}
          />
          <Stack.Screen
            name="Scanner"
            component={Scanner}
          />
          <Stack.Screen
            name="Register User"
            component={RegisterUser}
          />
          <Stack.Screen
            name="Users"
            component={Users}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )  
};

export default App;