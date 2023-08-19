import {useNavigation} from '@react-navigation/native';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {globalstyles, height, scale, width} from '../../configs/globalStyles';

export const Detail = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.img} />
        <View style={styles.warpper}>
          <View style={styles.contentwrapper}>
            <View style={styles.headerwrapper}>
              <View style={styles.titlewrapper}>
                <Text style={globalstyles.h1}>나래's 아이스크림</Text>
                <View style={styles.heartwrapper}>
                  <Text style={globalstyles.h1}>♥</Text>
                  <Text style={globalstyles.p2}>+24</Text>
                </View>
              </View>
              <View style={styles.tagwrapper}>
                <View style={styles.tag}>
                  <Text style={styles.p1}>5분이내 완료</Text>
                </View>
                <View style={styles.tag}>
                  <Text style={styles.p1}>쌀떡</Text>
                </View>
              </View>
            </View>
            <View style={styles.infowrapper}>
              <Text style={globalstyles.p1}>
                나 혼자 산다에 나온 박**의나 혼자 산다에 나온 박**의 파인애플
                아이스크림.파인애플 아이스크림.나 혼자 산다에 나온 박**의
                파인애플 아이스크림.
              </Text>
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
              <View style={styles.showMoreReviewWrapper}>
                <Text style={globalstyles.h3}>메뉴 리뷰 더보기</Text>
                <TouchableOpacity>
                  <Text style={globalstyles.h3} onPress={() => {
          navigation.navigate('Review');
        }}> + </Text>
                </TouchableOpacity>
              </View>
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
    backgroundColor: 'gray',
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
    width: 50 * width,
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
    rowGap: 10 * height,
  },
  ingredient: {
    color: '#828282',
  },
  reviecontentwrapper: {
    rowGap: 10 * height,
  },
  showMoreReviewWrapper: {
    flexDirection: 'row',
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
