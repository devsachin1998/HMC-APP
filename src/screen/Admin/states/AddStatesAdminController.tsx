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
  CountryID: string;
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
  country:any;
  filename:any;
  selectedCountry:string;
  StateID:any;
  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class AddStatesAdminController extends Component<Props, S, SS> {
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
      CountryID: '',
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
      country:[],
      filename:'',
      selectedCountry:'',
      StateID:''
      // Customizable Area End
    };

    // Customizable Area Start

    // Customizable Area End
  }

  // Customizable Area Start
  async componentDidMount() {

     this.setState({ isLoading: true }); 
     let data=this.props.route.params.edit;
     console.log("component Data",this.props.route.params)
      if(data)
      {
        let itemdata=this.props.route.params.item;
        const loginDetails= await getdata("loginDetails");
        this.setState({name:itemdata.StateName,
          CountryID:itemdata.CountryID,StateID:itemdata.StateID})

      }
      const loginDetails= await getdata("loginDetails");
      let ID =  loginDetails.UserID;
      this.setState({userid:ID})
     this.getdata()

  }
  // showAlert = (ArticleID) => {
  //   Alert.alert(
  //     'Delete Confirmation',
  //     'Are you sure you want to delete this item?',
  //     [
  //       {
  //         text: 'No',
  //         style: 'cancel',
  //       },
  //       { text: 'Yes', onPress:()=> {} },
  //     ],
  //     { cancelable: false }
  //   );
  // };
 
 

getdata = async () => {


const responseData = await makeApiCallxml(apiFunctions.CountrySelect+"?UN1=1&PWD1=1", 'GET', "web");
const tables = Array.isArray(responseData?.Table) ? responseData?.Table : [responseData?.Table];

const updatedTable = tables.map(item => ({
  ...item,
  iscollaps: false  // Setting the initial value of iscollaps to false
}));
this.setState({country:updatedTable})
console.log("Country Res....",updatedTable)
this.setState({isLoading:false})
}
  
  uploadpdf =()=>
    {
      selectdocument((response: string) => {
        const data = JSON.parse(response);
        console.log("dsad",data)
        this.setState({file:data,filename:data[0].name})
        // const data1 = a RNFetchBlob.fs.readFile(data[0].uri, 'base64');
        // console.log("dsad11",data1)

    })  }


    addStates = async () => {
  this.setState({isLoading:true})
 

  const res = await makeApiCallxml(apiFunctions.StateInsert+`?UN1=2&PWD1=2&StateName=${this.state.name}&CountryID=${this.state.CountryID}&UserID=${this.state.userid}`,'GET',"base");
 console.log("add states.",res)
 
  this.setState({isLoading:false})
  this.props.navigation.navigate("StatesScreenAdmin");

}

updateStates = async () => {
  this.setState({isLoading:true})
  const res = await makeApiCallxml(apiFunctions.StateUpdate+`?UN1=2&PWD1=2&StateID=${this.state.StateID}&StateName=${this.state.name}&CountryId=${this.state.CountryID}&UserID=${this.state.userid}`,'GET',"base");
 console.log("update states",res)
  this.setState({isLoading:false})
  this.props.navigation.navigate("StatesScreenAdmin");

}


  // Customizable Area End
}
