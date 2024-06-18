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
} from 'react-native';
import color from '../../globalServices/color';
import GlobalStyle from '../../globalServices/globalStyle';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SliderBox} from 'react-native-image-slider-box';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// Merge Engine - import assets - Start
// Merge Engine - import assets - End
// Merge Engine - Artboard Dimension  - Start
// Merge Engine - Artboard Dimension  - End
// import dayjs from "dayjs";
// import ImageComponent from "./components/ImageComponent/ImageComponent";
import {CustomHeader} from '../../componants/CustomHeader';
import Scale from '../../globalServices/Scale';
import HomoepathsMemberScreenController, {
  Props,
} from './HomoepathsMemberScreenController';
import Loader from '../../componants/Loader';
import { Dropdown } from 'react-native-element-dropdown';
// import { Button } from "react-native-elements";
// Customizable Area End
const filterData = [
  { label: 'Name', value: 'Name' },
  { label: 'Registration No', value: 'Registration' },
  { label: 'City', value: 'city' }
]
export default class HomoepathsMemberScreen extends HomoepathsMemberScreenController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start
  // Customizable Area End
   shadowStyle = Platform.select({
    ios: {
      shadowColor: 'rgba(0,0,0,0.2)',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
    },
    android: {
      elevation: 5,
    },
  });
  
  renderItemAct = (item: any) => {
    return (
      <View
  style={{
    flexDirection: 'column',
    margin: 10,
    ...this.shadowStyle, 
    backgroundColor: '#BEE4F4',
    borderRadius: 5,
  }}>
  <View style={{flexDirection: 'row'}}>
    <View style={{padding: 10, flex: 0.3}}>
      <Image
        style={{height: Scale(100), width: Scale(100), borderRadius: 140/2}}
        // resizeMode="contain"
        source={{uri: "http://gujarathmc.org/img/293/mem/"+item.PersonImagePath}} />
         <Text style={{fontWeight: '700', fontSize: 15, textAlign: 'center',marginTop:5,color:'red'}}>
        {item.RegistrationNo}
      </Text>

    </View>

    <View style={{flex: 0.9,justifyContent:'center',marginStart:10}}>
     
      <Text style={{fontWeight: '700', fontSize: 13,textAlign: 'center'}}>
        {item.FullName}
      </Text>
      <Text style={{fontWeight: '700', fontSize: 15, textAlign: 'center',height:2,
        backgroundColor:'#EBD687',marginEnd:10,marginTop:5}}>
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center',marginTop:10}}>
        <FontAwesome5 name="school" size={18} color="orange" />
        <Text style={{fontSize: 14, textAlign: 'center',marginStart:10,}}>
          {' '}
          {item.RCityName}
        </Text>
      </View>
      <Text style={{fontSize: 14,marginTop:10}}>
        Registration Date: {item.RegistrationDate}
      </Text>
      <Text style={{fontSize: 14,marginTop:10}}>
      Renewal Upto: {item.RenewalYear}
      </Text>
    </View>
  </View>
</View>
    );
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: '#fffbe7'}}>
          <CustomHeader />
          <Loader loading={this.state.isLoading} />
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'purple',
              padding: 10,
            }}>
            <TouchableOpacity
              style={{flex: 0.1}}
              onPress={() => this.props.navigation.goBack()}>
              <Icon
                name="chevron-small-left"
                size={32}
                color="white"
                style={{width: Scale(30), height: Scale(30)}}
              />
            </TouchableOpacity>
            <View style={{flex: 1, alignSelf: 'center'}}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  marginStart: 5,
                  marginTop: 1,
                  fontSize: Scale(18),
                }}>
                {'REGISTERED HOMOEOPATHS'}
              </Text>
            </View>
          
          </View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'purple',
              padding: 15,
              margin:Scale(10)
            }}>
              
            <View style={{ alignSelf: 'center',}}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  marginTop: 1,
                  fontSize: Scale(15),
                }}>
                {'Search Homoeopaths'}
              </Text>
          
            </View>
            <Dropdown
                      style={styles.dropDownContainer}
                      placeholder=" Country"
                      data={filterData}
                      labelField="label"
                      valueField="value"
                      selectedTextStyle={{paddingStart:10}}
                      // value={value}
                      onChange={item => {
                        console.log('itemmmm', item);
                        // this.setState({selectedBloodGroup: item.label});
                      }}
                    />
          </View>
          <View>
              <FlatList
                data={this.state.memberlist}
                renderItem={({item, index}) => this.renderItemAct(item)}
                contentContainerStyle={{paddingBottom:150}}
                onEndReached={()=>this.fetchMoreData()}  
                onEndReachedThreshold={0.1}
              />
            </View>
        </View>
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

  dropDownContainer: {
     backgroundColor:'white',
      borderWidth: 1,
      flex:1,
      borderColor: 'grey',
      marginStart:15,
      // padding: Scale(10),
      borderRadius: Scale(5),
      // marginVertical: Scale(5)
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
  },  dropDownItem: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    marginVertical: 4, // Add margin around each dropdown item
  },
  paginationStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
});
// Customizable Area End
