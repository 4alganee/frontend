import {Dimensions, StyleSheet} from 'react-native';
const FIGMA_WINDOW_WIDTH = 390;
const FIGMA_WINDOW_HEIGHT = 844;
const FIGMA_SCALE = Math.sqrt(FIGMA_WINDOW_WIDTH * FIGMA_WINDOW_HEIGHT);
const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;
export const fonts = {};
export const width = WIDTH / FIGMA_WINDOW_WIDTH;
export const height = HEIGHT / FIGMA_WINDOW_HEIGHT;
export const scale = Math.sqrt(WIDTH * HEIGHT) / FIGMA_SCALE;
export const globalstyles = StyleSheet.create({
  h1: {
    fontSize: 24 * scale,
    fontWeight: '700',
    fontFamily: 'SUITVariable-Regular',
  },
  h1_2: {
    fontSize: 20 * scale,
    fontWeight: '600',
    fontFamily: 'SUITVariable-Regular',
  },
  h2: {
    fontSize: 18 * scale,
    fontWeight: '600',
    fontFamily: 'SUITVariable-Regular',
  },
  h2_2: {
    fontSize: 18 * scale,
    fontWeight: '700',
    fontFamily: 'SUITVariable-Regular',
  },
  h2_3: {
    fontSize: 18 * scale,
    fontWeight: '500',
    fontFamily: 'SUITVariable-Regular',
  },
  h3: {
    fontSize: 16 * scale,
    fontWeight: '700',
    fontFamily: 'SUITVariable-Regular',
  },
  h3_2: {
    fontSize: 16 * scale,
    fontWeight: '600',
    fontFamily: 'SUITVariable-Regular',
  },
  h4: {
    fontSize: 14 * scale,
    fontWeight: '700',
    fontFamily: 'SUITVariable-Regular',
  },
  h5: {
    fontSize: 12 * scale,
    fontWeight: '700',
    fontFamily: 'SUITVariable-Regular',
  },
  p1: {
    fontSize: 14 * scale,
    fontWeight: '500',
    fontFamily: 'SUITVariable-Regular',
  },
  p2: {
    fontSize: 12 * scale,
    fontWeight: '500',
    fontFamily: 'SUITVariable-Regular',
  },
});
