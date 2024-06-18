import * as React from 'react';
import FileViewer from 'react-native-file-viewer';

// Customizable Area Start
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  Platform,
  Linking,
  TextInput,
  Dimensions,
} from 'react-native';
import color from '../../globalServices/color';
import GlobalStyle from '../../globalServices/globalStyle';
// import Icon from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Entypo';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SliderBox} from 'react-native-image-slider-box';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
// Merge Engine - import assets - Start
// Merge Engine - import assets - End
// Merge Engine - Artboard Dimension  - Start
// Merge Engine - Artboard Dimension  - End
// import dayjs from "dayjs";
// import ImageComponent from "./components/ImageComponent/ImageComponent";
import {CustomHeader} from '../../componants/CustomHeader';
import Scale from '../../globalServices/Scale';

import Loader from '../../componants/Loader';
import ArticlesScreenController, {Props} from './AboutUsScreenController';
import RenderHTML from "react-native-render-html";
import AboutUsScreenController from './AboutUsScreenController';

const html = "<!DOCTYPE html PUBLIC \"-//WAPFORUM//DTD XHTML Mobile 1.0//EN\" \"http://www.wapforum.org/DTD/xhtml-mobile10.dtd\">\n" +
                "<html xmlns=\"http://www.w3.org/1999/xhtml\">\n" +
                "<head>\n" +
                " <meta forua=\"true\" http-equiv=\"Cache-Control\" content=\"max-age=0\"/>\n" +
                "</head>\n" +
                "\n" +
                "<body >\n" +
                "<h2>\n" +
                " <p>\n" +
                "  Dr. J. P. Nanavati brought homoeopathy in Gujarat. He started a homoeopathy society in 1889. He also started a charitable homoeopathy dispensary in kalupur Ahmedabad. This dispensary is still serving the large number of people.\n" +
                " </p><p>\n" +
                " In 1918 Dr. Ramprasad Patel studied homoeopathy under his guidance. In 1909 Dr. Trikamlal Shah went to U.S.A and received doctorate of medicine degree along with homoeopathy. Gujarat homoeopathy society was re-organized in the year 1938. Dr. Bhogilal P. Shah (LCPS) practiced homoeopathy till 1963.\n" +
                "</p><p>\n" +
                " In 1930 Dr. M. N. Apte (M.B.B.S) was practicing in south Gujarat. Director of oriental institute and scholar of Sanskrit Dr. B. Bhattacharya (M.A. , Ph. D.) also turn towards homoeopathy. One of his patients Sheth Shri Girdharlal Parikh donated rupees 7 lacs in those days to start a charitable homoeopathy dispensary at Baroda. His highness Sayajirao Gayakwad passed a homoeopathy act 1932 was adopted to form Baroda state medical council. Baroda was the first state in India to recognize homoeopathy.\n" +
                "</p><p>\n" +
                " In 1938 Dr. M. H. Udani started working as homoeopathy in Rajkot. In 1940 Dr. Maganlal Desai, after successful practice at Kolkata for 10 years, came to Gujarat and settled in Navsari. He also worked in Surat and then in Mumbai. Dr. N. M. shah started practice in 1950 in Ahmedabad. He started a magazine called \"UPCHARKALA\"\n" +
                "</p><p>\n" +
                " Dr. R. K. Desai (D.M.S.) started his practice in 1950 in Ahmedabad. He also opened a branch of All India homoeopathy institute in Gujarat state came in to existence in 1960. In 1961 the government of Gujarat has organized a homoeopathic board under the presidentship of Dr. R. K. Desai for the development of his science in Gujarat state. Government nominated Dr. R. K. Desai as president of the council of homoeopathic system of medicine. He framed the homoeopathic Act 1963 and was enforced by the state government. According to the provisions of act Dr. K. B. Shah (Kantikaka of Khambhat) became first president of the council. Dr. K. B. Shah had contributed the development of homoeopathy in Gujarat state. He shared his knowledge and grave guidance to many of coming homoeopaths. The charitable dispensary where he worked is still running in Khambhat.\n" +
                "</p><p>\n" +
                " Council of homoeopathy started 4 years Diploma in homoeopathy in medicine and surgery (D.H.M.S) course in Gujarat in 1970. Hari Om homoeopathic Trust started first homoeopathic medical college at Savli, Dist. Baroda in 1970. State government of Gujarat released the grant -in-aid to the homoeopathic medical colleges were started. Two in Anand, one in Surat and Mehsana respectively.\n" +
                "</p><p>\n" +
                " The central government of India introduced D.H.M.S and B.H.M.S. course in 1983 in India. Anand homoeopathic Medical college & R.I. Anand introduced in B.H.M.S. course for the first time in Gujarat in 1984 with the affiliation to the Sardar Patel University, Vallabh Vidhyanagar.\n" +
                "</p><p>\n" +
                " At present 16 institutes are providing homoeopathic education in the state. Dr. V.H. Dave homoeopathic Medical College, Anand and Ahmedabad homoeopathic Medical College, Ahmedabad are also running post graduate course in Gujarat state.\n" +
                "</p><p>\n" +
                " The state government had started 35 homoeopathic dispensaries and 182 dispensaries in each constituency of the state.\n" +
                "</p><p>\n" +
                " The Syntex international limited (Ta Kalol) has started a health care department in 1996 to produce good quality of homoeopathic medicines with their collaboration. The state government has started an I.P.D. ward in the civil hospital Ahmedabad. They have also prepared a Helwell kits for primary aid as well as homoeopathic veternity kit for the animals. To propagate the homoeopathy science in the rural area it has started TV serial also.\n" +
                "</p><p>\n" +
                " At present 12101 homoeopaths are registered with the council & serving peoples in all over the world.\n" +
                "</p>\n" +
                "\n" +
                "</h2>\n" +
                "</body>\n" +
                "\n" +
                "</html>"

