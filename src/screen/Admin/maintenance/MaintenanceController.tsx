import { Component } from 'react';
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
    token: string;
    totalCount: number;
    totalPage: number;
    pageIndex: number;
    moreLoading: boolean;
    homeBlocks: any;
    datalist: any;
    // Customizable Area End
}

interface SS {
    id: any;
    // Customizable Area Start
    // Customizable Area End
}

export default class MaintenanceController extends Component<Props, S, SS> {
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
            datalist: [],
homeBlocks : [
    { label: "Countries", bgColor: "red", iconName:"user-doctor",pagename:'CountryScreenAdmin' },
    { label: "States", bgColor: "blue", iconName:"landmark",pagename:'StatesScreenAdmin' },
    { label: "Districts", bgColor: "green", iconName:"building-un",pagename:'DistrictScreenAdmin'},
    { label: "Talukas", bgColor: "darkorchid",iconName: "panorama",pagename:'TalukaScreenAdmin' },
    { label: "Cities", bgColor: "orange",iconName: "clapperboard",pagename:'CityScreenAdmin'  },
    { label: "Designations", bgColor: "purple",iconName: "people-line",pagename:'DesignationScreenAdmin' },
    { label: "UserTypes", bgColor: "darkkhaki", iconName:"people-roof",pagename:"UserTypesScreenAdmin" },
    { label: "Qualification", bgColor: "brown",iconName: "clipboard-question",pagename:'QualificationScreenAdmin'  },
    { label: "Downloads", bgColor: "darkslateblue",iconName: "rectangle-ad",pagename:'DownloadScreen'  },
    { label: "Act.to Notifications", bgColor: "darkcyan",iconName: "newspaper",pagename:'ActsToNotificationScreenAdmin' },
    { label: "Inquiries", bgColor: "gray",iconName: "gears", pagename:'InquiriesScreen' },
    { label: "Articles", bgColor: "gray",iconName: "gears",pagename:'ArticlePage'   },
    { label: "Queries", bgColor: "gray",iconName: "gears",pagename:'QueryScreenAdmin'  }

]

            // Customizable Area End
        };

        // Customizable Area Start

        // Customizable Area End
    }

    // Customizable Area Start
    async componentDidMount() {
    }




    // Customizable Area End
}
