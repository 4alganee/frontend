import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  FlatList,
  ImageBackground
} from 'react-native';
import {
  globalstyles,
  height,
  scale,
  width,
} from '../../../configs/globalStyles';

const screenWidth = Dimensions.get('window').width;

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
      <View style={style=styles.advertise}>
        <Text style={globalstyles.p4}>
          Get your 10% discount on your first order.
        </Text>
      </View>
      <View style={styles.wrapper}>
        <View>
          <Text style={globalstyles.h1}>
            We 💓 your food
          </Text>
          <Text style={globalstyles.h2}>
            Your fully customizable foods are here.
          </Text>
        </View> 
        <ScrollView>
          <Image 
            source={require('../../../configs/assets/SoftTofu.png')}
            style={styles.imgwrapper}
          />
        </ScrollView>
        <Text style={globalstyles.h1}>Menus</Text>
        <View style={styles.infoWrapper}>
          <View style={styles.rowwrapper}>
            <TouchableOpacity onPress={() => {
                  navigation.navigate('Menu', {foodId: menu[0].id});
                }}>
              <View style={styles.menuWrapper}>
                <ImageBackground
                  source={require('../../../configs/assets/Tuckbokgi.png')}
                  style={styles.menuimg}
                />
                <Text style={globalstyles.h2_2}>Tteok-bokki</Text>
                <Text style={[globalstyles.p2, styles.content]}>Your own korean taste.</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                  navigation.navigate('Menu', {foodId: menu[1].id});
                }}>
              <View style={styles.menuWrapper}>
                <ImageBackground 
                  source={require('../../../configs/assets/Rameon.png')}
                  style={styles.menuimg}
                />
                <Text style={globalstyles.h2_2}>Rameon</Text>
                <Text style={[globalstyles.p2, styles.content]}>Everyone loves this.</Text>
              </View>
            </TouchableOpacity >
          </View>
          <View style={styles.rowwrapper}>
            <TouchableOpacity onPress={() => {
                  navigation.navigate('Menu', {foodId: menu[2].id});
                }}>
              <View style={styles.menuWrapper}>
                <ImageBackground
                  source={require('../../../configs/assets/Chicken.png')}
                  style={styles.menuimg}
                />
                <Text style={globalstyles.h2_2}>Chicken</Text>
                <Text style={[globalstyles.p2, styles.content]}>Grab your hot chicken right away.</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                  navigation.navigate('Menu', {foodId: menu[3].id});
                }}>
              <View style={styles.menuWrapper}>
                <ImageBackground
                  source={require('../../../configs/assets/Coffee.png')}
                  style={styles.menuimg}
                />
                <Text style={globalstyles.h2_2}>Coffee</Text>
                <Text style={[globalstyles.p2, styles.content]}>Get your coffee in a ner way.</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F9',
  },
  wrapper: {
    rowGap: 8 * height,
    padding: 14 * scale,
  },
  advertise: {
    height: 32 * height,
    width: '100%',
    backgroundColor: "#FFC6C6",
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgwrapper: {
    width: "100%",
    height: screenWidth * (180 / 362),
    resizeMode: 'contain',
  },
  infoWrapper: {
    width: '100%',
    rowGap: 14 * width,
  },
  rowwrapper: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    width: '100%',
    gap: 14 * width,
  },
  menuWrapper: {
    width: 174 * width,
    height: 148 * height,
    overflow: 'hidden',
    paddingTop: 12 * height,
    paddingLeft: 14 * width,
    backgroundColor: '#FFFFFF',
    borderRadius: 18 * scale,
  },
  menu: {
    height: 200 * height,
    width: 200 * width,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 10 * height,
  },
  menuimg: {
    position: 'absolute',
    width: 136 * width,
    height: 136 * height,
    top: 40 * height,
    left: 60 * width,
    resizeMode: 'fill',
  },
  content: {
    width: 91 * width,
    color: "#7A7A7A"
  }
});
