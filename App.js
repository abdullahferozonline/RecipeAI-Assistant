import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import RecipeScreen from './screens/RecipeScreen';
import ChatScreen from './screens/ChatScreen';
import MealPlanScreen from './screens/MealPlanScreen';
import SavedRecipesScreen from './screens/SavedRecipesScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Meal Plan" component={MealPlanScreen} />
        <Tab.Screen name="Saved" component={SavedRecipesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
} 