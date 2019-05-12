import * as React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  // TextInput,
  Button,
  Platform,
  ScrollView,
  SafeAreaView,
  TextInput,
  FlatList,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import RegistrationStep2Controller, {Props} from './RegistrationStep2Controller';
import Scale from '../../globalServices/Scale';
// import { TextInput} from 'react-native-paper';
import RadioGroup from 'react-native-radio-buttons-group';
import DatePicker from 'react-native-date-picker';
// import * as ImagePicker from 'react-native-image-crop-picker';
import * as ImagePicker from 'react-native-image-picker';

import moment from 'moment';

import Icon from 'react-native-vector-icons/Entypo';
import {CustomHeader} from '../../componants/CustomHeader';
import Loader from '../../componants/Loader';
export default class RegistrationStep2 extends RegistrationStep2Controller {
  constructor(props: Props) {
    super(props);
  }

  renderLabel() {
    const {value, isFocus} = this.state;
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: 'blue'}]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  }

  // chooseImg = ()=>{
  //   try {
  //     ImagePicker.launchImageLibrary({
  //       width: 300,
  //       height: 400,
  //       cropping: true
  //     }).then(image => {
  //       console.log(image);
  //       let imgObj: any = {
  //         uri: image.path,
  //         type: image.mime,
  //         name: Platform.OS === 'ios' ? image.filename : "IMG_0002.JPG",
  //         filename: Platform.OS === 'ios' ? image.filename : "IMG_0002.JPG",
  //     }
  //     this.setState({ isImage: imgObj })

  //     });

  //   }catch(e) {
  //     console.log("?????????ee", e)
  //   }
  // }
 
  renderDates= (item:any,index:number)=>{
    const isSelected = this.state.selectedIndex === index; 
    return(
      <TouchableOpacity style={[styles.dateOuter,isSelected&&{backgroundColor:'skyblue'}]} onPress={()=> this.setState({ selectedIndex: index })}>
        <Text style={styles.datee}>{item}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const {
     
    } = this.state;
    // const countryArray = Object.values(country);
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={{flex: 1}}>
          <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            // keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
          >
            <CustomHeader menu={false} />
            <Loader loading={this.state.loader} />
            <ScrollView>
              <View>
                <View
                  style={{
                    backgroundColor: 'orange',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 10,
                  }}>
                  <Image
                    resizeMode={'contain'}
                    style={styles.logoImg}
                    source={require('../../images/logo.png')}
                  />
                  <Text
                    style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
                    REGISTRATION
                  </Text>
                </View>
                <ScrollView contentContainerStyle={{padding: 10, flexGrow: 1}}>
                  <View style={{padding: Scale(10)}}>
                    <Text
                      style={{color: 'black', fontSize: 20, fontWeight: 600}}>
                      Step 2 (Appointment Confirmation)
                    </Text>
                 </View>
                 <Text style={{color: 'black', fontSize: 13, fontWeight: 600,padding: Scale(20)}}>Please select your convenient date to arrance appointment to council office at Ahmedabad.</Text>
                  <View style={{alignItems:'center'}}>
                    <FlatList
                      data={this.state.appointmentData}
                      keyExtractor={(item)=>item.id}
                      renderItem={({item,index})=>this.renderDates(item,index)}
                      numColumns={3}
                    />
                  </View>
                 <View>
                 </View>
                </ScrollView>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    dateOuter: {borderWidth:1,borderColor:'grey',borderRadius:10,padding:10,margin:10,justifyContent:'center',alignItems:'center'},
    datee: {color:"black",fontWeight:600,width:65,paddingHorizontal:10,textAlign:'center'},
    inputContainer1: {
      marginBottom: 5,
      marginTop:5,
    },
    scrollViewContent: {
      flexGrow: 1,
    },
    backgroundContainer: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
    },
    logoContainer: {
      alignSelf: 'center',
      marginTop: Scale(30),
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    logoImg: {
      width: Scale(50),
      height: Scale(50),
      borderRadius: 50,
      marginRight: Scale(10),
    },
    headerText: {
      color: 'white',
      textAlign: 'center',
      fontSize: Scale(14),
      fontWeight: '700',
      marginTop: Scale(10),
    },
    loginText: {
      color: 'white',
      marginTop: Scale(20),
      fontWeight: 'bold',
      fontSize: Scale(20),
    },
    dropDownText: {
      padding: 10,
      borderColor: 'grey',
      borderBottomWidth: 1,
    },
    label: {
      fontSize: 16,
      marginBottom: 10,
    },
    middleContainer: {},
    phoneNumberContainer: {
      flexDirection: 'row',
      marginBottom: Scale(30),
      marginTop: Scale(15),
    },
})