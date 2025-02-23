import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MealPlanScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [meals, setMeals] = useState({});

  const loadMeals = async (date) => {
    const savedMeals = await AsyncStorage.getItem('mealPlans') || '{}';
    setMeals(JSON.parse(savedMeals));
  };

  useEffect(() => {
    if (selectedDate) loadMeals(selectedDate);
  }, [selectedDate]);

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          [selectedDate]: { selected: true }
        }}
      />
      
      <FlatList
        data={meals[selectedDate] || []}
        renderItem={({ item }) => (
          <View style={styles.mealItem}>
            <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mealItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default MealPlanScreen; 