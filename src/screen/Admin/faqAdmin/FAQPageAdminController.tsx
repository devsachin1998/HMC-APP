import {Component} from 'react';
import {apiFunctions, storeData, getdata} from '../../../globalServices/utils';
import {makeApiCallxml} from '../../../globalServices/api';
import { Alert } from 'react-native';

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
  FAQsList:any;
  filterdata:any;
  
  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class FAQPageController extends Component<Props, S, SS> {
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
      FAQsList:[],
      filterdata:[]
      // Customizable Area End
    };

    // Customizable Area Start

    // Customizable Area End
  }

  // Customizable Area Start
  async componentDidMount() {
    this.setState({isLoading:true})
    this.getFAQS();
  }
  

  getFAQS = async()=>{
    
    const responseData = await makeApiCallxml(apiFunctions.FAQsList+"?UN1=1&PWD1=1", 'GET', "admin");
    // console.log('responseData FAQS:::--->', responseData);
    const jsonData1 =  responseData.Table.map((table: any) => ({
      Answers: table?.Answer,
      Questions:table?.Question,
      FaqId:table?.FaqId,
      iscollaps:false
      // Address:table?.Address,
      // EmailId:table?.EmailId,
      // ProfileImage:apiFunctions.councilurl+table?.ProfileImage,
      // QualificationName:table?.QualificationName,
      // DesignationName:table?.DesignationName,
    }))
    this.setState({FAQsList:jsonData1,filterdata:jsonData1})
    this.setState({isLoading:false})
  }
  searchValueById = (Title: string) => {
    let filteredData = this.state.FAQsList.filter(item => item.Questions.toLowerCase().includes(Title.toLowerCase()));

  
  this.setState({ filterdata: filteredData }, () => {
      console.log("Updated datalist:", this.state.filterdata);
  });
}
showAlert = (FID) => {
  Alert.alert(
    'Delete Confirmation',
    'Are you sure you want to delete this item?',
    [
      {
        text: 'No',
        style: 'cancel',
      },
      { text: 'Yes', onPress:()=> {this.deleteFAQ(FID)} },
    ],
    { cancelable: false }
  );
};
updateValueById = (FaqId) => {
  let updatedDataList = this.state.filterdata.map(article => {
    if (article.FaqId === FaqId) {
      return { ...article, iscollaps: !article.iscollaps };
    } else {
      return { ...article, iscollaps: false };
    }
  });

  this.setState({ filterdata: updatedDataList }, () => {
  });
}
deleteFAQ = async (FAQID) => {
  this.setState({isLoading:true})
 
  const loginDetails= await getdata("loginDetails");
  let ID =  loginDetails.UserID;
  const res = await makeApiCallxml(apiFunctions.FAQDelete+`?UN1=1&PWD1=1&FAQID=${FAQID}&UserID=${ID}`,'GET',"admin");
 console.log("dsadasd0",res)
 
  this.setState({isLoading:false})
  this.getFAQS()


}

  // Customizable Area End
}
