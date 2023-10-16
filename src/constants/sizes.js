import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const sizes = {
  defaultWidth: width,
  defaultHeight: height,
  defaultMargin: height / 50,
  defaultPadding: width / 10,
};
