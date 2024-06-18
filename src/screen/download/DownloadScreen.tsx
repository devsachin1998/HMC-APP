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
// import Icon from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Ionicons';

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
import DownloadScreenController, {Props} from './DownloadScreenController';
// import { Button } from "react-native-elements";
// Customizable Area End

export default class DownloadScreen extends DownloadScreenController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start
  // Customizable Area End
  renderItemSub =(item:any)=>
    {
      return(

          <View
            style={{
              borderWidth: 1,
              borderColor: '#009AEE',
              borderRadius: 5,
              marginTop: 3,
            }}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text
                style={{
                  flex: 0.3,
                  backgroundColor: '#009AEE',
                  padding: 5,
                  color: 'white',
                }}>
                Title
              </Text>
              <Text style={{flex: 1, paddingStart: 10, color: '#009AEE'}}>
                {item.Titel}
              </Text>
            </View>
           
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text
                style={{
                  flex: 0.3,
                  backgroundColor: '#009AEE',
                  padding: 5,
                  color: 'white',
                }}>
                PDF File
              </Text>
              <Text style={{flex: 1, paddingStart: 10, color: '#009AEE'}}>
                {item.FileName}
              </Text>
            </View>
           
          </View>
        ) 

    }
  renderItemAct = (item: any, index) => {
    console.log("asddasd",item)
    return (
      <View style={{flexDirection: 'column', margin: 10}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            borderRadius: 5,
            backgroundColor: '#009AEE',
          }}
          onPress={() => this.updateValueById(item.AttachmentTypeIDP)}>
          <View style={{padding: 10, flex: 1}}>
            <Text style={{color: 'white'}}>{item.AttachmentTypeName}</Text>
          </View>
          <TouchableOpacity onPress={()=>{}}>
          <MaterialIcons
            name={'delete'}
            size={23}
            color="white"
            style={{padding: 5, marginEnd: 10}}
          />
          </TouchableOpacity>
          <FontAwesome5
            name={item.isCollapsed ? 'caret-up' : 'caret-down'}
            size={28}
            color="white"
            style={{padding: 5, marginEnd: 10}}
          />
            
        </TouchableOpacity>
        {item.isCollapsed?
        <FlatList
                data={this.state.filterdata}
                extraData={this.state.filterdata}
                renderItem={({item, index}) => this.renderItemSub(item)}
                contentContainerStyle={{paddingBottom: 150}}
                // keyExtractor={(item) => item.id}
              />:null}
       
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
           style={{padding:10,marginTop:10}}
          />
            <TextInput
              placeholder="Search hear.."
              style={styles.input}
underlineColorAndroid='red'
autoCorrect={false}
              // value={this.state.firstName}
              onChangeText={(e)=>this.searchValueById(e)}
            />
            </View>
            <View >
              <FlatList
                data={this.state.datalist}
                extraData={this.state.datalist}
                renderItem={({item, index}) => this.renderItemAct(item, index)}
                contentContainerStyle={{paddingBottom: 150}}
                // keyExtractor={(item) => item.id}
              />
            </View>
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
