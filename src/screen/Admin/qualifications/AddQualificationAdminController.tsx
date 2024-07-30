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
  QualificationID: string;
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
  QType:string
  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class AddQualificationAdminController extends Component<Props, S, SS> {
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
      QualificationID: '',
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
      QType:''
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
        this.setState({name:itemdata.QualificationName,
          QualificationID:itemdata.QualificationID})

      }
      const loginDetails= await getdata("loginDetails");
      console.log("component Data1111",loginDetails)

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


addQualification = async () => {
  this.setState({isLoading:true})
 

  const res = await makeApiCallxml(apiFunctions.QualificationInsert+`?UN1=2&PWD1=2&QualificationName=${this.state.name}&QualificationType=${this.state.QType}&UserID=${this.state.userid}`,'GET',"base");
 console.log("add  Qualification...",res)
 
  this.setState({isLoading:false})
  this.props.navigation.navigate("QualificationScreenAdmin");



}
updateQualification = async () => {
  this.setState({isLoading:true})
  const res = await makeApiCallxml(apiFunctions.QualificationUpdate+`?UN1=2&PWD1=2&QualificationID=${this.state.QualificationID}&QualificationName=${this.state.name}&QualificationType=${this.state.QType}&UserID=${this.state.userid}`,'GET',"base");
 console.log("update Qualification",res)
  this.setState({isLoading:false})
  this.props.navigation.navigate("QualificationScreenAdmin");

}


  // Customizable Area End
}
