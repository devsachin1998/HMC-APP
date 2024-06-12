import {Component} from 'react';
import {apiFunctions, storeData, getdata} from '../../globalServices/utils';
import {makeApiCallxml} from '../../globalServices/api';

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

export default class CouncilMemberScreenController extends Component<Props, S, SS> {
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
  


 
  getMembers = async () => {
    const responseData = 
    await makeApiCallxml(apiFunctions.ProfileSelect+"?UN1=1&PWD1=1", 'GET', "admin");
    const jsonData1 =  responseData.Table.map((table: any) => ({
    FullName: table?.FullName,
    Mobile:table?.Mobile,
    Address:table?.Address,
    EmailId:table?.EmailId,
    ProfileImage:apiFunctions.councilurl+table?.ProfileImage,
    QualificationName:table?.QualificationName,
    DesignationName:table?.DesignationName,
  }))
  this.setState({memberlist:jsonData1})
  this.setState({isLoading:false})

 console.log('responseData:::--->headline', this.state.memberlist);

  }
  // Customizable Area End
}
