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
  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class AddQueryController extends Component<Props, S, SS> {
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
      iconChange: false
      // Customizable Area End
    };

    // Customizable Area Start

    // Customizable Area End
  }
 


  // Customizable Area Start
  async componentDidMount() {
   
  }
  Addquery = async () => {
    this.setState({isLoading:true})

    const user = await getdata('loginDetails');
    const id = user[0].CouncilMemberIDP;
    const responseData =  await makeApiCallxml(apiFunctions.QAnsInsert+`?UN1=2&PWD1=2&Message=${this.state.addQuery}&UserID=`+id, 'GET', "base");
//     const tables = Array.isArray(responseData.Table) ? responseData.Table : [responseData.Table];

//       const jsonData1 =  tables.map((table: any) => ({
//       QAnsID:table?.QAnsID,
//       Message:table?.Message, 
//       InqRespnse:table?.InqRespnse||"",
//       iscollaps:false
      
//   }))
//   this.setState({datalist:jsonData1})
  this.setState({isLoading:false})
  this.props.navigation.navigate('QueriesPage')
 console.log('responseData:::--->headline',responseData);

  }
  
    // Customizable Area End
}
