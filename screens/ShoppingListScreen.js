import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ShoppingListScreen = () => {
  const [items, setItems] = useState([]);

  const loadList = async () => {
    const list = await AsyncStorage.getItem('shoppingList') || '[]';
    setItems(JSON.parse(list));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => <Text style={styles.item}>• {item}</Text>}
      />
    </View>
  );
};

// Add styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ShoppingListScreen; 