import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const sizes = {
  defaultWidth: width,
  defaultHeight: height,
  defaultMargin: height / 80,
  defaultPadding: width / 10,
};
