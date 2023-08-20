import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {
  globalstyles,
  height,
  scale,
  width,
} from '../../../configs/globalStyles';
import {SliderBox} from 'react-native-image-slider-box';
export const Mypage = () => {
  const ImgArray = {
    images: [
      require('../../../configs/assets/img1.png'),
      require('../../../configs/assets/img2.png'),
      require('../../../configs/assets/img3.png'),
      require('../../../configs/assets/img4.png'),
      require('../../../configs/assets/img5.png'),
    ],
  };
  return (
    <View style={style.container}>
      <View style={style.wrapper}>
        <Text style={globalstyles.h1}>Your time with L💓VOTs</Text>
      </View>
      <ImageBackground
        source={require('../../../configs/assets/frame.png')}
        style={style.imageBackground}>
        <SliderBox
          images={ImgArray.images}
          style={style.imgwrapper}
          onCurrentImagePressed={index => {
            index < 2
              ? navigation.navigate('Detail', {
                  ...DATA[index],
                })
              : null;
          }}
        />
      </ImageBackground>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    rowGap: 16 * scale,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    width: 377.11 * width,
    height: 595.69 * height,
    justifyContent: 'center',
  },
  imgwrapper: {
    left: 60 * width,
    width: 300 * width,
    height: 550 * height,
    borderRadius: 20 * scale,
  },
});
