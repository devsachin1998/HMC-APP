import * as React from 'react';
import {

  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  SafeAreaView
  
} from 'react-native';
import LoginController, {Props} from './LoginController';
import HTML from 'react-native-render-html';
import { ScrollView } from 'react-native-gesture-handler';
import Loader from '../../../componants/Loader';

export default class ConditionApply extends LoginController {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return(
      <SafeAreaView  style={{flex:1,backgroundColor:'skyblue'}}>
        <ScrollView >
            <HTML source={{ html: this.state.termsAndConditions }}   emSize={9}   baseStyle={{
          padding: 10,
          fontWeight: '100',
          textAlign: 'center', // Text alignment
        }}/>
        </ScrollView>
        </SafeAreaView>
    )
  }
}