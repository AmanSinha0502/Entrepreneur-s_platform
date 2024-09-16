// RegistrationForm.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessType: '',
    offering: '',
    asking: ''
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Submit data to the backend
    fetch('http://your-backend-url/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Name"
        value={formData.name}
        onChangeText={(value) => handleChange('name', value)}
        style={styles.input}
      />
      <TextInput
        placeholder="Business Type"
        value={formData.businessType}
        onChangeText={(value) => handleChange('businessType', value)}
        style={styles.input}
      />
      <TextInput
        placeholder="Offering (What can I give?)"
        value={formData.offering}
        onChangeText={(value) => handleChange('offering', value)}
        style={styles.input}
      />
      <TextInput
        placeholder="Asking (What do I need?)"
        value={formData.asking}
        onChangeText={(value) => handleChange('asking', value)}
        style={styles.input}
      />
      <Button title="Register" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default RegistrationForm;
