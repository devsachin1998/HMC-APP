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

export default class ConditionApply extends LoginController {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return(
      <SafeAreaView  style={{flex:1}}>
        <View >
            <Text>Terms & Conditions</Text>
        </View>
        </SafeAreaView>
    )
  }
}