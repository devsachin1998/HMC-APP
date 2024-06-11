import * as React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Button,
  Platform,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  ScrollView,
} from 'react-native';
// import GlobalStyle from '../../globalServices/globalStyle';
import CouncilLoginController, {Props} from './CouncilLoginController';
import Scale from '../../../globalServices/Scale';
import moment from 'moment';
// import Icon from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/Ionicons'
// import LinearGradient from 'react-native-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-date-picker'
export default class CouncilLogin extends CouncilLoginController {
  constructor(props: Props) {
    super(props); 
  }
  onChange = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.date;
    this.setState({ isDatePickerVisible: false, date: currentDate });
  };

  showMode = (currentMode) => {
    this.setState({ isDatePickerVisible: true, mode: currentMode });
  };

  showDatepicker = () => {
    this.showMode('date');
  };

  showTimepicker = () => {
    this.showMode('time');
  };

 formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
  };
  render() {
    const { date, mode, isDatePickerVisible,open,date1,phoneNumber,Password } = this.state;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          // keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
        >
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <ImageBackground
              style={{ width: '100%', height: '100%', justifyContent: 'center' }}
              source={require('../../../images/loginback.jpg')}
              resizeMode="cover"
            >
              <View style={{ 
                ...StyleSheet.absoluteFillObject, 
                backgroundColor: 'rgba(106, 125, 79, 0.8)' // Sky blue with 50% opacity
              }} />

              <TouchableOpacity
                style={{ marginTop: 10, zIndex: 1 }}
                onPress={() => this.props.navigation.goBack()}
              >
                <Icon1
                  name="chevron-back"
                  size={30}
                  color="white"
                  style={styles.icon}
                />
              </TouchableOpacity>

              <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20 }}>
                <View style={styles.logoContainer}>
                  <Image
                    resizeMode="cover"
                    style={styles.logoImg}
                    source={require('../../../images/logo.png')}
                  />
                </View>
                <Text style={styles.headerText}>
                  COUNCIL OF HOMOEOPATHIC SYSTEM OF MEDICINE GUJARAT STATE
                </Text>
                <Text style={styles.loginText}>Council Login</Text>
                <View style={styles.textInputContainer}>
                  <Icon
                    name="user-alt"
                    size={20}
                    color="black"
                    style={styles.icon}
                  />
                  <View
                    style={{
                      height: 20,
                      backgroundColor: 'black',
                      width: 2,
                    }}
                  />
                  <TextInput
                    placeholder="Mobile Number"
                    returnKeyType="done"
                    style={[styles.input, { paddingStart: Scale(5) }]}
                    keyboardType="numeric"
                    value={phoneNumber}
                    onChangeText={(e:number) => this.setState({ phoneNumber: e })}
                  />
                </View>

                <View style={styles.textInputContainer}>
                  <Icon
                    name="lock"
                    size={20}
                    color="black"
                    style={styles.icon}
                  />
                  <View
                    style={{
                      height: 20,
                      backgroundColor: 'black',
                      width: 2,
                    }}
                  />
                  <TextInput
                    placeholder="Password"
                    autoCapitalize="sentences"
                    style={[styles.input, { paddingStart: Scale(5) }]}
                    secureTextEntry={true}
                    value={Password}
                    onChangeText={(txt) => this.setState({ Password: txt })}
                  />
                </View>

                <TouchableOpacity
                  onPress={()=>this.onClickCouncilLogin()}
                  style={{
                    marginTop: Scale(10),
                    marginBottom: Scale(20),
                    backgroundColor: 'white',
                    padding: Scale(12),
                    borderRadius: Scale(10),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ color: '#110000', fontWeight: 'bold', fontSize: 16 }}>
                    LOGIN
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Login')}
                  style={{
                    backgroundColor: 'white',
                    alignSelf: 'flex-end',
                    padding: 20,
                    borderTopLeftRadius: 20,
                    borderBottomLeftRadius: 20,
                  }}
                >
                  <Text style={{ color: '#110000', fontSize: 16, fontWeight: '600' }}>
                    Doctor Login ?
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ justifyContent: 'flex-end', flex: 0.1 }}>
                <Text style={{
                  paddingStart: 0,
                  fontSize: 12,
                  textAlign: 'center',
                  marginBottom: 10,
                  color: 'white',
                  fontWeight: '700',
                }}>
                  {"Copyright © . All rights reserved. \n Designed by C.S.Comsoft Pvt. Ltd."}
                </Text>
              </View>
            </ImageBackground>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  backgroundContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  logoContainer: {
    alignSelf: 'center',
    marginTop: Scale(30),
  },
  logoImg: {
    width: Scale(100),
    height: Scale(100),
    borderWidth:1,
    borderColor:'black',
    borderRadius: 100
  },
  headerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: Scale(14),
    fontWeight:'700',
    marginTop: Scale(10)
  },
  loginText: {
    color: 'white',
    marginTop: Scale(20),
    fontWeight: 'bold',
    fontSize: Scale(20),
  },
  middleContainer: {

  },
  phoneNumberContainer: {
    flexDirection: 'row',
    marginBottom: Scale(30),
    marginTop: Scale(15),
  },
  flagContainer: {
    // ...GlobalStyle.txteditable,
    flex: 0.5,
  },
  flagText: {
    color: 'white',
    fontSize: Scale(16),
    paddingStart: Scale(10),
  },
  textInputContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor:'white',
    borderRadius: Scale(10),
    height: Scale(50)
  },
  icon: {
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    justifyContent:'center',
    
    fontSize: 16,
  },
  inputContainer: {
    // ...GlobalStyle.txteditable,
    flex: 1.5,
    marginStart: Scale(15),
  },
//   input: {
//     flexDirection: "row",
//     fontSize: 16,
//     textAlign: "left",
//     backgroundColor: "white",
//     borderWidth: Platform.OS === "web" ? 0 : 1,
//     marginBottom: 16,
//     borderBottomWidth: 1,
//     borderColor: "#767676",
//     borderRadius: 10,
//     includeFontPadding: true,
//     padding: 10
// },
//   inputStyle: {
//     ...GlobalStyle.inputStyle,
//   },
//   loginButton: {
//     ...GlobalStyle.buttonStyle,
//   },
//   buttonText: {
//     ...GlobalStyle.btntext,
//   },
});

