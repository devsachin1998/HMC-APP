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
  currentIndex: number;
  texts: any;
  searchVal:string;
  addQuery:string;
  iconChange:boolean;
  FAQsList:any;
  
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
      FAQsList:[]
      // Customizable Area End
    };

    // Customizable Area Start

    // Customizable Area End
  }

  // Customizable Area Start
  async componentDidMount() {
    this.setState({isLoading:true})
    this.getFAQS();

    this.interval = setInterval(() => {
      this.setState(prevState => ({
        currentIndex: (prevState.currentIndex + 1) % this.state.texts.length
      }));
    }, 3000);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
 
  getFAQS = async()=>{
    const responseData = await makeApiCallxml(apiFunctions.FAQsList+"?UN1=1&PWD1=1", 'GET', "admin");
    console.log('responseData FAQS:::--->', responseData);
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
    this.setState({FAQsList:jsonData1})
    this.setState({isLoading:false})
  }

  updateValueById = (FaqId) => {
    let updatedDataList = this.state.FAQsList.map(article => {
      if (article.FaqId === FaqId) {
          return { ...article, iscollaps: !article.iscollaps };
      }
      return article;
  });
  
  this.setState({ FAQsList: updatedDataList }, () => {
      console.log("Updated datalist:", this.state.FAQsList);
  });
  
  
  }

  // Customizable Area End
}
