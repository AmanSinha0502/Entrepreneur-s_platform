// MatchesScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const MatchesScreen = ({ userId }) => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch(`http://your-backend-url/match/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setMatches(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={matches}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.matchItem}>
            <Text>Name: {item.name}</Text>
            <Text>Offering: {item.offering}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  matchItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
});

export default MatchesScreen;
