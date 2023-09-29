import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
} from 'react-native';
import { saveOnboardingStatus, validateEmail } from '../utils';
import React, { useEffect, useState } from 'react';

export default function Onboarding() {
  let [email, setEmail] = useState('');
  let [name, setName] = useState('');
  let [isValidEmail, setIsValidEmail] = useState(false);
  let [isValidName, setIsValidName] = useState(false);
  const [isOnboardingCompleted, setIsOnboardingCompleted] = useState(false);

  useEffect(() => {
    async function saveOnboardingStatus() {
      try {
        await AsyncStorage.setItem(
          'isOnboardingCompleted',
          JSON.stringify(isOnboardingCompleted),
        );
      } catch (e) {
        console.error('Failed to save onboarding status.');
      }
    }

    saveOnboardingStatus();
  }, [isOnboardingCompleted]);

  const handleEmailChange = (text) => {
    setEmail(text);
    setIsValidEmail(validateEmail(text));
  };

  const handleNameChange = (text) => {
    setName(text);
    setIsValidName(validateName(text));
  };

  const validateName = (text) => {
    return text.length > 0;
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Image source={require('../assets/Logo.png')} style={styles.logo} />
      </View> */}
      <View style={styles.form}>
        <Text style={styles.main_text}>Let us get to know you</Text>
        <Text style={styles.text}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder='Type your first name here'
          onChangeText={handleNameChange}
          value={name}
        ></TextInput>
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder='Type your email here'
          onChangeText={handleEmailChange}
          value={email}
        ></TextInput>
      </View>
      <View style={styles.footer}>
        <Pressable
          style={[
            styles.button,
            isValidEmail && isValidName
              ? styles.buttonEnabled
              : styles.buttonDisabled,
          ]}
          onPress={() => setIsOnboardingCompleted(true)}
          disabled={!(isValidEmail && isValidName)}
        >
          <Text
            style={[
              styles.button_text,
              isValidEmail && isValidName
                ? styles.button_text_enabled
                : styles.button_text_disabled,
            ]}
          >
            Next
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
  main_text: {
    fontSize: 40,
    color: '#F4CE14',
    textAlign: 'center',
    marginBottom: 120,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    margin: 10,
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  form: {
    flex: 0.7,
    width: '100%',
    backgroundColor: '#495E57',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  header: {
    flex: 0.15,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginHorizontal: 10,
    resizeMode: 'contain',
  },
  footer: {
    flex: 0.15,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 20,
  },
  buttonEnabled: {
    backgroundColor: '#F4CE14',
  },
  buttonDisabled: {
    backgroundColor: '#d3d3d3',
  },
  button: {
    backgroundColor: '#d3d3d3',
    padding: 20,
    borderRadius: 10,
    textAlign: 'center',
    width: 100,
    opacity: 0.5,
  },
  button_text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  button_text_enabled: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  button_text_disabled: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
});
