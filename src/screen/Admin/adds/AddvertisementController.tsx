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

export default class AddvertisementController extends Component<Props, S, SS> {
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
  showAlert = (ScrollNewsId) => {
    Alert.alert(
      'Delete Confirmation',
      'Are you sure you want to delete this item?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        { text: 'Yes', onPress:()=> this.deletenews(ScrollNewsId) },
      ],
      { cancelable: false }
    );
  };
 
  updateValueById = (articleId) => {
    let updatedDataList = this.state.filterdata.map(article => {
      if (article.AdvertisementID === articleId) {
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
    let filteredData = this.state.datalist.filter(item => item.Title.toLowerCase().includes(Title.toLowerCase()));

  
  this.setState({ filterdata: filteredData }, () => {
      console.log("Updated datalist:", this.state.filterdata);
  });
}
getdata = async () => {
  this.setState({isLoading:true})

  const responseData =  await makeApiCallxml(apiFunctions.AdvertisementSelect+"?UN1=1&PWD1=1", 'GET', "admin");
//   const updatedTable = responseData?.Table1.map(item => ({
//     ...item,
//     iscollaps: false  // Setting the initial value of iscollaps to false
//   }));
// this.setState({datalist:updatedTable,filterdata:updatedTable})
// let jsonArray1 = responseData.Table;
const updatedTable = this.processTableData(responseData.Table);


// Add a new key 'newKey' to each object
// jsonArray1 = jsonArray1.map(item => {
//   return {
//     ...item,
//     iscollaps: false // Replace 'newValue' with the desired value for newKey
//   };
// });
// responseData.Table.iscollaps = false;

// // Convert JSON to string for display or further processing
// let jsonString = JSON.stringify(responseData.Table, null, 2);
// let jsonArray = JSON.parse(jsonString);

this.setState({isLoading:false})
this.setState({datalist:updatedTable,filterdata:updatedTable})


}
 processTableData = (tableData) => {
  if (!tableData) {
    return []; // Return empty array if tableData is falsy
  }

  // If responseData.Table is a single object, convert it to an array of one object
  const updatedTable = Array.isArray(tableData)
    ? tableData.map(item => ({
        ...item,
        iscollaps: false  // Setting the initial value of iscollaps to false
      }))
    : [{ ...tableData, iscollaps: false }];

  return updatedTable;
};
deletenews = async (ScrollNewsID) => {
  this.setState({isLoading:true})
 
  const loginDetails= await getdata("loginDetails");
  let ID =  loginDetails.UserID;
  const res = await makeApiCallxml(apiFunctions.AdvertisementDelete+`?UN1=1&PWD1=1&AdvertisementID=${ScrollNewsID}&UserID=${ID}`,'GET',"admin");
 console.log("dsadasd0",res)
 
  this.setState({isLoading:false})
  this.getdata()


}

  // Customizable Area End
}
