import {Component} from 'react';
import {apiFunctions, storeData, getdata, selectdocument, showToastOrAlert, launchGallary} from '../../../globalServices/utils';
import {makeApiCallxml, makeApiCallxmlimage} from '../../../globalServices/api';
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
  imguri:any;
  base64:any;
  GalleryDetailID:any;
  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class AddPhotosAdminController extends Component<Props, S, SS> {
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
      imguri:'',
      base64:'',
      GalleryDetailID:''
      // Customizable Area End
    };

    // Customizable Area Start

    // Customizable Area End
  }

  // Customizable Area Start
  async componentDidMount() {

     this.setState({ isLoading: true }); 
     let data=this.props.route.params.edit;
      if(data)
      {
        let itemdata=this.props.route.params.item;
        console.log("dasd",itemdata)

        this.setState({district:itemdata.Title,
          GalleryDetailID:itemdata.GalleryDetailID,
          DistrictID:itemdata.GalleryID,  imguri:itemdata.Image})
          if(itemdata.Image!='')
            {      const response = await RNFetchBlob.config({ fileCache: true }).fetch("GET", itemdata.Image);
            const base64Data = await response.readFile("base64");
              this.setState({base64:base64Data})
            }
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
 
 
  
 
      
  uploadimage =()=>
    {

      launchGallary((response: string) => {
        this.setState({isLoading:true})

        const data = JSON.parse(response);
        console.log("dsad",data)
        this.setState({imguri:data.assets[0].uri,base64:data.assets[0].base64})
        this.setState({isLoading:false})

    })  }

    updateimage = async () => {

      

      if(this.state.district == "" )
        {
          let msg="Please Select Category."

            return  Alert.alert(msg);
          }
        


      else if(this.state.imguri == "" )
        {
          let msg="Please Select Image."
  
    
            return  Alert.alert(msg);
          
        }
        else
        {
        
      this.setState({isLoading:true})
  
      const loginDetails= await getdata("loginDetails");
      let ID =  loginDetails.UserID;
  
  
  
      const urlencoded = new URLSearchParams();
      urlencoded.append("UN1", "1");
      urlencoded.append("PWD1", "1");
      urlencoded.append("GalleryID", this.state.DistrictID);
      urlencoded.append("GalleryDetailID", this.state.GalleryDetailID);
      urlencoded.append('ImageNm',this.state.base64)   
      urlencoded.append("UserID", ID);
      const responseData = 
      await makeApiCallxmlimage(apiFunctions.GalleryDetailUpdate, 'POST', "admin",urlencoded.toString());
      console.log("responseData",responseData)
      
      // this.getdata(collegeid);
    // this.setState({datalist:responseData?.Table,filterdata:responseData?.Table})
    this.setState({isLoading:false})
    this.props.navigation.navigate("PhotosAdminScreen")
        }
    
    
    }
    addimage = async () => {


      if(this.state.district == "" )
        {
          let msg="Please Select Category."

            return  Alert.alert(msg);
          }
        


      else if(this.state.imguri == "" )
        {
          let msg="Please Select Image."
  
    
            return  Alert.alert(msg);
          
        }
        else
        {
        
      this.setState({isLoading:true})
  
      const loginDetails= await getdata("loginDetails");
      let ID =  loginDetails.UserID;
  
  
  
      const urlencoded = new URLSearchParams();
      urlencoded.append("UN1", "1");
      urlencoded.append("PWD1", "1");
      urlencoded.append("GalleryID", this.state.DistrictID);
      urlencoded.append('ImageNm',this.state.base64)   
      urlencoded.append("UserID", ID);
      const responseData = 
      await makeApiCallxmlimage(apiFunctions.GalleryDetailInsert, 'POST', "admin",urlencoded.toString());
      console.log("responseData",responseData)
    this.setState({isLoading:false})
    this.props.navigation.navigate("PhotosAdminScreen")
        }
    
    
    }
getdata = async () => {
  const districtlist = await makeApiCallxml(apiFunctions.GallerySelect+`?UN1=1&PWD1=1`,'GET',"admin");
  console.log('dsadsadsa',districtlist)
  
  const updatedTable = this.processTableData(districtlist.Table);
  this.setState({District:updatedTable})

  // this.setState({ District: [districtlist.Table] });

 this.setState({isLoading:false})


}
processTableData = (tableData) => {
  if (!tableData) {
    return []; // Return empty array if tableData is falsy
  }

  // If responseData.Table is a single object, convert it to an array of one object
  const updatedTable = Array.isArray(tableData)
    ? tableData.map(item => ({
        ...item,
      }))
    : [{ ...tableData,}];

  return updatedTable;
};

  // Customizable Area End
}
