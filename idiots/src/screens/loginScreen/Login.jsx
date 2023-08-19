import {useNavigation} from '@react-navigation/native';
import {View, TextInput, StyleSheet, Button} from 'react-native';
import {height, width} from '../../../configs/globalStyles';

export const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.loginWrapper}>
        <View style={styles.logo} />
        <TextInput style={styles.inputBox} />
        <TextInput style={styles.inputBox} />
        <Button
          title="input button"
          onPress={() => {
            navigation.navigate('BottomTab');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
  },
  loginWrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 10 * height,
  },
  logo: {
    width: 50 * width,
    height: 50 * width,
    backgroundColor: 'black',
  },
  inputBox: {
    width: 300 * width,
    height: 50 * height,
    backgroundColor: 'gray',
  },
  button: {
    width: 300 * width,
    height: 50 * height,
    backgroundColor: 'black',
  },
});
