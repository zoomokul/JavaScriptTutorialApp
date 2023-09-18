import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import ChapterScreen from './ChapterScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Python Tutorial' }} />
        <Stack.Screen name="Chapter" component={ChapterScreen} options={{ title: 'Chapter' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
