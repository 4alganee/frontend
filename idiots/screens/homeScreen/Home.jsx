import {useNavigation} from '@react-navigation/native';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {globalstyles, height, scale, width} from '../../configs/globalStyles';

export const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={globalstyles.h1}>
          안녕하세요 오늘의 먹보님 오늘 키의 순두부 라면이 업데이트 되었어요!
        </Text>
        <View style={styles.imgwrapper} />
        <Text style={globalstyles.h1}>추천 메뉴</Text>
        <View style={styles.menuwrapper}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Menu');
            }}
            style={styles.menu}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Menu');
            }}
            style={styles.menu}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Menu');
            }}
            style={styles.menu}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Menu');
            }}
            style={styles.menu}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16 * scale,
    backgroundColor: 'white',
  },
  wrapper: {
    rowGap: 10 * height,
  },
  imgwrapper: {
    height: 300,
    width: '100%',
    backgroundColor: 'red',
  },
  menuwrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menu: {
    height: 70 * height,
    width: 70 * width,
    backgroundColor: 'gray',
  },
});
