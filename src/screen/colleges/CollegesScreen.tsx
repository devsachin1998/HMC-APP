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
  Modal,
} from 'react-native';
import color from '../../globalServices/color';
import GlobalStyle from '../../globalServices/globalStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SliderBox} from 'react-native-image-slider-box';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

// Merge Engine - import assets - Start
// Merge Engine - import assets - End
// Merge Engine - Artboard Dimension  - Start
// Merge Engine - Artboard Dimension  - End
// import dayjs from "dayjs";
// import ImageComponent from "./components/ImageComponent/ImageComponent";
import {CustomHeader} from '../../componants/CustomHeader';
import Scale from '../../globalServices/Scale';

import Loader from '../../componants/Loader';
import CollegeScreenController, {Props} from './CollegeScreenController';
// import { Button } from "react-native-elements";
// Customizable Area End

export default class CollegeScreen extends CollegeScreenController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  renderModal = (item: any) => {
    console.log('sddsd', item);
    return (
      <Modal
        transparent={true}
        animationType={'none'}
        visible={this.state.modal}
        onRequestClose={() => {
          console.log('close modal');
          this.setState({modal: false});
        }}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.modalBackground}
          onPress={() => {}}>
          <View style={styles.activityIndicatorWrapper}>
            <View>
              <Text
                style={{
                  backgroundColor: '#3F3F3F',
                  padding: 10,
                  color: '#009AEE',
                  fontWeight: '500',
                  fontSize: 16,
                }}>
                {item.CollegeName}
              </Text>
            </View>
            <View style={{margin: 5}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 5,
                }}>
                <FontAwesome5
                  name="school"
                  size={20}
                  color="orange"
                  style={{padding: 5}}
                />

                <Text style={{fontSize: 14, flex: 1, marginStart: 10}}>
                  {item.UniversityName}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 5,
                }}>
                <FontAwesome6
                  name="map-location"
                  size={20}
                  color="orange"
                  style={{padding: 5}}
                />
                <Text style={{fontSize: 14, flex: 1, marginStart: 10}}>
                  {item.Address}
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <FontAwesome
                  name="mobile-phone"
                  size={30}
                  color="orange"
                  style={{padding: 10, paddingBottom: 10}}
                />
                <Text style={{fontSize: 14, flex: 1, marginStart: 10}}>
                  {item.PhoneNo}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginStart: 2,
                }}>
                <MaterialCommunityIcons
                  name="email"
                  size={22}
                  color="orange"
                  style={{padding: 5}}
                />
                <Text style={{fontSize: 14, flex: 1, marginStart: 10}}>
                  {item.Email}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginStart: 5,
                }}>
                <MaterialCommunityIcons
                  name="search-web"
                  size={28}
                  color="orange"
                  style={{padding: 5, paddingStart: 0}}
                />
                <TouchableOpacity
                  style={{flex: 1, marginStart: 10}}
                  onPress={() => Linking.openURL(item.Website)}>
                  <Text
                    style={{
                      fontSize: 14,
                      textDecorationLine: 'underline',
                      color: 'red',
                    }}>
                    {item.Website}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'row',justifyContent:'center',marginTop:10}}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#3F3F3F',
                    padding: 5,
                    flex: 1,
                    borderColor:'red',
                    alignItems:'center',
                    margin: 5,
                  }}>
           <FontAwesome5 name="file-pdf" 
                    size={22}
                    color="white"
                    style={{padding: 5}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#3F3F3F',
                    padding: 5,
                    flex: 1,
                    alignItems:'center',
                    margin: 5,
                  }} onPress={()=>this.setState({modal:false},()=>this.props.navigation.navigate("CollegesGalleryScreen",{Id:item.CollegeID,CollegeName:item.CollegeName,type:""}))}>
                  <MaterialIcons name="photo-library"
                    size={22}
                    color="white"
                    style={{padding: 5}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#3F3F3F',
                    padding: 5,
                    flex: 1,
                    justifyContent:'center',
                    alignItems:'center',
                    margin: 5,
                  }} onPress={()=>this.setState({modal:false})}>
                  <Text style={{color:'white',fontWeight:"600"}}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };
  renderItemAct = (item: any, index) => {
    return (
      <View
        style={{
          flexDirection: 'column',
          margin: 10,
          borderRadius: 5,
          overflow: 'hidden',
        }}>
        <TouchableOpacity
          style={{flexDirection: 'row'}}
          onPress={() => this.setState({modal: true, pageIndex: index})}>
          <View style={{flex: 0.5}}>
            <Image
              resizeMode="cover"
              style={{height: 100, width: 100}}
              source={require('../../images/hcollege.jpg')}
            />
          </View>
          <View style={{flex: 1, backgroundColor: 'white'}}>
            <Text style={{color: '#009AEE', fontWeight: '700'}}>
              {item.CollegeName}
            </Text>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <FontAwesome5
                name="school"
                size={20}
                color="#009AEE"
                style={{marginTop: 20, padding: 5}}
              />

              <Text style={{fontSize: 12, marginTop: 20, flex: 1}}>
                {item.UniversityName}
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 0.2,
              backgroundColor: '#009AEE',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name={'dots-vertical'}
              size={28}
              color="white"
              style={{padding: 5, marginEnd: 0}}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: '#fffbe7'}}>
          <CustomHeader />
          <Loader loading={this.state.isLoading} />

          <View>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',padding:5,backgroundColor:'white',borderRadius:8}}>
          <Icon
          size={22}
          color={"#009AEE"}
            name={"search"}// Adjust path to your search icon image
           style={{padding:10}}
          />
            <TextInput
              placeholder="Search hear.."
              style={styles.input}
underlineColorAndroid='red'
autoCorrect={false}
              // value={this.state.firstName}
              onChangeText={(e)=>this.updateValueById(e)}
            />
            </View>
            <View>
              <FlatList
                data={this.state.filterdata}
                renderItem={({item, index}) => this.renderItemAct(item, index)}
                contentContainerStyle={{paddingBottom: 150}}
                // keyExtractor={(item) => item.id}
              />
            </View>
          </View>
          {this.state.modal
            ? this.renderModal(this.state.filterdata[this.state.pageIndex])
            : null}
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
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: Scale(410),
    width: '90%',
    borderRadius: 10,
    overflow: 'hidden',

    display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'space-around',
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
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
    // marginTop: Scale(10),
    fontSize: 16,
    padding: 5,
    flex:1,
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
