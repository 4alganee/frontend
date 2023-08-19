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
import {
  globalstyles,
  height,
  scale,
  width,
} from '../../../configs/globalStyles';

export const Detail = props => {
  const recipe = props.route.params;
  const review = recipe.reviews;
  const navigation = useNavigation();
  const imgSrc = {
    uri: recipe.image,
  };
  console.log(recipe);
  return (
    <View style={styles.container}>
      <View style={styles.backButton}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Menu', {foodId: recipe.foodId});
          }}>
          <Text style={[globalstyles.h2_3, styles.backText]}> {'<'} Back</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {/* <View>
          <View style={styles.backButton}>
            <TouchableOpacity onPress={() => {
              navigation.navigate('Menu', {foodId: recipe.foodId});
            }}>
              <Text style={[globalstyles.h2_3, styles.backText]}> {'<'} Back</Text>
            </TouchableOpacity>
          </View>
        </View> */}
        <View
          style={{
            height: 390 * height,
            width: 390 * width,
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingBottom: 16 * height,
          }}>
          <Image source={{uri: recipe.image}} style={styles.img} />
          <Image
            source={require('../../../configs/assets/Rectangle.png')}
            style={styles.img2}
          />
          <View style={styles.warpper}>
            <View style={styles.contentwrapper}>
              <View style={styles.headerwrapper}>
                <View style={styles.likedWrapper}>
                  <View style={styles.likedIMG}>
                    <Text style={[globalstyles.h3, {color: 'red'}]}>♥</Text>
                  </View>
                  <View style={styles.likedText}>
                    <Text style={globalstyles.h3}>{recipe.likes}</Text>
                  </View>
                </View>
                <View style={styles.titlewrapper}>
                  <Text style={[globalstyles.h1, {color: 'white'}]}>
                    {recipe.name}
                  </Text>
                </View>
                <View style={styles.tagwrapper}>
                  <View style={[styles.tag, {backgroundColor: '#65DAFF'}]}>
                    <Text style={[globalstyles.p1, {color: 'white'}]}>
                      {recipe.estimatedTime}
                    </Text>
                  </View>
                  {recipe.tags
                    ? recipe.tags.map((item, index) => {
                        return (
                          <View
                            key={index}
                            style={[styles.tag, {backgroundColor: '#FF6565'}]}>
                            <Text style={[globalstyles.p1, {color: 'white'}]}>
                              {item.recipeTag.name}
                            </Text>
                          </View>
                        );
                      })
                    : null}
                </View>
              </View>
              <View style={styles.infowrapper}>
                <Text numberOfLines={5} style={[globalstyles.h4, styles.text]}>
                  {recipe.content}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.reviecontentwrapper}>
          <View style={styles.showMoreReviewWrapper}>
            <Text style={globalstyles.h3}></Text>
            <TouchableOpacity>
              <Text
                style={[globalstyles.h3, {textDecorationLine: 'underline'}]}
                onPress={() => {
                  navigation.navigate('Review', recipe);
                }}>
                Show Reviews +
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.revielistwwrapper}>
            {review.length > 0 ? (
              review.map((item, index) => {
                return (
                  <View style={styles.reviewwrapper} key={item.id}>
                    <Image
                      source={{uri: item.user.image}}
                      style={styles.profileimg}
                    />
                    <View style={styles.reviewtextwrapper}>
                      <View style={{flexDirection: 'row'}}>
                        <View style={styles.likedIMG}>
                          <Text style={[globalstyles.h3, {color: 'red'}]}>
                            ♥
                          </Text>
                        </View>
                        <View
                          style={[styles.likedText, {marginRight: 4 * width}]}>
                          <Text style={globalstyles.h3}>{item.star}</Text>
                        </View>
                        <Text style={globalstyles.h3}>{item.user.name}</Text>
                      </View>
                      <Text numberOfLines={2} style={globalstyles.p1}>
                        {item.content}
                      </Text>
                    </View>
                  </View>
                );
              })
            ) : (
              <Text style={globalstyles.h3}>There is no review 😭</Text>
            )}
          </View>
        </View>
      </ScrollView>
      <View style={styles.submitwrapper}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate('Custom');
          }}>
          <Text style={globalstyles.p1}>Custom</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.submitbtn}
          onPress={() => {
            navigation.navigate('Order', {
              estimatedTime: recipe.estimatedTime,
              price: recipe.price,
              foodId: recipe.foodId,
            });
          }}>
          <Text style={globalstyles.p1}>{recipe.price}won Order!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F9',
  },
  backButton: {
    width: 125 * width,
    height: 42 * height,
    bottom: 700 * height,
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 8 * width,
  },
  backText: {
    color: 'white',
  },
  img: {
    height: 390 * height,
    width: 390 * width,
    position: 'absolute',
  },
  img2: {
    height: 390 * height,
    width: 390 * width,
    position: 'absolute',
  },
  warpper: {
    paddingHorizontal: 10 * width,
    marginTop: 20 * height,
  },
  contentwrapper: {
    rowGap: 14 * height,
  },
  headerwrapper: {
    rowGap: 12 * height,
  },
  titlewrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heartwrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5 * width,
  },
  tagwrapper: {
    flexDirection: 'row',
    columnGap: 10 * width,
  },
  tag: {
    backgroundColor: '#F2F2F2',
    paddingLeft: 12 * scale,
    paddingRight: 12 * scale,
    paddingTop: 6 * height,
    paddingBottom: 6 * height,
    borderRadius: 15 * scale,
  },
  infowrapper: {
    rowGap: 20 * height,
  },
  ingredient: {
    color: '#828282',
  },
  reviecontentwrapper: {
    rowGap: 10 * height,
    padding: 16 * scale,
  },
  showMoreReviewWrapper: {
    flexDirection: 'row',
    marginBottom: 4 * height,
  },
  revielistwwrapper: {
    rowGap: 10 * height,
  },
  reviewwrapper: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10 * width,
    columnGap: 15 * width,
    borderRadius: 10 * scale,
  },
  profileimg: {
    width: 50 * width,
    height: 50 * width,
    borderRadius: 50 * width,
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
  text: {
    color: 'white',
  },
  likedWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: -42 * scale,
    zIndex: 1,
    backgroundColor: 'white',
    borderRadius: 24 * scale,
    height: 36 * height,
    paddingHorizontal: 14 * scale,
  },
  likedIMG: {
    marginRight: 4 * scale,
    // height: 20 * height,
    // width: 20 * width,
    // backgroundColor: 'red',
  },
});
