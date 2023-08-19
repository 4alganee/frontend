import {useNavigation} from '@react-navigation/native';
import {View, TextInput, StyleSheet, Button, Alert} from 'react-native';
import {height, width} from '../../../configs/globalStyles';
import { useState } from 'react';

export const Login = () => {
  const navigation = useNavigation();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const validate = () => {
    if (id !== 'admin' || pw !== 'admin1234') {
      Alert.alert('아이디 또는 비밀번호가 일치하지 않습니다.');
    } else {
      navigation.navigate('BottomTab');
    }
  };
    
  return (
    <View style={styles.container}>
      <View style={styles.loginWrapper}>
        <View style={styles.logo} />
        <TextInput 
          style={styles.inputBox} 
          onChangeText={text => setId(text)}
          autoCapitalize='none'
        />
        <TextInput 
          style={styles.inputBox} 
          onChangeText={text => setPw(text)}
          autoCapitalize='none'
          secureTextEntry={true}
        />
        <Button
          title="submit"
          onPress={() => {
            validate();
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
