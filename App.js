import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [greeting, setGreeting] = useState('');

  const showGreeting = () => {
    setGreeting('Hello, welcome to my sample React Native app!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sample React Native App</Text>
      <View style={styles.buttonContainer}>
        <Button title="Press Me" onPress={showGreeting} />
      </View>
      {greeting ? <Text style={styles.greeting}>{greeting}</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    margin: 10,
  },
  greeting: {
    marginTop: 20,
    fontSize: 18,
    color: 'green',
  },
});

export default App;
