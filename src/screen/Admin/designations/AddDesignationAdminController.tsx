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
  DesignationID: string;
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

export default class AddDesignationAdminController extends Component<Props, S, SS> {
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
      DesignationID: '',
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
     console.log("component Data",this.props.route.params)
      if(data)
      {
        let itemdata=this.props.route.params.item;
        const loginDetails= await getdata("loginDetails");
        this.setState({name:itemdata.DesignationName,
          DesignationID:itemdata.DesignationID})

      }
      const loginDetails= await getdata("loginDetails");
      let ID =  loginDetails.UserID;
      this.setState({userid:ID})

    //  this.getdata()

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
 
 
  
  uploadpdf =()=>
    {
      selectdocument((response: string) => {
        const data = JSON.parse(response);
        console.log("dsad",data)
        this.setState({file:data,filename:data[0].name})
        // const data1 = a RNFetchBlob.fs.readFile(data[0].uri, 'base64');
        // console.log("dsad11",data1)

    })  }


  addDesignation = async () => {
  this.setState({isLoading:true})
 

  const res = await makeApiCallxml(apiFunctions.DesignationInsert+`?UN1=2&PWD1=2&DesignationName=${this.state.name}&UserID=${this.state.userid}`,'GET',"base");
 console.log("add  Designation...",res)
 
  this.setState({isLoading:false})
  this.props.navigation.navigate("DesignationScreenAdmin");



}
updateDesignation = async () => {
  this.setState({isLoading:true})
  const res = await makeApiCallxml(apiFunctions.DesignationUpdate+`?UN1=2&PWD1=2&DesignationID=${this.state.DesignationID}&DesignationName=${this.state.name}&UserID=${this.state.userid}`,'GET',"base");
 console.log("update Designation",res)
  this.setState({isLoading:false})
  this.props.navigation.navigate("DesignationScreenAdmin");

}


  // Customizable Area End
}
