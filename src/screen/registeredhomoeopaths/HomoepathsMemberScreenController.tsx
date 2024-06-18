import {Component} from 'react';
import {apiFunctions, storeData, getdata} from '../../globalServices/utils';
import {makeApiCall, makeApiCallxml} from '../../globalServices/api';

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
  memberlist:any;
  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class HomoepathsMemberScreenController extends Component<Props, S, SS> {
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
      memberlist:[],
      // Customizable Area End
    };

    // Customizable Area Start

    // Customizable Area End
  }

  // Customizable Area Start
  async componentDidMount() {
      this.setState({isLoading:true})
     this.getMembers();
    // this.getAlldata();
  }
  


  fetchMoreData = () => {
    
      this.setState({ isLoading: true });
      // Increment page number and fetch data for the next page
      this.setState(prevState => ({ pageIndex: prevState.pageIndex + 1 }), () => {
        this.getMembers();
      });
    
  };
  getMembers = async () => {
    const responseData = 
    await makeApiCall(apiFunctions.RegisteredMember+`?queryvalue=&cityvalue=&registrationNo=&crrPageNo=${this.state.pageIndex}`, 'GET',null);
    this.setState(prevState => ({
      memberlist: [...prevState.memberlist, ...responseData],
      isLoading: false,
    }));
  

 console.log('responseData:::--->headline',responseData);

  }
  // Customizable Area End
}
