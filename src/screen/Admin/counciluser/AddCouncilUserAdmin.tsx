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
import AddCouncilUserAdminController, {Props} from './AddCouncilUserAdminController';
import {Dropdown} from 'react-native-element-dropdown';
// import { Button } from "react-native-elements";
// Customizable Area End

export default class AddCouncilUserAdmin extends AddCouncilUserAdminController {
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
                onPress={() => this.props.navigation.navigate("CouncilUserAdmin")}>
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
                  {'Add Council User'}
                </Text>
              </View>
            </View>
            <ScrollView>
              <View style={styles.container}>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Profile Code</Text>
                  <TextInput
                    placeholder="Profile Code"
                    style={styles.input}
                    value={this.state.procode}
                    onChangeText={e => this.setState({procode: e})}
                  />
                </View>
                <View style={styles.inputContainer}>
        <Text style={styles.label}>Role</Text>
        <Dropdown
          placeholderStyle={{ color: 'grey', fontSize: 14 }}
          style={styles.dropDownContainer}
          placeholder="--Select Role--"
          data={this.state.RoleList}
          labelField="RoleName"
          valueField="RoleName"
          maxHeight={210}
          selectedTextStyle={{ paddingStart: 5 }}
          value={this.state.role}
          onChange={item => {
            console.log('Selected Role:', item);
            this.setState({ role: item.RoleName,roleid:item.RoleID }); // Assuming RoleName is the field you want to set as the selected value
          }}
        />
      </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>User Name</Text>
                  <TextInput
                    placeholder="Username"
                    style={styles.input}
                    value={this.state.username}
                    onChangeText={e => this.setState({username: e})}
                  />
                </View>
                

                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Password</Text>
                  <TextInput
                    placeholder="Password"
                    style={styles.input}
                    value={this.state.password}
                    onChangeText={e => this.setState({password: e})}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Confirm Password</Text>
                  <TextInput
                    placeholder="Confirm Password"
                    style={styles.input}
                    value={this.state.cnfpassword}
                    onChangeText={e => this.setState({cnfpassword: e})}
                  />
                </View>
               
                <TouchableOpacity style={styles.button} onPress={() => {this.props.route.params.edit ?this.updateuser():this.adduser()}}>
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
