import {useNavigation} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';

export const Detail = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Detail</Text>
      <Button
        title="Done"
        onPress={() => {
          navigation.navigate('Done');
        }}
      />
    </View>
  );
};