export default class AboutUsScreen extends AboutUsScreenController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start
  // Customizable Area End
  
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
       <ScrollView style={{ flex: 1 }}>
       <CustomHeader />
       <View
          style={{flexDirection: 'row', backgroundColor: 'grey', padding: 10}}>
          <TouchableOpacity
            style={{flex: 0.1}}
            onPress={() => this.props.navigation.goBack()}>
            <Icon
              name="chevron-small-left"
              size={30}
              color="white"
              style={{width: Scale(30), height: Scale(30)}}
            />
          </TouchableOpacity>
          <View style={{flex: 1, alignSelf: 'center'}}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                letterSpacing: 1,
                marginStart: 5,
                fontSize: Scale(18),
              }}>
              {'About Us'}
            </Text>
          </View>
        </View>
      <RenderHTML contentWidth={0.5} source={{ html }}  emSize={9} baseStyle={{padding:10,fontWeight:'100',fontSize:1}} />
    </ScrollView>
      </SafeAreaView>
    );
  }
}

// Customizable Area Start
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#ffaa11',
    // height: '30%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    // borderWidth:1,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
  },
  innerContainer: {
    flexDirection: 'row',
    // width: '50%',
    marginTop: Scale(10),
    marginBottom: Scale(5),
  },
  touchable: {
    // borderWidth: 1,
    // padding: Scale(20),
    marginStart: Scale(55),
    marginEnd: Scale(45),
    alignItems: 'center',
    justifyContent: 'center',
    // To equally divide the space between two touchable elements
  },
  input: {
    marginTop: Scale(10),
    fontSize: 16,
    flex:1,
    padding: 10,
    borderColor: 'skyblue',
    borderBottomWidth: 1,
    borderRadius: 5,
  },
  headcontainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 2,
      },
    }),
  },
  androidShadow: {
    elevation: 5,
  },
  iconContainer: {
    alignItems: 'center',
    padding: Scale(16),
    borderRadius: Scale(10),
    backgroundColor: 'white',
  },
  text: {
    fontSize: 14,
    marginTop: Scale(8),
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
  },
  fixedView: {
    // height: Scale(50),
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    alignContent: 'center',
    alignItems: 'center',
  },
  bottomview: {
    flex: 1,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  flatList: {
    height: '100%',
  },
  listHeaderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstPlaceContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    borderWidth: 1,
    borderRadius: 10,
    padding: 16,
    width: '100%',
    maxWidth: 280,
  },
  listPlaceContainer: {},
  firstPlaceProfile: {
    width: 80,
    height: 80,
    borderRadius: 80,
    borderWidth: 1,
  },
  firstPlacePosition: {
    position: 'absolute',
    backgroundColor: 'black',
    borderRadius: 50,
    width: 20,
    height: 20,
    bottom: -8,
    left: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstPlaceProfileContainer: {
    marginTop: 8,
    marginBottom: 16,
  },
  firstPlaceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 230,
    width: '100%',
  },
  leaderboardItem: {},
  otherPlaceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 10,
    padding: 16,
  },
  otherPlaceProfile: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
  },
  otherPlacePosition: {
    position: 'absolute',
    backgroundColor: 'black',
    borderRadius: 50,
    width: 20,
    height: 20,
    bottom: -8,
    left: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainerStyle: {
    paddingBottom: '20%',
  },
  textBold: {
    fontWeight: '700',
  },
  textWhite: {
    color: 'white',
  },
  emptyUserContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
  },
  emptyUserLabel: {
    fontSize: 18,
  },
  buttonLoadMore: {
    height: 100,
    marginTop: 16,
  },
  paginationStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
});
// Customizable Area End
