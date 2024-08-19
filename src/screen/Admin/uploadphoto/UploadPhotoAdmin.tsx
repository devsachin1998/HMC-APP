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
import DatePicker from 'react-native-date-picker';
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
import UploadPhotoAdminController, {Props} from './UploadPhotoAdminController';
import {Dropdown} from 'react-native-element-dropdown';
import moment from 'moment';
// import { Button } from "react-native-elements";
// Customizable Area End

export default class UploadPhotoAdmin extends UploadPhotoAdminController {
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
          <View style={{flex: 1, backgroundColor: '#fffbe7'}}>
          <Loader loading={this.state.isLoading}/>

            <CustomHeader />
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'red',
                padding: 10,
              }}>
              <TouchableOpacity
                style={{flex: 0.1}}
                onPress={() => this.props.navigation.navigate("GalleryScreen",{isedit:true})}>
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
                  {'Upload Photo'}
                </Text>
              </View>
            </View>
            <ScrollView>
              <View style={styles.container}>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Title</Text>
                  <TextInput
                    style={styles.input}
                    value={this.state.name}
                    onChangeText={e => this.setState({name: e})}
                  />
                </View>
              
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Date</Text>
                  <TouchableOpacity onPress={()=>this.setState({open:true})}>
                  <View style={styles.input}>

                  <Text>{this.state.date?moment(this.state.date).format("DD/MM/YYYY"):''}</Text>
</View>
                  
                  </TouchableOpacity>

                  <DatePicker
                    modal
                    open={this.state.open}
                    date={new Date()}
                    mode="date"
                    onConfirm={selectedDate => {
                      console.log(
                        'Selected Date:',
                        moment(selectedDate).format('YYYY-MM-DD'),
                      );
                      this.setState({open: false, date: selectedDate});
                    }}
                    onCancel={() => {
                      this.setState({open: false});
                    }}
                  />

                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Image</Text>
                  <TouchableOpacity onPress={()=>this.uploadimage()}>
                        {this.state.imguri ? (
                          <Image
                            source={{uri: this.state.imguri}}
                            style={styles.imgBox}
                          />
                        ) : (
                          <View style={styles.imgBox}>
                            <Icon
                              name="image"
                              size={30}
                              color="grey"
                              style={styles.icon}
                            />
                          </View>
                        )}
                      </TouchableOpacity>
              
                </View>
              
                <TouchableOpacity style={styles.button} onPress={() =>this.props.route.params.edit ?   this.updateimage():this.addimages()}>
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
  imgBox: {
    flex:1,
    width: Scale(180),
    height:Scale(180),
    backgroundColor:'rgba(189,195,199,1)',
    justifyContent:'center',
    alignItems:'center',
    marginTop: Scale(5)
  },
  icon: {
    
    display:'flex'
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
