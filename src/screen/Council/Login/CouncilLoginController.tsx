import {Component} from 'react';

import {Keyboard} from 'react-native';
import { makeApiCall, makeApiCallxml } from '../../../globalServices/api';
import { apiFunctions, showToastOrAlert, storeData } from '../../../globalServices/utils';
import moment from 'moment';


// import messaging from '@react-native-firebase/messaging';

export interface Props {
  navigation?: any;
  id?: string;
}

interface S {
  name: any;
  isDatePickerVisible:any;
  date: any;
  mode:any,
  open: boolean,
  date1: any,
  Password:any;
}

interface SS {
  id: any;
}

export default class CouncilLoginController extends Component<Props, S, SS> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: 'Admin',
      isDatePickerVisible: false,
      date: new Date(1598051730000),
      mode: 'date',
      open: false,
      date1: new Date(),
      Password:'7710'
    };
  }

  async componentDidMount() {

// this.getFcmToken()
  }

  onClickCouncilLogin =async ()=>{
    // const sDate=moment(this.state.date1).format('YYYY-MM-DD');

    const responseData = await makeApiCallxml(apiFunctions.UserLoginMaster+`?UN1=1&PWD1=1&Username=${this.state.name}&Password=${this.state.Password}`, 'GET','admin');
    const result = responseData.Table;
    if(this.state.Password=="" && this.state.name=="")
      {
        return showToastOrAlert('Please Enter Username and Password!!');

      }
    if(result.Result==-1)
      {
        showToastOrAlert('User Not Found!!');

      }
     else if(result.Result==0)
      {
        showToastOrAlert('Enter Valid Username and Password!! ');

     }
     else
     {
      storeData("loginDetails",result)
      this.props.navigation.navigate('DrawerNavigatorAdmin');

     }

    // this.props.navigation.navigate('DrawerNavigatorAdmin')
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