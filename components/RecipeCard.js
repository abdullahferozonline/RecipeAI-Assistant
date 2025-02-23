import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

const RecipeCard = ({ title, time, image }) => {
  return (
    <Card containerStyle={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.time}>🕒 {time}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    padding: 0,
    overflow: 'hidden',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  image: {
    width: '100%',
    height: 180,
  },
  details: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  time: {
    color: '#666',
  },
});

export default RecipeCard; 