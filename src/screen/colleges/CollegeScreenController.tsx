import {Component} from 'react';
import {apiFunctions, storeData, getdata} from '../../globalServices/utils';
import {makeApiCallxml} from '../../globalServices/api';
import moment from 'moment';
import RNFetchBlob from 'rn-fetch-blob';
import { Alert, Platform } from 'react-native';

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
  totalPage: number;
  pageIndex: number;
  moreLoading: boolean;
  datalist:any;
  modal:any;
  filterdata:any;
  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class CollegeScreenController extends Component<Props, S, SS> {
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
      modal: false,
      totalPage: 1,
      moreLoading: false,
      datalist:[],
      filterdata:[],

      // Customizable Area End
    };

    // Customizable Area Start

    // Customizable Area End
  }

  // Customizable Area Start
  async componentDidMount() {

      this.setState({ isLoading: true }); 
    
        this.getdata();
  

  }
  
  updateValueById = (CollegeName) => {
    let filteredData = this.state.datalist.filter(item => item.CollegeName.toLowerCase().includes(CollegeName.toLowerCase()));

  
  this.setState({ filterdata: filteredData }, () => {
      console.log("Updated datalist:", this.state.datalist);
  });
  }

 
  getdata = async () => {
    const responseData = 
    await makeApiCallxml(apiFunctions.CollegeSelect+"?UN1=1&PWD1=1", 'GET', "web");
    const jsonData1 =  responseData.Table.map((table: any) => ({
      CollegeID:table?.CollegeID, 
      CollegeName:table?.CollegeName,
      UniversityName:table?.UniversityName,
      PhoneNo:table?.PhoneNo,
      Email:table?.Email,
      Address:table?.Address,
      Website:table?.Website,
      PDFFile:table?.PDFFile

  }))
  this.setState({datalist:jsonData1,filterdata:jsonData1})
  this.setState({isLoading:false})

 console.log('responseData:::--->headline', responseData);

  }
  getdownloaddata = async () => {
    const responseData = 
    await makeApiCallxml(apiFunctions.CollegeSelect+"?UN1=1&PWD1=1", 'GET', "web");
    const jsonData1 =  responseData.Table.map((table: any) => ({
      CollegeID:table?.CollegeID, 
      CollegeName:table?.CollegeName,
      UniversityName:table?.UniversityName,
      PhoneNo:table?.PhoneNo,
      Email:table?.Email,
      Address:table?.Address,
      Website:table?.Website,

  }))
  this.setState({datalist:jsonData1,filterdata:jsonData1})
  this.setState({isLoading:false})

 console.log('responseData:::--->headline', responseData);

  }
  downloadfile = async () => {
    const { dirs } = RNFetchBlob.fs;
    const dirToSave = Platform.OS == 'ios' ? dirs.DocumentDir : dirs.DownloadDir;
    const configfbAndroid = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        mediaScannable: true,
        title: `26072021114609PM.pdf`,
        path: `${dirToSave}/26072021114609PM.pdf`,
      },
    }
    try {
    await RNFetchBlob.config(configfbAndroid)
        .fetch('GET', `http://hmc.khedutmitra.com/Colleges/26072021114609PM.pdf`)
        .then((res: any) => {
          console.log('The file saved path ', res.data);
        
        })
        .catch((e: any) => {
          Alert.alert("", 'Error in download file.',
            [
              {
                text: "Ok", onPress: async () => {
                }
              }
            ])
        });
    } catch (error) {
      console.log("catch error..", error)
    }
  // Customizable Area End
}
}
