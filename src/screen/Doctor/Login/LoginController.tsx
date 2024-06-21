import {Component} from 'react';

// import {apiFunctions, showtoasterror} from '../../globalServices/utils';
import {Alert, Keyboard, Platform, ToastAndroid} from 'react-native';
import {apiFunctions, storeData, getdata} from '../../../globalServices/utils';
import {makeApiCall,makeApiCallxml} from '../../../globalServices/api';
import moment from 'moment';
import xml2js from 'react-native-xml2js';

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
  termsAndConditions:any,
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
    // const responseData = await makeApiCallxml(apiFunctions.TermsAndCondition+"?UN1=1&PWD1=1",'GET',"web");
    // console.log('responseData:::  get Terms & condition--->', responseData);
    // function xmlToJson(xmlString) {
    //   // Parse the XML string
    //   const parser = new parser();
    //   const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    
    //   // Get the text content inside <string> element
    //   const jsonString = xmlDoc.querySelector('string').textContent;
    
    //   // Return the parsed JSON object
    //   return jsonString;
    // }
    
    let apiUrl = `${apiFunctions.urlweb}${apiFunctions.TermsAndCondition}?UN1=1&PWD1=1`;
   
  
    const headers = {
      'Content-Type': 'multipart/form-data',
    };
    const options = {
      method: "GET",
      // headers: headers,
    };
    
    console.log("apiUrl:::::11", apiUrl);

    try {
      const response = await fetch(apiUrl, options);
      const responseData = await response.text();
      // console.log("dsddsfdd", responseData);
      console.log("tables:::::11", responseData);
      // this.setState({termsAndConditions: responseData})

      // Parse XML data
      const parsedData = await new Promise((resolve, reject) => {
        xml2js.parseString(responseData, { explicitArray: false, explicitRoot: false }, (error, result) => {
          if (error) {
            reject(error);
          } else {
            const tables =result
            console.log("tables:::::11", tables._);
            this.setState({termsAndConditions: tables._})
            resolve(tables);
          }
        });
      });
  
    } catch (error) {
      console.error(error);
      return null; // Handle error appropriately
    }
    }
     convertXmlToHtml(xmlString) {
      // Extract content inside <string> tag
      const startIndex = xmlString.indexOf('>') + 1;
      const endIndex = xmlString.lastIndexOf('<');
      const encodedHtml = xmlString.substring(startIndex, endIndex);
    
      // Decode HTML entities
      const textarea = document.createElement('textarea');
      textarea.innerHTML = encodedHtml;
      const decodedHtml = textarea.value;
    
      return decodedHtml;
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