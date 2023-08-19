import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {
  Button,
  Image,
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {globalstyles, height, scale, width} from '../../configs/globalStyles';

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
                  navigation.navigate('Detail', {foodId: item.recipeId});
                }}>
                <Image source={{uri: item.image}} style={styles.foodIMG} />
                <View style={styles.foodNameTag}>
                  <Text style={styles.foodName}>{item.name}</Text>
                  <View style={styles.likedWrapper}>
                    <Image style={styles.likedIMG} />
                    <Text>{item.starData.count}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }
        })
      ) : (
        <Text style={globalstyles.h1}>레시피가 없어요 😭</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  foodCardWrapper: {
    borderWidth: 1,
    margin: 10 * scale,
    borderRadius: 10 * scale,
  },
  foodIMG: {
    height: 180 * height,
    borderRadius: 10 * scale,
    backgroundColor: 'green',
    borderBottomWidth: 1,
  },
  foodNameTag: {
    height: 60 * height,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10 * scale,
    paddingRight: 10 * scale,
  },
  foodName: {
    fontSize: 20 * scale,
  },
  likedWrapper: {
    flexDirection: 'row',
  },
  likedIMG: {
    height: 20 * height,
    width: 20 * width,
    backgroundColor: 'red',
  },
});
