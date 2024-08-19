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
import Icon from 'react-native-vector-icons/Ionicons';

import Icon1 from 'react-native-vector-icons/AntDesign';

import FAQPageController, {Props} from './FAQPageAdminController';
import {CustomHeader} from '../../../componants/CustomHeader';
import Scale from '../../../globalServices/Scale';
import { TextInput } from 'react-native-gesture-handler';
import Loader from '../../../componants/Loader';
import BackIcon from 'react-native-vector-icons/Entypo';
import { FAB } from 'react-native-paper';

export default class FAQPageAdmin extends FAQPageController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start

  renderItemFAQs=(item:any,index:number)=>{
    const { iconChange } = this.state;
    return (
      <View style={{flexDirection:'column'}}>

    
      <View>
      <TouchableOpacity onPress={()=>this.updateValueById(item.FaqId)} style={{margin:Scale(10),backgroundColor:'#009AEE',padding:Scale(10),flexDirection:'row'}}>
      <View style={{flex:1}}>
          <Text style={{color:'white',marginVertical:Scale(10)}}>Question :-</Text>
      
          <Text style={{color:'white'}}>{item.Questions} </Text>
      </View>
      <TouchableOpacity 
          style={{alignSelf:'center'}}
          onPress={() => { this.props.navigation.navigate('AddFaqAdmin',{edit:true,item:item})}}>
        

      <Icon1
          name={"edit"}
          size={15}
          color="white"
        />
    
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=>this.showAlert(item.FaqId)}
          style={{alignSelf:'center',padding:12}}
          >

      <Icon1
          name={"delete"}
          size={15}
          color="white"
        />
    
        </TouchableOpacity>
        <View 
          style={{alignSelf:'center'}}
          >

      <Icon1
          name={!item.iscollaps?"caretdown":"caretup"}
          size={15}
          color="white"
        />
    
        </View>
      </TouchableOpacity>
      {item.iscollaps?
      <View style={{flex:1,borderColor:'#009AEE',marginHorizontal:Scale(10),borderWidth:1,padding:Scale(10)}}>
          <Text style={{marginVertical:Scale(10),color:'#009AEE'}}>Answer :-</Text>
      
          <Text style={{color:'#009AEE'}}>{item.Answers} </Text>
      </View>
      :
      null}
      </View>
      
      </View>
    )
  }
  // Customizable Area End
 
 
 



  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: '#fffbf5'}}>
          <CustomHeader />
          <Loader loading={this.state.isLoading} />
          <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'brown',
                padding: 10,
              }}>
              <TouchableOpacity
                style={{flex: 0.1}}
                onPress={() => this.props.navigation.goBack()}>
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
                  {'FAQs'}
                </Text>
              </View>
            </View>
          <View>
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
                renderItem={({item, index}) => this.renderItemFAQs(item, index)}
                contentContainerStyle={{paddingBottom: 150}}
                // keyExtractor={(item) => item.id}
              />
            </View>
          </View>
          <FAB
          style={styles.fab}
          small
          color='white'
          icon="plus"
          onPress={() => { this.props.navigation.navigate('AddFaqAdmin',{edit:false})}}/>
        </View>
      </SafeAreaView>
    );
  }

}


// Customizable Area Start
const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#009AEE', // Adjust as per your design
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
