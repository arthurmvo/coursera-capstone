import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { colors } from '../utils/colors';

export default function Hero({ setSearch, showSearch }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Little Lemon</Text>
      <Text style={styles.subtitle}>Chicago</Text>
      <View style={styles.imagecontainer}>
        <Text style={styles.description}>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </Text>
        <Image
          source={require('../assets/heroimage.png')}
          style={styles.heroimage}
        />
      </View>
      {showSearch && (
        <View style={styles.searchcontainer}>
          <Image
            source={require('../assets/searchIcon.png')}
            style={styles.searchicon}
          />
          <TextInput
            style={styles.search}
            placeholder='Search'
            onChangeText={setSearch}
          ></TextInput>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.GREEN,
    padding: 20,
    position: 'relative',
    overflow: 'hidden',
  },
  searchcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  search: {
    flex: 1,
    height: 50,
  },
  searchicon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  title: {
    fontSize: 60,
    color: colors.YELLOW,
    fontFamily: 'Markazi',
    marginTop: -20,
  },
  subtitle: {
    fontSize: 40,
    color: colors.GRAY,
    fontFamily: 'Markazi',
    marginTop: -20,
  },
  imagecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  description: {
    fontSize: 15,
    color: colors.GRAY,
    maxWidth: 200,
    fontFamily: 'Karla',
    marginTop: 10,
    marginBottom: 10,
  },
  heroimage: {
    height: 140,
    width: 120,
    marginTop: -30,
    borderRadius: 20,
  },
});
