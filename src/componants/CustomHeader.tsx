// @ts-nocheck

import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  TextInput,
  StyleSheet,
} from 'react-native';
import Scale from '../globalServices/Scale';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import color from '../globalServices/color';
type AppProps = {
  title?: string;
  onBackPress?: any;
};

export const CustomHeader = ({backgroundColor='#3F3F3F',logout=false}) => {
  const navigation = useNavigation();

 //  console.log("navigation",navigation,backgroundColor)

  return (
    <View style={[styles.modalBackground, {backgroundColor: backgroundColor}]}>
      <View
        style={{flexDirection: 'row', alignItems: 'center', margin: Scale(5)}}>
        <TouchableOpacity
          style={{flex: 0.1}}
          onPress={() => navigation.openDrawer()}>
          <Icon
            name="menu"
            size={30}
            color="white"
            style={{width: Scale(30), height: Scale(30)}}
          />
        </TouchableOpacity>
        <View style={{flex: 0.2}}>
          <Image
            resizeMode="contain"
            source={require('../images/logo.png')}
            style={{
              width: Scale(35),
              height: Scale(35),
              marginStart: Scale(20),
            }}
          />
        </View>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            letterSpacing: 1,
            flex: 1,
            marginStart: Scale(5),

            fontSize: Scale(15),
          }}>
          Council Of Homoeopathic System Of Medicine
        </Text>
        {logout == true ? (
          <TouchableOpacity onPress={()=>navigation.replace("DrawerNavigator")}>
            <Text style={{color: 'white',fontWeight:'bold',marginRight:Scale(5)}}>Logout</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  modalBackground: {
    //  alignItems: 'center',
    height: Scale(55),
    // borderWidth:1,
    // backgroundColor: '#2194FF',
    // backgroundColor: '#3F3F3F',
    justifyContent: 'center',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});
