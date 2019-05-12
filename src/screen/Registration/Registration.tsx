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
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import RegistrationController, {Props} from './RegistrationController';
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
import ImageCompressor from 'react-native-image-compressor';
export default class Registration extends RegistrationController {
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
  chooseImg = () => {
    const options = {
      mediaType: 'photo',
      quality: 0.3,
      includeBase64: true,
      format: 'jpeg' 
    };

    ImagePicker.launchImageLibrary(options, async response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log('ImagePicker Error: ', response);

        const selectedFile = response.assets[0];
      const fileSizeInMB = selectedFile.fileSize / (1024 * 1024);  // Convert bytes to MB
      const imageWidth = selectedFile.width;   // Get image width
      const imageHeight = selectedFile.height; // Get image height
      // Check if file size exceeds 1MB

      if (fileSizeInMB > 1) {
        alert('Please select an image smaller than 1MB');
        console.log('File size exceeds 1MB');
        return;
      }
      if(this.state.currentSelection == 'signImg')
        {
        if (imageWidth > 300 || imageHeight > 150) {
          //alert(imageWidth+"dsad"+imageHeight);

          alert('Please select an image with dimensions not greater than 300px x 150px',imageWidth+"ds"+imageHeight );
          console.log('Image dimensions exceed 300 x 150');
          return;
        }
      }
      if(this.state.currentSelection == 'isimage')
      {
      if (imageWidth > 400 || imageHeight > 400) {
        alert('Please select an image with dimensions not greater than 400px x 400px');
        console.log('Image dimensions exceed 400 x 400');
        return;
      }
    }
    console.log("fdsds111",selectedFile)

    this.setState({
      [this.state.currentSelection]: selectedFile,
    });
    try {
      const compressedImage = await ImageCompressor.compress(selectedFile.uri, {
        compressionMethod: 'auto',
        maxWidth: this.state.currentSelection === 'signImg' ? 300 : 400,
        maxHeight: this.state.currentSelection === 'signImg' ? 150 : 400,
        quality: 0.7, // Adjust quality as needed
        format: 'jpeg' 
      });
      
      console.log("fdsds",compressedImage)
      // this.setState({
      //   [this.state.currentSelection]: compressedImage,
      // });
    } catch (error) {
      console.log('Compression error: ', error);
    }
  
       
      }
    });
  };
  render() {
    const {
      value,
      selectedDate,
      date1,
      open,
      bloodGroups,
      month,
      year,
      country,
      States,
      District,
      stateRegNo,
      Qualification,
      passingMonth,
      passingYear,
      InternshipStarting,
      InternshipTo,
      colledges,
      University,
      Talukas,
      countryProfessional,
      TalukasProfessional,
      DistrictProfessional,
      StatesProfessional,
      QualificationState,
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
                      Step 1
                    </Text>

                    <View>
                      <View style={styles.inputContainer1}>
                        <Text style={styles.label}>
                          First Name <Text style={{color: 'red'}}>*</Text>
                        </Text>
                        <TextInput
                          placeholder="Name"
                          style={styles.input1}
                          value={this.state.firstName}
                          onChangeText={e => this.setState({firstName: e})}
                        />
                      </View>
                      <View style={styles.inputContainer1}>
                        <Text style={styles.label}>
                          Middle Name <Text style={{color: 'red'}}>*</Text>
                        </Text>
                        <TextInput
                          placeholder="Middle Name"
                          style={styles.input1}
                          value={this.state.middleName}
                          onChangeText={e => this.setState({middleName: e})}
                        />
                      </View>
                      <View style={styles.inputContainer1}>
                        <Text style={styles.label}>
                          Last Name <Text style={{color: 'red'}}>*</Text>
                        </Text>
                        <TextInput
                          placeholder="Last Name"
                          style={styles.input1}
                          value={this.state.lastName}
                          onChangeText={e => this.setState({lastName: e})}
                        />
                      </View>

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

                      <View style={styles.inputContainer1}>
                        <Text style={styles.label}>Birth Date</Text>
                        <TouchableOpacity
                          onPress={() => this.setState({selectedDate: true})}>
                          <View style={styles.input1}>
                            <Text>
                              {this.state.date1
                                ? this.state.date1
                                : ''}
                            </Text>
                          </View>
                          <DatePicker
                            modal
                            open={selectedDate}
                            date={new Date()}
                            mode="date"
                            onConfirm={selectedDate1 => {
                              console.log(
                                'Selected Date:',
                                moment(selectedDate1).format('DD/MM/YYYY'),
                              );
                              this.setState({
                                selectedDate: false,
                                date1: moment(selectedDate1).format('DD/MM/YYYY'),
                              });
                            }}
                            onCancel={() => {
                              this.setState({selectedDate: false});
                            }}
                          />
                        </TouchableOpacity>
                      </View>
                      <View style={styles.inputContainer1}>
                        <Text style={styles.label}>Birth Place</Text>
                        <TextInput
                          placeholder="Birth Place"
                          style={styles.input1}
                          value={this.state.birthPlace}
                          onChangeText={e => this.setState({birthPlace: e})}
                        />
                      </View>
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
                            this.setState({selectedBloodGroup: item.label,BloodGroupID:item.value});
                          }}
                        />
                      </View>
                      <View>
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 20,
                            padding: 10,
                            backgroundColor: 'green',
                            marginTop: Scale(15),
                            marginBottom: Scale(10),
                          }}>
                          Residential
                        </Text>
                        <View style={styles.inputContainer1}>
                          <Text style={styles.label}>
                            Address <Text style={{color: 'red'}}>*</Text>
                          </Text>
                          <TextInput
                            placeholder="Address"
                            style={styles.input1}
                            value={this.state.address}
                            onChangeText={e => this.setState({address: e})}
                          />
                        </View>
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
                              this.setState(
                                {selectedCountry: item.CountryName,CountryID:item.CountryID},
                                () =>
                                  this.StateSelectByCountryID(item.CountryID),
                              );
                            }}
                            renderItem={item => {
                              return (
                                <View style={{borderRadius: Scale(5)}}>
                                  <Text style={[styles.dropDownText]}>
                                    {item.CountryName}
                                  </Text>
                                </View>
                              );
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
                              this.setState(
                                {selectedState: item.StateName,StateID:item.StateID},
                                () =>
                                  this.DistrictSelectByStateID(item.StateID),
                              );
                            }}
                            renderItem={item => {
                              return (
                                <View style={{borderRadius: Scale(5)}}>
                                  <Text style={[styles.dropDownText]}>
                                    {item.StateName}
                                  </Text>
                                </View>
                              );
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
                              this.setState(
                                {selectedDistrict: item.DistrictName,DistrictID:item.DistrictID},
                                () =>
                                  this.TalukaSelectByDistrictID(
                                    item.DistrictID,
                                  ),
                              );
                            }}
                            renderItem={item => {
                              return (
                                <View style={{borderRadius: Scale(5)}}>
                                  <Text style={[styles.dropDownText]}>
                                    {item.DistrictName}
                                  </Text>
                                </View>
                              );
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
                              this.setState({selectedTaluka: item.TalukaName,TalukaID:item.TalukaID});
                            }}
                            renderItem={item => {
                              return (
                                <View style={{borderRadius: Scale(5)}}>
                                  <Text style={[styles.dropDownText]}>
                                    {item.TalukaName}
                                  </Text>
                                </View>
                              );
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
                        <View style={styles.inputContainer1}>
                          <Text style={styles.label}>Pin Code</Text>
                          <TextInput
                            placeholder="Pin Code"
                            style={styles.input1}
                            inputMode="numeric"
                            value={this.state.pinCode}
                            onChangeText={e => this.setState({pinCode: e})}
                          />
                        </View>
                        <View style={styles.inputContainer1}>
                          <Text style={styles.label}>Phone</Text>
                          <TextInput
                            placeholder="Phone"
                            style={styles.input1}
                            inputMode="numeric"
                            value={this.state.phoneNumber}
                            onChangeText={e => this.setState({phoneNumber: e})}
                          />
                        </View>
                      </View>
                    </View>

                    <View>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 20,
                          padding: 10,
                          backgroundColor: 'green',
                          marginTop: Scale(15),
                        }}>
                        Professional
                      </Text>
                      <View style={styles.inputContainer1}>
                        <Text style={styles.label}>Address</Text>
                        <TextInput
                          placeholder="Address"
                          style={styles.input1}
                          value={this.state.addressProfessional}
                          onChangeText={e =>
                            this.setState({addressProfessional: e})
                          }
                        />
                      </View>

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
                          value={this.state.selectedCountryP}
                          onChange={item => {
                            this.setState(
                              {selectedCountryP: item.CountryName,PCountryID:item.CountryID},
                              () => this.StateSelectByCountryID(item.CountryID),
                            );
                          }}
                          renderItem={item => {
                            return (
                              <View style={{borderRadius: Scale(5)}}>
                                <Text style={[styles.dropDownText]}>
                                  {item.CountryName}
                                </Text>
                              </View>
                            );
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
                          value={this.state.selectedStateP}
                          onChange={item => {
                            this.setState({selectedStateP: item.StateName,PStateID:item.StateID}, () =>
                              this.DistrictSelectByStateID(item.StateID),
                            );
                          }}
                          renderItem={item => {
                            return (
                              <View style={{borderRadius: Scale(5)}}>
                                <Text style={[styles.dropDownText]}>
                                  {item.StateName}
                                </Text>
                              </View>
                            );
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
                            this.setState(
                              {selectedDistrictP: item.DistrictName,PDistrictID:item.DistrictID},
                              () =>
                                this.TalukaSelectByDistrictID(item.DistrictID),
                            );
                          }}
                          renderItem={item => {
                            return (
                              <View style={{borderRadius: Scale(5)}}>
                                <Text style={[styles.dropDownText]}>
                                  {item.DistrictName}
                                </Text>
                              </View>
                            );
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
                            this.setState({selectedTalukaP: item.TalukaName,PTalukaID:item.TalukaID});
                          }}
                          renderItem={item => {
                            return (
                              <View style={{borderRadius: Scale(5)}}>
                                <Text style={[styles.dropDownText]}>
                                  {item.TalukaName}
                                </Text>
                              </View>
                            );
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
                            this.setState({selectedDistrictP: item.label});
                          }}
                        />
                      </View>

                      <View style={styles.inputContainer1}>
                        <Text style={styles.label}>Pin Code</Text>
                        <TextInput
                          placeholder="Pin Code"
                          style={styles.input1}
                          inputMode="numeric"
                          value={this.state.pinCodeProfessional}
                          onChangeText={e =>
                            this.setState({pinCodeProfessional: e})
                          }
                        />
                      </View>
                      <View style={styles.inputContainer1}>
                        <Text style={styles.label}>Phone</Text>
                        <TextInput
                          placeholder="Phone"
                          style={styles.input1}
                          inputMode="numeric"
                          value={this.state.phoneNumberProfessional}
                          onChangeText={e =>
                            this.setState({phoneNumberProfessional: e})
                          }
                        />
                      </View>
                      <View style={styles.inputContainer1}>
                        <Text style={styles.label}>
                          Mobile <Text style={{color: 'red'}}>*</Text>
                        </Text>
                        <TextInput
                          placeholder="Mobile"
                          style={styles.input1}
                          inputMode="numeric"
                          value={this.state.mobileNo}
                          onChangeText={e => this.setState({mobileNo: e})}
                        />
                      </View>
                      <View style={styles.inputContainer1}>
                        <Text style={styles.label}>
                          Aadhar Card <Text style={{color: 'red'}}>*</Text>
                        </Text>
                        <TextInput
                          placeholder="Aadhar Card"
                          style={styles.input1}
                          inputMode="numeric"
                          value={this.state.aadharNo}
                          onChangeText={e => this.setState({aadharNo: e})}
                        />
                      </View>
                      <View style={styles.inputContainer1}>
                        <Text style={styles.label}>
                          Email <Text style={{color: 'red'}}>*</Text>
                        </Text>
                        <TextInput
                          placeholder="Email"
                          style={styles.input1}
                          value={this.state.email}
                          onChangeText={e => this.setState({email: e})}
                        />
                      </View>
                      <View style={styles.inputContainer1}>
                        <Text style={styles.label}>Other State RegNo </Text>
                        <TextInput
                          placeholder="Other State RegNo"
                          style={styles.input1}
                          value={this.state.stateRegNo}
                          onChangeText={e => this.setState({stateRegNo: e})}
                        />
                      </View>

                      <Text
                        style={{
                          color: 'black',
                          fontSize: 16,
                          fontWeight: '600',
                          marginTop: Scale(10),
                        }}>
                        Qualification of Examination Passed{' '}
                        <Text style={{color: 'red'}}>*</Text>
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
                          this.setState({
                            selectedQualification: item.QualificationName,QualificationID:item.QualificationID
                          });
                        }}
                        renderItem={item => {
                          return (
                            <View style={{borderRadius: Scale(5)}}>
                              <Text style={[styles.dropDownText]}>
                                {' '}
                                {item.QualificationName}
                              </Text>
                            </View>
                          );
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
                        value={this.state.selectedStateQ}
                        onChange={item => {
                          console.log('itemmmm', item);
                          this.setState({selectedStateQ: item.StateName,StateIDQ:item.StateID});
                        }}
                        renderItem={item => {
                          return (
                            <View style={{borderRadius: Scale(5)}}>
                              <Text style={[styles.dropDownText]}>
                                {' '}
                                {item.StateName}
                              </Text>
                            </View>
                          );
                        }}
                      />
                    </View>

                    <Text
                      style={{color: 'black', fontSize: 16, fontWeight: '600'}}>
                      Date on which the qualification was obtained{' '}
                      <Text style={{color: 'red'}}>*</Text>
                    </Text>

                    <View>
                      <View style={styles.inputContainer1}>
                        <Text style={styles.label}>Pass Out Month</Text>
                        <TouchableOpacity
                          onPress={() => this.setState({passingMonth: true})}>
                          <View style={styles.input1}>
                            <Text>
                              {this.state.month ? this.state.month : ''}
                            </Text>
                          </View>
                          <DatePicker
                            modal
                            open={passingMonth}
                            date={new Date()}
                            mode="date"
                            onConfirm={selectedDate1 => {
                              console.log(
                                'Selected Date:',
                                moment(selectedDate1).format('MMMM'),
                              );
                              this.setState({
                                passingMonth: false,
                                QualificationDate:moment(selectedDate1).format('DD/MM/YYYY'),
                                month: moment(selectedDate1).format('MMMM'),
                                year: moment(selectedDate1).format('YYYY'),
                              });
                            }}
                            onCancel={() => {
                              this.setState({passingMonth: false});
                            }}
                          />
                        </TouchableOpacity>
                        <View style={styles.inputContainer1}>
                          <Text style={styles.label}>Pass Out Year</Text>
                          <View style={styles.input1}>
                            <Text>{this.state.year}</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <Text
                      style={{color: 'black', fontSize: 16, fontWeight: '600'}}>
                      Institution from which appeared for the Examination and
                      number at the Examination (College Name)     <Text style={{color: 'red'}}>*</Text>
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
                        console.log('selectedCollege colleges', item);
                        this.setState({selectedCollege: item.CollegeName,college_id:item.CollegeID});
                      }}
                      renderItem={item => {
                        return (
                          <View style={{borderRadius: Scale(5)}}>
                            <Text style={[styles.dropDownText]}>
                              {' '}
                              {item.CollegeName}
                            </Text>
                          </View>
                        );
                      }}
                    />

                    <Text style={{color: 'black', fontSize: 16}}>
                      Name of Council / Board / University     <Text style={{color: 'red'}}>*</Text>
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
                        this.setState({
                          selectedUniversity: item.UniversityName,UniversityID:item.UniversityID
                        });
                      }}
                      renderItem={item => {
                        return (
                          <View style={{borderRadius: Scale(5)}}>
                            <Text style={[styles.dropDownText]}>
                              {' '}
                              {item.UniversityName}
                            </Text>
                          </View>
                        );
                      }}
                    />
                  <View style={styles.inputContainer1}>
                        <Text style={styles.label}>Internship Period From <Text style={{color: 'red'}}>*</Text></Text>
                        <TouchableOpacity
                          onPress={() => this.setState({InternshipStarting: true})}>
                          <View style={styles.input1}>
                            <Text>
                              {this.state.internshipdate
                                ? this.state.internshipdate
                                : ''}
                            </Text>
                          </View>
                          <DatePicker
                            modal
                            open={InternshipStarting}
                            date={new Date()}
                            maximumDate={new Date()}
                            mode="date"
                            onConfirm={selectedDate1 => {
                              console.log(
                                'Selected Date:',
                                moment(selectedDate1).format('YYYY-MM-DD'),
                              );
                              this.setState({
                                InternshipStarting: false,
                                internshipdate:  moment(selectedDate1).format('DD/MM/YYYY'),
                                intershiptodta: moment(selectedDate1).add(1, 'year').format('DD/MM/YYYY')
                              });
                            }}
                            onCancel={() => {
                              this.setState({InternshipStarting: false});
                            }}
                          />
                        </TouchableOpacity>
                      </View>
                      <View style={styles.inputContainer1}>
                        <Text style={styles.label}>Internship Period To</Text>
                          <View style={styles.input1}>
                            <Text>
                              {this.state.internshipdate
                                ? this.state.intershiptodta
                                : ''}
                            </Text>
                          </View>
                  </View>
                  <View style={styles.inputContainer1}>
                        <Text style={styles.label}> Repeated Internship Period From </Text>
                        <TouchableOpacity
                          onPress={() => this.setState({redate: true})}>
                          <View style={styles.input1}>
                            <Text>
                              {this.state.reinternshipdate
                                ? this.state.reinternshipdate
                                : ''}
                            </Text>
                          </View>
                          <DatePicker
                            modal
                            open={this.state.redate}
                            date={new Date()}
                            maximumDate={new Date()}
                            mode="date"
                            onConfirm={selectedDate1 => {
                              console.log(
                                'Selected Date:',
                                moment(selectedDate1).format('YYYY-MM-DD'),
                              );
                              this.setState({
                                redate: false,
                                reinternshipdate: moment(selectedDate1).format('DD/MM/YYYY'),
                                reintershiptodta: moment(selectedDate1).add(1, 'year').format('DD/MM/YYYY')
                              });
                            }}
                            onCancel={() => {
                              this.setState({redate: false});
                            }}
                          />
                        </TouchableOpacity>
                      </View>
                      <View style={styles.inputContainer1}>
                        <Text style={styles.label}> Repeated Internship Period To</Text>
                          <View style={styles.input1}>
                            <Text>
                              {this.state.reinternshipdate
                                ? this.state.reintershiptodta
                                : ''}
                            </Text>
                          </View>
                  </View>

                    <View>
                      <Text style={{color: 'red'}}>
                      Note: Upload ".JPG" or “PNG” file format, Maximum file size must be 1MB for each document.
                       નોંધ : માત્ર ".JPG" અથવા “.PNG” ફાઈલ અપલોડ કરવી, કોઈપણ ફાઈલની સાઈઝ 1MB થી વધારે ના હોવી જોઈએ.
                      </Text>
                    </View>

                    <View>
                      <View style={styles.photoContainer}>
                        <Text style={styles.imgTitle}>
                          Photo Image <Text style={{color: 'red'}}>*</Text>
                        </Text>
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
                      <Text style={{color: 'red'}}>
                        Maximum Width and Height : 400px by 400px ફોટાની મહત્તમ
                        પહોળાઈ 400px અને લંબાઈ 400px જ હોવી જોઈએ{' '}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginTop: Scale(5),
                          justifyContent: 'space-evenly',
                        }}>
                        <TouchableOpacity
                          style={styles.chooseBtn}
                          onPress={() => {
                            this.setState({currentSelection: 'isImage'}, () =>
                              this.chooseImg(),
                            );
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
                        <Text style={styles.imgTitle}>
                          Sign Image <Text style={{color: 'red'}}>*</Text>
                        </Text>
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
                      <Text style={{color: 'red'}}>
                        Sign, Maximum Width and Height : 300px by 150px શહીની
                        ઈમેજની મહત્તમ પહોળાઈ 300px અને લંબાઈ 150px જ હોવી જોઈએ
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginTop: Scale(5),
                          justifyContent: 'space-evenly',
                        }}>
                        <TouchableOpacity
                          style={styles.chooseBtn}
                          onPress={() => {
                            this.setState({currentSelection: 'signImg'}, () =>
                              this.chooseImg(),
                            );
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
                        <Text style={styles.imgTitle}>
                          LC Image <Text style={{color: 'red'}}>*</Text>
                        </Text>
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
                            this.setState({currentSelection: 'LCimg'}, () =>
                              this.chooseImg(),
                            );
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
                        <Text style={styles.imgTitle}>
                          FY Marksheet <Text style={{color: 'red'}}>*</Text>
                        </Text>
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
                            this.setState(
                              {currentSelection: 'FYMarksheet'},
                              () => this.chooseImg(),
                            );
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
                        <Text style={styles.imgTitle}>
                          SY Marksheet <Text style={{color: 'red'}}>*</Text>
                        </Text>
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
                            this.setState(
                              {currentSelection: 'SYMarksheet'},
                              () => this.chooseImg(),
                            );
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
                        <Text style={styles.imgTitle}>
                          TY Marksheet <Text style={{color: 'red'}}>*</Text>
                        </Text>
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
                            this.setState(
                              {currentSelection: 'TYMarksheet'},
                              () => this.chooseImg(),
                            );
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
                        <Text style={styles.imgTitle}>
                          Final Year Marksheet{' '}
                          <Text style={{color: 'red'}}>*</Text>
                        </Text>
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
                            this.setState(
                              {currentSelection: 'FinalYearMarksheet'},
                              () => this.chooseImg(),
                            );
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
                        <Text style={styles.imgTitle}>
                          Internship Provisional Certificate{' '}
                          <Text style={{color: 'red'}}>*</Text>
                        </Text>
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
                            this.setState(
                              {currentSelection: 'InternShipCerty'},
                              () => this.chooseImg(),
                            );
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
                        <Text style={styles.imgTitle}>
                          Internship Completion Certificate{' '}
                          <Text style={{color: 'red'}}>*</Text>
                        </Text>
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
                            this.setState(
                              {currentSelection: 'InternCompletion'},
                              () => this.chooseImg(),
                            );
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
                        <Text style={styles.imgTitle}>
                          Provisional Completion Certificate{' '}
                          <Text style={{color: 'red'}}>*</Text>
                        </Text>
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
                            this.setState(
                              {currentSelection: 'ProvisionalCerty'},
                              () => this.chooseImg(),
                            );
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
                        <Text style={styles.imgTitle}>Degree Certificate </Text>
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
                            this.setState(
                              {currentSelection: 'DegreeCerty'},
                              () => this.chooseImg(),
                            );
                          }}>
                          <Text>CHOOSE FILE</Text>
                        </TouchableOpacity>
                        <Text style={{margin: Scale(10, 10, 0, 0), flex: 1}}>
                          No File Choosen
                        </Text>
                     
                      </View>



                         <View style={styles.inputContainer1}>
                          <Text style={styles.label}>Other Image Desc</Text>
                          <TextInput
                            placeholder="Other Image Desc"
                            style={styles.input1}
                            value={this.state.ImgDesc}
                            onChangeText={e => this.setState({ImgDesc: e})}
                          />
                        </View>
                        <View style={styles.inputContainer1}>
                          <Text style={styles.label}>Place</Text>
                          <TextInput
                            placeholder="Place"
                            style={styles.input1}
                            value={this.state.place}
                            onChangeText={e => this.setState({place: e})}
                          />
                        </View>
                        <View style={styles.inputContainer1}>
                          <Text style={styles.label}>Any Remark</Text>
                          <TextInput
                            placeholder="Any Remark"
                            style={styles.input1}
                            value={this.state.remark}
                            onChangeText={e => this.setState({remark: e})}
                          />
                        </View>
                        
                    </View>
             
                    <TouchableOpacity style={styles.RegisterBtn} onPress={()=> this.loginBtnClick()}>
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
  flagContainer: {
    // ...GlobalStyle.txteditable,
    flex: 0.5,
  },
  flagText: {
    color: 'white',
    fontSize: Scale(16),
    paddingStart: Scale(10),
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: Scale(10),
  },
  icon: {
    display: 'flex',
  },
  input1: {
    borderWidth: 1,
    borderColor: 'skyblue',
    borderRadius: 5,
    padding: 10,
    // marginVertical: 2,
    height: 45,
  },
  input: {
    marginTop: Scale(10),
    fontSize: 16,
    borderColor: 'skyblue',
    borderWidth: 1,
    borderRadius: Scale(10),
    backgroundColor: 'none',
  },
  inputContainer: {
    // ...GlobalStyle.txteditable,
    flex: 1.5,
    marginStart: Scale(15),
  },
  dropDownContainer: {
    //  backgroundColor:'green',
    borderWidth: 1,
    borderColor: 'skyblue',
    padding: Scale(5),
    borderRadius: Scale(5),
    marginVertical: Scale(5),
  },
  photoContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: Scale(100),
    paddingHorizontal: Scale(10),
  },
  imgBox: {
    flex: 1,
    width: Scale(150),
    height: Scale(100),
    backgroundColor: 'rgba(189,195,199,1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Scale(5),
  },
  chooseBtn: {
    flex: 1,
    paddingHorizontal: Scale(20),
    paddingVertical: Scale(10),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(189,195,199,1)',
  },
  imgTitle: {
    marginTop: Scale(15),
    fontWeight: '600',
    flex: 1,
  },
  RegisterBtn: {
    marginTop: Scale(20),
    paddingHorizontal: Scale(20),
    paddingVertical: Scale(10),
    backgroundColor: '#3F3F3F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: Scale(20),
  },
});
