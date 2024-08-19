import {Component} from 'react';
import {apiFunctions, storeData, getdata, selectdocument} from '../../../globalServices/utils';
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
  needRetakeToken: boolean;
  //   leaderboard: LeaderboardItem[];
  token: string;
  totalCount: number;
  totalPage: number;
  pageIndex: number;
  moreLoading: boolean;
  datalist:any;
  role:any;
  RoleList:any;
  filterdata:any;
  district:any;
  procode:any;
  roleid:any;
  username:any;
  password:any;
  cnfpassword:any;
  website:any;
  file:any;
  District:any;
  UID:any;

  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class AddCouncilUserAdminController extends Component<Props, S, SS> {
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
      pageIndex: 0,
      totalCount: 1,
      totalPage: 1,
      moreLoading: false,
      datalist:[],
      filterdata:[],
      role:'',
      RoleList:[],
      file:[],
      website:'',
      district:[],
      District:[],
      UID:'',
      procode:'',
      roleid:'',
      username:'',
      password:'',
      cnfpassword:'',
    
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
        this.setState({procode:itemdata.ProfileCode,roleid:itemdata.RoleID,role:itemdata.RoleName,
          username:itemdata.UserName,password:itemdata.Password,cnfpassword:itemdata.Password,UID:itemdata.UserID
        })

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
    adduser = async () => {
      const { procode, roleid, username, password, cnfpassword } = this.state;

      if (!procode || !roleid || !username || !password || !cnfpassword) {
        Alert.alert('Please fill in all fields');
        return;
      }
    
      // Check if password matches confirmPassword
      if (password !== cnfpassword) {
        Alert.alert('Password and Confirm Password do not match');
        return;
      }
      this.setState({isLoading:true})
      const loginDetails= await getdata("loginDetails");
      let ID =  loginDetails.UserID;
    
      const res = await makeApiCallxml(apiFunctions.UserInsert+`?UN1=1&PWD1=1&ProfileCode=${this.state.procode}&RoleID=${this.state.roleid}&UserName=${this.state.username}&Password=${this.state.password}&UserID=${ID}`,'GET',"admin");
     console.log("dsadasd0",res)
     
      this.setState({isLoading:false})
      this.props.navigation.navigate("CouncilUserAdmin");
    
    
    
    }
    updateuser = async () => {
      const { procode, roleid, username, password, cnfpassword } = this.state;

      if (!procode || !roleid || !username || !password || !cnfpassword) {
        Alert.alert('Please fill in all fields');
        return;
      }
    
      // Check if password matches confirmPassword
      if (password !== cnfpassword) {
        Alert.alert('Password and Confirm Password do not match');
        return;
      }
      this.setState({isLoading:true})
      const loginDetails= await getdata("loginDetails");
      let ID =  loginDetails.UserID;
    
      const res = await makeApiCallxml(apiFunctions.UserUpdate+`?UN1=1&PWD1=1&UID=${this.state.UID}&ProfileCode=${this.state.procode}&RoleID=${this.state.roleid}&UserName=${this.state.username}&Password=${this.state.password}&UserID=${ID}`,'GET',"admin");
     console.log("dsadasd0",res)
     
      this.setState({isLoading:false})
      this.props.navigation.navigate("CouncilUserAdmin");
    
    
    
    }
getdata = async () => {
  this.setState({isLoading:true})

  const responseData = await makeApiCallxml(apiFunctions.RoleSelect+"?UN1=1&PWD1=1",'GET',"admin");
  if (responseData && responseData.Table) {
    this.setState({ RoleList: [responseData.Table] });
  }
 this.setState({isLoading:false})

console.log('responseData:::--->headline', responseData);

}
  // Customizable Area End
}
