import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screens/Login';
import Register from './Screens/Registration';
import Home from './Screens/Home';
import Registration from './Screens/Registration';

const MainStack = createStackNavigator(); // вказує на групу навігаторів

export default () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        {/* Заміна Switch */}
        <MainStack.Screen name="Registration" component={Registration} />
        {/* Заміна Route */}
        <MainStack.Screen name="Login" component={Login} />
        <MainStack.Screen name="Home" component={Home} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
