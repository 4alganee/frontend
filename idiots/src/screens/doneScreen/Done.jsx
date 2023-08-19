import {useNavigation} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';

export const Done = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Done</Text>
    </View>
  );
};
