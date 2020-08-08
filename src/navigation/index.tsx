import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import QuestionScreen from '../screens/QuestionScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      　initialRouteName="Home"
        mode="card"
        screenOptions={{ headerTitleAlign: "center" }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'ナミビア検定', 
            headerStyle: {
              backgroundColor: '#ff9351',
              elevation:0,
              borderBottomWidth: 0,              
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Question"
          component={QuestionScreen}
          options={{
            title: '', 
            headerStyle: {
              backgroundColor: '#ff9351',
              elevation:0,
              borderBottomWidth: 0,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          initialParams={{rank: 1}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
