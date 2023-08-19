import {useNavigation} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';

export const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button
        title="Menu"
        onPress={() => {
          navigation.navigate('Menu');
        }}
      />
    </View>
  );
};
