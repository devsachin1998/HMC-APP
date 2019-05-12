import {Component} from 'react';
import {makeApiCall, makeApiCallxml, makeApiCallxmlimage} from '../../globalServices/api';
import {apiFunctions, showtoasterror} from '../../globalServices/utils';
import {Alert, Keyboard} from 'react-native';
// import messaging from '@react-native-firebase/messaging';

export interface Props {
  navigation?: any;
  id?: string;
}

interface S {
  phoneNumber: any;
  firstName: string;
  middleName: string;
  lastName: string;
  birthPlace: string;
  isFocus: boolean;
  value: null;
  gender: string;
  open: boolean;
  selectedDate: boolean;
  date1: any;
  selectedBloodGroup: string;
  bloodGroups: any;
  month: any;
  year: any;
  isImage: any;
  address: any;
  country: any;
  selectedCountry: string;
  selectedCountryP: string;
  States: any;
  selectedState: string;
  selectedStateQ: string;
  selectedStateP: string;
  District: any;
  selectedDistrict: string;
  selectedDistrictP: string;
  Talukas: any;
  selectedTaluka: string;
  selectedTalukaP: string;
  countryProfessional: any;
  selectedCountryProfessional: string;
  StatesProfessional: any;
  selectedStateProfessional: string;
  DistrictProfessional: any;
  selectedDistrictProfessional: string;
  TalukasProfessional: any;
  selectedTalukaProfessional: string;
  pinCode: any;
  aadharNo: any;
  email: any;
  stateRegNo: string;
  Qualification: any;
  selectedQualification: string;
  passingMonth: boolean;
  passingYear: boolean;
  InternshipStarting: boolean;
  InternshipTo: boolean;
  signImg: any;
  LCimg: any;
  FYMarksheet: any;
  SYMarksheet: any;
  TYMarksheet: any;
  FinalYearMarksheet: any;
  InternShipCerty: any;
  InternCompletion: any;
  ProvisionalCerty: any;
  DegreeCerty: any;
  ImgDesc: string;
  place: string;
  remark: string;
  currentSelection: any;
  colledges: any;
  selectedCollege: string;
  University: any;
  selectedUniversity: string;
  addressProfessional: any;
  pinCodeProfessional: any;
  phoneNumberProfessional: string;
  mobileNo: string;
  QualificationState: any;
  loader: any;
  internshipdate: any;
  intershiptodta: any;
  reinternshipdate: any;
  reintershiptodta: any;
  redate: any;
  CountryID: any;
  StateID: any;
  DistrictID: any;
  TalukaID: any;
  PCountryID: any;
  PStateID: any;
  PDistrictID: any;
  PTalukaID: any;
  StateIDQ: any;
  college_id: any;
  UniversityID: any;
  QualificationID: any;
  QStateID: any;
  QualificationDate: any;
  BloodGroupID:any;
  appointmentData:any;
  selectedIndex:number
}

interface SS {
  id: any;
}

