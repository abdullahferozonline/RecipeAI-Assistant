import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RecipeCard from '../components/RecipeCard';

const SavedRecipesScreen = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);

  const loadSavedRecipes = async () => {
    const recipes = await AsyncStorage.getItem('savedRecipes') || '[]';
    setSavedRecipes(JSON.parse(recipes));
  };

  useEffect(() => {
    loadSavedRecipes();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={savedRecipes}
        renderItem={({ item }) => <RecipeCard {...item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default SavedRecipesScreen; 