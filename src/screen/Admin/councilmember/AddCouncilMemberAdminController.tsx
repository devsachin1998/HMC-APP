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
  mobile:any;
  openV:any;
  openU:any;
  validdate:any;
  validupto:any;

  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class AddCouncilMemberAdminController extends Component<Props, S, SS> {
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
      mobile:'',
      validdate:'',
      openV:false,
      openU:false,
      validupto:'',
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
        this.setState({name:itemdata.FullName,university:itemdata.QualificationName,
          address:itemdata.Address,district:itemdata.DistrictName,mobile:itemdata.Mobile,
          email:itemdata.Email,website:itemdata.Website,
          filename:itemdata.PDFFile
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


getdata = async () => {
  const responseData = await makeApiCallxml(apiFunctions.UniversitySelect+"?UN1=1&PWD1=1",'GET',"web");
  this.setState({University:responseData.Table})
  const districtlist = await makeApiCallxml(apiFunctions.DistrictSelectByStateID+`?UN1=1&PWD1=1&StateID=1`,'GET',"web");
  this.setState({University:responseData.Table,District:districtlist.Table})
 this.setState({isLoading:false})

console.log('responseData:::--->headline', responseData.Table);

}
  // Customizable Area End
}
