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

export default class AddUniversityAdminController extends Component<Props, S, SS> {
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
      // Customizable Area End
    };

    // Customizable Area Start

    // Customizable Area End
  }

  // Customizable Area Start
  async componentDidMount() {

     this.setState({ isLoading: true }); 
     let data=this.props.route.params.edit;
     console.log("Dsadasdas",this.props.route.params)
      if(data)
      {
        let itemdata=this.props.route.params.item;
        const loginDetails= await getdata("loginDetails");
        let ID =  loginDetails.UserID;
        this.setState({name:itemdata.UniversityName,district:itemdata.DistrictName,
          DistrictID:itemdata.DistrictID1,userid:ID,universityId:itemdata.UniversityID})

      }
     this.getdata()

  }
  showAlert = (ArticleID) => {
    Alert.alert(
      'Delete Confirmation',
      'Are you sure you want to delete this item?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        { text: 'Yes', onPress:()=> {} },
      ],
      { cancelable: false }
    );
  };
 
 
  
  uploadpdf =()=>
    {
      selectdocument((response: string) => {
        const data = JSON.parse(response);
        console.log("dsad",data)
        this.setState({file:data,filename:data[0].name})
        // const data1 = a RNFetchBlob.fs.readFile(data[0].uri, 'base64');
        // console.log("dsad11",data1)

    })  }


getdata = async () => {
  const districtlist = await makeApiCallxml(apiFunctions.DistrictSelectByStateID+`?UN1=1&PWD1=1&StateID=1`,'GET',"web");
  this.setState({District:districtlist.Table})
 this.setState({isLoading:false})


}
adduniversity = async () => {
  this.setState({isLoading:true})
 

  const res = await makeApiCallxml(apiFunctions.UniversityInsert+`?UN1=1&PWD1=1&UniversityName=${this.state.name}&DistrictID=${this.state.DistrictID}&UserID=${this.state.userid}`,'GET',"admin");
 console.log("dsadasd0",res)
 
  this.setState({isLoading:false})
  this.props.navigation.navigate("UniversityScreenAdmin");



}
updateuniversity = async () => {
  this.setState({isLoading:true})
  

  const res = await makeApiCallxml(apiFunctions.UniversityUpdate+`?UN1=1&PWD1=1&UniversityID=${this.state.universityId}&UniversityName=${this.state.name}&DistrictID=${this.state.DistrictID}&UserID=${this.state.userid}`,'GET',"admin");
 console.log("dsadasd0",res)
  this.setState({isLoading:false})
  this.props.navigation.navigate("UniversityScreenAdmin");

}


  // Customizable Area End
}
