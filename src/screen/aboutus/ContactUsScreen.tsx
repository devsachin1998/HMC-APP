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
import AboutUsScreenController, {Props} from './AboutUsScreenController';
// import { Button } from "react-native-elements";
// Customizable Area End

export default class ContactUsScreen extends AboutUsScreenController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }
  renderinc = ()=>
    {
      return(
        
        <ScrollView  >
        <View style={styles.container}>
          <Text style={{fontSize:20,fontWeight:'700',color:'skyblue'}}>* ADD INQUIRY *</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            placeholder='Name'
            style={styles.input}
            onChangeText={(e)=>this.handleFullNameChange(e)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mobile No</Text>
          <TextInput
            placeholder='Mobile No'
            style={styles.input}
            keyboardType='numeric'
            onChangeText={(e)=>this.handleMobileNoChange(e)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder='Email'
            style={styles.input}
            onChangeText={(e)=>this.handleEmailChange(e)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Message</Text>
          <TextInput
            placeholder='Description'
            multiline={true}
            style={[styles.input, { height: 100 }]}
            onChangeText={(e)=>this.handleMessageChange(e)}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={()=>this.addinquiry()}>
        <Text style={{fontSize:20,fontWeight:'700',color:'white'}}>Submit</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
      )
    }
rendermap =()=>
  {
    return (
    <View style={{ flexDirection: 'column', flex: 3 }}>
    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Map</Text>
    </View>
    <View style={{ backgroundColor: 'skyblue', flex: 1,  }}>
    <View style={styles.line}>
      <FontAwesome5 name="map" size={25} color="black" />
      <Text style={styles.text}>Council of Homoeopathic System of Medicine Gujarat State</Text>
    </View>
    <View style={[styles.line,{marginStart:20}]}>
      <Text style={styles.text}>"COUNCIL HOUSE" OPP. M.P. SHAH CANCER HOSPITAL,GATE NO.6, NEW CIVIL HOSPITAL,ASARWA,AHMEDABAD - 380016</Text>
    </View>
    <View style={styles.line}>
      <FontAwesome5 name="phone" size={25} color="black" />
      <Text style={styles.text}>PHONE NO : 07922681377</Text>
    </View>
    <View style={styles.line}>
      <FontAwesome5 name="envelope" size={25} color="black" />
      <Text style={styles.text}>EMAIL : gujhmc@gmail.com</Text>
    </View>
  </View>
  
  </View>
    )
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: '#fffbe7'}}>
          <CustomHeader />

          <Loader loading={this.state.isLoading} />
          <View
            style={{
              height: 90,
              alignSelf: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                flex: 1,
                borderBottomWidth: this.state.selectedTab == '1' ? 8 : 3,
                alignItems: 'center',
                backgroundColor:
                  this.state.selectedTab === '1' ? '#DEDEDE' : 'transparent',
                justifyContent: 'center',
                borderBottomColor: 'skyblue',
              }}
              onPress={() => this.handleTabPress('1')}>
              <MaterialIcons name="location-on" size={25} />
              <Text style={{marginLeft: 5}}>Reach us At</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor:
                  this.state.selectedTab === '2' ? '#DEDEDE' : 'white',

                borderBottomWidth: this.state.selectedTab == '2' ? 8 : 3,
                alignItems: 'center',
                borderBottomColor: 'skyblue',
                justifyContent: 'center',
              }}
              onPress={() => this.handleTabPress('2')}>
              <MaterialIcons name="help-outline" size={27} />
              <Text style={{marginLeft: 5}}>Inquiry</Text>
            </TouchableOpacity>
          </View>
        {this.state.selectedTab=='1'?this.rendermap():this.renderinc()}
        </View>
      </SafeAreaView>
    );
  }
}

// Customizable Area Start
const styles = StyleSheet.create({
  
  line: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  text: {
    fontSize: 18,
    paddingLeft: 10, // Add padding to align text after the icon
  },
  button: {
    backgroundColor: 'skyblue',
    borderColor: 'black',
    borderRadius: 10,
    marginTop:20,
    padding: 10,
    alignItems: 'center',
  },
  itemContainer: {
    flex: 0.5,
    margin: 10,
    width: '50%',
    backgroundColor: '#fff',
    borderRadius: 8,

    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    width: Dimensions.get('window').width / 2 - 20,
    height: 120,
    borderRadius: 10,
  },
  collegeName: {
    padding: 10,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  container: {
    padding: 10,
  },
  inputContainer: {
    marginBottom: 5,
  },
  label: {
    fontWeight: 'bold',
    paddingLeft: 5,
    marginTop: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'skyblue',
    borderRadius: 5,
    padding: 10,
    marginVertical: 2,
    height: 45,
  },
});
// Customizable Area End
