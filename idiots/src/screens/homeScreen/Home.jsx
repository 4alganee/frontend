import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
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
import {SliderBox} from 'react-native-image-slider-box';
const screenWidth = Dimensions.get('window').width;

const DATA = {
  0: {
    author: 'BigBang GD',
    content:
      "Soft Tofu Yeul Rameon combines the silkiness of soft tofu with the hearty warmth of ramen. The dish features a flavorful broth, chewy noodles, and delicate pieces of soft tofu that soak up the flavors of the soup. The combination results in a soothing and wholesome bowl of ramen that's both comforting and satisfying, appealing to those who enjoy a softer and more delicate texture.",
    estimatedTime: '3m 30s',
    foodId: 2,
    id: 4,
    image: 'https://ottogi.okitchen.co.kr/pds/editor/227_3.jpg',
    isPublic: true,
    likes: 77,
    name: 'Soft Tofu Yeul Rameon',
    options: [
      {id: 16, recipeId: 4, title: 'Spiciness'},
      {id: 21, recipeId: 4, title: 'Saltiness'},
      {id: 26, recipeId: 4, title: 'Greasiness'},
      {id: 34, recipeId: 4, title: 'Savoriness'},
      {id: 39, recipeId: 4, title: 'Noodle Thickness'},
      {id: 50, recipeId: 4, title: 'Cheese'},
    ],
    price: '11000',
    reviews: [
      {
        content:
          "Soft Tofu Yeul Rameon is a remarkable fusion that artfully marries the tenderness of tofu with the heartiness of ramen. Its broth strikes a flawless balance between gentle umami and subtle spice, offering a comforting embrace. Soft tofu cubes melt in the mouth alongside chewy ramen noodles, creating a delightful texture symphony. Fresh vegetables add crunch, though a bit more spice would be welcome for heat-seekers. This dish is a testament to Korean culinary finesse, a harmonious blend of flavors and textures that's simply captivating.",
        id: 2,
        image:
          'https://recipe1.ezmember.co.kr/cache/recipe/2020/12/12/5f31bff6125f434b1d88bf69755b17c61_f.jpg',
        star: 4,
        user: [Object],
      },
      {
        content:
          "Soft Tofu Yeul Rameon skillfully combines the velvety softness of tofu with the heartiness of ramen, resulting in a comforting fusion dish that's both visually appealing and satisfying. The broth strikes a gentle balance between umami and subtle spiciness, creating a welcoming sensation. The delicate tofu cubes add a creamy texture that complements the chewy ramen noodles, while fresh vegetables provide a refreshing crunch. Although the spice level could be bolder for some, Soft Tofu Yeul Rameon stands as a testament to Korean culinary ingenuity, offering a uniquely delightful dining experience.",
        id: 1,
        image:
          'https://recipe1.ezmember.co.kr/cache/recipe/2020/12/12/5f31bff6125f434b1d88bf69755b17c61_f.jpg',
        star: 5,
        user: [Object],
      },
      {
        content:
          "Soft Tofu Yeul Rameon presents a delightful fusion of soft tofu's velvety charm and ramen's satisfying comfort. The broth strikes a gentle balance between umami and mild spiciness, embracing the palate in warmth. The tofu's creamy texture complements the chewy noodles, while fresh vegetables add a crispy touch. While the spice level caters to a wider audience, a bolder kick would elevate the experience. Soft Tofu Yeul Rameon captures the essence of Korean cuisine's finesse, delivering a balanced, flavorful, and satisfying bowl.",
        id: 3,
        image:
          'https://recipe1.ezmember.co.kr/cache/recipe/2020/12/12/5f31bff6125f434b1d88bf69755b17c61_f.jpg',
        star: 3,
        user: [Object],
      },
    ],
    starData: {average: 4, count: 3},
    tags: [],
  },
  1: {
    author: 'Baek Jong Won',
    content:
      "Baek Jong Won's Honey Tteok-bokki is a unique twist on the traditional Korean street food staple. Tteok-bokki, typically made with chewy rice cakes in spicy sauce, is reimagined with a sweet and savory honey glaze. The rice cakes retain their signature texture, while the honey glaze introduces a delightful contrast that's both indulgent and comforting. This fusion dish brings together the vibrant flavors of Korean cuisine with the timeless appeal of honey for a memorable gastronomic adventure.",
    estimatedTime: '13s',
    foodId: 1,
    id: 2,
    image:
      'https://menu.moneys.co.kr/moneyweek/thumb/2023/05/08/06/2023050820391322135_4.jpg',
    isPublic: true,
    likes: 129,
    name: "Baek Jong Won's Honey Tteok-bokki",
    options: [
      {id: 2, recipeId: 2, title: 'Spiciness'},
      {id: 5, recipeId: 2, title: 'Sweetness'},
      {id: 8, recipeId: 2, title: 'Saltiness'},
      {id: 11, recipeId: 2, title: 'Garliciness'},
      {id: 14, recipeId: 2, title: 'Greasiness'},
      {id: 32, recipeId: 2, title: 'Savoriness'},
      {id: 45, recipeId: 2, title: 'Tteok Thickness'},
      {id: 48, recipeId: 2, title: 'Cheese'},
    ],
    price: '13000',
    reviews: [],
    starData: {average: null, count: 0},
    tags: [{recipeTag: [Object]}, {recipeTag: [Object]}],
  },
};
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
  const ImgArray = {
    images: [
      require('../../../configs/assets/SoftTofu.png'),
      require('../../../configs/assets/sliderimg1.png'),
      require('../../../configs/assets/sliderimg2.png'),
      require('../../../configs/assets/sliderimg3.png'),
    ],
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <View style={(style = styles.advertise)}>
        <Text style={globalstyles.p4}>
          Get your 10% discount on your first order.
        </Text>
      </View>
      <View style={styles.wrapper}>
        <View>
          <Text style={globalstyles.h1}>We 💓 your food</Text>
          <Text style={globalstyles.h2}>
            Your fully customizable foods are here.
          </Text>
        </View>
        <SliderBox
          images={ImgArray.images}
          style={styles.imgwrapper}
          onCurrentImagePressed={index => {
            index < 2
              ? navigation.navigate('Detail', {
                  ...DATA[index],
                })
              : null;
          }}
        />
        <Text style={globalstyles.h1}>Menus</Text>
        <View style={styles.infoWrapper}>
          <View style={styles.rowwrapper}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Menu', {foodId: menu[0].id});
              }}>
              <View style={styles.menuWrapper}>
                <ImageBackground
                  source={require('../../../configs/assets/Tuckbokgi.png')}
                  style={styles.menuimg}
                />
                <Text style={globalstyles.h2_2}>Tteok-bokki</Text>
                <Text style={[globalstyles.p2, styles.content]}>
                  Your own korean taste.
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Menu', {foodId: menu[1].id});
              }}>
              <View style={styles.menuWrapper}>
                <ImageBackground
                  source={require('../../../configs/assets/Rameon.png')}
                  style={styles.menuimg}
                />
                <Text style={globalstyles.h2_2}>Rameon</Text>
                <Text style={[globalstyles.p2, styles.content]}>
                  Everyone loves this.
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.rowwrapper}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Menu', {foodId: menu[2].id});
              }}>
              <View style={styles.menuWrapper}>
                <ImageBackground
                  source={require('../../../configs/assets/Chicken.png')}
                  style={styles.menuimg}
                />
                <Text style={globalstyles.h2_2}>Chicken</Text>
                <Text style={[globalstyles.p2, styles.content]}>
                  Grab your hot chicken right away.
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Menu', {foodId: menu[3].id});
              }}>
              <View style={styles.menuWrapper}>
                <ImageBackground
                  source={require('../../../configs/assets/Coffee.png')}
                  style={styles.menuimg}
                />
                <Text style={globalstyles.h2_2}>Coffee</Text>
                <Text style={[globalstyles.p2, styles.content]}>
                  Get your coffee in a ner way.
                </Text>
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
    backgroundColor: '#FFC6C6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgwrapper: {
    width: 362 * width,
    height: 190 * height,
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
    color: '#7A7A7A',
  },
});
