import {Component} from 'react';

// import {apiFunctions, showtoasterror} from '../../globalServices/utils';
import {Alert, Keyboard, Platform, ToastAndroid} from 'react-native';
import {apiFunctions, storeData, getdata} from '../../../globalServices/utils';
import {makeApiCall,makeApiCallxml} from '../../../globalServices/api';
import moment from 'moment';

// import messaging from '@react-native-firebase/messaging';

export interface Props {
  navigation?: any;
  id?: string;
}

interface S {
  phoneNumber: any;
  isDatePickerVisible:any;
  date: any;
  mode:any,
  open: boolean,
  date1: any,
  termsAndConditions: string,
}

interface SS {
  id: any;
}

export default class LoginController extends Component<Props, S, SS> {
  constructor(props: Props) {
    super(props);
    this.state = {
      phoneNumber: '',
      isDatePickerVisible: false,
      date: new Date(1598051730000),
      mode: 'date',
      open: false,
      date1: new Date(),
      termsAndConditions: '',
    };
  }

  async componentDidMount() {
    this.getTermsCondition()
// this.getFcmToken()
  }

  getTermsCondition = async ()=>{
    const responseData = await makeApiCallxml(apiFunctions.TermsAndCondition+"?UN1=1&PWD1=1",'GET',"web");
    console.log('responseData:::  get Terms & condition--->', responseData);
    // const xml2js = require('xml2js');
    // const he = require('he');
    // xml2js.parseString(responseData, (err, result) => {
    // if (err) {
    //   throw err;
    // }
    // console.log('responseData:::  get Terms & condition---1111>', responseData);
    // // Extract the content of the <string> element
    // const encodedHtml = result.string._;

    // // Decode the HTML entities
    // const decodedHtml = he.decode(encodedHtml);

    // // Output the JSON format
    // const jsonResult = {
    //   termsAndConditions: decodedHtml,
    // };
    // console.log('responseData:::  get Terms & condition--222->', jsonResult);
    // console.log(JSON.stringify(jsonResult, null, 2));
    // })
    }


  onClickDoctorLogin = async ()=>{
    if(this.state.phoneNumber=="" && this.state.date1 )
      {
        let msg="Please Enter Phone Number and Date.."
        if (Platform.OS === 'android') {
          return  ToastAndroid.show(msg, ToastAndroid.SHORT)
        } else {
          return  Alert.alert(msg);
        }
      }
      else
      {
    const sDate=moment(this.state.date1).format('YYYY-MM-DD');

    const responseData = await makeApiCall(apiFunctions.DoctorLogin+`?MobileNo=${this.state.phoneNumber}&DateOfBirth=${sDate}`, 'GET');
    console.log('responseData:::  LOGIn--->', responseData);
   if(responseData)
    {
      storeData("loginDetails",responseData)

      this.props.navigation.navigate('DrawerNavigatorDoctor');
    }
    else
    {
      let msg="Please Enter Valid Phone Number and Date.."

      if (Platform.OS === 'android') {
        return  ToastAndroid.show(msg, ToastAndroid.SHORT)
      } else {
        return  Alert.alert(msg);
      }
    }
  }
    
  }
//   async loginBtnClick() {
//     Keyboard.dismiss();
//     if (!this.state.phoneNumber || this.state.phoneNumber.length != 10) {
//       return showtoasterror('Please enter valid phone number.');
//     }
//     let data = new FormData();
//     data.append('mobile_no', this.state.phoneNumber);
//     const responseData = await makeApiCall(apiFunctions.login, 'POST', data);
//     console.log('responseData:::--->', responseData);
//     if (responseData?.status == 'success') {
//       this.props.navigation.replace('VerifyOtpScreen', {
//         mobilenumber: this.state.phoneNumber,
//         otp: responseData.otp,
//       });
//     } else {
//       showtoasterror(responseData.message);
//     }
//   }
//    getFcmToken = async () => {

//     const fcmToken = await messaging().getToken();
//     if (fcmToken) {
//        console.log('fcm',fcmToken);
//     }
// }
}