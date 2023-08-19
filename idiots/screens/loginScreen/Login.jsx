import {View, TextInput, StyleSheet, Image, Button, Alert} from 'react-native';
import { width, height } from '../../configs/globalStyles';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


export const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const validate = () => {
    if (id !== 'admin' || password !== 'admin1234') {
      Alert.alert('아이디 또는 비밀번호가 일치하지 않습니다')
    }
    else {
      navigation.navigate('Home');
    }

  }
  return (
    <View style={styles.container}>
      <View style={styles.loginWrapper}>
        <View style={styles.logo}/>
        <TextInput 
          style={styles.inputBox} 
          placeholder="아이디를 입력하세요."
          value={id}
          onChangeText={text => setId(text)}
          keyboardType="ascii-capable"  
          autoCapitalize='none'
        />
        <TextInput 
          style={styles.inputBox}
          placeholder="비밀번호를 입력하세요."
          value={password}
          onChangeText={text => setPassword(text)}
          keyboardType="ascii-capable"
          autoCapitalize='none'
        />
        <Button title="submit" style={styles.buttin} onPress={validate}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "column",
  },
  loginWrapper: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 10 * height,
  },
  logo: {
    width: 50 * width,
    height: 50 * width,
    backgroundColor: "black",
  },
  inputBox: {
    width: 300 * width,
    height: 50 * height,
    backgroundColor: "gray",
  },
  button: {
    width: 300 * width,
    height: 50 * height,
    backgroundColor: "black",
  }
})