import {Component} from 'react';
import {apiFunctions, storeData, getdata, selectdocument, showToastOrAlert} from '../../../globalServices/utils';
import {makeApiCallxml} from '../../../globalServices/api';
import moment from 'moment';
import { Alert } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

export interface Props {
  navigation?: any;
  id?: string;
  // Customizable Area Start
  // Customizable Area End
}

interface S {
  // Customizable Area Start
  isLoading: boolean;
  userid: string;
  //   leaderboard: LeaderboardItem[];
  universityId: string;
  totalCount: number;
  totalPage: number;
  moreLoading: boolean;
  datalist:any;
  university:any;
  University:any;
  filterdata:any;
  district:any;
  name:any;
  desc:any;
  DistrictID:any;
  phone:any;
  email:any;
  website:any;
  file:any;
  District:any;
  filename:any;
  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class AddNewsAdminController extends Component<Props, S, SS> {
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
      //   leaderboard: [],
      universityId: '',
      userid: '',
      totalCount: 1,
      totalPage: 1,
      moreLoading: false,
      datalist:[],
      filterdata:[],
      university:'',
      University:[],
      file:[],
      name:'',
      DistrictID:'',
      phone:'',
      email:'',
      website:'',
      district:[],
      District:[],
      filename:'',
      desc:''
      // Customizable Area End
    };

    // Customizable Area Start

    // Customizable Area End
  }

  // Customizable Area Start
  async componentDidMount() {

     let data=this.props.route.params.edit;
     console.log("Dsadasdas",this.props.route.params)
      if(data)
      {
        let itemdata=this.props.route.params.item;
        this.setState({name:itemdata.NewsLine,desc:itemdata.Description,universityId:itemdata.ScrollNewsId})

      }
      const loginDetails= await getdata("loginDetails");
      let ID =  loginDetails.UserID;
      this.setState({userid:ID})


  }
 



addnews = async () => {
  this.setState({isLoading:true})
 

  const res = await makeApiCallxml(apiFunctions.ScrollNewsInsert+`?UN1=1&PWD1=1&NewsLine=${this.state.name}&Description=${this.state.desc}&UserID=${this.state.userid}`,'GET',"admin");
 console.log("dsadasd0",res)
 
  this.setState({isLoading:false})
  this.props.navigation.navigate("NewsScreenAdmin");



}
updatenews = async () => {
  this.setState({isLoading:true})
  

  const res = await makeApiCallxml(apiFunctions.ScrollNewsUpdate+`?UN1=1&PWD1=1&ScrollNewsID=${this.state.universityId}&NewsLine=${this.state.name}&Description=${this.state.desc}&UserID=${this.state.userid}`,'GET',"admin");
 console.log("dsadasd0",res)
  this.setState({isLoading:false})
  this.props.navigation.navigate("NewsScreenAdmin");

}


  // Customizable Area End
}
