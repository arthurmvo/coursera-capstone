import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from './screens/Onboarding';
import Profile from './screens/Profile';
import SplashScreen from './screens/SplashScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function Header() {
  return (
    <View style={styles.header}>
      <Image source={require('./assets/Logo.png')} style={styles.logo} />
    </View>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOnboardingCompleted, setIsOnboardingCompleted] = useState(false);
  // This will run when the program initiates and perform an async task. While that, the isLoading value is true, so the splash screen will be shown.
  //When the task is done, the isLoading value is false, so the splash screen will be replaced by the onboarding screen.
  useEffect(() => {
    async function loadOnboardingStatus() {
      try {
        const value = await AsyncStorage.getItem('isOnboardingCompleted');
        if (value !== null) {
          setIsOnboardingCompleted(JSON.parse(value));
        }
      } catch (e) {
        console.error('Failed to load onboarding status.');
      } finally {
        setIsLoading(false);
      }
    }
    loadOnboardingStatus();
  }, []);
  //This condition runs everytime there is a change on the isLoading value. If the isLoading value is true, the splash screen will be shown.
  // useEffect(() => {
  if (isLoading) {
    // We haven't finished reading from AsyncStorage yet
    return <SplashScreen />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isOnboardingCompleted ? (
          <Stack.Screen name='Profile' component={Profile} />
        ) : (
          <Stack.Screen
            name='Onboarding'
            component={OnboardingScreen}
            options={{ headerTitle: (props) => <Header {...props} /> }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
  // }, [isLoading]);
}

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
  },
});
