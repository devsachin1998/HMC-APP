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
  Modal,
  Dimensions,
} from 'react-native';
import color from '../../globalServices/color';
import GlobalStyle from '../../globalServices/globalStyle';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SliderBox} from 'react-native-image-slider-box';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

// Merge Engine - import assets - Start
// Merge Engine - import assets - End
// Merge Engine - Artboard Dimension  - Start
// Merge Engine - Artboard Dimension  - End
// import dayjs from "dayjs";
// import ImageComponent from "./components/ImageComponent/ImageComponent";
import {CustomHeader} from '../../componants/CustomHeader';
import Scale from '../../globalServices/Scale';

import Loader from '../../componants/Loader';
import CollegesGalleryScreenController, {
  Props,
} from './CollegesGalleryScreenController';
import ViewImage from '../../componants/ViewImage';
// import { Button } from "react-native-elements";
// Customizable Area End

export default class CollegesGalleryScreen extends CollegesGalleryScreenController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  renderEmptyListComponent = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={{fontSize: 16}}>No data available.</Text>
      </View>
    );
  };
  renderItem = (item: any) => {
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          onPress={() => this.setState({visible: true, url: item.Image})}>
          <Image
            resizeMode="center"
            source={{uri: item.Image}}
            defaultSource={require('../../images/logo.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        {this.state.visible ? (
          <ViewImage
            visible={this.state.visible}
            press={() => this.setState({visible: false})}
            url={this.state.url}
          />
        ) : null}

        <Loader loading={this.state.isLoading} />
        <CustomHeader menu={false}></CustomHeader>

        <View
          style={{flexDirection: 'row', backgroundColor: 'red', padding: 10}}>
          <TouchableOpacity
            style={{flex: 0.1}}
            onPress={() => this.props.navigation.goBack()}>
            <Icon
              name="chevron-small-left"
              size={30}
              color="white"
              style={{width: Scale(30), height: Scale(30)}}
            />
          </TouchableOpacity>
          <View style={{flex: 1, alignSelf: 'center'}}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                letterSpacing: 1,
                marginStart: 5,
                fontSize: Scale(15),
              }}>
              {this.props.route.params.CollegeName || 'Gallery Details'}
            </Text>
          </View>
        </View>
        {this.state.datalist.length > 0 ? (
          <FlatList
            data={this.state.datalist}
            renderItem={({item, index}) => this.renderItem(item)}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            columnWrapperStyle={styles.columnWrapper}
          />
        ) : (
          this.renderEmptyListComponent()
        )}
      </SafeAreaView>
    );
  }
}

// Customizable Area Start
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    // backgroundColor: '#fff',
    // borderRadius: 8,
    // overflow: 'hidden',
    elevation: 3,
  },
  image: {
    width: Dimensions.get('window').width / 2 - 20,
    height: 150,
    resizeMode: 'cover',
    // borderRadius: 10,
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
});
// Customizable Area End
