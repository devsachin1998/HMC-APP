import {Component} from 'react';
import {apiFunctions, storeData, getdata} from '../../../../globalServices/utils';
import {makeApiCallxml} from '../../../../globalServices/api';

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
  ArticleList:any;
  open: boolean,
  date1: any,
  articleName:string,
  pickedDocument:any,
  pdfFile:any,
  desc:string,

  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class AddEditArticleController extends Component<Props, S, SS> {
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
      texts: [
        {
          text: "Welcome To HMC - The Council of Homoeopathic System of Medicine Gujarat",
          flex: 0.1
        },
        {
          text: "Dr.J.P. Nanavati brought homoeopathy in Gujarat.He Started a homoeopathy society in 1889. He also started a charitable homoeopathy dispensary in kalupur Ahmedabad. This dispensary is still serving the large number of people.",
          flex: 0.25
        }
      ],
      searchVal:'',
      addQuery: '',
      iconChange: false,
      ArticleList:[],
      open: false,
      date1: new Date(),
      articleName:'',
      pickedDocument:null,
      pdfFile:'',
      desc:''
      // Customizable Area End
    };

    // Customizable Area Start

    // Customizable Area End
  }

  // Customizable Area Start
  async componentDidMount() {
    
    this.setState({isLoading:true})
    this.getArticle();
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        currentIndex: (prevState.currentIndex + 1) % this.state.texts.length
      }));
    }, 3000);
  
    
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
 
  getArticle = async()=>{
    const responseData = await makeApiCallxml(apiFunctions.ArticleSelect+"?UN1=1&PWD1=1", 'GET', "web");
    console.log('responseData Articles::--->', responseData);
    const jsonData1 =  responseData.Table.map((table: any) => ({
      Title: table?.Title,
      Date: table?.Date,
      PDFFile:table?.PDFFile,
      Description:table?.Description,
      ArticleID:table?.ArticleID,
      iscollaps:false
      // Address:table?.Address,
      // EmailId:table?.EmailId,
      // ProfileImage:apiFunctions.councilurl+table?.ProfileImage,
      // QualificationName:table?.QualificationName,
      // DesignationName:table?.DesignationName,
    }))
    this.setState({ArticleList:jsonData1})
    this.setState({isLoading:false})
  }

  addArticle = async()=>{
    console.log('logins???????');
    const pdfFile= ""
    const loginDetails= await getdata("loginDetails")
    // console.log('loginDetails???????',loginDetails[0]?.CouncilMemberIDP)
    const responseData = await makeApiCallxml(apiFunctions.ArticleInsert+`?UN1=1&PWD1=1&Title==${this.state.articleName}&Date==${this.state.date1}&PDFDoc==${pdfFile}&Description==${this.state.desc}&RegistrationID==${loginDetails[0]?.CouncilMemberIDP}`, 'GET', "web");
    console.log('responseData Articles::--->', responseData);
    // const jsonData1 = {
    //   Title: this.state.articleName,
    //   Date: this.state.date1,
    //   PDFFile:this.state.pdfFile,
    //   Description:this.state.desc,
    //   // regNo: this.state.
    //   // ArticleID:table?.ArticleID,
    //   // iscollaps:false
    //   // Address:table?.Address,
    //   // EmailId:table?.EmailId,
    //   // ProfileImage:apiFunctions.councilurl+table?.ProfileImage,
    //   // QualificationName:table?.QualificationName,
    //   // DesignationName:table?.DesignationName,
    // }
    // this.setState({ArticleList:jsonData1})
    this.setState({isLoading:false})
  }

  updateValueById = (ArticleID) => {
    let updatedDataList = this.state.ArticleList.map(article => {
      if (article.ArticleID === ArticleID) {
          return { ...article, iscollaps: !article.iscollaps };
      }
      return article;
  });
  
  this.setState({ ArticleList: updatedDataList }, () => {
      console.log("Updated datalist:", this.state.ArticleList);
  });
  
  
  }

  // Customizable Area End
}
