import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  innerContainer: {
    flex: 1,
    width: windowWidth,
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
    width: windowWidth,
    marginTop: windowHeight * 0.02,
  },
  addButton: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  addButtonContainer: {
    position: 'absolute',
    width: windowWidth,
    height: windowHeight,
    alignItems: 'flex-end',
    paddingRight: windowWidth * 0.05,
    paddingBottom: windowHeight * 0.05,
    marginTop: windowHeight * 0.02,
  },
});
