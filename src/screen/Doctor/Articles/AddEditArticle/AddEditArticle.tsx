import * as React from 'react';

// Customizable Area Start
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  Platform,
  Linking,
} from 'react-native';
import color from '../../../../globalServices/color';
import GlobalStyle from '../../../../globalServices/globalStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';

import moment from 'moment';
import Icon1 from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {SliderBox} from 'react-native-image-slider-box';
import DatePicker from 'react-native-date-picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// Merge Engine - import assets - Start
// Merge Engine - import assets - End
// Merge Engine - Artboard Dimension  - Start
// Merge Engine - Artboard Dimension  - End
// import dayjs from "dayjs";
// import ImageComponent from "./components/ImageComponent/ImageComponent";
import AddEditArticleController, {Props} from './AddEditArticleController';
import {CustomHeader} from '../../../../componants/CustomHeader';
import Scale from '../../../../globalServices/Scale';

// import { Button } from "react-native-elements";
// Customizable Area End

export default class EditArticle extends AddEditArticleController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start

  // Customizable Area End


  render() {
    const { searchVal,open,date1 } = this.state;
    return (
      <SafeAreaView style={{ flex: 1 }}>
       
       <CustomHeader backgroundColor='maroon' logout={true}/>
          <View style={{backgroundColor:'green',flexDirection:'row',alignItems:'center',paddingLeft:Scale(10)}}>
            <Icon
            name="article"
            size={16}
            color="white"
            // style={styles.icon}
            />
            <Text style={{color:'white',fontWeight:'bold',padding:Scale(10),fontSize:Scale(18)}}>Add Article</Text>
          </View>
          <View style={{marginTop:Scale(10),flex:1,paddingHorizontal:Scale(10)}}>
            <View style={{paddingVertical:Scale(5)}}>
            <Text style={{fontWeight:'700',fontSize:Scale(14)}}>Article Name</Text>
            <TouchableOpacity style={{borderWidth:1,borderColor:'green',padding:Scale(10),borderRadius:Scale(5)}}>
                <TextInput placeholder='Article Name' placeholderTextColor="#009AEE" style={{fontSize:Scale(18)}} value={searchVal} onChangeText={(e)=>this.setState({searchVal:e})}/>
            </TouchableOpacity>
            </View>

            <View style={{paddingVertical:Scale(5)}}>
            <Text style={{fontWeight:'700',fontSize:Scale(14)}}>Date</Text>
            <TouchableOpacity style={{borderWidth:1,borderColor:'green',padding:Scale(10),borderRadius:Scale(5)}}>

                <TextInput placeholder='Article Name' placeholderTextColor="#009AEE" style={{fontSize:Scale(18)}} value={    date1.toISOString().substr(0, 10) ==
                  new Date().toISOString().substr(0, 10)
                    ? ''
                    : date1.toISOString().substr(0, 10)} onPressIn={()=>this.setState({open: true})}/>
                <DatePicker
                    modal
                    open={open}
                    date={date1}
                    mode="date"
                    onConfirm={selectedDate => {
                      console.log(
                        'Selected Date:',
                        moment(selectedDate).format('YYYY-MM-DD'),
                      );
                      this.setState({open: false, date1: selectedDate});
                    }}
                    onCancel={() => {
                      this.setState({open: false});
                    }}
                  />
            </TouchableOpacity>
            </View>
            
            <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
              <Text>Upload PDF</Text>
              <TouchableOpacity style={{padding:Scale(10),backgroundColor:'green',borderRadius:Scale(5)}}>
                <Text  style={{color:'white',fontWeight:'bold'}}>CHOOSE FILE</Text>
              </TouchableOpacity>
              <Text>No File Choosen</Text>
            </View>
            <TextInput
              placeholder='Description'
              multiline={true}
              style={{borderWidth:1,borderColor:'green',borderRadius:Scale(5),padding:Scale(10),marginVertical:Scale(10)}}
            />
            <View style={{flexDirection:'row',justifyContent:'space-between',gap:10}}>
              <TouchableOpacity style={{padding:Scale(10),backgroundColor:'green',borderRadius:Scale(5),flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'white',fontWeight:'bold'}}>SUBMIT</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={{padding:Scale(10),backgroundColor:'green',borderRadius:Scale(5),flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text  style={{color:'white',fontWeight:'bold'}}>CANCEL</Text>
              </TouchableOpacity>
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
