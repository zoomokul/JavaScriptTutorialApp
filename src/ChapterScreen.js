import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import HTML from 'react-native-render-html';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-9981135393846597/9930603632';

const ChapterScreen = ({ route }) => {
  const { chapterContent } = route.params;

  // Define custom CSS styles with lighter colors
  const customStyles = {
    p: { fontSize: 18 }, // Adjust the font size for paragraphs
    h1: { fontSize: 24, color: '#3498db' }, // Lighter blue color for h1
    h2: { fontSize: 22, color: '#27ae60' }, // Lighter green color for h2
    strong: { color: '#e74c3c' }, // Lighter red color for strong
    // Add more styles for other HTML elements as needed
  };

  return (
    <View style={styles.container}>
      <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <HTML source={{ html: chapterContent }} tagsStyles={customStyles} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F0F0F0',
  },
  scrollContainer: {
    paddingVertical: 16,
  },
});

export default ChapterScreen;
