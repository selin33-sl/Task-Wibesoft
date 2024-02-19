import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    width: windowWidth * 1,
    height: windowHeight * 0.03,
    maxHeight: windowHeight * 0.06,
    marginTop: windowHeight * 0.02,
    paddingHorizontal: windowWidth * 0.04,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    color: colors.white,
    fontSize: windowHeight * 0.027,
  },
});
