import {useNavigation} from '@react-navigation/native';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {globalstyles, height, scale, width} from '../../configs/globalStyles';

export const Detail = props => {
  const recipe = props.route.params;
  const navigation = useNavigation();
  const imgSrc = {
    uri: recipe.image,
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={{uri: recipe.image}} style={styles.img} />
        <View style={styles.warpper}>
          <View style={styles.contentwrapper}>
            <View style={styles.headerwrapper}>
              <View style={styles.titlewrapper}>
                <Text style={globalstyles.h1}>{recipe.name}</Text>
                <View style={styles.heartwrapper}>
                  <Text style={globalstyles.h1}>♥</Text>
                  <Text style={globalstyles.p2}>{recipe.likes}</Text>
                </View>
              </View>
              <View style={styles.tagwrapper}>
                <View style={styles.tag}>
                  <Text style={styles.p1}>{recipe.estimatedTime}</Text>
                </View>
                <View style={styles.tag}>
                  <Text style={styles.p1}>쌀떡</Text>
                </View>
              </View>
            </View>
            <View style={styles.infowrapper}>
              <Text style={globalstyles.p1}>{recipe.content}</Text>
              <View style={styles.ingredientwrapper}>
                <Text style={[globalstyles.p2, styles.ingredient]}>
                  1인분 기준
                </Text>
                <Text style={[globalstyles.p2, styles.ingredient]}>
                  재료 쌀떡 300g, 파10g, 마늘10g, 고추장 50g
                </Text>
              </View>
            </View>
            <View style={styles.reviecontentwrapper}>
              <Text style={globalstyles.h3}>메뉴 리뷰 더보기 +</Text>
              <View style={styles.revielistwwrapper}>
                <View style={styles.reviewwrapper}>
                  <View style={styles.profileimg} />
                  <View style={styles.reviewtextwrapper}>
                    <Text style={globalstyles.h3}>♥ + 새우 통다리</Text>
                    <Text style={globalstyles.p1}>
                      떡이 쫄깃 쫄깃 너무 맛있어요!, 떡이 쫄깃 쫄깃 너무
                      맛있어요! 떡이 쫄깃 쫄깃 너무 맛있어요!떡이 쫄깃 쫄깃 너무
                      맛있어요!, 떡이 쫄깃 쫄깃 너무
                    </Text>
                  </View>
                </View>
                <View style={styles.reviewwrapper}>
                  <View style={styles.profileimg} />
                  <View style={styles.reviewtextwrapper}>
                    <Text style={globalstyles.h3}>♥ + 새우 통다리</Text>
                    <Text style={globalstyles.p1}>
                      떡이 쫄깃 쫄깃 너무 맛있어요!, 떡이 쫄깃 쫄깃 너무
                      맛있어요! 떡이 쫄깃 쫄깃 너무 맛있어요!떡이 쫄깃 쫄깃 너무
                      맛있어요!, 떡이 쫄깃 쫄깃 너무
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.submitwrapper}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate('Custom');
          }}>
          <Text style={globalstyles.p1}>커스텀</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.submitbtn}
          onPress={() => {
            navigation.navigate('Order');
          }}>
          <Text style={globalstyles.p1}>12,000 주문하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  img: {
    height: 250 * height,
  },
  warpper: {
    paddingHorizontal: 10 * width,
    marginTop: 20 * height,
  },
  contentwrapper: {
    rowGap: 30 * height,
  },
  headerwrapper: {
    rowGap: 10 * height,
  },
  titlewrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heartwrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    columnGap: 5 * width,
  },
  tagwrapper: {
    flexDirection: 'row',
    columnGap: 10 * width,
  },
  tag: {
    backgroundColor: '#F2F2F2',
    padding: 5 * scale,
    borderRadius: 5 * scale,
  },
  infowrapper: {
    rowGap: 20 * height,
  },
  ingredient: {
    color: '#828282',
  },
  reviecontentwrapper: {
    rowGap: 10 * height,
  },
  revielistwwrapper: {
    rowGap: 10 * height,
  },
  reviewwrapper: {
    height: 70 * height,
    backgroundColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10 * width,
    columnGap: 15 * width,
  },
  profileimg: {
    width: 50 * width,
    height: 50 * width,
    borderRadius: 50 * width,
    backgroundColor: 'red',
  },
  reviewtextwrapper: {
    width: 280 * width,
    rowGap: 5 * height,
  },
  submitwrapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: 10 * width,
    padding: 10 * scale,
    borderRadius: 10 * scale,
  },
  btn: {
    backgroundColor: '#F2F2F2',
    width: 100 * width,
    height: 45 * height,
    borderRadius: 10 * scale,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitbtn: {
    backgroundColor: '#FFD600',
    width: 250 * width,
    height: 45 * height,
    borderRadius: 10 * scale,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
