import {Component} from 'react';
import {apiFunctions, storeData, getdata, showToastOrAlert} from '../../../globalServices/utils';
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

export default class UserTypesScreenAdminController extends Component<Props, S, SS> {
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
  showAlert = (UserTypeID) => {
    Alert.alert(
      'Delete Confirmation',
      'Are you sure you want to delete this item?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        { text: 'Yes', onPress:()=> this.deleteuniversity(UserTypeID) },
      ],
      { cancelable: false }
    );
  };
 
  updateValueById = (articleId) => {
    let updatedDataList = this.state.filterdata.map(article => {
      if (article.UserTypeID === articleId) {
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
    let filteredData = this.state.datalist.filter(item => item.UserTypeName.toLowerCase().includes(Title.toLowerCase()));

  
  this.setState({ filterdata: filteredData }, () => {
      console.log("Updated datalist:", this.state.filterdata);
  });
}
getdata = async () => {

  const responseData = await makeApiCallxml(apiFunctions.UserTypeSelect+"?UN1=2&PWD1=2", 'GET', "base");
  const tables = Array.isArray(responseData?.Table) ? responseData?.Table : [responseData?.Table];
  
  const updatedTable = tables.map(item => ({
    ...item,
    iscollaps: false  // Setting the initial value of iscollaps to false
  }));
this.setState({datalist:updatedTable,filterdata:updatedTable})
this.setState({isLoading:false})

console.log('responseData:::--->headline', responseData);

}
deleteuniversity = async (UserTypeID) => {
  this.setState({isLoading:true})
 
  const loginDetails= await getdata("loginDetails");
  let ID =  loginDetails.UserID;
  const res = await makeApiCallxml(apiFunctions.UserTypeDelete+`?UN1=2&PWD1=2&UserTypeID=${UserTypeID}&UserID=${ID}`,'GET',"base");
 console.log("dsadasd0",res)
 
  this.setState({isLoading:false})
  this.getdata()


}

  // Customizable Area End
}
