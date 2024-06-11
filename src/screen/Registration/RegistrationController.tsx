import {Component} from 'react';
// import makeApiCall from '../../globalServices/api';
// import {apiFunctions, showtoasterror} from '../../globalServices/utils';
import {Keyboard} from 'react-native';

// import messaging from '@react-native-firebase/messaging';

export interface Props {
  navigation?: any;
  id?: string;
}

interface S {
  phoneNumber: any;
  firstName:string;
  isFocus: boolean;
  value: null,
  gender: string,
  open: boolean,
  date1: any,
  selectedBloodGroup: string,
  bloodGroups: any,
  month:any,
  year:any,
  isImage:any,
}

interface SS {
  id: any;
}

export default class RegistrationController extends Component<Props, S, SS> {
  constructor(props: Props) {
    super(props);
    this.state = {
      phoneNumber: '',
      firstName: '',
      isFocus: false,
      value: null,
      gender: '',
      open: false,
      date1: new Date(),
      selectedBloodGroup: '',
      bloodGroups: [
        { label: 'A+', value: '1' },
        { label: 'A-', value: '2' },
        { label: 'B+', value: '3' },
        { label: 'B-', value: '4' },
        { label:  'AB+', value: '5' },
        { label: 'AB-', value: '6' },
        { label: 'O+', value: '7' },
        { label: 'O-', value: '8' },
      ],
      month: new Date(),
      year: new Date(),
      isImage:''
    };
  }

  async componentDidMount() {

// this.getFcmToken()
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