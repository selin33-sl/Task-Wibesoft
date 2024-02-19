import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    paddingHorizontal: windowWidth * 0.05,
  },
  text: {
    color: colors.white,
    fontSize: windowHeight * 0.018,
  },
});
