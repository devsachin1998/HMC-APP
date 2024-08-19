import {Component} from 'react';
import {apiFunctions, storeData, getdata} from '../../../globalServices/utils';
import {makeApiCallxml} from '../../../globalServices/api';
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
  images:any;
  currentIndex: number;
  texts: any;
  searchVal:string;
  addQuery:string;
  iconChange:boolean;
  datalist:any;
  filterdata:any;
  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class InquiriesScreenController extends Component<Props, S, SS> {
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
      pageIndex: 1,
      totalCount: 1,
      totalPage: 1,
      moreLoading: false,
      images:[],
      currentIndex: 0,
      datalist:[],
      filterdata:[],
      searchVal:'',
      addQuery: '',
      iconChange: false,
      texts:""
      // Customizable Area End
    };

    // Customizable Area Start

    // Customizable Area End
  }
  updateValueById = (QAnsID) => {
    
    let updatedDataList = this.state.datalist.map(queries => {
      if (queries.IDP === QAnsID) {
          return { ...queries, iscollaps: !queries.iscollaps };
      }
      else
      {
        return { ...queries, iscollaps: false};

      }
  });
  this.setState({ datalist: updatedDataList,filterdata:updatedDataList }, () => {
});


}
  // Customizable Area Start
  async componentDidMount() {
    this.setState({isLoading:true})
    const user= await getdata("loginDetails");
    // let ID =  user.UserID;
    // const user = await getdata('loginDetails');
    // console.log("dasdasdasdsa",user)
    this.getdata();
  }

  searchValueById = (Title: string) => {
    let filteredData = this.state.datalist.filter(item => item.VistiorName.toLowerCase().includes(Title.toLowerCase()));

  
  this.setState({ filterdata: filteredData }, () => {
      // console.log("Updated datalist:", this.state.filterdata);
  });
}
  getdata = async ()=>{
    let apiUrl = `${apiFunctions.url}${apiFunctions.VBoxView}`;
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
      const responseData = await response.json();
      responseData.forEach(data => {
        data.iscollaps = false;
    });
      // console.log("dsddsfdd", responseData);
      this.setState({datalist:responseData,filterdata:responseData})
      console.log("tables:::::11111", this.state.datalist);

      this.setState({isLoading:false})

    } catch (error) {
      console.error(error);
      return null; // Handle error appropriately
    }
    }
    showAlert = (id) => {
      Alert.alert(
        'Delete Confirmation',
        'Are you sure you want to delete this item?',
        [
          {
            text: 'No',
            style: 'cancel',
          },
          { text: 'Yes', onPress:()=> {this.deletequery(id)} },
        ],
        { cancelable: false }
      );
    };
    deletequery = async (id) => {
      this.setState({isLoading:true})
  
      const user = await getdata('loginDetails');
      let ID =  user.UserID;
      const responseData =  await makeApiCallxml(apiFunctions.InquiryDelete+`?UN1=2&PWD1=2&InquiryID=${id}&FullName=&MobileNo=&EmailID=&Message=&UserID=`+ID, 'GET', "base");
  //     const tables = Array.isArray(responseData.Table) ? responseData.Table : [responseData.Table];
  
  //       const jsonData1 =  tables.map((table: any) => ({
  //       QAnsID:table?.QAnsID,
  //       Message:table?.Message, 
  //       InqRespnse:table?.InqRespnse||"",
  //       iscollaps:false
        
  //   }))
  //   this.setState({datalist:jsonData1})
  console.log("dsad",responseData)
    this.setState({isLoading:false})
      this.getdata()
  
    }
    // Customizable Area End
}
