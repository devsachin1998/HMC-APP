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
  filterdata:any;
  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class ArticlesScreenController extends Component<Props, S, SS> {
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

      this.setState({ isLoading: true }); // Example: Set isLoading state to true
      let type = this.props.route.params.type;
      console.log("Type:", type);
      if (type === 1) {
        this.getdata();
      } else  if (type === 2)  {
        this.getdataNotification();
      }
      else
      {
        this.getdataDownload();
      }

  }
  
  updateValueById = (articleId) => {
    let updatedDataList = this.state.filterdata.map(article => {
      if (article.ArticleID === articleId) {
          return { ...article, iscollaps: !article.iscollaps };
      }
      return article;
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
    const responseData = 
    await makeApiCallxml(apiFunctions.ArticleSelect+"?UN1=1&PWD1=1", 'GET', "web");
    const jsonData1 =  responseData.Table.map((table: any) => ({
      ArticleID:table?.ArticleID, 
      Title:table?.Title,
      Date:moment(table?.Date).format("DD/MM/YYYY"),
      PDFFile:table?.PDFFile,
      Description:table?.Description,
      iscollaps:false
  }))
  this.setState({datalist:jsonData1,filterdata:jsonData1})
  this.setState({isLoading:false})

 console.log('responseData:::--->headline', this.state.datalist);

  }
  getdataNotification = async () => {
    const responseData = 
    await makeApiCallxml(apiFunctions.NotificationSelect+"?UN1=2&PWD1=2", 'GET', "base");
    const jsonData1 =  responseData.Table.map((table: any) => ({
      ArticleID:table?.NotificationID, 
      Title:table?.Title,
      Date:moment(table?.UpdatedDate).format("DD/MM/YYYY"),
      PDFFile:table?.FileName,
      Description:table?.Description,
      iscollaps:false
  }))
  
  this.setState({datalist:jsonData1,filterdata:jsonData1})
  this.setState({isLoading:false})

 console.log('responseData:::--->headline', this.state.datalist);

  }
  getdataDownload = async () => {
    const responseData = 
    await makeApiCallxml(apiFunctions.DownloadSelect+"?UN1=2&PWD1=2", 'GET', "base");
    const jsonData1 =  responseData.Table.map((table: any) => ({
      ArticleID:table?.DownloadID, 
      Title:table?.Title,
      Date:moment(table?.UpdatedDate).format("DD/MM/YYYY"),
      PDFFile:table?.FileName,
      Description:table?.Description,
      iscollaps:false
  }))
  
  this.setState({datalist:jsonData1,filterdata:jsonData1})
  this.setState({isLoading:false})

 console.log('responseData:::--->headline', this.state.datalist);

  }
  // Customizable Area End
}
