import {Component} from 'react';
import {makeApiCall,makeApiCallxml} from '../../globalServices/api';
import {apiFunctions, showtoasterror} from '../../globalServices/utils';
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
  Talukas: any,
  selectedTaluka:string,
  countryProfessional: any,
  selectedCountryProfessional: string,
  StatesProfessional: any,
  selectedStateProfessional: string,
  DistrictProfessional: any,
  selectedDistrictProfessional: string,
  TalukasProfessional: any,
  selectedTalukaProfessional:string,
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
  currentSelection: any,
  colledges: any,
  selectedCollege:string,
  University: any,
  selectedUniversity: string,
  addressProfessional:any,
  pinCodeProfessional: number,
  phoneNumberProfessional: string,
  mobileNo:string,
  QualificationState:any
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
      country: [],
      selectedCountry:'',
      States: [],
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
      Qualification: [],
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
      colledges:[],
      selectedCollege:'',
      University: [],
      selectedUniversity: '',
      Talukas: [],
      selectedTaluka:'',
      addressProfessional: '',
      countryProfessional: [],
      selectedCountryProfessional: '',
      StatesProfessional: [],
      selectedStateProfessional: '',
      DistrictProfessional: [],
      selectedDistrictProfessional: '',
      TalukasProfessional: [],
      selectedTalukaProfessional:'',
      pinCodeProfessional:0,
      phoneNumberProfessional:'',
      mobileNo:'',
      QualificationState:[]
    };
  }

  async componentDidMount() {
    this.getCountry()
    this.getColleges()
  
// this.getFcmToken()
  }

  getCountry =async()=>{
    const responseData = await makeApiCallxml(apiFunctions.CountrySelect+"?UN1=1&PWD1=1",'GET',"web");
    // console.log('responseData::: Country--->', responseData.Table);
    const tables = Array.isArray(responseData?.Table) ? responseData?.Table : [responseData?.Table];
    
    this.setState({country:tables,countryProfessional:tables})
    // this.StateSelectByCountryID(id)
  }
  StateSelectByCountryID =async(id)=>{
    const responseData = await makeApiCallxml(apiFunctions.StateSelectByCountryID+`?UN1=1&PWD1=1&CountryID=${id}`,'GET',"web");
    // console.log('responseData::: STates- by country id-->', responseData);
  
    this.setState({States:responseData.Table,StatesProfessional:responseData.Table})
  //  this.getState()
  
  }

  DistrictSelectByStateID =async(id)=>{
    const responseData = await makeApiCallxml(apiFunctions.DistrictSelectByStateID+`?UN1=1&PWD1=1&StateID=${id}`,'GET',"web");
    // console.log('responseData::: Distict- by id-->', responseData);
  
    this.setState({District:responseData.Table,DistrictProfessional:responseData.Table})

  
  }

  TalukaSelectByDistrictID =async(id)=>{
    const responseData = await makeApiCallxml(apiFunctions.TalukaSelectByDistrictID+`?UN1=1&PWD1=1&DistrictID=${id}`,'GET',"web");
    // console.log('responseData::: Taluka- by id-->', responseData);
  
    this.setState({Talukas:responseData.Table,TalukasProfessional:responseData.Table})

  
  }

  getColleges = async()=>{
     const responseData = await makeApiCallxml(apiFunctions.CollegeSelect+"?UN1=1&PWD1=1",'GET',"web");
    //  console.log('responseData::: collegessss--->', responseData.Table);
     this.setState({colledges:responseData.Table})
     this.getUniversity()
  }

  getUniversity =async()=>{
    const responseData = await makeApiCallxml(apiFunctions.UniversitySelect+"?UN1=1&PWD1=1",'GET',"web");
    // console.log('responseData::: University--->', responseData.Table);
    this.setState({University:responseData.Table})
    this.getQualification()
 }


getQualification =async()=>{
  const responseData = await makeApiCallxml(apiFunctions.QualificationSelect+"?UN1=1&PWD1=1",'GET',"web");

  // console.log('responseData::: Qualification--->', responseData.Table);
  this.setState({Qualification:responseData.Table})
  this.getState()
}

  getState =async()=>{
    const responseData = await makeApiCallxml(apiFunctions.StateSelect+"?UN1=1&PWD1=1",'GET',"web");
    console.log('responseData::: STates--->', responseData);
    // const tables = Array.isArray(responseData?.Table) ? responseData?.Table : [responseData?.Table];
  
    this.setState({QualificationState:responseData.Table})
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