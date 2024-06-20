import {Component} from 'react';
import {apiFunctions, storeData, getdata, showToastOrAlert} from '../../globalServices/utils';
import {makeApiCall, makeApiCallxml} from '../../globalServices/api';
import moment from 'moment';

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
  fullName: any;
  mobileNo: any;
  email: any;
  message: any;
  selectedTab:any;
  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class AboutUsScreenController extends Component<Props, S, SS> {
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
      fullName: '',
      mobileNo: '',
      email: '',
      message: '',
      selectedTab:'1',
      // Customizable Area End
    };

    // Customizable Area Start

    // Customizable Area End
  }

  // Customizable Area Start
  async componentDidMount() {

     
      

  }
  handleTabPress = (tab:any)=>
    {
      this.setState({selectedTab:tab})
    }
  
    handleFullNameChange = (text) => {
      this.setState({ fullName: text });
    };
  
    handleMobileNoChange = (text) => {
      this.setState({ mobileNo: text });
    };
  
    handleEmailChange = (text) => {
      this.setState({ email: text });
    };
  
    handleMessageChange = (text) => {
      this.setState({ message: text });
    };
    validateEmail = (email) => {
      // Basic email validation regex
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
    addinquiry = async () => {
      const { fullName, mobileNo, email, message } = this.state;

      // Validate fields
      if (!fullName || !email || !mobileNo || !message) {
        showToastOrAlert("Please fill in all fields!!")
        return;
      }
  
      // Validate email format
      if (!this.validateEmail(email)) {
        showToastOrAlert('Please Enter a Valid Email Address!!');
        return;
      }
        const responseData = 
      await makeApiCall(apiFunctions.VBoxInsert+`?VisitorName=${this.state.fullName}&EmailID=${this.state.email}&PhoneNo=${this.state.mobileNo}&Comment=${this.state.message}`, 'GET',null);
      if(responseData[0].Status=="done")
        {
          showToastOrAlert("Inquiry Submitted Successfully!!")
          this.props.navigation.goBack();
        }
       
      console.log('responseData:::--->headline',responseData[0].Status);
  
    }
  // Customizable Area End
}
