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
  url: string;
  totalPage: number;
  pageIndex: number;
  moreLoading: boolean;
  visible:boolean;
  datalist:any;
  modal:any;
  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class CollegeScreenController extends Component<Props, S, SS> {
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
      url: '',
      pageIndex: 0,
      modal: false,
      totalPage: 1,
      moreLoading: false,
      datalist:[],
      visible:false
      // Customizable Area End
    };

    // Customizable Area Start

    // Customizable Area End
  }

  // Customizable Area Start
  async componentDidMount() {

      
      this.setState({ isLoading: true }); 
      let Type = this.props.route.params?.type;
      let ID = this.props.route.params?.Id;
        if(Type=="home")
        {
          this.getGallaryDetails(ID)

        }else
        {
          this.getdata(ID);

        }

  
  }

 
  getdata = async (collegeID:any) => {
    const responseData = 
    await makeApiCallxml(apiFunctions.CollegeGallerySelect+"?UN1=1&PWD1=1", 'GET', "admin");
    const jsonData1 =  responseData.Table.map((table: any) => ({
      CollegeID:table?.CollegeID, 
      CollegeName:table?.CollegeName,
      Image:apiFunctions.bannerurl+"img/CollegeGallery/"+table?.Image,

  }))
  let filteredData = jsonData1.filter((item: { CollegeID: any; }) => item.CollegeID == collegeID);

  this.setState({datalist:filteredData})
  this.setState({isLoading:false})

//  console.log('responseData:::--->headline', this.state.datalist);

  }
  getGallaryDetails = async (GalleryID:any) => {
    const responseData = 
    await makeApiCallxml(apiFunctions.ProcGalleryDetailSelectSP+"?UN1=1&PWD1=1", 'GET', "admin");
    const jsonData1 =  responseData.Table.map((table: any) => ({
      Image:apiFunctions.bannerurl+"img/GalleryDetails/"+table?.Image,
      GalleryID:table?.GalleryID

  }))
  let filteredData = jsonData1.filter((item: { GalleryID: any; }) => item.GalleryID == GalleryID);

  this.setState({datalist:filteredData})
  this.setState({isLoading:false})

 console.log('responseData:::--->headline', jsonData1);

  }

  // Customizable Area End
}
