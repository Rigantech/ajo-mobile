import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Text from "./Text"
const Input = ({ label, placeholder, value, onChangeText, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    padding: 10,
    borderColor: '#7F38FF',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default Input;