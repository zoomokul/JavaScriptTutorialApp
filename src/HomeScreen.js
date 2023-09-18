import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { chapters } from './chapters'; // Import the chapters constant

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {chapters.map((chapter, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => navigation.navigate('Chapter', { chapterContent: chapter.content })}
        >
          <Text style={styles.buttonText}>{chapter.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginVertical: 10,
    backgroundColor: '#555',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    width: 300, // Added a fixed width for buttons
    alignItems: 'center', // Center align text
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});

export default HomeScreen;
