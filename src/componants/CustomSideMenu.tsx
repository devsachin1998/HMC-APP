import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Alert,
  SafeAreaView,
  Linking,
} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Scale from '../globalServices/Scale';
import {ScrollView} from 'react-native-gesture-handler';
import {clearData} from '../globalServices/utils';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialIcons from'react-native-vector-icons/MaterialIcons';

import FontAwesome5 from'react-native-vector-icons/FontAwesome5';



class CustomSidebarMenu extends Component {
  constructor(props) {
    super(props);
  }

  // navigation_fn = name => {
  //   this.props.navigation.toggleDrawer();
  //   this.props.navigation.navigate(name);
  // };

  // logout = () => {
  //   clearData();
  //   this.props.navigation.replace('LoginScreen');
  // };

  render() {
    console.log('props::', this.props.navigation);
    return (

        <SafeAreaView style={{flex: 1,backgroundColor:'#ffaa11'}}>
          <View style={{paddingTop: Scale(10), paddingBottom: Scale(0.1),alignItems:'center'}}>
            <TouchableOpacity style={styles.avatar}>
              <Image
                source={require("../images/logo.png")}
                style={styles.avatar}
              />
            </TouchableOpacity>
            <View style={{paddingTop: Scale(2), paddingBottom: Scale(10)}}>
              <Text style={[styles.textstyle, {fontWeight: '800',fontSize:16,textAlign:'center'}]}>
              {"Council Of Homoeopathic \nSystem Of Medicine Gujarat\nState"}
              </Text>
            </View>
          </View>

          <View style={[{padding: Scale(20), paddingTop: Scale(0),flex:1}]}>
            <ScrollView>
              <TouchableOpacity
                style={styles.mainview}
                onPress={()=>this.props.navigation.navigate("HomeScreen")}
                >
               <Icon name="home" size={Scale(20)} color="white"  />
                <Text style={styles.textstyle}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.mainview}
                >
               <FontAwesome5 name="user-edit" size={Scale(20)}  color="white"  />
                <Text style={styles.textstyle}>Registration</Text>
              </TouchableOpacity>
            
              <TouchableOpacity
                style={styles.mainview}
                onPress={()=>Linking.openURL("https://www.onlinesbi.com/sbicollect/icollecthome.htm")}

                >
               <FontAwesome5 name="credit-card" size={Scale(20)} color="white"  />
                <Text style={styles.textstyle}>Online Payment</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.mainview}
                >
               <MaterialIcons name="info" size={20} color="white"  />
                <Text style={styles.textstyle}>About</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.mainview}
                onPress={()=>this.props.navigation.navigate("CouncilMemberScreen")}
                >
               <FontAwesome5 name="users" size={20} color="white"  />
                <Text style={styles.textstyle}>Council Members</Text>
              </TouchableOpacity>
            
              <TouchableOpacity
                style={styles.mainview}
                >
               <FontAwesome5 name="users" size={20} color="white"  />
                <Text style={styles.textstyle}>Registered Homoeopaths</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.mainview}
                >
               <MaterialIcons name="photo-library" size={20} color="white"  />
                <Text style={styles.textstyle}>Gallary</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.mainview}
                
                onPress={()=> this.props.navigation.navigate("CollegeScreen")}

                >
               <FontAwesome5 name="school" size={20} color="white"  />
                <Text style={styles.textstyle}>Colleges</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.mainview}
                
                onPress={()=> this.props.navigation.navigate("ArticlesScreen1",{type:1})}

                >
               <MaterialIcons name="article" size={20} color="white"  />
                <Text style={styles.textstyle}>Articles</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.mainview}
                >
               <Icon name="download" size={20} color="white"  />
                <Text style={styles.textstyle}>Downloads</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.mainview}
                >
               <MaterialIcons name="photo-library" size={20} color="white"  />
                <Text style={styles.textstyle}>FAQs</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.mainview}
                onPress={()=> this.props.navigation.navigate("ArticlesScreen",{type:2})}

                >
               <MaterialIcons name="notifications" size={20} color="white"  />
                <Text style={styles.textstyle}>Act. to Notification</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.mainview}
                >
               <MaterialIcons name="contact-phone" size={20} color="white"  />
                <Text style={styles.textstyle}>Contact Us</Text>
              </TouchableOpacity>
            </ScrollView>
            <Text style={[styles.textstyle,{paddingStart:0,fontSize:12,textAlign:'center',marginTop:10}]}>{"Copyright © . All rights reserved. \n| Designed by C.S.Comsoft Pvt. Ltd."}</Text>

          </View>
        </SafeAreaView>
   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainview: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Scale(12),
    padding:5,
    paddingStart:0
  },
  imgstyle: {
    width: Scale(30),
    height: Scale(30),
  },
  textstyle: {
    paddingStart: Scale(7),
    color: 'white',
  },
  avatar: {
    width: Scale(60),
    height: Scale(60),
    borderRadius: 65,
  },
});

export default CustomSidebarMenu;