export default class RegistrationStep2Controller extends Component<Props, S, SS> {
  constructor(props: Props) {
    super(props);
    this.state = {
      phoneNumber: '',
      firstName: '',
      middleName: '',
      lastName: '',
      birthPlace: '',
      isFocus: false,
      value: null,
      gender: '',
      open: false,
      date1: '',
      internshipdate: '',
      intershiptodta: '',
      reinternshipdate: '',
      reintershiptodta: '',
      redate: false,
      selectedBloodGroup: '',
      CountryID: 1,
      StateID: 1,
      DistrictID: 1,
      TalukaID: 1,
      PCountryID: 1,
      PStateID: 1,
      PDistrictID: 1,
      PTalukaID: 1,
      StateIDQ: 1,
      bloodGroups: [
        {label: 'A+', value: 1},
        {label: 'A-', value: 2},
        {label: 'B+', value: 3},
        {label: 'B-', value: 4},
        {label: 'O+', value: 5},
        {label: 'O-', value: 6},
        {label: 'AB+', value: 7},
        {label: 'AB-', value: 8},
        {label: 'Dont Know', value: 9},
        
      ],
      month: '',
      year: '',
      isImage: '',
      selectedDate: false,
      address: '',
      country: [],
      selectedCountry: '',
      selectedCountryP: '',
      States: [],
      selectedState: '',
      selectedStateP: '',
      District: [
        {label: 'Vadodara', value: '1'},
        {label: 'Surat', value: '2'},
        {label: 'Ahmedavad', value: '3'},
      ],
      selectedDistrict: '',
      pinCode: '',
      aadharNo: '',
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
      colledges: [],
      selectedCollege: '',
      University: [],
      selectedUniversity: '',
      Talukas: [],
      selectedTaluka: '',
      addressProfessional: '',
      countryProfessional: [],
      selectedCountryProfessional: '',
      StatesProfessional: [],
      selectedStateProfessional: '',
      DistrictProfessional: [],
      selectedDistrictProfessional: '',
      TalukasProfessional: [],
      selectedTalukaProfessional: '',
      pinCodeProfessional: '',
      phoneNumberProfessional: '',
      mobileNo: '',
      QualificationState: [],
      loader: false,
      college_id: 1,
      UniversityID: 1,
      QualificationID: 1,
      QStateID: 1,
      QualificationDate: '01/01/1992',
      BloodGroupID:1,
      appointmentData:  [],
      selectedIndex: 0
   };
  }

  async componentDidMount() {
    //this.getCountry();
    // this.getColleges()
    const response = {
      Status: [{ Status: "done", msg: "Record saved", id: 32474, OnlineMemberGUID: "dfec32aa-8bb4-4e14-978b-cf36fe9b1260" }],
      AppointmentDate: [
        { FullDates: "2024-10-09T00:00:00" },
        { FullDates: "2024-10-10T00:00:00" },
        { FullDates: "2024-10-11T00:00:00" },
        { FullDates: "2024-10-14T00:00:00" },
        { FullDates: "2024-10-15T00:00:00" },
        { FullDates: "2024-10-16T00:00:00" },
        { FullDates: "2024-10-17T00:00:00" },
        { FullDates: "2024-10-18T00:00:00" },
        { FullDates: "2024-10-21T00:00:00" },
        { FullDates: "2024-10-22T00:00:00" }
      ]
    };

    // Format the dates and update the state
    const formattedDates = response.AppointmentDate.map(item => {
      const date = new Date(item.FullDates);
      const day = String(date.getUTCDate()).padStart(2, '0');
      const month = date.toLocaleString('default', { month: 'short' }).toUpperCase();
      return `${day} ${month}`;
    });

    this.setState({ appointmentData: formattedDates });
    // this.getFcmToken()
  }

  getCountry = async () => {
    this.setState({loader: true});
    const responseData = await makeApiCallxml(
      apiFunctions.CountrySelect + '?UN1=1&PWD1=1',
      'GET',
      'web',
    );
    // console.log('responseData::: Country--->', responseData.Table);
    const tables = Array.isArray(responseData?.Table)
      ? responseData?.Table
      : [responseData?.Table];
    console.log('responseData::: Country--->', tables);

    this.setState({country: tables, countryProfessional: tables});
    this.getColleges();
    // this.StateSelectByCountryID(id)
  };
  StateSelectByCountryID = async id => {
    this.setState({loader: true});

    const responseData = await makeApiCallxml(
      apiFunctions.StateSelectByCountryID + `?UN1=1&PWD1=1&CountryID=${id}`,
      'GET',
      'web',
    );
    // console.log('responseData::: STates- by country id-->', responseData);

    this.setState({
      States: responseData.Table,
      StatesProfessional: responseData.Table,
    });
    //  this.getState()
    this.setState({loader: false});
  };

