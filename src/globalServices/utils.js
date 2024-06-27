import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';
import {View, ToastAndroid, Platform, AlertIOS, Alert} from 'react-native';
// import Snackbar from 'react-native-snackbar';
import * as ImagePicker from 'react-native-image-picker';
import moment from 'moment';
import Scale from './Scale';
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
export const apiFunctions = {
  url: 'http://api.gujarathmc.org/WebService/HomoeoCouncil.asmx', //staging server
  urlbasic:'http://hmc.Khedutmitra.com/hm_web/hmbasic.asmx',
  urladmin:'http://hmc.khedutmitra.com/hm_web/HM_Admn.asmx',
  bannerurl:'http://hmc.Khedutmitra.com/',
  login: 'otp/login',
  BannerSelect:'/BannerSelect',
  HomeSelectSP:'/HomeSelectSP',
  DoctorLogin:'/MemberLogin',
  FAQsList: '/FAQSelect',
  urlweb:'http://hmc.Khedutmitra.com/hm_web/HM_Web.asmx', //staging server
  councilurl:'http://hmc.Khedutmitra.com/img/CouncilMember/',
  ScrollNewsSelect:'/ScrollNewsSelect',
  ProfileSelect:'/ProfileSelect',
  ArticleSelect:'/ArticleSelect',
  NotificationSelect:'/NotificationSelect',
  CollegeSelect:'/CollegeSelect',
  CollegeGallerySelect:'/CollegeGallerySelect',
  GallerySelect:'/GallerySelect',
  ProcGalleryDetailSelectSP:'/ProcGalleryDetailSelectSP',
  RegisteredMember:"/RegisteredMember",
  DownloadSelect:'/DownloadSelect',
  AttachmentViewType:'/AttachmentViewType',
  AttachmentGetAll:'/AttachmentGetAll',
  ArticleInsert:'/ArticleInsert',
  ArticleDelete:'/ArticleDelete',
  QAnsSelectbyuserID:'/QAnsSelectbyuserID',
  QAnsInsert:'/QAnsInsert',
  UserLoginMaster:'/UserLoginMaster',
  VBoxInsert:'/VBoxInsert',
  TermsAndCondition:'/TandC',
  UniversitySelect:'/UniversitySelect',
  CountrySelect:'/CountrySelect',
  StateSelectByCountryID:'/StateSelectByCountryID',
  StateSelect:'/StateSelect',
  DistrictSelectByStateID:'/DistrictSelectByStateID',
  TalukaSelectByDistrictID:'/TalukaSelectByDistrictID',
  QualificationSelect:'/QualificationSelect',
  DesignationSelect:'/DesignationSelect',
  CollegeGalleryInsert:'/CollegeGalleryInsert',
  UniversityInsert:'/UniversityInsert',
  UniversityUpdate:'/UniversityUpdate',
  UniversityDelete:'/UniversityDelete',
  CountryInsert:'/CountryInsert',
  CountryUpdate:'/CountryUpdate',
  CountryDelete:'/CountryDelete',
  CountrySelectByCountryIDSP: '/CountrySelectByCountryIDSP',
  StateInsert: '/StateInsert',
  StateUpdate: '/StateUpdate',
  StateDelete: '/StateDelete',
  DistrictSelect:'/DistrictSelect',
  DistrictInsert:'/DistrictInsert',
  DistrictUpdate:'/DistrictUpdate',
  DistrictDelete:'/DistrictDelete',
  TalukaSelect:'/TalukaSelect',
  TalukaInsert:'/TalukaInsert',
  TalukaUpdate:'/TalukaUpdate',
  TalukaDelete:'/TalukaDelete',
  CitySelect:'/CitySelect',
  CityInsert:'/CityInsert',
  CityUpdate:'/CityUpdate',
  CityDelete:'/CityDelete',
  DesignationSelect:'/DesignationSelect',
  DesignationInsert:'/DesignationInsert',
  DesignationUpdate:'/DesignationUpdate',
  DesignationDelete:'/DesignationDelete',
  UserTypeSelect:'/UserTypeSelect',
  UserTypeInsert:'/UserTypeInsert',
  UserTypeUpdate:'/UserTypeUpdate',
  UserTypeDelete:'/UserTypeDelete',
  QualificationSelect:'/QualificationSelect',
  QualificationInsert:'/QualificationInsert',
  QualificationUpdate:'/QualificationUpdate',
  QualificationDelete:'/QualificationDelete',
  NotificationSelect:'/NotificationSelect',
  NotificationInsert:'/NotificationInsert',
  NotificationUpdate:'/NotificationUpdate',
  NotificationDelete:'/NotificationDelete'
};
export const storeData = async (key, value) => {
  try {
    console.log("key 29:::",key+value)
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log("Async",e);
  }
};
export const clearData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // saving error
  }
};
export const showToastOrAlert = (msg) => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  } else {
    Alert.alert(msg);
  }
};
export const getdata = async key => {
  try {
    const retrievedItem = await AsyncStorage.getItem(key);
    const item = JSON.parse(retrievedItem);
    return item;
  } catch (error) {
    console.log(error.message);
  }
  return;
};
// export function showtoasterror(msg) {
//   Snackbar.show({
//     text: msg,
//     position: 'top',
//     duration: 4000,
//     backgroundColor: '#C1464C',
//     // marginBottom:50
//   });
// }
// export function showtoastsucces(msg) {
//   Snackbar.show({
//     text: msg,
//     position: 'top',
//     duration: Snackbar.LENGTH_LONG,
//     backgroundColor: '#5AB126',
//   });
// }
export function launchCamera(callback) {
  let options = {
    includeBase64: true,

    storageOptions: {
      includeBase64: true,

      skipBackup: true,
      path: 'images',
    },
  };
  ImagePicker.launchCamera(options, response => {
    // console.log('Response = ', response);

    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
      alert(response.customButton);
    } else {
      const source = {uri: response.uri};
      // console.log('response', JSON.stringify(response));
      // console.log('path', response.assets[0].base64);
      callback(JSON.stringify(response));
    }
  });
}
export function launchGallary(callback) {
  const options = {
    quality: 0.75,
    maxWidth: 300,
    maxHeight: 300,
    includeBase64: true,
    storageOptions: {
      skipBackup: true,
    },
  };
  ImagePicker.launchImageLibrary(options, response => {
    console.log('Response = ', response);

    if (response.didCancel) {
      console.log('User cancelled photo picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      callback(JSON.stringify(response));
    }
  });
}
export async function selectdocument(callback) {

  try {
    const response = await DocumentPicker.pick({
      type: [DocumentPicker.types.pdf],
      
    });
    callback(JSON.stringify(response));

  } catch (err) {
    if (DocumentPicker.isCancel(err)) {
      console.log('User canceled the picker');
    } else {
      throw err;
    }
  }
};
export function getTimeIn24Hrs(d) {
  var time = moment(d, 'YYYY-MM-DD HH:mm:ss').format('HH:mm');
  // console.log('getDateYYYYMMDD date', currentDate);
  return time;
}
export function getDDMMMYYYY(d) {
  var time = moment(d, 'YYYY-MM-DD HH:mm:ss').format('DD MMM YYYY');
  // console.log('getDateYYYYMMDD date', currentDate);
  return time;
}
export function getdate(date) {
  const parsedDate = moment(date);
  const formattedDate = parsedDate.format('DD MMM YYYY');
  return formattedDate;
}
export function getTime(date) {
  const parsedTime = moment(date);
  const formattedTime = parsedTime.format('HH:mm A');
  return formattedTime;
}
export function getTimeHrs(date) {
  const formattedTime = moment(date,'HH:mm:ss').format('HH:mm A');
  return formattedTime;
}
