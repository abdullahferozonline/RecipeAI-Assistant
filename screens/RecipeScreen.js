import React from 'react';
import { ScrollView, Image, StyleSheet, View, Button } from 'react-native';
import { Text } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RecipeScreen = ({ route }) => {
  const { recipe } = route.params;

  const handleSaveRecipe = async () => {
    try {
      const savedRecipes = await AsyncStorage.getItem('savedRecipes') || '[]';
      const parsedRecipes = JSON.parse(savedRecipes);
      
      if (!parsedRecipes.find(r => r.id === recipe.id)) {
        const newSaved = [...parsedRecipes, recipe];
        await AsyncStorage.setItem('savedRecipes', JSON.stringify(newSaved));
      }
    } catch (error) {
      console.error('Save error:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: recipe.image }} style={styles.image} />
      <Text h2 style={styles.title}>{recipe.title}</Text>
      
      <Text h4 style={styles.sectionTitle}>Ingredients</Text>
      {recipe.ingredients.map((ingredient, index) => (
        <Text key={index} style={styles.ingredient}>• {ingredient}</Text>
      ))}

      <Text h4 style={styles.sectionTitle}>Instructions</Text>
      {recipe.steps.map((step, index) => (
        <Text key={index} style={styles.step}>{index + 1}. {step}</Text>
      ))}

      <Button 
        title="Save Recipe" 
        onPress={handleSaveRecipe} 
        color="#FF6B6B" 
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 15,
  },
  title: {
    marginVertical: 20,
    color: '#4A4A4A',
  },
  sectionTitle: {
    color: '#FF6B6B',
    marginVertical: 15,
  },
  ingredient: {
    fontSize: 16,
    marginLeft: 15,
    marginBottom: 8,
    color: '#666',
  },
  step: {
    fontSize: 16,
    marginLeft: 15,
    marginBottom: 12,
    lineHeight: 24,
    color: '#444',
  },
});

export default RecipeScreen; 