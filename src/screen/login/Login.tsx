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
} from 'react-native';
// import GlobalStyle from '../../globalServices/globalStyle';
import LoginController, {Props} from './LoginController';
import Scale from '../../globalServices/Scale';
// import Icon from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import LinearGradient from 'react-native-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker'
export default class Login extends LoginController {
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
    const { date, mode, isDatePickerVisible } = this.state;
    return (
      <View style={{backgroundColor:'skyblue',flex:1}}>
        <View style={{paddingHorizontal:20}}>
        <View style={styles.logoContainer}>
            <Image
                resizeMode={'cover'}
                style={styles.logoImg}
                source={require('../../images/splash.jpg')}
            />
        </View>
        <Text style={styles.headerText}>COUNCIL OF HOMOEOPATHIC SYSTEM OF MEDICINE GUJARAT STATE</Text>
        <Text style={styles.loginText}>Doctor Login</Text>
         <View style={styles.textInputContainer}>
            <Icon name='user-alt' size={20} color="black" style={styles.icon}/>
            <View style={{height:20,backgroundColor:'black',width:2}}></View>
            <TextInput
              placeholder='Mobile Number'
              style={styles.input}
              keyboardType="numeric"
              value={this.state.phoneNumber}
              onChangeText={(Number:string)=>{this.setState({phoneNumber:Number})}}
            />
          </View>

          <View style={styles.textInputContainer}>
            <Icon name="lock" size={20} color="black" style={styles.icon} />
            <View style={{height:20,backgroundColor:'black',width:2}}></View>
            
            {/* <Text>{this.formatDate(date)}</Text>
            { */}
            <View style={{alignItems:'flex-start'}}>
              {isDatePickerVisible &&
                <DateTimePicker 
                placeholderText='Date of Birth'
                style={{backgroundColor:'yellow'}}
                testID="dateTimePicker"
                value={date}
                textColor='red'
                mode={mode}
                is24Hour={true}
                onChange={this.onChange}
              />
              }
          </View>
          </View>
         
      <TouchableOpacity style={{marginTop:10,backgroundColor:'white',padding:10,borderRadius:10,justifyContent:'center',
    alignItems:'center'}}>
        <Text style={{color:'skyblue',fontWeight:'bold',fontSize:16}}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop:5,borderBottomWidth:1,borderColor:'red',width:125}}>
        <Text style={{color:'red',fontSize:14}}> * Conditions Apply</Text>
       
      </TouchableOpacity>
      </View>
      <TouchableOpacity style={{backgroundColor:'white',alignSelf:'flex-end',padding:20,borderTopLeftRadius:20,borderBottomLeftRadius:20}}>
        <Text>Council Login ?</Text>
      </TouchableOpacity>
  </View>
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
    padding: Scale(10),
  },
  icon: {
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    padding:10,
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

