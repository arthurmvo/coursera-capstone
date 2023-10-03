import AsyncStorage from '@react-native-async-storage/async-storage';
import { resetDatabase } from '../db';

export default reset = async () => {
  try {
    await AsyncStorage.clear();
    await resetDatabase();
    alert('App Async Storage & DB Reset. Please restart the app.');
  } catch (e) {
    alert('Error resetting DB and AsyncStorage...');
  }
};
