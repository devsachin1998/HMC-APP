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
  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class DoctorHomeScreenController extends Component<Props, S, SS> {
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
      images:[]
      // Customizable Area End
    };

    // Customizable Area Start

    // Customizable Area End
  }

  // Customizable Area Start
  async componentDidMount() {
    this.getbanner();
  }
  
  getbanner = async () => {
    const responseData = await makeApiCallxml(apiFunctions.BannerSelect+"?UN1=2&PWD1=2", 'GET', null);
  console.log('responseData:::--->', responseData);
  const jsonData1 =   responseData.Table.map((table: { IID: any; URL: any; }) => ({
    IID: table?.IID,
    URL: apiFunctions.bannerurl+table?.URL
  }))
  const urls = jsonData1.map((item: { URL: any; }) => item.URL);
  this.setState({images:urls})
  // console.log("images",this.state.images)
  // console.log("dsddsfdd111",jsonData1 )
  this.getAlldata();
  }
  getAlldata = async () => {
    const responseData = await makeApiCallxml(apiFunctions.HomeSelectSP+"?UN1=2&PWD1=2", 'GET', null);
  // console.log('responseData:::--->', responseData);
  // const jsonData1 =   responseData.map((table: { IID: any; URL: any; }) => ({
  //   IID: table?.IID,
  //   URL: apiFunctions.bannerurl+table?.URL
  // }))
  // const urls = jsonData1.map((item: { URL: any; }) => item.URL);
  // this.setState({images:urls})
  // console.log("images",this.state.images)
  // console.log("dsddsfdd111",jsonData1 )

  }
  // Customizable Area End
}
