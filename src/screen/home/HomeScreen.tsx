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
import color from '../../globalServices/color';
import GlobalStyle from '../../globalServices/globalStyle';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {SliderBox} from 'react-native-image-slider-box';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// Merge Engine - import assets - Start
// Merge Engine - import assets - End
// Merge Engine - Artboard Dimension  - Start
// Merge Engine - Artboard Dimension  - End
// import dayjs from "dayjs";
// import ImageComponent from "./components/ImageComponent/ImageComponent";
import HomeScreenController, {Props} from '../home/HomeScreenController';
import {CustomHeader} from '../../componants/CustomHeader';
import Scale from '../../globalServices/Scale';
// import { Button } from "react-native-elements";
// Customizable Area End

export default class HomeScreen extends HomeScreenController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start
  // Customizable Area End
  bottomTab = () => {
    return (
      <View style={styles.fixedView}>
        <TouchableOpacity style={styles.bottomview}>
          <View style={{ alignItems: 'center' }}>
            <FontAwesome5 name="home" size={23} color="green" />
          </View>
          <Text style={{ fontSize: 12, textAlign: 'center' }}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.onlinesbi.com/sbicollect/icollecthome.htm')}
          style={[styles.bottomview, { paddingStart: 0 }]}
        >
          <View style={{ alignItems: 'center' }}>
            <FontAwesome5 name="credit-card" size={23} />
          </View>
          <Text style={{ fontSize: 12, textAlign: 'center', flex: 1 }}>Online Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.bottomview, { paddingStart: 10 }]}>
          <View style={{ alignItems: 'center' }}>
            <FontAwesome5 name="user-edit" size={23} />
          </View>
          <Text style={{ fontSize: 12, textAlign: 'center' }}>Registration</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Login')}
          style={styles.bottomview}
        >
          <View style={{ alignItems: 'center' }}>
            <MaterialIcons name="logout" size={23} />
          </View>
          <Text style={{ fontSize: 12, textAlign: 'center' }}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderarticle = () => {
    return (
      <ImageBackground style={{ height: 200 }} source={require('../../images/articles.jpg')}>
        <View style={{ zIndex: 1, flexDirection: 'row', alignItems: 'center', margin: 10 }}>
          <Text style={{ flex: 1, fontSize: 20, fontWeight: '700', color: 'white', textAlign: 'justify' }}>Articles </Text>
          <TouchableOpacity style={{ borderRadius: 10 }}>
            <Text style={{ padding: 10, fontSize: 16, fontWeight: '700', backgroundColor: 'white' }}>View All</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  };
  renderAct = () => {
    return (
      <ImageBackground style={{ height: 200 }} source={require('../../images/banner_gallary.jpg')}>
        <View style={{ zIndex: 1, flexDirection: 'row', alignItems: 'center', margin: 10 }}>
          <Text style={{ flex: 1, fontSize: 20, fontWeight: '700', color: 'white', textAlign: 'justify' }}>Acts. </Text>
          <TouchableOpacity style={{ borderRadius: 10 }}>
            <Text style={{ padding: 10, fontSize: 16, fontWeight: '700', backgroundColor: 'white' }}>View All</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  };
  renderGallary = () => {
    return (
      <View  >
        <View style={{ zIndex: 1, flexDirection: 'row', alignItems: 'center', margin: 10 }}>
          <Text style={{ flex: 1, fontSize: 20, fontWeight: '700', color: 'white', textAlign: 'justify' }}>Our Gallary </Text>
          <TouchableOpacity style={{ borderRadius: 10 }}>
            <Text style={{ padding: 10, fontSize: 16, fontWeight: '700', backgroundColor: 'white' }}>View All</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };


  renderbottom = () => {
    return (
      <View style={[styles.container, { borderTopEndRadius: 0, marginTop:0, borderTopStartRadius: 0, backgroundColor: '#29CF96' }]}>
        <View style={styles.innerContainer}>
          <TouchableOpacity style={[styles.touchable, { marginStart: 0, marginEnd: 30 }]}>
            <View style={styles.iconContainer}>
              <FontAwesome5 name="school" size={23} color="green" />
            </View>
            <Text style={styles.text}>{"Homoeopathic Collages"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.touchable, { marginStart: 20, marginEnd: 30 }]}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="advertisements" size={25} color="red" />
            </View>
            <Text style={styles.text}>{"Advertisements"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground style={{ flex: 1 }} source={require('../../images/home_bg.jpg')} resizeMode="stretch">
          <CustomHeader name={'home'}/>
          <View style={{ flex: 1 }}>
            <ScrollView >
              <View>
                <View style={{ margin: 5, marginTop: 10 }}>
                  <SliderBox resizeMode="contain" dotColor="green" images={this.state.images} />
                </View>
                <View style={styles.container}>
                  <View style={styles.innerContainer}>
                    <TouchableOpacity style={styles.touchable}>
                      <View style={styles.iconContainer}>
                        <FontAwesome5 name="users" size={23} color="green" />
                      </View>
                      <Text style={styles.text}>{"Council\nMembers"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchable}>
                      <View style={styles.iconContainer}>
                        <FontAwesome5 name="users" size={23} color="red" />
                      </View>
                      <Text style={styles.text}>{"Registered \nHomoeopaths"}</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={{ padding: 10, backgroundColor: 'red' }}>
                  <Text style={{ fontSize: 22, fontWeight: '600', color: 'white', textAlign: 'center' }}>Headline</Text>
                </View>
               <View style={{ height: 100, backgroundColor: 'white' }}></View> 
                {this.renderarticle()}
                {this.renderGallary()}
                {this.renderAct()}
                {this.renderbottom()}
              </View>
            </ScrollView>
            {this.bottomTab()}
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}


// Customizable Area Start
const styles = StyleSheet.create({
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
    padding:Scale(16),
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
});
// Customizable Area End
