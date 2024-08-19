import {Component} from 'react';
import {apiFunctions, storeData, getdata, selectdocument, showToastOrAlert, launchGallary} from '../../../globalServices/utils';
import {makeApiCallxml, makeApiCallxmlimage} from '../../../globalServices/api';
import moment from 'moment';
import { Alert, Platform, ToastAndroid } from 'react-native';
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
  AdvertisementID: any;
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
  imguri:any;
  base64:any;
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
      AdvertisementID: '',
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
      desc:'',
      imguri:'',
      base64:''
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
        this.setState({name:itemdata.Title,desc:itemdata.Description,
          AdvertisementID:itemdata.AdvertisementID,
          imguri:'http://hmc.Khedutmitra.com/img/AdvImage/'+itemdata.AdvImage})
          if(itemdata.AdvImage!='')
            {      const response = await RNFetchBlob.config({ fileCache: true }).fetch("GET", this.state.imguri);
            const base64Data = await response.readFile("base64");
              this.setState({base64:base64Data})
            }
      }
     
      // const loginDetails= await getdata("loginDetails");
      // let ID =  loginDetails.UserID;
      // this.setState({userid:ID})

      this.setState({ isLoading: false }); 

  }
 




  
  uploadimage =()=>
    {

      launchGallary((response: string) => {
        this.setState({isLoading:true})

        const data = JSON.parse(response);
        console.log("dsad",data)
        this.setState({imguri:data.assets[0].uri,base64:data.assets[0].base64})
        this.setState({isLoading:false})

    })  }

    addimages = async () => {


      if(this.state.name == "" )
        {
          let msg="Please Enter Title."
  
          if (Platform.OS === 'android') {
            return  ToastAndroid.show(msg, ToastAndroid.SHORT)
          } else {
            return  Alert.alert(msg);
          }
        }

      else if(this.state.desc == "" )
        {
          let msg="Please Enter Date."
  
          if (Platform.OS === 'android') {
            return  ToastAndroid.show(msg, ToastAndroid.SHORT)
          } else {
            return  Alert.alert(msg);
          }
        }

      else if(this.state.imguri == "" )
        {
          let msg="Please Select Image."
  
          if (Platform.OS === 'android') {
            return  ToastAndroid.show(msg, ToastAndroid.SHORT)
          } else {
            return  Alert.alert(msg);
          }
        }
        else
        {
        
      this.setState({isLoading:true})
  
      const loginDetails= await getdata("loginDetails");
      let ID =  loginDetails.UserID;
  
  
  
      const urlencoded = new URLSearchParams();
      urlencoded.append("UN1", "1");
      urlencoded.append("PWD1", "1");
      urlencoded.append("Title", this.state.name);
      urlencoded.append("Description",this.state.desc);
      urlencoded.append('AdvImage',this.state.base64)
      urlencoded.append("UserID", ID);
      const responseData = 
      await makeApiCallxmlimage(apiFunctions.AdvertisementInsert, 'POST', "admin",urlencoded.toString());
      console.log("responseData",responseData)
      
      // this.getdata(collegeid);
    // this.setState({datalist:responseData?.Table,filterdata:responseData?.Table})
    this.setState({isLoading:false})
    this.props.navigation.navigate("Addvertisement")

        }
    
    
    }
    
    updateimage = async () => {

      console.log("dsd",this.state.filename)

      if(this.state.name == "" )
        {
          let msg="Please Enter Title."
  
          if (Platform.OS === 'android') {
            return  ToastAndroid.show(msg, ToastAndroid.SHORT)
          } else {
            return  Alert.alert(msg);
          }
        }

      else if(this.state.desc == "" )
        {
          let msg="Please Enter Description."
  
          if (Platform.OS === 'android') {
            return  ToastAndroid.show(msg, ToastAndroid.SHORT)
          } else {
            return  Alert.alert(msg);
          }
        }

      else if(this.state.imguri == "" )
        {
          let msg="Please Select Image."
  
          if (Platform.OS === 'android') {
            return  ToastAndroid.show(msg, ToastAndroid.SHORT)
          } else {
            return  Alert.alert(msg);
          }
        }
        else
        {
        
      this.setState({isLoading:true})
  
      const loginDetails= await getdata("loginDetails");
      let ID =  loginDetails.UserID;
  
  
  
      const urlencoded = new URLSearchParams();
      urlencoded.append("UN1", "1");
      urlencoded.append("PWD1", "1");
      urlencoded.append("Title", this.state.name);
      urlencoded.append("Description",  this.state.desc);
      urlencoded.append('AdvImage',this.state.base64)   
      urlencoded.append('AdvertisementID',this.state.AdvertisementID)      
      urlencoded.append("UserID", ID);
      const responseData = 
      await makeApiCallxmlimage(apiFunctions.AdvertisementUpdate, 'POST', "admin",urlencoded.toString());
      console.log("responseData",responseData)
      
      // this.getdata(collegeid);
    // this.setState({datalist:responseData?.Table,filterdata:responseData?.Table})
    this.setState({isLoading:false})
    this.props.navigation.navigate("Addvertisement")
        }
    
    
    }
    

  // Customizable Area End
}
