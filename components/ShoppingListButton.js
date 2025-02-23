import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ShoppingListButton = ({ ingredients }) => {
  const addToShoppingList = async () => {
    try {
      const currentList = await AsyncStorage.getItem('shoppingList') || '[]';
      const newList = [...new Set([...JSON.parse(currentList), ...ingredients])];
      await AsyncStorage.setItem('shoppingList', JSON.stringify(newList));
      Alert.alert('Success', 'Added to shopping list!');
    } catch (error) {
      Alert.alert('Error', 'Failed to add ingredients');
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={addToShoppingList}>
      <Icon name="add-shopping-cart" size={24} color="#FFF" />
      <Text style={styles.text}>Add to List</Text>
    </TouchableOpacity>
  );
};

// Add styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FF6B6B',
    borderRadius: 5,
  },
  text: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default ShoppingListButton; 