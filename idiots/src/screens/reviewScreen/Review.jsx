import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  globalstyles,
  height,
  scale,
  width,
} from '../../../configs/globalStyles';

export const Review = props => {
  const recipe = props.route.params;
  const review = recipe.reviews;
  const starcount = [1, 2, 3, 4, 5];
  console.log(review);
  return (
    <View style={styles.container}>
      <View>
        <Text style={globalstyles.h2_2}>{recipe.reviews.length} Reviews</Text>
      </View>
      <ScrollView>
        {review.length > 0 ? (
          review.map((item, index) => {
            return (
              <View style={styles.contentwrapper} key={item.id}>
                <View style={styles.userReviewWrapper}>
                  <View style={styles.userInfoWrapper}>
                    <Image
                      source={{uri: item.user.image}}
                      style={styles.userIMG}
                    />
                    <View style={{justifyContent: 'center'}}>
                      <View style={styles.userProfileWrapper}>
                        <View style={styles.userNameWrapper}>
                          <Text style={globalstyles.h3}>{item.user.name}</Text>
                          <Text style={[globalstyles.p2, {color: '#888888'}]}>
                            2021.09.09
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={[styles.tag, globalstyles.p2]}>
                            ♥ {item.star}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <Text style={globalstyles.p1}>{item.content}</Text>
                </View>
                <Image source={{uri: item.image}} style={styles.foodIMG} />
              </View>
            );
          })
        ) : (
          <Text>리뷰가 없어요 😭</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F9',
    gap: 20 * scale,
    padding: 16 * scale,
  },
  totalScoreWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    height: 130 * height,
    borderRadius: 25 * scale,
    gap: 20 * scale,
  },
  scoresWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigScore: {
    fontSize: 70 * scale,
  },
  heartwrapper: {
    flexDirection: 'row',
    gap: 2 * scale,
  },
  border: {
    height: 100 * height,
    borderLeftWidth: 1,
    borderColor: '#D9D9D9',
  },
  detailReviewWrapper: {
    gap: 6 * scale,
  },
  detailReview: {
    flexDirection: 'row',
    width: 140 * width,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderWrapper: {
    flexDirection: 'row',
    gap: 10 * scale,
    alignItems: 'center',
  },
  selectButton: {
    backgroundColor: 'red',
    width: 40 * width,
    height: 24 * height,
  },
  contentwrapper: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20 * height,
    backgroundColor: 'white',
    borderRadius: 10 * scale,
    shadowOffset: {
      width: 0,
      height: 2 * scale,
    },
    shadowOpacity: 0.04,
    paddingHorizontal: 12 * scale,
    paddingVertical: 16 * scale,
    rowGap: 12 * scale,
  },
  foodIMG: {
    width: 160 * width,
    height: 160 * width,
    borderRadius: 10 * scale,
    alignItems: 'flex-start',
  },
  userReviewWrapper: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 338 * width,
    gap: 12 * width,
  },
  userInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10 * scale,
    width: '100%',
  },
  userIMG: {
    width: 48 * width,
    height: 48 * width,
  },
  userProfileWrapper: {
    height: 48 * height,
    justifyContent: 'center',
  },
  tag: {
    // backgroundColor: '#F2F2F2',
    color: '#FF3B30',
    padding: 5 * scale,
    borderRadius: 5 * scale,
  },
  userNameWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 6 * scale,
  },
});
