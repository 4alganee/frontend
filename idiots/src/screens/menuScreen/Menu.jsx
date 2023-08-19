import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {globalstyles, height, scale} from '../../../configs/globalStyles';

export const Menu = props => {
  const foodId = props.route.params;
  const navigation = useNavigation();
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(false);
    const response = await axios
      .get('http://34.64.111.128:3000/recipe')
      .then(setLoading(true))
      .catch(err => {
        setLoading(false);
      });
    setRecipe(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(foodId)
  return (
    <ScrollView style={styles.container}>
      {loading ? (
        recipe.map((item, index) => {
          if (item.foodId === foodId.foodId) {
            return (
              <TouchableOpacity
                key={item.id}
                style={styles.foodCardWrapper}
                onPress={() => {
                  navigation.navigate('Detail', item);
                }}>
                <View style={styles.likedWrapper}>
                  <View style={styles.likedIMG}>
                    <Text style={[globalstyles.h3, {color: 'red'}]}>♥</Text>
                  </View>
                  <View style={styles.likedText}>
                    <Text style={globalstyles.h3}>{item.likes}</Text>
                  </View>
                </View>
                <Image source={{uri: item.image}} style={styles.foodIMG} />
                <View style={styles.foodNameTag}>
                  <Text style={styles.foodName}>{item.name}</Text>
                </View>
                <View style={styles.recipeContent}>
                  <Text style={styles.recipeContentText} numberOfLines={2}>
                    {item.content}
                  </Text>
                  <View style={styles.estimatedTimeWrapper}>
                    <View style={styles.estimatedTimeText}>
                      <Text
                        style={[globalstyles.p2, {lineHeight: 24 * height}]}>
                        {item.estimatedTime}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }
        })
      ) : (
        <Text style={globalstyles.h1}>There is no Recipes 😭</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F6F6F9',
  },
  foodCardWrapper: {
    backgroundColor: 'white',
    borderRadius: 14 * scale,
    shadowOffset: {
      width: 0,
      height: 2 * scale,
    },
    shadowOpacity: 0.04,
    margin: 10 * scale,
  },
  foodIMG: {
    height: 180 * height,
    borderRadius: 10 * scale,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: 'green',
    borderBottomWidth: 1,
  },
  foodNameTag: {
    // height: 30 * height,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16 * scale,
    paddingLeft: 10 * scale,
    paddingRight: 10 * scale,
  },
  foodName: {
    fontSize: 18 * scale,
    fontWeight: '700',
  },
  likedWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 20 * scale,
    left: 20 * scale,
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
  recipeContent: {
    // height: 100 * height,
    // width: 330 * width,
    rowGap: 12 * scale,
    paddingHorizontal: 10 * scale,
    paddingBottom: 18 * scale,
  },
  recipeContentText: {
    fontSize: 14 * scale,
    fontWeight: '500',
    color: '#575757',
  },
  estimatedTimeWrapper: {
    flexDirection: 'row',
  },
  estimatedTimeText: {
    color: '#575757',
    paddingHorizontal: 10 * scale,
    height: 24 * height,
    borderRadius: 8 * scale,
    backgroundColor: '#D2D2D2',
  },
});
