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
  middleName:string;
  lastName:string;
  birthPlace: string;
  isFocus: boolean;
  value: null,
  gender: string,
  open: boolean,
  selectedDate:boolean,
  date1: any,
  selectedBloodGroup: string,
  bloodGroups: any,
  month:any,
  year:any,
  isImage:any,
  address: any,
  country: any,
  selectedCountry: string,
  States: any,
  selectedState: string,
  District: any,
  selectedDistrict: string,
  pinCode: number,
  aadharNo: number,
  email: any,
  stateRegNo: string,
  Qualification: any,
  selectedQualification: string,
  passingMonth: boolean,
  passingYear: boolean,
  InternshipStarting: boolean,
  InternshipTo: boolean,
  signImg: any,
  LCimg: any,
  FYMarksheet: any,
  SYMarksheet: any,
  TYMarksheet: any,
  FinalYearMarksheet:any,
  InternShipCerty: any,
  InternCompletion: any,
  ProvisionalCerty: any,
  DegreeCerty: any,
  ImgDesc: string,
  place: string,
  remark: string,
  currentSelection: any
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
      middleName:'',
      lastName: '',
      birthPlace: '',
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
      isImage:'',
      selectedDate: false,
      address: '',
      country: [
        { label: 'India', value: '1' },
        { label: 'Australia', value: '2' },
        { label: 'Japan', value: '3' },
      ],
      selectedCountry:'',
      States: [
        { label: 'Gujarat', value: '1' },
        { label: 'Maharashtra', value: '2' },
        { label: 'Kerela', value: '3' },
      ],
      selectedState: '',
      District: [
        { label: 'Vadodara', value: '1' },
        { label: 'Surat', value: '2' },
        { label: 'Ahmedavad', value: '3' },
      ],
      selectedDistrict: '',
      pinCode: 0,
      aadharNo: 0,
      email: '',
      stateRegNo: '',
      Qualification: [
        { label: '10th', value: '1' },
        { label: '12th', value: '2' },
        { label: 'BCOM', value: '3' },
        { label: 'BE', value: '4' },
        { label:  'BCA', value: '5' },
        { label: 'BSC', value: '6' },
        { label: 'BA', value: '7' },
        { label: 'BBA', value: '8' },
      ],
      selectedQualification: '',
      passingMonth: false,
      passingYear: false,
      InternshipStarting: false,
      InternshipTo: false,
      signImg: '',
      LCimg: '',
      FYMarksheet: '',
      SYMarksheet: '',
      TYMarksheet: '',
      FinalYearMarksheet: '',
      InternShipCerty: '',
      InternCompletion: '',
      ProvisionalCerty: '',
      DegreeCerty: '',
      ImgDesc: '',
      place: '',
      remark: '',
      currentSelection: null,

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