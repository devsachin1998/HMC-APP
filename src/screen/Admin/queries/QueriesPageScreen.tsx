import * as React from 'react';

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
} from 'react-native';
import color from '../../../globalServices/color';
import GlobalStyle from '../../../globalServices/globalStyle';
import Icon from 'react-native-vector-icons/Entypo';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {SliderBox} from 'react-native-image-slider-box';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';

// Merge Engine - import assets - Start
// Merge Engine - import assets - End
// Merge Engine - Artboard Dimension  - Start
// Merge Engine - Artboard Dimension  - End
// import dayjs from "dayjs";
// import ImageComponent from "./components/ImageComponent/ImageComponent";
import QueryScreenController, {Props} from './QueryScreenController';
import {CustomHeader} from '../../../componants/CustomHeader';
import Scale from '../../../globalServices/Scale';
import { TextInput } from 'react-native-gesture-handler';
import Loader from '../../../componants/Loader';
// import { Button } from "react-native-elements";
// Customizable Area End

export default class QueriesPageScreen extends QueryScreenController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start
  // Customizable Area End
 
 
 

  renderItemQue = (item: any, index: number) => {

    return (
      <View style={{flexDirection: 'column'}}>
        <View>
          <TouchableOpacity
            onPress={() => this.updateValueById(item.QAnsID)}
            style={{
              margin: Scale(10),
              marginBottom:Scale(2),
              backgroundColor: '#009AEE',
              padding: Scale(10),
              flexDirection: 'row',
            }}>
            <View style={{flex:2}}>
              <Text style={{color: 'white'}}>{item.Message} </Text>
            </View>
            <View
              style={{
                alignSelf: 'center',
                flexDirection: 'row',
              }}>
             
      
              <View style={{alignSelf: 'center'}}>
                <FontAwesome5
            name={item.iscollaps ? 'caret-up' : 'caret-down'}
            size={20}
                  color="white"
                />
              </View>
            </View>
          </TouchableOpacity>
          {item.iscollaps ? (
            <View
              style={{
                // flex: 1,
                borderColor: '#009AEE',
                marginHorizontal: Scale(10),
                borderWidth: 1,
                flexDirection: 'row',
              }}>
              <View style={{backgroundColor: '#009AEE', padding: Scale(10)}}>
                <Text style={{marginVertical: Scale(1), color: 'white'}}>
                  Response
                </Text>
              </View>
              <View style={{marginVertical: Scale(10), paddingLeft: Scale(5)}}>
                <Text style={{marginVertical: Scale(1), color: '#009AEE'}}>
                  {item.InqRespnse}{' '}
                </Text>
              </View>
            </View>
          ) : null}
        </View>
      </View>
    );
  };


  render() {
    const { searchVal } = this.state;
    return (
      <SafeAreaView style={{ flex: 1 }}>
       
       <CustomHeader backgroundColor='maroon' logout={true}/>
       <Loader loading={this.state.isLoading}></Loader>
          <View style={{backgroundColor:'#ffaa11',padding:5}}>
            <Text style={{color:'white',fontWeight:'bold',padding:Scale(10),fontSize:18}}>Queries</Text>
          </View>
          <View>
            <FlatList
              data={this.state.datalist}
              renderItem={({item, index}) => this.renderItemQue(item, index)}
              // keyExtractor={(item) => item.id}
            />
          </View>
        <View style={{alignItems:'flex-end',flex:0.1,padding:Scale(20),marginTop:'auto'}}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('AddQueryScreen')} style={styles.plusIconContainer}>
                <MaterialCommunityIcons
                    name="plus"
                    size={26}
                    color="white"
                    // style={styles.icon}
                />
            </TouchableOpacity>
     
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
    justifyContent:'center',
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
    marginStart:Scale(55),
    marginEnd:Scale(45),
    alignItems: 'center',
    justifyContent: 'center',
   // To equally divide the space between two touchable elements
  },
  iconContainer: {
    alignItems: 'center',
    flex: 0.25,
    justifyContent:'center',
    // padding:Scale(20),
    borderRadius:Scale(10),
    backgroundColor:'white'
  },
  text: {
    fontSize: 14,
    marginTop:Scale(8),
    color:'white',
    fontWeight:'700',
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
  iconSubConatiner: {
    // flex: 0.5,
    margin: Scale(10),
    height: Scale(70),
    //width:Scale(100),
    borderRadius: Scale(20),
    justifyContent:'center',
    alignItems:'center'
  },
  bottomText: {
    color:'maroon',
    fontSize:Scale(16),
    textAlign:'center',
    fontWeight:'bold'
},
    plusIconContainer: {
        backgroundColor:"#009AEE",
        width:Scale(50),
        height:Scale(50),
        borderRadius:Scale(25),
        justifyContent:'center',
        alignItems:'center'}
});
// Customizable Area End
