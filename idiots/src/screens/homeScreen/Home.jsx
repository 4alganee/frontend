import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  globalstyles,
  height,
  scale,
  width,
} from '../../../configs/globalStyles';

export const Home = () => {
  const navigation = useNavigation();
  const [menu, setMenu] = useState([]); // [
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(false);
    const response = await axios
      .get('http://34.64.111.128:3000/food')
      .then(setLoading(true))
      .catch(err => {
        setLoading(false);
      });
    setMenu(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={globalstyles.h1}>
          안녕하세요 오늘의 먹보님 오늘 키의 순두부 라면이 업데이트 되었어요!
        </Text>
        <View style={styles.imgwrapper} />
        <Text style={globalstyles.h1}>추천 메뉴</Text>
        <View style={styles.menuwrapper}>
          {loading ? (
            menu.map((item, index) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => {
                    navigation.navigate('Menu', {foodId: item.id});
                  }}>
                  <View style={styles.menu}>
                    <Image source={{uri: item.image}} style={styles.menuimg} />
                    <Text style={globalstyles.h3}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              );
            })
          ) : (
            <Text style={globalstyles.h1}>
              주문 할 수 있는 식당이 없어요 😭
            </Text>
          )}
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
    alignItems: 'center',
    columnGap: 10 * width,
  },
  menu: {
    height: 100 * height,
    width: 100 * width,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 10 * height,
  },
  menuimg: {
    width: 80 * width,
    height: 80 * height,
    borderRadius: 50 * scale,
  },
});
