import {useNavigation} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';

export const Menu = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button
        title="Detail"
        onPress={() => {
          navigation.navigate('Detail');
        }}
      />
    </View>
  );
};