  DistrictSelectByStateID = async id => {
    this.setState({loader: true});

    const responseData = await makeApiCallxml(
      apiFunctions.DistrictSelectByStateID + `?UN1=1&PWD1=1&StateID=${id}`,
      'GET',
      'web',
    );
    console.log('responseData::: Distict- by id-->', responseData);
    if (responseData == undefined) {
      this.setState({District: [], DistrictProfessional: []});
      this.setState({loader: false});
    } else {
      this.setState({
        District: responseData.Table,
        DistrictProfessional: responseData.Table,
      });
      this.setState({loader: false});
    }
  };

  TalukaSelectByDistrictID = async id => {
    this.setState({loader: true});

    const responseData = await makeApiCallxml(
      apiFunctions.TalukaSelectByDistrictID + `?UN1=1&PWD1=1&DistrictID=${id}`,
      'GET',
      'web',
    );
    console.log('responseData::: Taluka- by id-->', responseData);

    this.setState({
      Talukas: responseData.Table,
      TalukasProfessional: responseData.Table,
    });
    this.setState({loader: false});
  };

  getColleges = async () => {
    const responseData = await makeApiCallxml(
      apiFunctions.CollegeSelect + '?UN1=1&PWD1=1',
      'GET',
      'web',
    );
    //  console.log('responseData::: collegessss--->', responseData.Table);
    this.setState({colledges: responseData.Table});
    this.getUniversity();
  };

  getUniversity = async () => {
    const responseData = await makeApiCallxml(
      apiFunctions.UniversitySelect + '?UN1=1&PWD1=1',
      'GET',
      'web',
    );
    // console.log('responseData::: University--->', responseData.Table);
    this.setState({University: responseData.Table});
    this.getQualification();
  };

  getQualification = async () => {
    const responseData = await makeApiCallxml(
      apiFunctions.QualificationSelect + '?UN1=1&PWD1=1',
      'GET',
      'web',
    );

    // console.log('responseData::: Qualification--->', responseData.Table);
    this.setState({Qualification: responseData.Table});
    this.getState();
  };

