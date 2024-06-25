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
    { label: "Districts", bgColor: "green", iconName:"building-un"},
    { label: "Talukas", bgColor: "darkorchid",iconName: "panorama"  },
    { label: "Cities", bgColor: "orange",iconName: "clapperboard"  },
    { label: "Designations", bgColor: "purple",iconName: "people-line" },
    { label: "UserTypes", bgColor: "darkkhaki", iconName:"people-roof" },
    { label: "Qualification", bgColor: "brown",iconName: "clipboard-question"  },
    { label: "Downloads", bgColor: "darkslateblue",iconName: "rectangle-ad"  },
    { label: "Act.to Notifications", bgColor: "darkcyan",iconName: "newspaper" },
    { label: "Inquiries", bgColor: "gray",iconName: "gears"  },
    { label: "Articles", bgColor: "gray",iconName: "gears"  },
    { label: "Queries", bgColor: "gray",iconName: "gears"  }

]

            // Customizable Area End
        };

        // Customizable Area Start

        // Customizable Area End
    }

    // Customizable Area Start
    async componentDidMount() {
    }

    updateValueById = (articleId) => {
        let updatedDataList = this.state.datalist.map(article => {
            if (article.ArticleID === articleId) {
                return { ...article, iscollaps: !article.iscollaps };
            }
            return article;
        });

        this.setState({ datalist: updatedDataList }, () => {
            console.log("Updated datalist:", this.state.datalist);
        });


    }


    getdata = async () => {
        const responseData =
            await makeApiCallxml(apiFunctions.CollegeSelect + "?UN1=1&PWD1=1", 'GET', "web");
        const jsonData1 = responseData.Table.map((table: any) => ({
            CollegeID: table?.CollegeID,
            CollegeName: table?.CollegeName,
            UniversityName: table?.UniversityName,

        }))
        this.setState({ datalist: jsonData1 })
        this.setState({ isLoading: false })

        console.log('responseData:::--->headline', responseData);

    }

    // Customizable Area End
}
