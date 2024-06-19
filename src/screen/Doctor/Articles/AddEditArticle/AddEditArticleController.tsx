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
    
    
  }
  
  addArticle = async()=>{
    console.log('logins???????');
    const pdfFile= 'http://www.pdf995.com/samples/pdf.pdf'
    const loginDetails= await getdata("loginDetails")
    // console.log('loginDetails???????',loginDetails[0]?.CouncilMemberIDP)
    const responseData = await makeApiCallxml(apiFunctions.ArticleInsert+`?UN1=1&PWD1=1&Title==${this.state.articleName}&Date==${this.state.date1}&PDFDoc==${pdfFile}&Description==${this.state.desc}&RegistrationID==${loginDetails[0]?.CouncilMemberIDP}`, 'GET', "web");
    console.log('responseData Articles::--->', responseData);
   
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
