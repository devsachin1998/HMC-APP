import {Component} from 'react';
import {apiFunctions, storeData, getdata} from '../../../../globalServices/utils';
import {makeApiCallxml, makeApiCallxmlimage} from '../../../../globalServices/api';
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
import moment from 'moment';
// import RNFS from 'react-native-fs';


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
  filename:any,
  desc:string,
  ArticleID:any

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
      filename:"",
      ArticleID:'',
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


 
    if(this.props?.route?.params?.type==1)
    {
      let item =this.props.route.params.item
      
      // console.log("date1111')",moment(item.Date).format('YYYY-MM-DD'))
      this.setState({desc:item.Description,articleName:item.Title,filename:item.PDFFile,date1:new Date(item.Date),ArticleID:item.ArticleID})

    } 

  }


  addArticle = async () => {
    this.setState({isLoading:true})
    const pdfFile = this.state.pdfFile

    const loginDetails= await getdata("loginDetails")
    const sDate=moment(this.state.date1).format('YYYY-MM-DD');


    const urlencoded = new URLSearchParams();
    urlencoded.append("UN1", "1");
    urlencoded.append("PWD1", "1");
    urlencoded.append("Title", this.state.articleName);
    urlencoded.append("Date1", sDate);
    urlencoded.append("Description", this.state.desc);

    urlencoded.append("RegistrationID", loginDetails[0]?.CouncilMemberIDP ? loginDetails[0]?.CouncilMemberIDP:loginDetails.UserID);
    urlencoded.append('PDFDoc',pdfFile)
    const responseData = 
    await makeApiCallxmlimage(apiFunctions.ArticleInsert, 'POST', "web",urlencoded.toString());
    console.log("responseData",responseData)
    this.props.navigation.navigate("ArticlePage")
        // this.setState({datalist:responseData?.Table,filterdata:responseData?.Table})
  this.setState({isLoading:false})
  
  
  }
  updateArticle = async () => {
    this.setState({isLoading:true})
    const pdfFile = this.state.pdfFile

    const loginDetails= await getdata("loginDetails")
    const sDate=moment(this.state.date1).format('YYYY-MM-DD');


    const urlencoded = new URLSearchParams();
    urlencoded.append("UN1", "1");
    urlencoded.append("ArticleID", this.state.ArticleID);
    
    urlencoded.append("PWD1", "1");
    urlencoded.append("Title", this.state.articleName);
    urlencoded.append("Date1", sDate);
    urlencoded.append("Description", this.state.desc);
    urlencoded.append("RegistrationID", loginDetails[0]?.CouncilMemberIDP ? loginDetails[0]?.CouncilMemberIDP:loginDetails.UserID);

    // urlencoded.append("RegistrationID", loginDetails[0]?.CouncilMemberIDP);
    if(pdfFile=="")
    {
      const response = await RNFetchBlob.config({ fileCache: true }).fetch("GET", apiFunctions.bannerurl+"Article/"+this.state.filename);
      const base64Data = await response.readFile("base64");
      urlencoded.append('PDFDoc',base64Data)
    }
    else
    {
      urlencoded.append('PDFDoc',pdfFile)
    }
   

    const responseData = 
    await makeApiCallxmlimage(apiFunctions.ArticleUpdate, 'POST', "web",urlencoded.toString());
    console.log("responseData",responseData)
    this.props.navigation.navigate("ArticlePage")
        // this.setState({datalist:responseData?.Table,filterdata:responseData?.Table})
  this.setState({isLoading:false})
  
  
  }

  // addArticle = async()=>{
  //   this.setState({isLoading:true})
  //   const pdfFile = ""
  //   const loginDetails= await getdata("loginDetails")
  //   const sDate=moment(this.state.date1).format('YYYY-MM-DD');

  //   const responseData = await makeApiCallxml(apiFunctions.ArticleInsert+`?UN1=1&PWD1=1&Title=${this.state.articleName}&Date1=${sDate}&PDFDoc=${pdfFile}&Description=${this.state.desc}&RegistrationID=${loginDetails[0]?.CouncilMemberIDP}`, 'GET', "web");
  //   console.log('responseData Articles::--->', responseData);
  //   this.setState({isLoading:false})
  // }

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

      // let resi=res[0].uri;
      let resi = res[0].uri.replace('file://', '');
      const fileBase64 = await RNFetchBlob.fs.readFile(resi, 'base64');
      this.setState({pdfFile:fileBase64,filename:res[0].name})
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
