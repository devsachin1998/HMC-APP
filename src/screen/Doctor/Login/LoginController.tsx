import {Component} from 'react';
// import makeApiCall from '../../globalServices/api';
// import {apiFunctions, showtoasterror} from '../../globalServices/utils';
import {Keyboard} from 'react-native';
import {apiFunctions, storeData, getdata} from '../../../globalServices/utils';
import {makeApiCall} from '../../../globalServices/api';
import moment from 'moment';
// import messaging from '@react-native-firebase/messaging';

export interface Props {
  navigation?: any;
  id?: string;
}

interface S {
  phoneNumber: number;
  isDatePickerVisible:any;
  date: any;
  mode:any,
  open: boolean,
  date1: any,
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
    };
  }

  async componentDidMount() {

// this.getFcmToken()
  }

  onClickDoctorLogin =async ()=>{
    const sDate=moment(this.state.date1).format('YYYY-MM-DD');

    const responseData = await makeApiCall(apiFunctions.DoctorLogin+`?MobileNo=${this.state.phoneNumber}&DateOfBirth=${sDate}`, 'GET');
    console.log('responseData:::--->', responseData);
    
    this.props.navigation.navigate('DoctorHomeScreen')
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