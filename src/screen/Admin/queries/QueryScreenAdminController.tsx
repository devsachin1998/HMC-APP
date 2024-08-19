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
  images:any;
  currentIndex: number;
  texts: any;
  searchVal:string;
  addQuery:string;
  iconChange:boolean;
  datalist:any;
  filterdata:any;
  showmodal:any;
  txt:any;
  QAnsID:any;
  res:any;
  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class QueryScreenAdminController extends Component<Props, S, SS> {
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
      searchVal:'',
      addQuery: '',
      iconChange: false,
      texts:"",
      filterdata:[],
      showmodal:false,
      txt:'',
      res:'',
      QAnsID:0
      // Customizable Area End
    };

    // Customizable Area Start

    // Customizable Area End
  }
  updateValueById = (QAnsID) => {
    let updatedDataList = this.state.filterdata.map(queries => {
      if (queries.QAnsID === QAnsID) {
          return { ...queries, iscollaps: !queries.iscollaps };
      }
      return queries;
  });
  this.setState({ filterdata: updatedDataList }, () => {
});


}
  // Customizable Area Start
  async componentDidMount() {
    this.setState({isLoading:true})
    const user= await getdata("loginDetails");
    // let ID =  user.UserID;
    // const user = await getdata('loginDetails');
    this.getdata();
  }
  getdata = async () => {
    const responseData =  await makeApiCallxml(apiFunctions.QAnsSelectForResp+"?UN1=2&PWD1=2", 'GET', "base");
    const tables = Array.isArray(responseData?.Table) ? responseData?.Table : [responseData?.Table];
    console.log("Dsad",tables)
    if(tables.length>0 && responseData?.Table!=undefined)
      {

      
      const jsonData1 =  tables.map((table: any) => ({
      QAnsID:table?.QAnsID,
      Message:table?.Message, 
      InqRespnse:table?.InqRespnse||"",
      FullName:table?.FullName,
      CreatedDate:moment(table?.CreatedDate).format("DD/MM/YYYY"),
      iscollaps:false
      
  }))
  this.setState({datalist:jsonData1,filterdata:jsonData1})
}
else
{
  this.setState({datalist:[],filterdata:[]})

}
  this.setState({isLoading:false})


  }
  showAlert = (QID) => {
    Alert.alert(
      'Delete Confirmation',
      'Are you sure you want to delete this item?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        { text: 'Yes', onPress:()=> {this.deleteFAQ(QID)} },
      ],
      { cancelable: false }
    );
  };
  searchValueById = (Title: string) => {
    let filteredData = this.state.datalist.filter(item => item.Message.toLowerCase().includes(Title.toLowerCase()));

  
  this.setState({ filterdata: filteredData }, () => {
      console.log("Updated datalist:", this.state.filterdata);
  });
}
deleteFAQ = async (QAnsID) => {
  this.setState({isLoading:true})
 
  const loginDetails= await getdata("loginDetails");
  let ID =  loginDetails.UserID;
  const res = await makeApiCallxml(apiFunctions.QAnsDelete+`?UN1=2&PWD1=2&QAnsID=${QAnsID}&Message=&UserID=${ID}`,'GET',"base");
 console.log("dsadasd0",res)
 
  this.setState({isLoading:false})
  this.getdata()


}

sendresponse= async () => {
  let { res} = this.state;

  if ( !res) {
    Alert.alert('Please Enter response.');
    return;
  }

  this.setState({isLoading:true,showmodal:false})
 
  const loginDetails= await getdata("loginDetails");
  let ID =  loginDetails.UserID;
  const res1 = await makeApiCallxml(apiFunctions.QAnsResponse+`?UN1=2&PWD1=2&QAnsID=${this.state.QAnsID}&inqRespnse=${res}&UserID=${ID}`,'GET',"base");
 console.log("dsadasd0",res1)
 
  this.setState({isLoading:false,})
  this.getdata()


}
    // Customizable Area End
}
