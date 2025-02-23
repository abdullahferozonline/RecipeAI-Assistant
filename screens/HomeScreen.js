import React, { useState } from 'react';
import { View, ScrollView, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-elements';
import CategoryButton from '../components/CategoryButton';
import RecipeCard from '../components/RecipeCard';

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = [
    { id: 1, name: 'Breakfast', icon: '🍳' },
    { id: 2, name: 'Lunch', icon: '🥗' },
    { id: 3, name: 'Dinner', icon: '🍲' },
    { id: 4, name: 'Desserts', icon: '🍰' },
  ];

  const popularRecipes = [
    { 
      id: 1, 
      title: 'Avocado Toast', 
      time: '15 min', 
      image: 'https://example.com/avocado-toast.jpg',
      ingredients: ['Bread', 'Avocado', 'Lemon', 'Chili Flakes'],
      steps: ['Toast bread', 'Mash avocado', 'Spread on toast', 'Add seasoning']
    },
    // Add more recipes
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text h3 style={styles.title}>Good Morning, Chef! 👩🍳</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Search recipes..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <Text h4 style={styles.sectionTitle}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category) => (
          <CategoryButton 
            key={category.id}
            icon={category.icon}
            label={category.name}
            onPress={() => navigation.navigate('Recipe', { category: category.name })}
          />
        ))}
      </ScrollView>

      <Text h4 style={styles.sectionTitle}>Popular Recipes</Text>
      {popularRecipes.map((recipe) => (
        <TouchableOpacity 
          key={recipe.id}
          onPress={() => navigation.navigate('Recipe', { recipe })}
        >
          <RecipeCard 
            title={recipe.title}
            time={recipe.time}
            image={recipe.image}
          />
        </TouchableOpacity>
      ))}

      <TouchableOpacity 
        style={styles.chatButton}
        onPress={() => navigation.navigate('ChatBot')}
      >
        <Text style={styles.chatButtonText}>Ask Chef AI 🤖</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    padding: 20,
    backgroundColor: '#FF6B6B',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  title: {
    color: '#FFF',
    marginBottom: 20,
  },
  searchBar: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 15,
    fontSize: 16,
  },
  sectionTitle: {
    margin: 20,
    marginBottom: 10,
    color: '#4A4A4A',
  },
  chatButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: '#FF6B6B',
    padding: 15,
    borderRadius: 30,
    elevation: 5,
  },
  chatButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomeScreen; 