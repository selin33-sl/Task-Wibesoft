import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  button: {
    width: windowWidth * 0.3,
    height: windowHeight * 0.05,
    borderRadius: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.rgbDark,
  },
  innerContainer: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.3,
    borderRadius: 15,
    backgroundColor: colors.dark,
    padding: windowWidth * 0.03,
    alignItems: 'center',
    elevation: 15,
    borderColor: colors.white,
    borderWidth: 0.3,
  },
  iconsContainer: {
    paddingHorizontal: windowWidth * 0.05,
    width: windowWidth * 0.9,
    height: windowHeight * 0.05,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textInput: {
    justifyContent: 'center',
    color: colors.white,
    borderWidth: 0.2,
    borderColor: colors.white,
    width: windowWidth * 0.8,
    height: windowHeight * 0.07,
    borderRadius: 5,
    marginTop: windowHeight * 0.01,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: windowWidth * 0.9,
    height: windowHeight * 0.1,
    marginBottom: windowHeight * 0.1,
    marginRight: windowWidth * 0.1,
  },
});
