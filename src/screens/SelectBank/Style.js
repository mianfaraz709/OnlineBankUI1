import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,

    marginHorizontal: 20,
    justifyContent: 'center',
  },
  Dropdown: {
    marginTop: 20,
    borderWidth: 2,
    backgroundColor: 'yellow',
    borderColor: '#0150E3',
  },
  TextInput: {
    marginTop: 20,
    width: wp('92%'),
    alignSelf: 'center',
    height: 300,
    zIndex: 10,
    elevation: 20,
    textAlign: 'left',
    backgroundColor: '#c4c4c4',
    borderRadius: 10,
  },
  View1: {
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TouchableOpacity1: {
    height: 50,
    elevation: 20,
    marginTop: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    width: wp('80'),
    borderRadius: 20,
    borderColor: '#0150E3',
    borderWidth: 2,
  },
  Text: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 20,
    color: '#0150E3',
  },
});
export default styles;
