import {Component} from 'react';
import {apiFunctions, storeData, getdata} from '../../globalServices/utils';
import {makeApiCall, makeApiCallxml} from '../../globalServices/api';
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
  datasublist:any;
  filterdata:any;
  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class DownloadScreenController extends Component<Props, S, SS> {
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
      datasublist:[],
      filterdata:[],
      // Customizable Area End
    };

    // Customizable Area Start

    // Customizable Area End
  }

  // Customizable Area Start
  async componentDidMount() {

      this.setState({ isLoading: true }); 
        this.getdata();
      

  }
  updateValueById = (articleId) => {
    let updatedDataList = this.state.datalist.map(article => {
      if (article.AttachmentTypeIDP === articleId) {
          return { ...article, isCollapsed: true };
      }
      else 
      {
        return { ...article, isCollapsed: false};
      }
      // return article;
  });
  
  this.setState({ datalist: updatedDataList }, () => {
      console.log("Updated datalist:", this.state.filterdata);
  });
  this.setState({filterdata:[]},()=>  this.getSubdata(articleId))

  }
  getSubdata = async (AttachmentTypeIDP:any) => {
    
    const responseData = 
    await makeApiCall(apiFunctions.AttachmentGetAll+"?AttTypeIDF="+AttachmentTypeIDP, 'GET', null);
    console.log("responseData:", responseData);
    this.setState({datasublist:responseData,filterdata:responseData})
  
  }

  searchValueById = (Title: string) => {
    let filteredData = this.state.datasublist.filter((item: { Titel: string; }) => item.Titel.toLowerCase().includes(Title.toLowerCase()));
  this.setState({ filterdata: filteredData }, () => {
      console.log("Updated datalist:", this.state.filterdata);
  });
}
  getdata = async () => {
    const responseData = 
    await makeApiCall(apiFunctions.AttachmentViewType, 'GET', null);
  let data =  responseData.forEach(obj => {
      obj.isCollapsed = false; // or false, depending on your requirement
    });
  this.setState({datalist:responseData})
  this.setState({isLoading:false})

 console.log('responseData:::--->headline', data);

  }
 
  // Customizable Area End
}
