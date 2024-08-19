import {Component} from 'react';
import {apiFunctions, storeData, getdata, selectdocument, launchGallary} from '../../../globalServices/utils';
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
  open: boolean;
  //   leaderboard: LeaderboardItem[];
  token: string;
  totalCount: number;
  totalPage: number;
  pageIndex: number;
  moreLoading: boolean;
  datalist:any;
  university:any;
  University:any;
  filterdata:any;
  district:any;
  name:any;
  date:any;
  phone:any;
  email:any;
  website:any;
  file:any;
  District:any;
  filename:any;
  imguri:any;
  base64:any;
  GalleryID:any;
  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class UploadPhotoAdminController extends Component<Props, S, SS> {
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
      open: false,
      //   leaderboard: [],
      token: '',
      pageIndex: 0,
      totalCount: 1,
      totalPage: 1,
      moreLoading: false,
      datalist:[],
      filterdata:[],
      university:'',
      University:[],
      file:[],
      name:'',
      date:'',
      phone:'',
      email:'',
      website:'',
      district:[],
      District:[],
      imguri:'',
      filename:'',
      base64:'',
      GalleryID:0,
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
        this.setState({name:itemdata.Title,date:itemdata.UpdatedDate,
          imguri:itemdata.Image,GalleryID:itemdata.GalleryID
        })
        const response = await RNFetchBlob.config({ fileCache: true }).fetch("GET", itemdata.Image);
      const base64Data = await response.readFile("base64");
      this.setState({base64:base64Data})

      }
      this.setState({ isLoading: false });

  }

  
  uploadimage =()=>
    {
      launchGallary((response: string) => {
        const data = JSON.parse(response);
        console.log("dsad",data)
        this.setState({imguri:data.assets[0].uri,base64:data.assets[0].base64})

    })  }

    addimages = async () => {

      console.log("dsd",this.state.date)
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

      else if(this.state.date == "" )
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
      urlencoded.append("Date1",  moment(this.state.date).format('YYYY-MM-DD'));
      urlencoded.append('ImageName',this.state.base64)
      urlencoded.append("UserID", ID);
      const responseData = 
      await makeApiCallxmlimage(apiFunctions.GalleryInsert, 'POST', "admin",urlencoded.toString());
      console.log("responseData",responseData)
      
      // this.getdata(collegeid);
    // this.setState({datalist:responseData?.Table,filterdata:responseData?.Table})
    this.setState({isLoading:false})
    this.props.navigation.navigate("GalleryScreen",{isedit:true})

        }
    
    
    }
    
    updateimage = async () => {

      console.log("dsd",this.state.date)
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

      else if(this.state.date == "" )
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
      urlencoded.append("Date1",  moment(this.state.date).format('YYYY-MM-DD'));
      urlencoded.append('ImageName',this.state.base64)
      urlencoded.append('GalleryID',this.state.GalleryID)
      
      urlencoded.append("UserID", ID);
      const responseData = 
      await makeApiCallxmlimage(apiFunctions.GalleryUpdate, 'POST', "admin",urlencoded.toString());
      console.log("responseData",responseData)
      
      // this.getdata(collegeid);
    // this.setState({datalist:responseData?.Table,filterdata:responseData?.Table})
    this.setState({isLoading:false})
    this.props.navigation.navigate("GalleryScreen",{isedit:true})
        }
    
    
    }
    


  // Customizable Area End
}