  getState = async () => {
    const responseData = await makeApiCallxml(
      apiFunctions.StateSelect + '?UN1=1&PWD1=1',
      'GET',
      'web',
    );
    console.log('responseData::: STates--->', responseData);
    // const tables = Array.isArray(responseData?.Table) ? responseData?.Table : [responseData?.Table];

    this.setState({QualificationState: responseData.Table});
    this.setState({loader: false});
  };
  loginBtnClick = async () => {
    Keyboard.dismiss();
    if (!this.state.firstName) {
      return Alert.alert('Please enter valid First Name.');
    } else if (!this.state.middleName) {
      return Alert.alert('Please enter valid Middle Name.');
    } else if (!this.state.lastName) {
      return Alert.alert('Please enter valid Last Name.');
    } else if (!this.state.address) {
      return Alert.alert('Please enter Address.');
    } else if (!this.state.address && this.state.phoneNumber.length != 10) {
      return Alert.alert('Please enter valid phone number.');
    } else if (!this.state.aadharNo && this.state.aadharNo.length != 12) {
      return Alert.alert('Aadhaar Card Number must be of 12 digits');
    } else if (!this.state.email) {
      return Alert.alert('Please enter Valid Email Address.');
    } else if (!this.state.selectedQualification) {
      return Alert.alert('Please select Qualification.');
    } else if (!this.state.selectedStateQ) {
      return Alert.alert('Please select Qualification State.');
    } else if (!this.state.month) {
      return Alert.alert('Please select Qualification Date.');
    } else if (!this.state.isImage) {
      return Alert.alert('Please upload Photo.');
    } else if (!this.state.signImg) {
      return Alert.alert('Please upload Sign Image.');
    } else if (!this.state.LCimg) {
      return Alert.alert('Please upload LC Image.');
    } else if (!this.state.FYMarksheet) {
      return Alert.alert('Please upload First Year Marksheet.');
    } else if (!this.state.SYMarksheet) {
      return Alert.alert('Please upload Second Year Marksheet.');
    } else if (!this.state.TYMarksheet) {
      return Alert.alert('Please upload Third Year Marksheet.');
    } else if (!this.state.FinalYearMarksheet) {
      return Alert.alert('Please upload Fourth Year Marksheet.');
    } else if (!this.state.InternShipCerty) {
      return Alert.alert('Please upload Intership Provisional Certificate.');
    } else if (!this.state.InternCompletion) {
      return Alert.alert('Please upload Intership Complition Certificate.');
    } else if (!this.state.ProvisionalCerty) {
      return Alert.alert('Please upload Provisional Completion Certificate.');
    } else {
      // E/FIELD JSON ->>>>>>: {"FirstName":"test","MiddleName":"test","LastName":"test","DateOfBirth":"01\/01\/1900","BirthPlace":"","BloodGroupID":1,"Gender":true,"AddressR":"test","RCountryIDF":1,"RStateIDF":1,"RDistricIDF":1,"RTalukaIDF":1,"RCityIDF":1,"RPinCode":0,"PhoneR1":0,"AddressO":"","OCountryIDF":1,"OStateIDF":1,"ODistricIDF":1,"OTalukaIDF":1,"OCityIDF":1,"OPinCode":0,"PhoneO1":0,"Mobile1":1234567890,"Email1":"tewt@yopmail.com","AadharNo":0,"OtherStateRegNo":"","QulificationIDF":8,"QualificationObtainedDate":"18\/09\/2024","QualificationStateIDF":12,"UniversityIDF":376,"CollegeIDF":669,"InternshipPeriodFrom":"18\/09\/2024","InternshipPeriodTo":"18\/09\/2025","RepeatedFrom":"18\/09\/2024","RepeatedTo":"18\/09\/2025","Place":"dd","Remark":"ee"}
    //  {"AadharNo": "1234567890", "AddressO": "Dsadsadasd", "AddressR": "Dsadad", "BirthPlace": "Dsadsa", "BloodGroupID": "A+", "CollegeIDF": "1", "DateOfBirth": 2024-09-18T16:13:10.032Z, "Email1": "Test@yopmil.cpm", "FirstName": "Tet", "Gender": true, "InternshipPeriodFrom": 2024-09-18T16:16:00.944Z, "InternshipPeriodTo": "2025-09-18T16:16:00.944Z", "LastName": "Dsad", "MiddleName": "Dasd", "Mobile1": "85111714880", "OCityIDF": 0, "OCountryIDF": "9", "ODistricIDF": 0, "OPinCode": "dsadasd", "OStateIDF": "12", "OTalukaIDF": 0, "OtherStateRegNo": "", "PhoneO1": "566666612", "PhoneR1": "dsadd", "Place": "Dsadad as das", "QualificationObtainedDate": "18/09/2024", "QualificationStateIDF": 0, "QulificationIDF": "1", "RCityIDF": 0, "RCountryIDF": "9", "RDistricIDF": 0, "RPinCode": "sdasd", "RStateIDF": "12", "RTalukaIDF": 0, "Remark": "Ddsds", "RepeatedFrom": 2024-09-18T16:16:07.670Z, "RepeatedTo": "2025-09-18T16:16:07.670Z", "UniversityIDF": "1"}
      let fieldsJson = {
        FirstName: this.state.firstName,
        MiddleName: this.state.middleName,
        LastName: this.state.lastName,
        DateOfBirth: this.state.date1,
        BirthPlace: this.state.birthPlace,
        BloodGroupID: this.state.selectedBloodGroup,
        Gender: true,
        AddressR: this.state.address,
        RCountryIDF:  this.state.CountryID,
        RStateIDF:  this.state.StateID,
        RDistricIDF:  this.state.DistrictID,
        RTalukaIDF:  this.state.TalukaID,
        RCityIDF:  this.state.DistrictID,
        RPinCode:  this.state.pinCode,
        PhoneR1: this.state.phoneNumber,
        AddressO: this.state.addressProfessional,
        OCountryIDF: this.state.PCountryID,
        OStateIDF: this.state.PStateID,
        ODistricIDF: this.state.PDistrictID,
        OTalukaIDF: this.state.PTalukaID,
        OCityIDF: this.state.PDistrictID,
        OPinCode: this.state.pinCodeProfessional,
        PhoneO1: this.state.phoneNumberProfessional,
        Mobile1: this.state.mobileNo,
        Email1: this.state.email,
        AadharNo: this.state.aadharNo,
        OtherStateRegNo:  this.state.stateRegNo,
        QulificationIDF: this.state.QualificationID,
        QualificationObtainedDate: this.state.QualificationDate,
        QualificationStateIDF: this.state.QStateID,
        UniversityIDF: this.state.UniversityID,
        CollegeIDF: this.state.college_id,
        InternshipPeriodFrom: this.state.internshipdate,
        InternshipPeriodTo:  this.state.intershiptodta,
        RepeatedFrom: this.state.reinternshipdate,
        RepeatedTo: this.state.reintershiptodta,
        Place: this.state.place,
        Remark: this.state.remark,
      };
      let param = "fieldsJson="+fieldsJson;
      const responseData =
      await makeApiCallxml(apiFunctions.OnlineRegistrationStep1 + "?"+param, 'GET', "webservice");
      const urlencoded = new URLSearchParams();
      // urlencoded.append('fieldsJson', JSON.stringify(fieldsJson));
      // urlencoded.append('PhotoFileName', this.state.isImage.fileName);
      // urlencoded.append('PhotoFileByte', this.state.isImage.base64);
      // urlencoded.append('SignatureFileName', this.state.signImg.fileName);
      // urlencoded.append('SignatureFileByte', this.state.signImg.base64);
      // urlencoded.append('SchoolLeavingFileName', this.state.LCimg.fileName);
      // urlencoded.append('SchoolLeavingFileByte', this.state.LCimg.base64);
      // urlencoded.append('Marksheet1FileName', this.state.FYMarksheet.fileName); // Assuming gender is boolean in your data
      // urlencoded.append('Marksheet1FileByte', this.state.FYMarksheet.base64);
      // urlencoded.append('Marksheet2FileName',  this.state.SYMarksheet.fileName); // Assuming gender is boolean in your data
      // urlencoded.append('Marksheet2FileByte', this.state.SYMarksheet.base64);
      // urlencoded.append('Marksheet3FileName', this.state.TYMarksheet.fileName);
      // urlencoded.append('Marksheet3FileByte', this.state.TYMarksheet.base64);
      // urlencoded.append('Marksheet4FileName', this.state.FinalYearMarksheet.fileName);
      // urlencoded.append('Marksheet4FileByte', this.state.FinalYearMarksheet.base64);
      // urlencoded.append('PcName', this.state.InternShipCerty.fileName);
      // urlencoded.append('PcFileByte', this.state.InternShipCerty.base64);
      // urlencoded.append('DcName',  this.state.DegreeCerty.fileName);
      // urlencoded.append('DcFileByte', this.state.DegreeCerty.base64);
      // urlencoded.append('CcName', this.state.InternCompletion.fileName);
      // urlencoded.append('CcFileByte', this.state.InternCompletion.base64);
      // urlencoded.append('PpcName', this.state.ProvisionalCerty.fileName);
      // urlencoded.append('PpcFileByte', this.state.ProvisionalCerty.base64);
      // console.log("Dsadasd",urlencoded)
      // const responseData =  await makeApiCallxml(apiFunctions.OnlineRegistrationStep1, 'POST', "webservice",urlencoded.toString());
      
      console.log("responseData",responseData)
    }

    // Please select Qualification
  };

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
