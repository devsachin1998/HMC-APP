import {Component} from 'react';
import {apiFunctions, storeData, getdata} from '../../globalServices/utils';
import {makeApiCallxml} from '../../globalServices/api';
import moment from 'moment';

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
  selectedTab:any;
  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class GalleryScreenController extends Component<Props, S, SS> {
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
      selectedTab:'photos'
      // Customizable Area End
    };

    // Customizable Area Start

    // Customizable Area End
  }

  // Customizable Area Start
  async componentDidMount() {

      this.setState({ isLoading: true }); // Example: Set isLoading state to true
    
        this.getdata();

  }
  handleTabPress = (tab:any)=>
    {
      this.setState({selectedTab:tab})
    }
  
  updateValueById = (articleId) => {
    let updatedDataList = this.state.datalist.map(article => {
      if (article.ArticleID === articleId) {
          return { ...article, iscollaps: !article.iscollaps };
      }
      return article;
  });
  
  this.setState({ datalist: updatedDataList }, () => {
      console.log("Updated datalist:", this.state.datalist);
  });
  
  
  }

 
  getdata = async () => {
    const responseData =  await makeApiCallxml(apiFunctions.GallerySelect+"?UN1=1&PWD1=1", 'GET', "admin");
    const tables = Array.isArray(responseData.Table) ? responseData.Table : [responseData.Table];

      const jsonData1 =  tables.map((table: any) => ({
      GalleryID:table?.GalleryID, 
      Title:table?.Title,
      Image:apiFunctions.bannerurl+"img/Gallery/"+table?.GalImage
      
  }))
  this.setState({datalist:jsonData1})
  this.setState({isLoading:false})

 console.log('responseData:::--->headline', jsonData1);

  }
 
}
