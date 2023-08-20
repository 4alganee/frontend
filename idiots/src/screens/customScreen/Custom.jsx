import {useMemo, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import RadioGroup from 'react-native-radio-buttons-group';
import {
  globalstyles,
  height,
  scale,
  width,
} from '../../../configs/globalStyles';
import {comma} from '../../../util';

const Radio = () => {
  const [selectedId, setSelectedId] = useState();
  const radioButtons = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'LV1',
        value: 'option1',
        size: 18 * scale,
        containerStyle: {
          width: 358 * width,
          borderBottomColor: '#F0F0F0',
          borderTopWidth: 0,
          borderRightWidth: 0,
          borderLeftWidth: 0,
          borderWidth: 1,
          height: 42 * height,
        },
      },
      {
        id: '2',
        label: 'LV2',
        value: 'option2',
        size: 18 * scale,
        containerStyle: {
          width: 358 * width,
          borderBottomColor: '#F0F0F0',
          borderTopWidth: 0,
          borderRightWidth: 0,
          borderLeftWidth: 0,
          borderWidth: 1,
          height: 42 * height,
        },
      },
      {
        id: '3',
        label: 'LV3',
        value: 'option3',
        size: 18 * scale,
        containerStyle: {
          width: 358 * width,
          borderBottomColor: '#F0F0F0',
          borderTopWidth: 0,
          borderRightWidth: 0,
          borderLeftWidth: 0,
          borderWidth: 1,
          height: 42 * height,
        },
      },
    ],
    [],
  );
  return (
    <View style={styles.optionsWrapper}>
      {/* <Touchable> */}
      <RadioGroup
        radioButtons={radioButtons}
        onPress={setSelectedId}
        selectedId={selectedId}
      />
      {/* </Touchable> */}
    </View>
  );
};

export const Custom = props => {
  const recipe = props.route.params.recipe;
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={{uri: recipe.image}} style={styles.img} />
      </View>
      <View style={styles.contentWrapper}>
        <Text style={globalstyles.h1}>{recipe.name}</Text>
        <View style={{width: '100%'}}>
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
        <ScrollView>
          <View style={styles.infowrapper}>
            {recipe.options.length > 0
              ? recipe.options.map((item, index) => {
                  return (
                    <View key={index}>
                      <View style={styles.optionTitleWrapper}>
                        <View>
                          <Text style={globalstyles.h1_2}>{item.title}</Text>
                        </View>
                        <View style={styles.requiredWrapper}>
                          <Text style={[globalstyles.p2, {color: '#EEA42E'}]}>
                            Required
                          </Text>
                        </View>
                      </View>
                      <View style={styles.radioWrapper}>
                        <Radio />
                      </View>
                    </View>
                  );
                })
              : null}
          </View>
          <View style={styles.buttonwrapper}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate('Custom');
              }}>
              <Text style={[globalstyles.p1, {color: 'white'}]}>
                ₩{comma(recipe.price)} Place Order
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      {/* {recipe.image && ( */}
      {/* )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  img: {
    height: 164 * height,
    width: 390 * width,
    position: 'absolute',
  },
  imageWrapper: {
    height: 164 * height,
    width: 390 * width,
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
  contentWrapper: {
    backgroundColor: 'white',
    paddingHorizontal: 10 * width,
    paddingTop: 12 * height,
    rowGap: 8 * height,
  },
  optionTitleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  requiredWrapper: {
    backgroundColor: '#FEF0DB',
    borderRadius: 15 * scale,
    paddingHorizontal: 10 * width,
    paddingVertical: 5 * height,
  },
  optionsWrapper: {
    alignItems: 'flex-start',
  },
  button: {
    backgroundColor: '#FF6565',
    borderRadius: 10 * scale,
    width: 358 * width,
    height: 42 * height,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10 * height,
    marginBottom: 300 * height,
  },
});
