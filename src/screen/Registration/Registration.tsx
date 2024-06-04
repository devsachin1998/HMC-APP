import * as React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Button,
  Platform,
  ScrollView,
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import RegistrationController, {Props} from './RegistrationController';
import Scale from '../../globalServices/Scale';

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
render() {
    const { value, isFocus } = this.state;
  return (
    <View style={{flex:1}} >
        <View style={{backgroundColor:'skyblue',flexDirection:'row',alignItems:'center',padding:10}}>
            <Image
                resizeMode={'contain'}
                style={styles.logoImg}
                source={require('../../images/splash.jpg')}
            />
            <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>REGISTRATION</Text>
        </View>
        <ScrollView contentContainerStyle={{padding:10,flexGrow:1}}>
            <View>
            {/* <Dropdown
      style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
    //   placeholderStyle={styles.placeholderStyle}
    //   selectedTextStyle={styles.selectedTextStyle}
    //   inputSearchStyle={styles.inputSearchStyle}
    //   iconStyle={styles.iconStyle}
      data={ [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },]}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={!isFocus ? 'Select item' : '...'}
      searchPlaceholder="Search..."
      value={value}
      onFocus={() => this.setState({isFocus:true})}
      onBlur={() => this.setState({isFocus:false})}
      onChange={(item) => {
        this.setState({ value:item.value, isFocus: false });
      }} */}

    {/* //   renderLeftIcon={() => (
    //     <AntDesign
    //       style={styles.icon}
    //       color={isFocus ? 'blue' : 'black'}
    //       name="Safety"
    //       size={20}
    //     />
    //   )}
    /> */}
            <Text style={{color:'black',fontSize:18}}>Step 1</Text>
            <TextInput
                placeholder='First Name'
                style={styles.input}
                value={this.state.firstName}
                onChangeText={(e)=>this.setState({firstName:e})}
            />
            <TextInput
                placeholder='Middle Name'
                style={styles.input}
                value={this.state.firstName}
                onChangeText={(e)=>this.setState({firstName:e})}
            />

            <TextInput
                placeholder='Last Name'
                style={styles.input}
                value={this.state.firstName}
                onChangeText={(e)=>this.setState({firstName:e})}
            />

            <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'flex-start'}}>
                <Text>Male</Text>
                <Text>Female</Text>
                <Text>Other</Text>
            </View>
            <Text>Birth Date</Text>
            <TextInput
                placeholder='Birth Place'
                style={styles.input}
                value={this.state.firstName}
                onChangeText={(e)=>this.setState({firstName:e})}
            />
            <Text>DropDown BloodGroup</Text>

            <Text style={{color:'black',fontSize:18}}>Residential</Text>

            <TextInput
                placeholder='Address'
                style={styles.input}
                value={this.state.firstName}
                onChangeText={(e)=>this.setState({firstName:e})}
            />
            <Text style={{color:'black',fontSize:14}}>Country -dropdown</Text>
            <Text style={{color:'black',fontSize:14}}>State -dropdown</Text>
            <Text style={{color:'black',fontSize:14}}>District -dropdown</Text>
            <Text style={{color:'black',fontSize:14}}>Taluka -dropdown</Text>
            <Text style={{color:'black',fontSize:14}}>City -dropdown</Text>

            <TextInput
                placeholder='Pin Code'
                style={styles.input}
                value={this.state.firstName}
                onChangeText={(e)=>this.setState({firstName:e})}
            />

            <TextInput
                placeholder='Phone'
                style={styles.input}
                value={this.state.firstName}
                onChangeText={(e)=>this.setState({firstName:e})}
            />

        <Text style={{color:'black',fontSize:18}}>Professional</Text>

        <TextInput
                placeholder='Address'
                style={styles.input}
                value={this.state.firstName}
                onChangeText={(e)=>this.setState({firstName:e})}
            />
            <Text style={{color:'black',fontSize:14}}>Country -dropdown</Text>
            <Text style={{color:'black',fontSize:14}}>State -dropdown</Text>
            <Text style={{color:'black',fontSize:14}}>District -dropdown</Text>
            <Text style={{color:'black',fontSize:14}}>Taluka -dropdown</Text>
            <Text style={{color:'black',fontSize:14}}>City -dropdown</Text>

            <TextInput
                placeholder='Pin Code'
                style={styles.input}
                value={this.state.firstName}
                onChangeText={(e)=>this.setState({firstName:e})}
            />

            <TextInput
                placeholder='Phone'
                style={styles.input}
                value={this.state.firstName}
                onChangeText={(e)=>this.setState({firstName:e})}
            />

            <TextInput
                placeholder='Mobile'
                style={styles.input}
                value={this.state.firstName}
                onChangeText={(e)=>this.setState({firstName:e})}
            />

            <TextInput
                placeholder='Aadhar Card'
                style={styles.input}
                value={this.state.firstName}
                onChangeText={(e)=>this.setState({firstName:e})}
            />
            <TextInput
                placeholder='Email'
                style={styles.input}
                value={this.state.firstName}
                onChangeText={(e)=>this.setState({firstName:e})}
            />

            <TextInput
                placeholder='Other State RegNo'
                style={styles.input}
                value={this.state.firstName}
                onChangeText={(e)=>this.setState({firstName:e})}
            />

        <Text style={{color:'black',fontSize:16}}>Qualification of Examination Passed</Text>
        </View>

        </ScrollView>
    </View>
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
      marginHorizontal: 10,
    },
    input: {
      marginTop: Scale(10),
      fontSize: 16,
      borderColor:'skyblue',
      borderBottomWidth:1,
      borderRadius:5
    },
    inputContainer: {
      // ...GlobalStyle.txteditable,
      flex: 1.5,
      marginStart: Scale(15),
    },
  //   input: {
  //     flexDirection: "row",
  //     fontSize: 16,
  //     textAlign: "left",
  //     backgroundColor: "white",
  //     borderWidth: Platform.OS === "web" ? 0 : 1,
  //     marginBottom: 16,
  //     borderBottomWidth: 1,
  //     borderColor: "#767676",
  //     borderRadius: 10,
  //     includeFontPadding: true,
  //     padding: 10
  // },
  //   inputStyle: {
  //     ...GlobalStyle.inputStyle,
  //   },
  //   loginButton: {
  //     ...GlobalStyle.buttonStyle,
  //   },
  //   buttonText: {
  //     ...GlobalStyle.btntext,
  //   },
  });