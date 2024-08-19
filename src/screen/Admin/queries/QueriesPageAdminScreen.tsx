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
  Modal,
} from 'react-native';
import color from '../../../globalServices/color';
import GlobalStyle from '../../../globalServices/globalStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import BackIcon from 'react-native-vector-icons/Entypo';

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
import QueryScreenAdminController, {Props} from './QueryScreenAdminController';
import {CustomHeader} from '../../../componants/CustomHeader';
import Scale from '../../../globalServices/Scale';
import { TextInput } from 'react-native-gesture-handler';
import Loader from '../../../componants/Loader';
// import { Button } from "react-native-elements";
// Customizable Area End

export default class QueryScreenAdmin extends QueryScreenAdminController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start
  // Customizable Area End
 
 
  renderModal = () => {
    return (
      <Modal
            transparent={true}
            animationType='none'
            visible={this.state.showmodal}
            onRequestClose={() => this.setState({ showmodal: false })}
        >
            <View style={styles.modalBackground}>
                <View style={styles.modalBackground2}>
                    
                    <View style={{ marginTop: 0 ,backgroundColor:'skyblue',height:45}}>
                        <Text style={{  fontSize: 16, fontWeight: "600",padding:5 }}>{this.state.txt}</Text>
                    </View>
                    <View style={[styles.shadowContainer,{paddingTop:Scale(5),flex:1}]}>
                    <TextInput placeholder='Response' placeholderTextColor="grey"
                     style={{backgroundColor:"white",fontSize:Scale(18),margin:Scale(10),padding:Scale(10),borderRadius:Scale(5)}} 
                      onChangeText={(e)=>this.setState({res:e})}/>
                </View>
                    <View style={{flexDirection:'row'}}>
                    
                                          <TouchableOpacity
                        style={styles.okayButton}
                        onPress={() => {
                            this.sendresponse()
                        }}
                    >
                        <Text style={styles.okayButtonText}> Send Response </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.okayButton}
                        onPress={() => {
                            // Handle Okay button functionality here
                            this.setState({ showmodal: false });
                            // Add more actions as needed
                        }}
                    >
                        <Text style={styles.okayButtonText}> Cancel </Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

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
                   <TouchableOpacity onPress={()=>this.setState({showmodal:true,txt:item.Message,QAnsID:item.QAnsID})}>
           <FontAwesome5
            name={'pencil'}
            size={20}
            color="white"
            style={{ marginEnd: 10, marginTop:0}}
          />
          </TouchableOpacity >
             <TouchableOpacity onPress={()=>this.showAlert(item.QAnsID)}>
           <FontAwesome5
            name={'trash'}
            size={20}
            color="white"
            style={{ marginEnd: 10, marginTop:0}}
          />
          </TouchableOpacity >
      
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
                  Name
                </Text>

                <Text style={{marginVertical: Scale(10), color: 'white',marginBottom:0}}>
                  Date
                </Text>
              </View>
              <View style={{marginVertical: Scale(10), paddingLeft: Scale(5),flex:1}}>
                <Text style={{marginVertical: Scale(1), color: '#009AEE'}}>
                  {item.FullName}{''}
                </Text>
                <Text style={{marginVertical: Scale(10), color: '#009AEE'}}>
                  {item.CreatedDate}{''}
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
       {this.renderModal()}

       <Loader loading={this.state.isLoading}></Loader>
          <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#ffaa11',
                padding: 10,
              }}>
              <TouchableOpacity
                style={{flex: 0.1}}
                onPress={() => this.props.navigation.navigate("Maintenance")}>
                <BackIcon
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
                  {'Queries'}
                </Text>
              </View>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',padding:5,backgroundColor:'white',borderRadius:8}}>
          <Icon
          size={22}
          color={"#009AEE"}
            name={"search"}
           style={{padding:10,marginTop:10}}
          />
            <TextInput
              placeholder="Search hear.."
              style={styles.input}
autoCorrect={false}
              // value={this.state.firstName}
              onChangeText={(e)=>this.searchValueById(e)}
            />
            </View>
  
          <View>

            <FlatList
              data={this.state.filterdata}
              extraData={this.state.filterdata}
              renderItem={({item, index}) => this.renderItemQue(item, index)}
              // keyExtractor={(item) => item.id}
            />
          </View>
         
      </SafeAreaView>
    );
  }
}


// Customizable Area Start
const styles = StyleSheet.create({
  shadowContainer: { 
    backgroundColor:'#white',

...Platform.select({
  ios: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
  android: {
    elevation: 5,
  }})
},
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(69,69,69, 0.5)',

},
modalBackground2: {
    // justifyContent: 'space-between', // Adjust this to push content apart
    // alignItems: 'center',
    backgroundColor: 'white',
    height: "20%",
    width: "90%", // Make the modal responsive
    // padding: 20,  // Add padding for better spacing
    borderRadius: 8,
    marginBottom:50
},
activityIndicatorWrapper: {
    flex: 1, 
    marginTop:20,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
},
okayButton: {
    width: '100%',
    flex:1,
    margin:5,
    backgroundColor: '#454545',
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 5, // Adding some margin to keep it off the very bottom edge
},
okayButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
},
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
  input: {
    marginTop: Scale(10),
    fontSize: 16,
    flex:1,
    padding: 10,
    marginBottom:0,
    borderColor: 'skyblue',
    borderBottomWidth: 1,
    borderRadius: 5,
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
