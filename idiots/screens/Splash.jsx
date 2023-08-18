import {useNavigation} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';

export const Splash = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
      <Button
        title="Home"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};
