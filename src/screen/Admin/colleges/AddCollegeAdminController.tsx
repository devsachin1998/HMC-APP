import {Component} from 'react';
import {apiFunctions, storeData, getdata, selectdocument} from '../../../globalServices/utils';
import {makeApiCallxml, makeApiCallxmlimage} from '../../../globalServices/api';
import moment from 'moment';
import { Alert } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
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
  university:any;
  University:any;
  filterdata:any;
  district:any;
  name:any;
  address:any;
  phone:any;
  email:any;
  website:any;
  file:any;
  District:any;
  filename:any;
  base64:any;
  DistrictID:any;
  UniversityID:any;
  CollegeID:any;
  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class AddCollegeAdminController extends Component<Props, S, SS> {
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
      university:'',
      University:[],
      file:[],
      name:'',
      address:'',
      phone:'',
      email:'',
      website:'',
      district:[],
      District:[],
      filename:'',
      base64:'',
      DistrictID:'',
      UniversityID:'',
      CollegeID:''
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
      
        this.setState({name:itemdata.CollegeName,university:itemdata.UniversityName,
          address:itemdata.Address,district:itemdata.DistrictName,phone:itemdata.PhoneNo,
          email:itemdata.Email,website:itemdata.Website,
          CollegeID:itemdata.CollegeID,
          filename:itemdata.PDFFile
        })
        if(itemdata.PDFFile!='')
        {      const response = await RNFetchBlob.config({ fileCache: true }).fetch("GET", "http://hmc.khedutmitra.com/Colleges/"+itemdata.PDFFile);
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
 
 
  uploadpdf = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
        
        
      });
      // this.setState({ file: res });
      console.log("sdsdsdf",res);

      // let resi=res[0].uri;
      let resi = res[0].uri.replace('file://', '');
      const fileBase64 = await RNFetchBlob.fs.readFile(resi, 'base64');
      console.log("sdsdsdf",fileBase64);

      this.setState({base64:fileBase64,filename:res[0].name,file:res})
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User canceled the picker');
      } else {
        throw err;
      }
    }
  };



getdata = async () => {
  const responseData = await makeApiCallxml(apiFunctions.UniversitySelect+"?UN1=1&PWD1=1",'GET',"web");
  this.setState({University:responseData.Table})
  const districtlist = await makeApiCallxml(apiFunctions.DistrictSelectByStateID+`?UN1=1&PWD1=1&StateID=1`,'GET',"web");
  this.setState({University:responseData.Table,District:districtlist.Table})
 this.setState({isLoading:false})

console.log('responseData:::--->headline', responseData.Table);

}

uploadclick = ()=>
{
  if(this.props.route.params.edit)
  {
    this.props.navigation.navigate('CollegesGalleryScreen', {
      Id: this.props.route.params.item.CollegeID,
      CollegeName: this.props.route.params.item.CollegeName,
      type: '',
      edit: true,
    })
  }
  else
  {
      Alert.alert("Please add College first.")
  }

}
addcollege = async () => {

  const { name, university, address, district,phone,email,website, filename} = this.state;

  // Validate fields
  if (!name || !university || !address || !district|| !phone|| !email|| !website || !filename) {
    Alert.alert("Please fill in all fields!!")
    return;
  }


    else
    {
    
  this.setState({isLoading:true})

  const loginDetails= await getdata("loginDetails");
  let ID =  loginDetails.UserID;



  const urlencoded = new URLSearchParams();
  urlencoded.append("UN1", "1");
  urlencoded.append("PWD1", "1");
  urlencoded.append("CollegeName", this.state.name);
  urlencoded.append("UniversityID", this.state.UniversityID);
  urlencoded.append("Address", this.state.address);
  urlencoded.append("DistrictID", this.state.DistrictID);
  urlencoded.append("PhoneNo", this.state.phone);
  urlencoded.append("Email",this.state.email);
  urlencoded.append("Website",this.state.website);
  urlencoded.append('abc',this.state.base64)
  urlencoded.append("UserID", ID);
  const responseData = 
  await makeApiCallxmlimage(apiFunctions.CollegeInsert, 'POST', "admin",urlencoded.toString());
  console.log("responseData",responseData)
  
  // this.getdata(collegeid);
// this.setState({datalist:responseData?.Table,filterdata:responseData?.Table})
this.setState({isLoading:false})
this.props.navigation.navigate("CollegeScreenAdmin")

    }


}
updatecollege = async () => {

  const { name, university, address, district,phone,email,website, filename} = this.state;

  // Validate fields
  if (!name || !university || !address || !district|| !phone|| !email|| !website || !filename) {
    Alert.alert("Please fill in all fields!!")
    return;
  }


    else
    {
    
  this.setState({isLoading:true})

  const loginDetails= await getdata("loginDetails");
  let ID =  loginDetails.UserID;



  const urlencoded = new URLSearchParams();
  urlencoded.append("UN1", "1");
  urlencoded.append("PWD1", "1");
  urlencoded.append("CollegeName", this.state.name);
  urlencoded.append("CollegeID", this.state.CollegeID);

  urlencoded.append("UniversityID", this.state.UniversityID);
  urlencoded.append("Address", this.state.address);
  urlencoded.append("DistrictID", this.state.DistrictID);
  urlencoded.append("PhoneNo", this.state.phone);
  urlencoded.append("Email",this.state.email);
  urlencoded.append("Website",this.state.website);
  urlencoded.append('abc',this.state.base64)
  urlencoded.append("UserID", ID);
  const responseData = 
  await makeApiCallxmlimage(apiFunctions.CollegeUpdate, 'POST', "admin",urlencoded.toString());
  console.log("responseData",responseData)
  
  // this.getdata(collegeid);
// this.setState({datalist:responseData?.Table,filterdata:responseData?.Table})
this.setState({isLoading:false})
this.props.navigation.navigate("CollegeScreenAdmin")

    }


}


  // Customizable Area End
}
