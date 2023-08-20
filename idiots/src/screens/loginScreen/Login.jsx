import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  globalstyles,
  height,
  scale,
  width,
} from '../../../configs/globalStyles';

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
        <ImageBackground
          source={require('../../../configs/assets/Icon.png')}
          style={styles.logo}
        />
        <TextInput
          style={[styles.inputBox, globalstyles.p2]}
          onChangeText={text => setId(text)}
          autoCapitalize="none"
          placeholder="ID"
        />
        <TextInput
          style={[styles.inputBox, globalstyles.p2]}
          onChangeText={text => setPw(text)}
          autoCapitalize="none"
          secureTextEntry={true}
          placeholder="Password"
        />
        <TouchableOpacity
          title="submit"
          style={styles.button}
          onPress={() => {
            validate();
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={[
                globalstyles.p1,
                {color: '#fff', lineHeight: 32 * height},
              ]}>
              Sign In
            </Text>
          </View>
        </TouchableOpacity>
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
    alignItems: 'center',
    rowGap: 10 * height,
    marginTop: 100 * height,
  },
  logo: {
    width: 124 * scale,
    height: 124 * scale,
    marginBottom: 64 * scale,
  },
  inputBox: {
    width: 300 * width,
    height: 38 * height,
    borderColor: '#727272',
    borderWidth: 1 * scale,
    borderRadius: 10 * scale,
    paddingLeft: 16 * scale,
  },
  button: {
    width: 300 * width,
    height: 38 * height,
    borderRadius: 10 * scale,
    backgroundColor: '#FF4949',
  },
});
