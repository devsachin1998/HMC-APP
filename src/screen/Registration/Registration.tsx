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
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import RegistrationController, {Props} from './RegistrationController';
import Scale from '../../globalServices/Scale';
import { TextInput} from 'react-native-paper';
import RadioGroup from 'react-native-radio-buttons-group';
import DatePicker from 'react-native-date-picker';
// import * as ImagePicker from 'react-native-image-crop-picker';
import * as ImagePicker from 'react-native-image-picker';

import moment from 'moment';

import Icon from 'react-native-vector-icons/Entypo';
import { CustomHeader } from '../../componants/CustomHeader';
export default class Registration extends RegistrationController {
    constructor(props: Props) {
      super(props);
    }

renderLabel() {
    const { value, isFocus } = this.state;
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
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
   chooseImg = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      maxWidth: 600,
      maxHeight: 600,
    };
  
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const selectedFile = response.assets[0];
        this.setState({
          [this.state.currentSelection]: selectedFile
        });
     
      }
    });
  }
render() {
  
    const { value, selectedDate ,date1,open, bloodGroups ,month,year,country,States,District,stateRegNo,
      Qualification,passingMonth,passingYear,InternshipStarting,InternshipTo,colledges,University,Talukas,countryProfessional,TalukasProfessional,DistrictProfessional,StatesProfessional,QualificationState} = this.state;
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
                  <Text style={{color: 'black', fontSize: 20, fontWeight: 600}}>
                    Step 1
                  </Text>

                  <View>
                  <TextInput
                    label="First Name"
                    style={styles.input}
                    value={this.state.firstName}
                    onChangeText={e => this.setState({firstName: e})}
                  />
                  <TextInput
                    label="Middle Name"
                    style={styles.input}
                    value={this.state.middleName}
                    onChangeText={e => this.setState({middleName: e})}
                  />

                  <TextInput
                    label="Last Name"
                    style={styles.input}
                    value={this.state.lastName}
                    onChangeText={e => this.setState({lastName: e})}
                  />

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'flex-start',
                      marginTop: Scale(10),
                    }}>
                    <RadioGroup
                      layout="row"
                      testID="radiobtn"
                      radioButtons={[
                        {
                          id: 'Male',
                          label: 'Male',
                          value: 'Male',
                          color: '#2D368C',
                          borderColor: 'rgba(100, 116, 139, 1)',
                          borderSize: 1,
                          size: Scale(22),
                        },
                        {
                          id: 'Female',
                          label: 'Female',
                          value: 'Female',
                          color: '#2D368C',
                          borderColor: 'rgba(100, 116, 139, 1)',
                          borderSize: 1,
                          size: Scale(22),
                        },
                        {
                          id: 'Other',
                          label: 'Other',
                          value: 'Other',
                          color: '#2D368C',
                          borderColor: 'rgba(100, 116, 139, 1)',
                          borderSize: 1,
                          size: Scale(22),
                        },
                      ]}
                      labelStyle={{
                        fontSize: Scale(13),
                        // fontFamily:‘Satoshi-Regular’,
                        marginLeft: Scale(20),
                      }}
                      onPress={value => this.setState({gender: value})}
                      selectedId={this.state.gender}
                    />
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => this.setState({selectedDate: true})}>
                      <TextInput
                        label="Birth Date"
                        style={styles.input}
                        value={
                          date1.toISOString().substr(0, 10) ==
                          new Date().toISOString().substr(0, 10)
                            ? ''
                            : date1.toISOString().substr(0, 10)
                        }
                        editable={false}
                        onPressIn={() => this.setState({selectedDate: true})}
                      />
                    </TouchableOpacity>
                  </View>

                  <DatePicker
                    modal
                    open={selectedDate}
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

                  <TextInput
                    label="Birth Place"
                    style={styles.input}
                    value={this.state.birthPlace}
                    onChangeText={e => this.setState({birthPlace: e})}
                  />

                  <View>
                    <Dropdown
                      style={styles.dropDownContainer}
                      placeholder="Blood Group"
                      data={bloodGroups}
                      labelField="label"
                      valueField="value"
                      maxHeight={210}
                      value={value}
                      onChange={item => {
                        this.setState({selectedBloodGroup: item.label});
                      }}
                    />
                  </View>
                  </View>
                  
                  <View>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 20,
                      padding:10,
                      backgroundColor:'green',
                      marginTop: Scale(15),
                    }}>
                    Residential
                  </Text>

                  <TextInput
                    label="Address"
                    multiline={true}
                    style={styles.input}
                    value={this.state.address}
                    onChangeText={e => this.setState({address: e})}
                  />

                  <View>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 14,
                        marginTop: Scale(10),
                      }}>
                      Country
                    </Text>
                    <Dropdown
                      style={styles.dropDownContainer}
                      placeholder=" Country"
                      data={country}
                      labelField="CountryName"
                      valueField="CountryName"
                      maxHeight={210}
                      value={this.state.selectedCountry}
                      onChange={item => {
                        this.setState({selectedCountry: item.CountryName},()=>this.StateSelectByCountryID(item.CountryID));
                        
                      }}
                       renderItem={(item)=>{
                          return(
                            <View style={{borderRadius: Scale(5)}}>
                              <Text style={[styles.dropDownText]}>{item.CountryName}</Text>
                            </View>
                          )
                        }}
                    />
                  </View>

                  <View>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 14,
                        marginTop: Scale(10),
                      }}>
                      State
                    </Text>
                    <Dropdown
                      style={styles.dropDownContainer}
                      placeholder=" State"
                      data={States}
                      labelField="StateName"
                      valueField="StateName"
                      maxHeight={210}
                      value={this.state.selectedState}
                      onChange={item => {
                        this.setState({selectedState: item.StateName}
                          ,()=>this.DistrictSelectByStateID(item.StateID));
                      }}
                      renderItem={(item)=>{
                      return(
                            <View style={{borderRadius: Scale(5)}}>
                              <Text style={[styles.dropDownText]}>{item.StateName}</Text>
                            </View>
                          )
                        }}
                    />
                  </View>

                  <View>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 14,
                        marginTop: Scale(10),
                      }}>
                      District
                    </Text>
                    <Dropdown
                      style={styles.dropDownContainer}
                      placeholder=" District"
                      data={District}
                      labelField="DistrictName"
                      valueField="DistrictName"
                      maxHeight={210}
                      value={this.state.selectedDistrict}
                      onChange={item => {
                    
                        this.setState({selectedDistrict: item.DistrictName}
                        ,()=>this.TalukaSelectByDistrictID(item.DistrictID))
                      }}
                      renderItem={(item)=>{
                        return(
                              <View style={{borderRadius: Scale(5)}}>
                                <Text style={[styles.dropDownText]}>{item.DistrictName}</Text>
                              </View>
                            )
                          }}
                    />
                  </View>

                  <View>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 14,
                        marginTop: Scale(10),
                      }}>
                      Taluka
                    </Text>
                    <Dropdown
                      style={styles.dropDownContainer}
                      placeholder=" Taluka"
                      data={Talukas}
                      labelField="TalukaName"
                      valueField="TalukaName"
                      maxHeight={210}
                      value={this.state.selectedTaluka}
                      onChange={item => {
                        this.setState({selectedTaluka: item.TalukaName});
                      }}
                      renderItem={(item)=>{
                        return(
                              <View style={{borderRadius: Scale(5)}}>
                                <Text style={[styles.dropDownText]}>{item.TalukaName}</Text>
                              </View>
                            )
                          }}
                    />
                  </View>

                  <View>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 14,
                        marginTop: Scale(10),
                      }}>
                      City
                    </Text>
                    <Dropdown
                      style={styles.dropDownContainer}
                      placeholder=" City"
                      data={District}
                      labelField="label"
                      valueField="value"
                      maxHeight={210}
                      value={value}
                      onChange={item => {
                        console.log('itemmmm', item);
                        this.setState({selectedDistrict: item.label});
                      }}
                    />
                  </View>

                  <TextInput
                    label="Pin Code"
                    style={styles.input}
                    value={this.state.pinCode}
                    onChangeText={e => this.setState({pinCode: e})}
                  />

                  <TextInput
                    label="Phone"
                    style={styles.input}
                    value={this.state.phoneNumber}
                    onChangeText={e => this.setState({phoneNumber: e})}
                  />
                </View>

                <View>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 20,
                      padding:10,
                      backgroundColor:'green',
                      marginTop: Scale(15),
                    }}>
                    Professional
                  </Text>

                  <TextInput
                    label="Address"
                    style={styles.input}
                    value={this.state.addressProfessional}
                    multiline={true}
                    onChangeText={e => this.setState({addressProfessional: e})}
                  />

                  <View>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 14,
                        marginTop: Scale(10),
                      }}>
                      Country
                    </Text>
                    <Dropdown
                      style={styles.dropDownContainer}
                      placeholder=" Country"
                      data={countryProfessional}
                      labelField="CountryName"
                      valueField="CountryName"
                      maxHeight={210}
                      value={this.state.selectedCountry}
                      onChange={item => {
                        this.setState({selectedCountry: item.CountryName},()=>this.StateSelectByCountryID(item.CountryID));
                        
                      }}
                       renderItem={(item)=>{
                          return(
                            <View style={{borderRadius: Scale(5)}}>
                              <Text style={[styles.dropDownText]}>{item.CountryName}</Text>
                            </View>
                          )
                        }}
                    />
                  </View>

                  <View>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 14,
                        marginTop: Scale(10),
                      }}>
                      State
                    </Text>
                    <Dropdown
                      style={styles.dropDownContainer}
                      placeholder=" State"
                      data={StatesProfessional}
                      labelField="StateName"
                      valueField="StateName"
                      maxHeight={210}
                      value={this.state.selectedState}
                      onChange={item => {
                        this.setState({selectedState: item.StateName}
                          ,()=>this.DistrictSelectByStateID(item.StateID));
                      }}
                      renderItem={(item)=>{
                      return(
                            <View style={{borderRadius: Scale(5)}}>
                              <Text style={[styles.dropDownText]}>{item.StateName}</Text>
                            </View>
                          )
                        }}
                    />
                  </View>

                  <View>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 14,
                        marginTop: Scale(10),
                      }}>
                      District
                    </Text>
                    <Dropdown
                      style={styles.dropDownContainer}
                      placeholder=" District"
                      data={DistrictProfessional}
                      labelField="DistrictName"
                      valueField="DistrictName"
                      maxHeight={210}
                      value={this.state.selectedDistrict}
                      onChange={item => {
                    
                        this.setState({selectedDistrict: item.DistrictName}
                        ,()=>this.TalukaSelectByDistrictID(item.DistrictID))
                      }}
                      renderItem={(item)=>{
                        return(
                              <View style={{borderRadius: Scale(5)}}>
                                <Text style={[styles.dropDownText]}>{item.DistrictName}</Text>
                              </View>
                            )
                          }}
                    />
                  </View>

                  <View>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 14,
                        marginTop: Scale(10),
                      }}>
                      Taluka
                    </Text>
                    <Dropdown
                      style={styles.dropDownContainer}
                      placeholder=" Taluka"
                      data={TalukasProfessional}
                      labelField="TalukaName"
                      valueField="TalukaName"
                      maxHeight={210}
                      value={this.state.selectedTaluka}
                      onChange={item => {
                        this.setState({selectedTaluka: item.TalukaName});
                      }}
                      renderItem={(item)=>{
                        return(
                              <View style={{borderRadius: Scale(5)}}>
                                <Text style={[styles.dropDownText]}>{item.TalukaName}</Text>
                              </View>
                            )
                          }}
                    />
                  </View>

                  <View>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 14,
                        marginTop: Scale(10),
                      }}>
                      City
                    </Text>
                    <Dropdown
                      style={styles.dropDownContainer}
                      placeholder=" City"
                      data={District}
                      labelField="label"
                      valueField="value"
                      maxHeight={210}
                      value={this.state.selectedDistrict}
                      onChange={item => {
                        console.log('itemmmm', item);
                        this.setState({selectedDistrict: item.label});
                      }}
                    />
                  </View>

                  <TextInput
                    placeholder="Pin Code"
                    style={styles.input}
                    value={this.state.pinCodeProfessional}
                    onChangeText={e => this.setState({pinCodeProfessional: e})}
                  />

                  <TextInput
                    placeholder="Phone"
                    style={styles.input}
                    value={this.state.phoneNumberProfessional}
                    onChangeText={e => this.setState({phoneNumberProfessional: e})}
                  />

                  <TextInput
                    placeholder="Mobile"
                    style={styles.input}
                    value={this.state.mobileNo}
                    onChangeText={e => this.setState({mobileNo: e})}
                  />

                  <TextInput
                    placeholder="Aadhar Card"
                    style={styles.input}
                    value={this.state.aadharNo}
                    onChangeText={e => this.setState({aadharNo: e})}
                  />
                  <TextInput
                    placeholder="Email"
                    style={styles.input}
                    value={this.state.email}
                    onChangeText={e => this.setState({email: e})}
                  />

                  <TextInput
                    placeholder="Other State RegNo"
                    style={styles.input}
                    value={this.state.stateRegNo}
                    onChangeText={e => this.setState({stateRegNo: e})}
                  />

                  <Text
                    style={{
                      color: 'black',
                      fontSize: 16,
                      fontWeight:'600',
                      marginTop: Scale(10),
                    }}>
                    Qualification of Examination Passed *
                  </Text>

                  <View>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 14,
                        marginTop: Scale(10),
                      }}>
                      Select Qualification
                    </Text>
                    <Dropdown
                      style={styles.dropDownContainer}
                      placeholder=" Select Qualification "
                      data={Qualification}
                      labelField="QualificationName"
                      valueField="QualificationName"
                      maxHeight={210}
                      value={this.state.selectedQualification}
                      onChange={item => {
                        console.log('itemmmm', item);
                        this.setState({selectedQualification: item.QualificationName});
                      }}
                      renderItem={(item)=>{
                        return(
                          <View style={{borderRadius: Scale(5)}}>
                            <Text style={[styles.dropDownText]}> {item.QualificationName}</Text>
                          </View>
                        )
                      }}
                    />
                  </View>

                  <View>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 14,
                        marginTop: Scale(10),
                      }}>
                      Select Qualification State
                    </Text>
                    <Dropdown
                      style={styles.dropDownContainer}
                      placeholder=" Select Qualification State"
                      data={QualificationState}
                      labelField="StateName"
                      valueField="StateName"
                      maxHeight={210}
                      value={this.state.selectedState}
                      onChange={item => {
                        console.log('itemmmm', item);
                        this.setState({selectedState: item.StateName});
                      }}
                      renderItem={(item)=>{
                        return(
                          <View style={{borderRadius: Scale(5)}}>
                            <Text style={[styles.dropDownText]}> {item.StateName}</Text>
                          </View>
                        )
                      }}
                    />
                  </View>

                  <Text style={{color: 'black', fontSize: 16, fontWeight:'600',}}>
                    Date on which the qualification was obtained *
                  </Text>

                  <View>
                    <TouchableOpacity
                      onPress={() => this.setState({passingMonth: true})}>
                      <TextInput
                        label="Pass Out Month"
                        style={styles.input}
                        value={
                          moment(month).format('YYYY-MM-DD') ===
                          moment(new Date()).format('YYYY-MM-DD')
                            ? ''
                            : moment(month).format('MMMM')
                        }
                        editable={false}
                        onPressIn={() => this.setState({passingMonth: true})}
                      />
                    </TouchableOpacity>
                  </View>

                  <DatePicker
                    modal
                    open={passingMonth}
                    date={month}
                    mode="date"
                    onConfirm={selectedMonth => {
                      console.log(
                        'Pass Out Month',
                        moment(selectedMonth).format('YYYY-MM-DD'),
                      );
                      this.setState({passingMonth: false, month: selectedMonth});
                    }}
                    onCancel={() => {
                      this.setState({passingMonth: false});
                    }}
                  />

                  <View>
                    <TouchableOpacity
                      onPress={() => this.setState({passingYear: true})}>
                      <TextInput
                        label="Pass Out Year"
                        style={styles.input}
                        value={
                          moment(year).format('YYYY-MM-DD') ===
                          moment(new Date()).format('YYYY-MM-DD')
                            ? ''
                            : moment(year).format('YYYY')
                        }
                        editable={false}
                        onPressIn={() => this.setState({passingYear: true})}
                      />
                    </TouchableOpacity>
                  </View>

                  <DatePicker
                    modal
                    open={passingYear}
                    date={year}
                    mode="date"
                    onConfirm={selectedMonth => {
                      console.log(
                        'Pass Out Year',
                        moment(selectedMonth).format('YYYY-MM-DD'),
                      );
                      this.setState({passingYear: false, year: selectedMonth});
                    }}
                    onCancel={() => {
                      this.setState({passingYear: false});
                    }}
                  />

                  <Text style={{color: 'black', fontSize: 16, fontWeight:'600',}}>
                    Institution from which appeared for the Examination and
                    number at the Examination (College Name) *
                  </Text>

                  <Dropdown
                    style={styles.dropDownContainer}
                    placeholder="College Name"
                    data={colledges}
                    value={this.state.selectedCollege}
                    labelField="CollegeName"
                    valueField="CollegeName"
                    maxHeight={210}
                    onChange={item => {
                      // console.log('selectedCollege colleges', item);
                      this.setState({selectedCollege: item.CollegeName});
                    }}
                     renderItem={(item)=>{
                        return(
                          <View style={{borderRadius: Scale(5)}}>
                            <Text style={[styles.dropDownText]}> {item.CollegeName}</Text>
                          </View>
                        )
                      }}
                  

                  />

                  <Text style={{color: 'black', fontSize: 16}}>
                    Name of Council / Board / University *
                  </Text>

                  <Dropdown
                    style={styles.dropDownContainer}
                    placeholder="University"
                    data={University}
                    labelField="UniversityName"
                    valueField="UniversityName"
                    maxHeight={210}
                    value={this.state.selectedUniversity}

                    onChange={item => {
                      this.setState({selectedUniversity: item.UniversityName});
                    }}
                     renderItem={(item)=>{
                        return(
                          <View style={{borderRadius: Scale(5)}}>
                            <Text style={[styles.dropDownText]}> {item.UniversityName}</Text>
                          </View>
                        )
                      }}
                  />

                  <View>
                    <TouchableOpacity
                      onPress={() => this.setState({InternshipStarting: true})}>
                      <TextInput
                        label="Internship Period From *"
                        style={styles.input}
                        value={
                          date1.toISOString().substr(0, 10) ==
                          new Date().toISOString().substr(0, 10)
                            ? ''
                            : date1.toISOString().substr(0, 10)
                        }
                        editable={false}
                        onPressIn={() => this.setState({InternshipStarting: true})}
                      />
                    </TouchableOpacity>
                  </View>

                  <DatePicker
                    modal
                    open={InternshipStarting}
                    date={date1}
                    mode="date"
                    onConfirm={selectedDate => {
                      console.log(
                        'Selected Date:',
                        moment(selectedDate).format('YYYY-MM-DD'),
                      );
                      this.setState({InternshipStarting: false, date1: selectedDate});
                    }}
                    onCancel={() => {
                      this.setState({InternshipStarting: false});
                    }}
                  />

                  <View>
                    <TouchableOpacity
                      onPress={() => this.setState({InternshipTo: true})}>
                      <TextInput
                        label="Internship Period To"
                        style={styles.input}
                        value={
                          date1.toISOString().substr(0, 10) ==
                          new Date().toISOString().substr(0, 10)
                            ? ''
                            : date1.toISOString().substr(0, 10)
                        }
                        editable={false}
                        onPressIn={() => this.setState({InternshipTo: true})}
                      />
                    </TouchableOpacity>
                  </View>

                  <DatePicker
                    modal
                    open={InternshipTo}
                    date={date1}
                    mode="date"
                    onConfirm={selectedDate => {
                      console.log(
                        'Selected Date:',
                        moment(selectedDate).format('YYYY-MM-DD'),
                      );
                      this.setState({InternshipTo: false, date1: selectedDate});
                    }}
                    onCancel={() => {
                      this.setState({InternshipTo: false});
                    }}
                  />

                  <View>
                    <TouchableOpacity
                      onPress={() => this.setState({open: true})}>
                      <TextInput
                        label="Repeated Internship From"
                        style={styles.input}
                        value={
                          date1.toISOString().substr(0, 10) ==
                          new Date().toISOString().substr(0, 10)
                            ? ''
                            : date1.toISOString().substr(0, 10)
                        }
                        editable={false}
                        onPressIn={() => this.setState({open: true})}
                      />
                    </TouchableOpacity>
                  </View>

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
                  <View>
                    <TouchableOpacity
                      onPress={() => this.setState({open: true})}>
                      <TextInput
                        label="Repeated Internship To"
                        style={styles.input}
                        value={
                          date1.toISOString().substr(0, 10) ==
                          new Date().toISOString().substr(0, 10)
                            ? ''
                            : date1.toISOString().substr(0, 10)
                        }
                        editable={false}
                        onPressIn={() => this.setState({open: true})}
                      />
                    </TouchableOpacity>
                  </View>

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
                  <View>
                    <Text style={{color:'red'}}>Note: Upload ".JPG" or ".PDF" or ".ZIP" file format, if there is more then one documents please create a PDF or ZIP file, Maximum file size must be 1MB for each document

