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
  question:any;
  ans:any
  FID:any;

  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class AddAddFaqAdminController extends Component<Props, S, SS> {
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
      question:'',
      ans:'',
      FID:'',
      // Customizable Area End
    };

    // Customizable Area Start

    // Customizable Area End
  }

  // Customizable Area Start
  async componentDidMount() {

      let data=this.props.route.params.edit;
      console.log("sadasd",data)
      if(data)
      {
        let itemdata=this.props.route.params.item;
        this.setState({question:itemdata.Questions,ans:itemdata.Answers,FID:itemdata.FaqId
        })

      }
    //  this.getdata()

  }

 
  
    adduser = async () => {
      const { question, ans } = this.state;

      if (!question || !ans ) {
        Alert.alert('Please fill in all fields');
        return;
      }
    
      this.setState({isLoading:true})
      const loginDetails= await getdata("loginDetails");
      let ID =  loginDetails.UserID;
    
      const res = await makeApiCallxml(apiFunctions.FAQInsert+`?UN1=1&PWD1=1&Question=${this.state.question}&Answer=${this.state.ans}&UserID=${ID}`,'GET',"admin");
     
      this.setState({isLoading:false})
      this.props.navigation.navigate("FAQPageAdmin");
    
    
    
    }
    updateuser = async () => {
      const { question, ans } = this.state;

      if (!question || !ans ) {
        Alert.alert('Please fill in all fields');
        return;
      }
    

      this.setState({isLoading:true})
      const loginDetails= await getdata("loginDetails");
      let ID =  loginDetails.UserID;
    
      const res = await makeApiCallxml(apiFunctions.FAQUpdate+`?UN1=1&PWD1=1&Question=${this.state.question}&Answer=${this.state.ans}&FAQID=${this.state.FID}&UserID=${ID}`,'GET',"admin");
     console.log("dsadasd0",res)
     
      this.setState({isLoading:false})
      this.props.navigation.navigate("FAQPageAdmin");
    
    
    
    }

  // Customizable Area End
}
