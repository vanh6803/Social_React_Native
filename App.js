import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './src/screens/Splash';
import Intro from './src/screens/Intro';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import BottomNav from './src/screens/BottomNav';
import AddBlog from './src/screens/AddBlog';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="splash" component={Splash} />
          <Stack.Screen name="intro" component={Intro} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="register" component={Register} />
          <Stack.Screen name="bottomNav" component={BottomNav} />
          <Stack.Screen name="addBlog" component={AddBlog} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