નોંધ : માત્ર ".JPG" અથવા ".PDF" અથવા ".ZIP" ફાઈલ અપલોડ કરવી, જો તમારી પાસે કોઇપણ ડોક્યુમેન્ટ (માર્કશીટ) એક કરતા વધારે ફાઇલ હોય તો તેની "PDF" અથવા "ZIP" ફાઈલ બનાવીને અપલોડ કરવી
    કોઈપણ ફાઈલની સાઈઝ 1MB થી વધારે ના હોવી જોઈએ.</Text>
                  </View>

                  <View>
                    <View style={styles.photoContainer}>
                      <Text style={styles.imgTitle}>Photo Image *</Text>
                      <View>
                        {this.state.isImage ? (
                          <Image
                            source={{uri: this.state.isImage.uri}}
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
                      </View>
                     
                    </View>
                    <Text style={{color:'red'}}>Maximum Width and Height : 400px by 400px ફોટાની મહત્તમ પહોળાઈ 400px અને લંબાઈ 400px જ હોવી જોઈએ </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: Scale(5),
                        justifyContent: 'space-evenly',
                      }}>
                      <TouchableOpacity
                        style={styles.chooseBtn}
                        onPress={() => {
                          this.setState({ currentSelection: 'isImage'},()=> this.chooseImg())
                         }}>
                        <Text>CHOOSE FILE</Text>
                      </TouchableOpacity>
                      <Text style={{margin: Scale(10, 10, 0, 0), flex: 1}}>
                        No File Choosen
                      </Text>
                    </View>
                   
                  </View>

                  <View>
                    <View style={styles.photoContainer}>
                      <Text style={styles.imgTitle}>Sign Image *</Text>
                      <View>
                        {this.state.signImg ? (
                          <Image
                            source={{uri: this.state.signImg.uri}}
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
                      </View>
                    </View>
                    <Text style={{color:'red'}}>Sign, Maximum Width and Height : 300px by 150px શહીની ઈમેજની મહત્તમ પહોળાઈ 300px અને લંબાઈ 150px જ હોવી જોઈએ</Text> 
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: Scale(5),
                        justifyContent: 'space-evenly',
                      }}>
                      <TouchableOpacity
                        style={styles.chooseBtn}
                        onPress={() => {
                          this.setState({ currentSelection: 'signImg'},()=> this.chooseImg())
                         }}>
                        <Text>CHOOSE FILE</Text>
                      </TouchableOpacity>
                      <Text style={{margin: Scale(10, 10, 0, 0), flex: 1}}>
                        No File Choosen
                      </Text>
                    </View>
                  </View>

                  <View>
                    <View style={styles.photoContainer}>
                      <Text style={styles.imgTitle}>LC Image *</Text>
                      <View>
                        {this.state.LCimg ? (
                          <Image
                            source={{uri: this.state.LCimg.uri}}
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
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: Scale(5),
                        justifyContent: 'space-evenly',
                      }}>
                      <TouchableOpacity
                        style={styles.chooseBtn}
                        onPress={() => {
                          this.setState({ currentSelection: 'LCimg'},()=> this.chooseImg())
                         }}>
                        <Text>CHOOSE FILE</Text>
                      </TouchableOpacity>
                      <Text style={{margin: Scale(10, 10, 0, 0), flex: 1}}>
                        No File Choosen
                      </Text>
                    </View>
                  </View>

                  <View>
                    <View style={styles.photoContainer}>
                      <Text style={styles.imgTitle}>FY Marksheet *</Text>
                      <View>
                        {this.state.FYMarksheet ? (
                          <Image
                            source={{uri: this.state.FYMarksheet.uri}}
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
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: Scale(5),
                        justifyContent: 'space-evenly',
                      }}>
                      <TouchableOpacity
                        style={styles.chooseBtn}
                        onPress={() => {
                          this.setState({ currentSelection: 'FYMarksheet'},()=> this.chooseImg())
                         }}>
                        <Text>CHOOSE FILE</Text>
                      </TouchableOpacity>
                      <Text style={{margin: Scale(10, 10, 0, 0), flex: 1}}>
                        No File Choosen
                      </Text>
                    </View>
                  </View>

                  <View>
                    <View style={styles.photoContainer}>
                      <Text style={styles.imgTitle}>SY Marksheet *</Text>
                      <View>
                        {this.state.SYMarksheet ? (
                          <Image
                            source={{uri: this.state.SYMarksheet.uri}}
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
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: Scale(5),
                        justifyContent: 'space-evenly',
                      }}>
                      <TouchableOpacity
                        style={styles.chooseBtn}
                        onPress={() => {
                          this.setState({ currentSelection: 'SYMarksheet'},()=> this.chooseImg())
                         }}>
                        <Text>CHOOSE FILE</Text>
                      </TouchableOpacity>
                      <Text style={{margin: Scale(10, 10, 0, 0), flex: 1}}>
                        No File Choosen
                      </Text>
                    </View>
                  </View>   

                   <View>
                    <View style={styles.photoContainer}>
                      <Text style={styles.imgTitle}>TY Marksheet *</Text>
                      <View>
                        {this.state.TYMarksheet ? (
                          <Image
                            source={{uri: this.state.TYMarksheet.uri}}
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
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: Scale(5),
                        justifyContent: 'space-evenly',
                      }}>
                      <TouchableOpacity
                        style={styles.chooseBtn}
                        onPress={() => {
                          this.setState({ currentSelection: 'TYMarksheet'},()=> this.chooseImg())
                         }}>
                        <Text>CHOOSE FILE</Text>
                      </TouchableOpacity>
                      <Text style={{margin: Scale(10, 10, 0, 0), flex: 1}}>
                        No File Choosen
                      </Text>
                    </View>
                  </View> 

                   <View>
                    <View style={styles.photoContainer}>
                      <Text style={styles.imgTitle}>Final Year Marksheet *</Text>
                      <View>
                        {this.state.FinalYearMarksheet ? (
                          <Image
                            source={{uri: this.state.FinalYearMarksheet.uri}}
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
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: Scale(5),
                        justifyContent: 'space-evenly',
                      }}>
                      <TouchableOpacity
                        style={styles.chooseBtn}
                        onPress={() => {
                          this.setState({ currentSelection: 'FinalYearMarksheet'},()=> this.chooseImg())
                         }}>
                        <Text>CHOOSE FILE</Text>
                      </TouchableOpacity>
                      <Text style={{margin: Scale(10, 10, 0, 0), flex: 1}}>
                        No File Choosen
                      </Text>
                    </View>
                  </View>         

                   <View>
                    <View style={styles.photoContainer}>
                      <Text style={styles.imgTitle}>Internship Provisional Certificate *</Text>
                      <View>
                        {this.state.InternShipCerty ? (
                          <Image
                            source={{uri: this.state.InternShipCerty.uri}}
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
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: Scale(5),
                        justifyContent: 'space-evenly',
                      }}>
                      <TouchableOpacity
                        style={styles.chooseBtn}
                        onPress={() => {
                          this.setState({ currentSelection: 'InternShipCerty'},()=> this.chooseImg())
                         }}>
                        <Text>CHOOSE FILE</Text>
                      </TouchableOpacity>
                      <Text style={{margin: Scale(10, 10, 0, 0), flex: 1}}>
                        No File Choosen
                      </Text>
                    </View>
                  </View>     

                  <View>
                    <View style={styles.photoContainer}>
                      <Text style={styles.imgTitle}>Internship Completion Certificate *</Text>
                      <View>
                        {this.state.InternCompletion ? (
                          <Image
                            source={{uri: this.state.InternCompletion.uri}}
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
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: Scale(5),
                        justifyContent: 'space-evenly',
                      }}>
                      <TouchableOpacity
                        style={styles.chooseBtn}
                        onPress={() => {
                          this.setState({ currentSelection: 'InternCompletion'},()=> this.chooseImg())
                         }}>
                        <Text>CHOOSE FILE</Text>
                      </TouchableOpacity>
                      <Text style={{margin: Scale(10, 10, 0, 0), flex: 1}}>
                        No File Choosen
                      </Text>
                    </View>
                  </View>    

                  <View>
                    <View style={styles.photoContainer}>
                      <Text style={styles.imgTitle}>Provisional Completion Certificate *</Text>
                      <View>
                        {this.state.ProvisionalCerty ? (
                          <Image
                            source={{uri: this.state.ProvisionalCerty.uri}}
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
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: Scale(5),
                        justifyContent: 'space-evenly',
                      }}>
                      <TouchableOpacity
                        style={styles.chooseBtn}
                        onPress={() => {
                          this.setState({ currentSelection: 'ProvisionalCerty'},()=> this.chooseImg())
                         }}>
                        <Text>CHOOSE FILE</Text>
                      </TouchableOpacity>
                      <Text style={{margin: Scale(10, 10, 0, 0), flex: 1}}>
                        No File Choosen
                      </Text>
                    </View>
                  </View>    

                  <View>
                    <View style={styles.photoContainer}>
                      <Text style={styles.imgTitle}>Degree Certificate *</Text>
                      <View>
                        {this.state.DegreeCerty ? (
                          <Image
                            source={{uri: this.state.DegreeCerty.uri}}
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
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: Scale(5),
                        justifyContent: 'space-evenly',
                      }}>
                      <TouchableOpacity
                        style={styles.chooseBtn}
                        onPress={() => {
                          this.setState({ currentSelection: 'DegreeCerty'},()=> this.chooseImg())
                         }}>
                        <Text>CHOOSE FILE</Text>
                      </TouchableOpacity>
                      <Text style={{margin: Scale(10, 10, 0, 0), flex: 1}}>
                        No File Choosen
                      </Text>
                    </View>
                  </View>  

                  <TextInput
                    label="Other Image Desc"
                    style={styles.input}
                    value={this.state.ImgDesc}
                    onChangeText={e => this.setState({ImgDesc: e})}
                  />

                  <TextInput
                    label="Place"
                    style={styles.input}
                    value={this.state.place}
                    onChangeText={e => this.setState({place: e})}
                  />

                <TextInput
                    label="Any Remark"
                    style={styles.input}
                    value={this.state.remark}
                    onChangeText={e => this.setState({remark: e})}
                  />
                </View>
                  <TouchableOpacity style={styles.RegisterBtn}>
                    <Text style={styles.registerText}>REGISTER</Text>
                  </TouchableOpacity>
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
      marginRight: Scale(10)
    },
    headerText: {
      color: 'white',
      textAlign: 'center',
      fontSize: Scale(14),
      fontWeight:'700',
      marginTop: Scale(10)
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
      borderBottomWidth: 1
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
      },
    middleContainer: {

    },
    phoneNumberContainer: {
      flexDirection: 'row',
      marginBottom: Scale(30),
      marginTop: Scale(15),
    },
    flagContainer: {
      // ...GlobalStyle.txteditable,
      flex: 0.5,
    },
    flagText: {
      color: 'white',
      fontSize: Scale(16),
      paddingStart: Scale(10),
    },
    textInputContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
      backgroundColor:'white',
      borderRadius: Scale(10)
    },
    icon: {
    
     display:'flex'
    },
    input: {
      marginTop: Scale(10),
      fontSize: 16,
      borderColor:'skyblue',
      borderWidth:1,
      borderRadius:Scale(10),
      backgroundColor:'none'
    },
    inputContainer: {
      // ...GlobalStyle.txteditable,
      flex: 1.5,
      marginStart: Scale(15),
    },
    dropDownContainer: {
      //  backgroundColor:'green',
        borderWidth: 1,
        borderColor: 'grey',
        padding: Scale(10),
        borderRadius: Scale(5),
        marginVertical: Scale(10)
      },
      photoContainer: {
        justifyContent:'space-between',
        flexDirection:'row',
        height: Scale(100),
        paddingHorizontal:Scale(10)
      },
      imgBox: {
        flex:1,
        width: Scale(150),
        height:Scale(100),
        backgroundColor:'rgba(189,195,199,1)',
        justifyContent:'center',
        alignItems:'center',
        marginTop: Scale(5)
      },
      chooseBtn: {
        flex:1,
        paddingHorizontal:Scale(20),
        paddingVertical:Scale(10),
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(189,195,199,1)'
      },
      imgTitle:{
        marginTop: Scale(15),
        fontWeight:"600",
        flex:1
      },
      RegisterBtn: {
        marginTop: Scale(20),
        paddingHorizontal: Scale(20),
        paddingVertical:Scale(10),
        backgroundColor: '#3F3F3F',
        justifyContent:'center',
        alignItems:'center'

      },
      registerText: {
        color:'white',
        fontWeight:'bold',
        fontSize:Scale(20)
      }
  });