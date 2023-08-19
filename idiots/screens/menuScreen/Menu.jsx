import {useNavigation} from '@react-navigation/native';
import {Button, StyleSheet, Text, View} from 'react-native';
import {globalstyles} from '../../configs/globalStyles';

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
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
