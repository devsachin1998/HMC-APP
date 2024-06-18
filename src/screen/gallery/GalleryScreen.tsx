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
import GalleryScreenController, { Props } from './GalleryScreenController';
// import { Button } from "react-native-elements";
// Customizable Area End

export default class GalleryScreen extends GalleryScreenController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start
  // Customizable Area End
  renderItem = (item: any) => {
    return (
      <View style={styles.itemContainer}>
      <Image  resizeMode='center'
       source={{ uri: item.Image  }}
       defaultSource={require('../../images/logo.png')}
        style={styles.image} />
        <Text style={{textAlign:'center',padding:10,fontWeight:"800"}}>{item.Title}</Text>
       <TouchableOpacity onPress={()=>this.props.navigation.navigate("CollegesGalleryScreen",{Id:item.GalleryID,type:'home'})}>
        <Text style={{backgroundColor:"skyblue",padding:10,fontWeight:"800",textAlign:'center',fontSize:16}}>Open</Text>
        </TouchableOpacity>
        
    </View>
    );
  };
  renderEmptyListComponent = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={{fontSize:16}}>No data available.</Text>
      </View>
    );
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1,backgroundColor:'#fffbe7'}}>
          <CustomHeader />
           <Loader loading={this.state.isLoading} />
           {this.state.datalist.length>0?
           <FlatList
      
        data={this.state.datalist}
        renderItem={({item, index}) => this.renderItem(item)}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />:this.renderEmptyListComponent()}
        </View>
      </SafeAreaView>
    );
  }
}

// Customizable Area Start
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // backgroundColor: '#f0f0f0',
  },
  itemContainer: {
    flex: 0.5,
    margin: 10,
    width:"50%",
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
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});
// Customizable Area End
