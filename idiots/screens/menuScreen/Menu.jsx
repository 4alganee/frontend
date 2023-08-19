import {useNavigation} from '@react-navigation/native';
import {Button, Image, View, StyleSheet, ScrollView, Text, TouchableOpacity} from 'react-native';
import { height, scale, width } from '../../configs/globalStyles';

export const Menu = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.foodCardWrapper} onPress={() => {
          navigation.navigate('Detail');
        }}>
        <Image style={styles.foodIMG}/>
        <View style={styles.foodNameTag}>
          <Text style={styles.foodName}>Food Name</Text>
          <View style={styles.likedWrapper}>
            <Image style={styles.likedIMG}/>
            <Text>100</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.foodCardWrapper} onPress={() => {
          navigation.navigate('Detail');
        }}>
        <Image style={styles.foodIMG}/>
        <View style={styles.foodNameTag}>
          <Text style={styles.foodName}>Food Name</Text>
          <View style={styles.likedWrapper}>
            <Image style={styles.likedIMG}/>
            <Text>100</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.foodCardWrapper} onPress={() => {
          navigation.navigate('Detail');
        }}>
        <Image style={styles.foodIMG}/>
        <View style={styles.foodNameTag}>
          <Text style={styles.foodName}>Food Name</Text>
          <View style={styles.likedWrapper}>
            <Image style={styles.likedIMG}/>
            <Text>100</Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  foodCardWrapper: {
    borderWidth: 1,
    margin: 10 * scale,
    borderRadius: 10 * scale,
  },
  foodIMG: {
    height: 180 * height,
    backgrouNdColor: "green",
    borderBottomWidth: 1,
  },
  foodNameTag: {
    height: 60 * height,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10 * scale,
    paddingRight: 10 * scale,
  },
  foodName: {
    fontSize: 20 * scale,
  },
  likedWrapper: {
    flexDirection: "row",
  },
  likedIMG: {
    height: 20 * height,
    width: 20 * width,
    backgroundColor: "red",
  }
})