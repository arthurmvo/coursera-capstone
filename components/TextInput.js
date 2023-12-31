import React from 'react';
import { Text, TextInput, View } from 'react-native';

export default function CustomTextInput({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  ...args
}) {
  return (
    <View>
      <Text
        style={{
          marginBottom: 5,
          fontSize: 10,
          fontWeight: 'bold',
          color: 'gray',
        }}
      >
        {label}
      </Text>
      <TextInput
        style={{
          padding: 10,
          borderRadius: 10,
          borderColor: 'lightgray',
          borderWidth: 1,
        }}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        {...args}
      />
    </View>
  );
}
