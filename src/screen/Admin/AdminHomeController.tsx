import { Component } from 'react';
import { apiFunctions, storeData, getdata } from '../../globalServices/utils';
import { makeApiCallxml } from '../../globalServices/api';
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

export default class AdminHomeController extends Component<Props, S, SS> {
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
    { label: "Doctors", bgColor: "red", iconName:"user-doctor" },
    { label: "Colleges", bgColor: "blue", iconName:"landmark" },
    { label: "University", bgColor: "green", iconName:"building-un"},
    { label: "Gallary", bgColor: "darkorchid",iconName: "panorama"  },
    { label: "Gallary details", bgColor: "orange",iconName: "clapperboard"  },
    { label: "Council Members", bgColor: "purple",iconName: "people-line" },
    { label: "Council Users", bgColor: "darkkhaki", iconName:"people-roof" },
    { label: "FAQs", bgColor: "brown",iconName: "clipboard-question"  },
    { label: "Advt.s", bgColor: "darkslateblue",iconName: "rectangle-ad"  },
    { label: "News", bgColor: "darkcyan",iconName: "newspaper" },
    { label: "Maintenance", bgColor: "gray",iconName: "gears"  }
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
