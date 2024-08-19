import {Component} from 'react';
import {apiFunctions, storeData, getdata} from '../../globalServices/utils';
import {makeApiCall, makeApiCallxml} from '../../globalServices/api';
import moment from 'moment';
import { Alert } from 'react-native';

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
  datalist:any;
  datasublist:any;
  filterdata:any;
  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class DownloadScreenController extends Component<Props, S, SS> {
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
      datalist:[],
      datasublist:[],
      filterdata:[],
      // Customizable Area End
    };

    // Customizable Area Start

    // Customizable Area End
  }

  // Customizable Area Start
  async componentDidMount() {
      console.log("dasd",this.props?.route?.params?.isdelete)
      this.setState({ isLoading: true }); 
        this.getdata();
      

  }
  updateValueById = (articleId) => {
    let updatedDataList = this.state.datalist.map(article => {
      if (article.AttachmentTypeIDP === articleId) {
          return { ...article, isCollapsed: !article.isCollapsed };
      }
      else 
      {
        return { ...article, isCollapsed: false};
      }
      // return article;
  });
  
  this.setState({ datalist: updatedDataList }, () => {
      console.log("Updated datalist:", this.state.filterdata);
  });
  this.setState({filterdata:[]},()=>  this.getSubdata(articleId))

  }
  getSubdata = async (AttachmentTypeIDP:any) => {
    
    const responseData = 
    await makeApiCall(apiFunctions.AttachmentGetAll+"?AttTypeIDF="+AttachmentTypeIDP, 'GET', null);
    console.log("responseData:", responseData);
    this.setState({datasublist:responseData,filterdata:responseData})
  
  }
  showAlert = (deleteID) => {
    Alert.alert(
      'Delete Confirmation',
      'Are you sure you want to delete this item?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        { text: 'Yes', onPress:()=> {this.deletedownload(deleteID)} },
      ],
      { cancelable: false }
    );
  };
  deletedownload = async (deleteID) => {
    this.setState({isLoading:true})
   
    const loginDetails= await getdata("loginDetails");
    let ID =  loginDetails.UserID;
    const res = await makeApiCallxml(apiFunctions.DownloadDelete+`?UN1=2&PWD1=2&DownloadID=${deleteID}&Title=&FileName=&FileType=&Description=&UserID=${ID}`,'GET',"base");
   console.log("dsadasd0",res)
   
    this.setState({isLoading:false})
    this.getdata()
  
  
  }
  searchValueById = (Title: string) => {
    let filteredData = this.state.datasublist.filter((item: { Titel: string; }) => item.Titel.toLowerCase().includes(Title.toLowerCase()));
  this.setState({ filterdata: filteredData }, () => {
      console.log("Updated datalist:", this.state.filterdata);
  });
}
  getdata = async () => {
    const responseData = 
    await makeApiCall(apiFunctions.AttachmentViewType, 'GET', null);
  let data =  responseData.forEach(obj => {
      obj.isCollapsed = false; // or false, depending on your requirement
    });
  this.setState({datalist:responseData})
  this.setState({isLoading:false})

 console.log('responseData:::--->headline', data);

  }
 
  // Customizable Area End
}
