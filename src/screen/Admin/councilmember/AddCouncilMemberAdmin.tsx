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
import {CustomHeader} from '../../../componants/CustomHeader';
import Scale from '../../../globalServices/Scale';

import Loader from '../../../componants/Loader';
import AddCouncilMemberAdminController, {Props} from './AddCouncilMemberAdminController';
import {Dropdown} from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
// import { Button } from "react-native-elements";
// Customizable Area End

export default class AddCouncilMemberAdmin extends AddCouncilMemberAdminController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          // keyboardVerticalOffset={Scale(50)}
          behavior={Platform.OS === 'ios' ? 'padding' : null}>
          {/* <Loader isLoading={this.state.isLoading}/> */}
          <View style={{flex: 1, backgroundColor: '#fffbe7'}}>
            <CustomHeader />
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'purple',
                padding: 10,
              }}>
              <TouchableOpacity
                style={{flex: 0.1}}
                onPress={() => this.props.navigation.navigate("CouncilMemberAdmin")}>
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
                  {'Add Council Member'}
                </Text>
              </View>
            </View>
            <ScrollView>
              <View style={styles.container}>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Full Name</Text>
                  <TextInput
                    placeholder="Name"
                    style={styles.input}
                    value={this.state.name}
                    onChangeText={e => this.setState({name: e})}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Phone No</Text>
                  <TextInput
                    placeholder="Mobile"
                    style={styles.input}
                    keyboardType="numeric"
                    value={this.state.mobile}
                    onChangeText={e => this.setState({mobile: e})}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Address</Text>
                  <TextInput
                    placeholder="Address"
                    multiline={true}
                    style={[styles.input,{height:100}]}
                    value={this.state.address}
                    onChangeText={e => this.setState({address: e})}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Qualification</Text>
                  <Dropdown
                    placeholderStyle={{color: 'grey', fontSize: 14}}
                    style={styles.dropDownContainer}
                    placeholder="--Select Qualification--"
                    data={this.state.University}
                    labelField="UniversityName"
                    valueField="UniversityName"
                    maxHeight={210}
                    selectedTextStyle={{paddingStart: 5}}
                    value={this.state.university}
                    onChange={item => {
                      console.log('itemmmm', item);
                      this.setState({university: item.label});
                    }}
                  />
                </View>
                
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Designation</Text>
                  <Dropdown
                    placeholderStyle={{color: 'grey', fontSize: 14}}
                    style={styles.dropDownContainer}
                    placeholder="--Select Designation--"
                    data={this.state.District}
                    labelField="DistrictName"
                    valueField="DistrictName"
                    maxHeight={210}
                    selectedTextStyle={{paddingStart: 5}}
                    value={this.state.district}
                    onChange={item => {
                      this.setState({district: item.label});
                    }}
                  />
                </View>
   
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>User Type</Text>
                  <Dropdown
                    placeholderStyle={{color: 'grey', fontSize: 14}}
                    style={styles.dropDownContainer}
                    placeholder="--Select UserType--"
                    data={this.state.District}
                    labelField="DistrictName"
                    valueField="DistrictName"
                    maxHeight={210}
                    selectedTextStyle={{paddingStart: 5}}
                    value={this.state.district}
                    onChange={item => {
                      this.setState({district: item.label});
                    }}
                  />
                </View>
                <View style={styles.inputContainer}>
                <Text style={styles.label}>Valid From</Text>
            <TouchableOpacity style={styles.input}  onPress={()=>this.setState({openV: true})}>
            <Text style={this.state.validdate ? [styles.placeholder,{color:'black'}]:styles.placeholder}>

            {  this.state.validdate == ""
                            ? 'Select Date'
                            : this.state.validdate .toISOString().substr(0, 10)}
                        
              
              </Text>

                <DatePicker
                    modal
                    open={this.state.openV}
                    date={this.state.validdate == "" ? new Date():this.state.validdate }
                    mode="date"
                    onConfirm={selectedDate => {
                      console.log(
                        'Selected Date1111:',
                        moment(selectedDate).format('YYYY-MM-DD'),
                      );
                      this.setState({openV: false, validdate: selectedDate});
                    }}
                    onCancel={() => {
                      this.setState({openV: false});
                    }}
                  />
            </TouchableOpacity>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Valid To</Text>
            <TouchableOpacity style={styles.input}  onPress={()=>this.setState({openU: true})}>
            <Text style={this.state.validupto ? [styles.placeholder,{color:'black'}]:styles.placeholder}>

            {  this.state.validupto == ""
                            ? 'Select Date'
                            : this.state.validupto .toISOString().substr(0, 10)}
                        
              
              </Text>

                <DatePicker
                    modal
                    open={this.state.openU}
                    date={this.state.validupto == "" ? new Date():this.state.validupto }
                    mode="date"
                    onConfirm={selectedDate => {
                      console.log(
                        'Selected Date:',
                        moment(selectedDate).format('YYYY-MM-DD'),
                      );
                      this.setState({openU: false, validupto: selectedDate});
                    }}
                    onCancel={() => {
                      this.setState({openU: false});
                    }}
                  />
            </TouchableOpacity>
            </View>
               
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                  <Text
                    style={{fontSize: 20, fontWeight: '700', color: 'white'}}>
                    {this.props.route.params.edit ? 'Update' : 'Submit'}
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
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
    marginTop: 20,
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
  dropDownContainer: {
    //  backgroundColor:'green',
    borderWidth: 1,
    borderColor: 'skyblue',
    //   padding: Scale(10),
    paddingStart: 10,
    height: 45,
    borderRadius: Scale(5),
    marginVertical: Scale(5),
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
  placeholder: {
    // paddingLeft: 10,
    marginTop: 5,
    color: 'gray',
    // borderWidth: 1,
    // borderRadius: 5,
    // padding: 10,
    // height: 45,

    // marginVertical: 2,
    // borderColor: 'skyblue',
    // Add other placeholder styles as needed
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
