import {Component} from 'react';
import {apiFunctions, storeData, getdata} from '../../../globalServices/utils';
import {makeApiCallxml} from '../../../globalServices/api';

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
  response:any
  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class AddQueryScreenController extends Component<Props, S, SS> {
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
      texts:'',
      iconChange: false,
      response:''
      // Customizable Area End
    };

    // Customizable Area Start

    // Customizable Area End
  }
 


  // Customizable Area Start
  async componentDidMount() {
   
    let data=this.props.route.params.item;
    console.log("sadasd",data)
  }
  Addquery = async () => {
    this.setState({isLoading:true})
    let data=this.props.route.params.item;

    const user = await getdata('loginDetails');
    let ID =  user.UserID;
    const responseData =  await makeApiCallxml(apiFunctions.InquiryUpdate+`?UN1=2&PWD1=2&InquiryID=${data.IDP}&FullName=${data.VistiorName}&MobileNo=&EmailID=&Message=${this.state.response}&UserID=`+ID, 'GET', "base");
//     const tables = Array.isArray(responseData.Table) ? responseData.Table : [responseData.Table];

//       const jsonData1 =  tables.map((table: any) => ({
//       QAnsID:table?.QAnsID,
//       Message:table?.Message, 
//       InqRespnse:table?.InqRespnse||"",
//       iscollaps:false
      
//   }))
//   this.setState({datalist:jsonData1})
  this.setState({isLoading:false})
  this.props.navigation.navigate('InquiriesScreen')
 console.log('responseData:::--->headline',responseData);

  }
  
    // Customizable Area End
}
