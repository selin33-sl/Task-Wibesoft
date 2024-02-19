import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    width: windowWidth * 0.92,
    height: windowHeight * 0.08,
    marginBottom: windowHeight * 0.015,
    paddingHorizontal: windowWidth * 0.04,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 10,
  },
  text: {
    color: colors.black,
    fontSize: windowHeight * 0.02,
    width: windowWidth * 0.55,
    maxHeight: windowHeight * 0.03,
  },
  input: {
    width: windowWidth * 0.6,
    height: windowHeight * 0.06,
    backgroundColor: colors.purpleLight,
    borderRadius: 10,
    fontSize: windowHeight * 0.021,
    color: colors.black,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  checkbox: {
    color: 'black',
    width: windowWidth * 0.07,
    height: windowWidth * 0.07,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth * 0.08,
  },
});
