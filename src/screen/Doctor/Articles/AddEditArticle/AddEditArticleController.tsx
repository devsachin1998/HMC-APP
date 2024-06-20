import {Component} from 'react';
import {apiFunctions, storeData, getdata} from '../../../../globalServices/utils';
import {makeApiCallxml} from '../../../../globalServices/api';
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
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
    }))
    this.setState({ArticleList:jsonData1})
    this.setState({isLoading:false})
  }

  addArticle = async()=>{
    this.setState({isLoading:true})
    const pdfFile = ""
    const loginDetails= await getdata("loginDetails")
    const sDate=moment(this.state.date1).format('YYYY-MM-DD');

    const responseData = await makeApiCallxml(apiFunctions.ArticleInsert+`?UN1=1&PWD1=1&Title=${this.state.articleName}&Date1=${sDate}&PDFDoc=${pdfFile}&Description=${this.state.desc}&RegistrationID=${loginDetails[0]?.CouncilMemberIDP}`, 'GET', "web");
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
  handleDocumentPick = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
        
      });
      // this.setState({ file: res });
      console.log("sdsdsdf",res);

      let resi=res[0].uri;
      const fileBase64 = await RNFetchBlob.fs.readFile(resi, 'base64');
      console.log("sdsdsdf",fileBase64);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User canceled the picker');
      } else {
        throw err;
      }
    }
  };
  // Customizable Area End
}
