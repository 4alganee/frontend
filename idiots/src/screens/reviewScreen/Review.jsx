import {View, Text, Image} from 'react-native';
import {StyleSheet} from 'react-native';
import {
  globalstyles,
  height,
  scale,
  width,
} from '../../../configs/globalStyles';
import {ScrollView} from 'react-native';
import {useEffect, useState} from 'react';

export const Review = props => {
  const recipe = props.route.params;
  const review = recipe.reviews;
  const starcount = [1, 2, 3, 4, 5];
  console.log(review);
  return (
    <View style={styles.container}>
      <View style={styles.totalScoreWrapper}>
        <View style={styles.scoresWrapper}>
          <Text style={styles.bigScore}>4</Text>
          <View style={styles.heartwrapper}>
            {starcount.map((item, index) => {
              if (item <= review.star) {
                return (
                  <Text
                    style={[globalstyles.p2, {color: 'rgba(177, 177, 177, 1)'}]}
                    key={item}>
                    ♥
                  </Text>
                );
              } else {
                return (
                  <Text
                    key={item}
                    style={[
                      globalstyles.p2,
                      {color: '#rgba(255, 136, 130, 1)'},
                    ]}>
                    ♥
                  </Text>
                );
              }
            })}
          </View>
        </View>
        <View style={styles.border} />

        <View style={styles.detailReviewWrapper}>
          <View style={styles.detailReview}>
            <Text style={globalstyles.p1}>맛</Text>
            <View style={styles.heartwrapper}>
              <Text style={globalstyles.p2}>♥♥♥♥♥</Text>
              <Text style={globalstyles.p2}>5.0</Text>
            </View>
          </View>
          <View style={styles.detailReview}>
            <Text style={globalstyles.p1}>추천도</Text>
            <View style={styles.heartwrapper}>
              <Text style={globalstyles.p2}>♥♥♥♥♥</Text>
              <Text style={globalstyles.p2}>5.0</Text>
            </View>
          </View>
          <View style={styles.detailReview}>
            <Text style={globalstyles.p1}>시간 정확도</Text>
            <View style={styles.heartwrapper}>
              <Text style={globalstyles.p2}>♥♥♥♥♥</Text>
              <Text style={globalstyles.p2}>5.0</Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView>
        {review.length > 0 ? (
          review.map((item, index) => {
            return (
              <View style={styles.contentwrapper} key={item.id}>
                <Image source={{uri: item.image}} style={styles.foodIMG} />
                <View style={styles.userReviewWrapper}>
                  <View style={styles.userInfoWrapper}>
                    <Image
                      source={{uri: item.user.image}}
                      style={styles.userIMG}
                    />
                    <View style={styles.userProfileWrapper}>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={[styles.tag, globalstyles.p2]}>
                          10회 이상 구매
                        </Text>
                      </View>
                      <View style={styles.userNameWrapper}>
                        <Text style={globalstyles.h3}>{item.user.name}</Text>
                        <Text style={globalstyles.p2}>2021.09.09</Text>
                      </View>
                    </View>
                  </View>
                  <Text style={globalstyles.p1}>{item.content}</Text>
                </View>
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
    backgroundColor: 'white',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20 * height,
  },
  foodIMG: {
    width: 150 * width,
    height: 150 * width,
    backgroundColor: 'red',
    borderRadius: 20 * scale,
  },
  userReviewWrapper: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 200 * width,
    gap: 10 * width,
  },
  userInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10 * scale,
    width: '100%',
  },
  userIMG: {
    width: 50 * width,
    height: 50 * width,
    backgroundColor: 'blue',
  },
  userProfileWrapper: {
    height: 50 * height,
    justifyContent: 'space-between',
  },
  tag: {
    backgroundColor: '#F2F2F2',
    padding: 5 * scale,
    borderRadius: 5 * scale,
  },
  userNameWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 6 * scale,
  },
});
