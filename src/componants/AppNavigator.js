import React, {useEffect, useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {getdata} from '../globalServices/utils';

import SplashScreen from '../screen/splash/SplashScreen';
import HomeScreen from '../screen/home/HomeScreen';
import CustomSidebarMenu from './CustomSideMenu';
import Login from '../screen/Doctor/Login/Login';
import ConditionApply from '../screen/Doctor/Login/ConditionApply';
import CouncilLogin from '../screen/Council/Login/CouncilLogin';
import Registration from '../screen/Registration/Registration';
import DoctorHomeScreen from '../screen/Doctor/doctorHome/DoctorHomeScreen';
import QueriesPage from '../screen/Doctor/Query/QueriesPage';
import AddQuery from '../screen/Doctor/Query/AddQuery';
import FAQPage from '../screen/Doctor/FAQs/FAQPage';
import CouncilMemberScreen from '../screen/councilmember/CouncilMemberScreen';
import ArticlesScreen from '../screen/articles/ArticlesScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>

    <Stack.Navigator initialRouteName="FAQPage">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="ConditionApply"
        component={ConditionApply}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CouncilLogin"
        component={CouncilLogin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="DoctorHomeScreen"
        component={DoctorHomeScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="QueriesPage"
        component={QueriesPage}
        options={{headerShown: false}}
      />
     
     <Stack.Screen
        name="AddQuery"
        component={AddQuery}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="FAQPage"
        component={FAQPage}
        options={{headerShown: false}}
      />


    </Stack.Navigator>
  </NavigationContainer>
);
const DrawerNavigator = () => {
  // const [username, setusername] = useState('');
  // const [userprofile, setuserprofile] = useState('');

  // (async () => {
  //   const user = await getdata('userdetails');
  //   // console.log("dasdasdasdsa",user)
  //   const username = user.first_name + ' ' + user.last_name;
  //   const userprofile = user.profile_pic;
  //   setuserprofile(userprofile);
  //   setusername(username);
  // })();
  return (
    <Drawer.Navigator
      initialRouteName="CustomSideMenu"
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => (
        <CustomSidebarMenu
          data={{
            name: '',
            profile_pic: '',
          }}
          {...props}
        />
      )}>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="CouncilMemberScreen"
        component={CouncilMemberScreen}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="ArticlesScreen"
        component={ArticlesScreen}
        options={{headerShown: false}}
      />
      
    </Drawer.Navigator>
  );
};
// const DrawerNavigatorAdmin = () => {
//   const [username, setusername] = useState('');
//   const [userprofile, setuserprofile] = useState('');

//   (async () => {
//     const user = await getdata('userdetails');
//     console.log('dasdasdasdsa', user);
//     const username = user.first_name + ' ' + user.last_name;
//     const userprofile = user.profile_pic;
//     setuserprofile(userprofile);
//     setusername(username);
//   })();
//   return (
//     <Drawer.Navigator
//       initialRouteName="CustomSidebarMenuAdmin"
//       screenOptions={{
//         headerShown: false,
//       }}
//       drawerContent={props => (
//         <CustomSidebarMenuAdmin
//           data={{
//             name: username,
//             profile_pic: userprofile,
//           }}
//           {...props}
//         />
//       )}>
//       <Drawer.Screen
//         name="Main"
//         component={TabNavigatorAdmin}
//         options={{headerShown: false}}
//       />
//     </Drawer.Navigator>
//   );
// };
export default AppNavigator;
