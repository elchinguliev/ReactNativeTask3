import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const LoginPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = async () => {
    try {
      // Simulating a login process
      if (!name || !email) {
        throw new Error('Name and email are required!');
      }
      
      // If login is successful (simulated success)
      console.log("Login successful!",name,email);
      Alert.alert("Success", "You have logged in successfully!");
      
    } catch (error) {
      // Handle any error during login
      console.log("Login failed!", error);
      Alert.alert("Error");
      
    } finally {
      // Process finished
      Alert.alert("Process Complete", "The login process has finished.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
      />
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} color="#007AFF" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
  },
});

export default LoginPage;
