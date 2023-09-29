import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
