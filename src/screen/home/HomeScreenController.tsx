import {Component} from 'react';
import {apiFunctions, storeData, getdata} from '../../globalServices/utils';
import {makeApiCallxml} from '../../globalServices/api';
import {  Platform } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import { openSettings, PERMISSIONS, request } from "react-native-permissions";

export interface Props {
  navigation?: any;
  id?: string;
  // Customizable Area Start
  // Customizable Area End
}

interface S {
  // Customizable Area Start
  isLoading: boolean;
  needRetakeToken: boolean;
  //   leaderboard: LeaderboardItem[];
  token: string;
  totalCount: number;
  totalPage: number;
  pageIndex: number;
  moreLoading: boolean;
  images:any;
  gallaryimages:any;
  headline:any;
  actlist:any;
  articleslist:any;
  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class HomeScreenController extends Component<Props, S, SS> {
  // Customizable Area Start
  //   unsubscribe: object;
  //   loginApiCallId: string;
  //   getLeaderboardDataApi: string;
  //   getMoreLeaderboardDataApi: string;
  //   pageSize: number;
  // Customizable Area End
  constructor(props: Props) {
    super(props);

    this.state = {
      // Customizable Area Start
      isLoading: false,
      needRetakeToken: true,
      //   leaderboard: [],
      token: '',
      pageIndex: 0,
      totalCount: 1,
      totalPage: 1,
      moreLoading: false,
      images:[],
      gallaryimages:[],
      headline:[],
      actlist:[],
      articleslist:[]
      // Customizable Area End
    };

    // Customizable Area Start

    // Customizable Area End
  }

  // Customizable Area Start
  async componentDidMount() {
    this.setState({isLoading:true})
     this.getbanner();
    // this.getAlldata();
  }
  async requestStoragePermission() {
    try {
      if (Platform.OS == "android") {
          request(PERMISSIONS.ANDROID.READ_MEDIA_VIDEO).then(async (result) => {
              if (result === "granted") {
                  // console.log("result in android", result);
              
              }
          })
          // openSettings().catch(() => console.warn('cannot open settings'));
      }
  } catch (e) {
      // console.log("eee permission android", e);
  }
  }
   permissionFunc = async () => {
    if (Platform.OS == 'ios') {
        this.actualDownload();
    } else {
      this.actualDownload()
      //this.requestStoragePermission();
        }
       
    }

 actualDownload = () => {
  const { dirs } = RNFetchBlob.fs;
  const dirToSave = Platform.OS == 'ios' ? dirs.DocumentDir : dirs.DownloadDir
  const configfb = {
      useDownloadManager: true,
      notification: true,
      mediaScannable: true,
      title: 'test.pdf',
      path: `${dirToSave}/test.pdf`,
  }
  const configOptions = Platform.select({
      ios: {
          title: configfb.title,
          path: configfb.path,
          appendExt: 'pdf',
      },
      android: configfb,
  });

  console.log('The file saved to 23233', configfb, dirs);

  RNFetchBlob.config(configOptions)
      .fetch('GET', 'http://www.africau.edu/images/default/sample.pdf', {})
      .then((res) => {
          if (Platform.OS === "ios") {
              RNFetchBlob.ios.previewDocument(configfb.path);
          }
          if (Platform.OS == 'android') {
          }
          console.log('The file saved to ', res);
      })
      .catch((e) => {
         
          console.log('The file saved to ERROR', e.message)
      });
}

  getbanner = async () => {
    const responseData = await makeApiCallxml(apiFunctions.BannerSelect+"?UN1=2&PWD1=2", 'GET');
 // console.log('responseData:::--->', responseData);
  const jsonData1 =   responseData.Table.map((table: { IID: any; URL: any; }) => ({
    IID: table?.IID,
    URL: apiFunctions.bannerurl+table?.URL
  }))
  const urls = jsonData1.map((item: { URL: any; }) => item.URL);
  this.setState({images:urls})
  // console.log("images",this.state.images)
  // console.log("dsddsfdd111",jsonData1 )
  this.getAlldata();
  }
  getAlldata = async () => {
    const responseData = 
    await makeApiCallxml(apiFunctions.HomeSelectSP+"?UN1=2&PWD1=2", 'GET');
  // console.log('responseData:::--->', responseData);
  // const jsonData1 =  [{"GalleryID": "12", "Title": "National Homoeopathic Conference 2012", "Url": "http://hmc.Khedutmitra.com/img/Gallery/16082021021049AM.jpg"}, {"GalleryID": "12", "Title": "National Homoeopathic Conference 2012", "Url": "http://hmc.Khedutmitra.com/img/Gallery/16082021021049AM.jpg"}, {"GalleryID": "12", "Title": "National Homoeopathic Conference 2012", "Url": "http://hmc.Khedutmitra.com/img/Gallery/16082021021049AM.jpg"}, {"GalleryID": "12", "Title": "National Homoeopathic Conference 2012", "Url": "http://hmc.Khedutmitra.com/img/Gallery/16082021021049AM.jpg"}, {"GalleryID": "12", "Title": "National Homoeopathic Conference 2012", "Url": "http://hmc.Khedutmitra.com/img/Gallery/16082021021049AM.jpg"}]
  const jsonData1 =  responseData.Table.map((table: any) => ({
    GalleryID: table?.GalleryID,
    Url: apiFunctions.bannerurl+"img/Gallery/"+table?.GalImage,
    Title:table?.Title
  }))
  const jsonData2 =  responseData.Table2.map((table: any) => ({
    Title: table?.Title,
    FileName: apiFunctions.bannerurl+"Article/"+table?.FileName,
  }))
  const jsonData3 =  responseData.Table1.map((table: any) => ({
    Title: table?.Title,
    FileName: apiFunctions.bannerurl+"Notification/"+table?.FileName,
  }))
  this.setState({gallaryimages:jsonData1,actlist:jsonData2,articleslist:jsonData3})

 //console.log('responseData:::--->', jsonData2);

this.getHeadline()

  }
  getHeadline = async () => {
    const responseData = 
    await makeApiCallxml(apiFunctions.ScrollNewsSelect+"?UN1=1&PWD1=1", 'GET', "admin");
  const jsonData1 =  responseData.Table.map((table: any) => ({
    NewsLine: table?.NewsLine,

  }))
  this.setState({headline:jsonData1})
  this.setState({isLoading:false})

 //console.log('responseData:::--->headline', jsonData1);

  }
  // Customizable Area End
}
