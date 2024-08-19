import {Component} from 'react';
import {apiFunctions, storeData, getdata} from '../../../globalServices/utils';
import {makeApiCallxml} from '../../../globalServices/api';
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
  filterdata:any;
  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class CollegeScreenAdminController extends Component<Props, S, SS> {
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
      filterdata:[],
      // Customizable Area End
    };

    // Customizable Area Start

    // Customizable Area End
  }

  // Customizable Area Start
  async componentDidMount() {

      this.setState({ isLoading: true });
      
      this.getdata()

  }
  showAlert = (ArticleID) => {
    Alert.alert(
      'Delete Confirmation',
      'Are you sure you want to delete this item?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        { text: 'Yes', onPress:()=> {} },
      ],
      { cancelable: false }
    );
  };
 
  updateValueById = (articleId) => {
    let updatedDataList = this.state.filterdata.map(article => {
      if (article.UserID === articleId) {
        return { ...article, iscollaps: !article.iscollaps };
      } else {
        return { ...article, iscollaps: false };
      }
    });
  
    this.setState({ filterdata: updatedDataList }, () => {
      console.log("Updated datalist:", this.state.filterdata);
    });
  }
  
  

  searchValueById = (Title: string) => {
    let filteredData = this.state.datalist.filter(item => item.UserName.toLowerCase().includes(Title.toLowerCase()));

  
  this.setState({ filterdata: filteredData }, () => {
      console.log("Updated datalist:", this.state.filterdata);
  });
}
getdata = async () => {

  const responseData = 
  await makeApiCallxml(apiFunctions.UserSelect+"?UN1=1&PWD1=1", 'GET', "admin");

this.setState({datalist:responseData?.Table,filterdata:responseData?.Table})
this.setState({isLoading:false})

console.log('responseData:::--->headline', responseData);

}

  // Customizable Area End
}
