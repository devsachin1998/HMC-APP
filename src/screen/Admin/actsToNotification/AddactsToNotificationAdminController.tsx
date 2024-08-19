import {Component} from 'react';
import {apiFunctions, storeData, getdata, selectdocument, showToastOrAlert} from '../../../globalServices/utils';
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
  states:any;
  FileName:any;
  selectedCountry:string;
  NotificationID:any;
  Title:string;
  Description:string;
  FileType:string
  pdfFile:any,

  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class AddactsToNotificationAdmin extends Component<Props, S, SS> {
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
      states:[],
      FileName:'',
      selectedCountry:'',
      NotificationID:'',
      Title:'',
      Description:'',
      FileType:'',
      pdfFile:''
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
        console.log("?????????11111",itemdata)
        const loginDetails= await getdata("loginDetails");
        this.setState({Title:itemdata.Title,FileName:itemdata.FileName,FileType:itemdata.FileType,
          Description:itemdata.Description,NotificationID:itemdata.NotificationID})

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

  const responseData = await makeApiCallxml(apiFunctions.NotificationSelect+"?UN1=2&PWD1=2",'GET',"base");
  console.log('responseData::: - by id-->', responseData);
const tables = Array.isArray(responseData?.Table) ? responseData?.Table : [responseData?.Table];

const updatedTable = tables.map(item => ({
  ...item,
  iscollaps: false  // Setting the initial value of iscollaps to false
}));
this.setState({district:updatedTable})
console.log("State Res....",updatedTable)
this.setState({isLoading:false})
}
  


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

        this.setState({pdfFile:fileBase64,FileName:res[0].name,file:res})
      } catch (err) {
        if (DocumentPicker.isCancel(err)) {
          console.log('User canceled the picker');
        } else {
          throw err;
        }
      }
    };
  


addNotification= async () => {
  this.setState({isLoading:true})
  const pdfFile = this.state.pdfFile



  const urlencoded = new URLSearchParams();
  urlencoded.append("UN1", "2");
  urlencoded.append("PWD1", "2");
  urlencoded.append("Title", this.state.Title);
    urlencoded.append("Description", this.state.Description);
    urlencoded.append("FileType", "pdf");

  urlencoded.append("UserID", this.state.userid);
  urlencoded.append('FileName',pdfFile)
  const responseData = 
  await makeApiCallxmlimage(apiFunctions.NotificationInsert, 'POST', "base",urlencoded.toString());
  console.log("responseData",responseData)
      // this.setState({datalist:responseData?.Table,filterdata:responseData?.Table})
this.setState({isLoading:false})
this.props.navigation.navigate("ActsToNotificationScreenAdmin");


}
updateNotification = async () => {
  this.setState({isLoading:true})
  const pdfFile = this.state.pdfFile



  const urlencoded = new URLSearchParams();
  urlencoded.append("UN1", "2");
  urlencoded.append("PWD1", "2");
  urlencoded.append("NotificationID", this.state.NotificationID);
  

  urlencoded.append("Title", this.state.Title);
  urlencoded.append("Description", this.state.Description);
  urlencoded.append("FileType", "pdf");

  
  urlencoded.append("UserID", this.state.userid);
  if(pdfFile=="")
  {
    const response = await RNFetchBlob.config({ fileCache: true }).fetch("GET", "http://hmc.Khedutmitra.com/Notification/"+this.state.FileName);
    const base64Data = await response.readFile("base64");
    urlencoded.append('FileName',base64Data)
  }
  else
  {
    urlencoded.append('FileName',pdfFile)
  }
 

  const responseData = 
  await makeApiCallxmlimage(apiFunctions.NotificationUpdate, 'POST', "base",urlencoded.toString());
  console.log("responseData",responseData)
      // this.setState({datalist:responseData?.Table,filterdata:responseData?.Table})
this.setState({isLoading:false})
this.props.navigation.navigate("ActsToNotificationScreenAdmin");


}


  // Customizable Area End
}
