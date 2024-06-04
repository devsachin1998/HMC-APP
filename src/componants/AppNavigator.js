import React, {useEffect, useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {getdata} from '../globalServices/utils';

import SplashScreen from '../screen/splash/SplashScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// const TabNavigator = () => (
//   <SafeAreaView style={{flex: 1, backgroundColor: color.bgcolor}}>
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         // tabBarBadge: 1,
//         // tabBarActiveBackgroundColor: "white",
//         headerShown: false,
//         unmountOnBlur: true,
//         tabBarActiveTintColor: color.active_tab,
//         tabBarInactiveTintColor: color.inactive_tab,
//         // headerStyle: {
//         //     elevation: 10, // remove shadow on Android
//         //     shadowOpacity: 10, // remove shadow on iOS
//         //     borderBottomWidth: 2, // Just in case.
//         //     backgroundColor: 'white'
//         // },
//         tabBarStyle: {
//           height: 60,
//           paddingTop: 10,
//           paddingBottom: 10,
//           position: 'absolute',
//           borderTopWidth: 0,
//         },
//         tabBarBackground: () => (
//           <LinearGradient
//             start={{x: 1, y: 0}}
//             end={{x: 1, y: 1}}
//             colors={['#30303C', '#00001A']}
//             style={{flex: 1}}
//           />
//         ),
//         tabBarLabelStyle: {
//           fontSize: 12,
//           fontWeight: '900',
//           paddingTop: 1,
//         },
//       })}>
//       <Tab.Screen
//         name="HomeScreen"
//         component={HomeScreen}
//         options={{
//           headerShown: false,
//           tabBarLabel: 'Home',
//           ...TransitionPresets.SlideFromRightIOS,
//           tabBarIcon: ({focused}) => (
//             <Image
//               style={{
//                 tintColor: focused ? color.active_tab : color.inactive_tab,
//                 height: Scale(18),
//                 width: Scale(18),
//               }}
//               source={require('../images/ic_home.png')}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="EventScreen"
//         component={EventScreen}
//         options={{
//           headerShown: false,
//           tabBarLabel: 'Event',
//           tabBarIcon: ({focused}) => (
//             <Image
//               style={{
//                 tintColor: focused ? color.active_tab : color.inactive_tab,
//                 height: Scale(20),
//                 width: Scale(20),
//               }}
//               source={require('../images/ic_event.png')}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="BookScreen"
//         component={BookScreen}
//         options={{
//           headerShown: false,
//           tabBarLabel: 'Book',
//           tabBarIcon: ({focused}) => (
//             <Image
//               style={{
//                 tintColor: focused ? color.active_tab : color.inactive_tab,
//                 height: Scale(20),
//                 width: Scale(20),
//               }}
//               source={require('../images/ic_book.png')}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="ActivityScreen"
//         component={ActivityScreen}
//         options={{
//           headerShown: false,
//           tabBarLabel: 'Activities',
//           tabBarIcon: ({focused}) => (
//             <Image
//               style={{
//                 tintColor: focused ? color.active_tab : color.inactive_tab,
//                 height: Scale(20),
//                 width: Scale(20),
//               }}
//               source={require('../images/ic_activity.png')}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="ChatScreen"
//         component={ChatScreen}
//         options={{
//           headerShown: false,
//           tabBarLabel: 'Chat',
//           tabBarIcon: ({focused}) => (
//             <Image
//               style={{
//                 tintColor: focused ? color.active_tab : color.inactive_tab,
//                 height: Scale(20),
//                 width: Scale(20),
//               }}
//               source={require('../images/ic_chat.png')}
//             />
//           ),
//         }}
//       />

//       {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
//     </Tab.Navigator>
//   </SafeAreaView>
// );
// const TabNavigatorAdmin = () => (
//   <SafeAreaView style={{flex: 1, backgroundColor: color.bgcolor}}>
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         // tabBarBadge: 1,
//         // tabBarActiveBackgroundColor: "white",
//         headerShown: false,
//         // unmountOnBlur: true,
//         tabBarActiveTintColor: color.active_tab,
//         tabBarInactiveTintColor: color.inactive_tab,
//         // headerStyle: {
//         //     elevation: 10, // remove shadow on Android
//         //     shadowOpacity: 10, // remove shadow on iOS
//         //     borderBottomWidth: 2, // Just in case.
//         //     backgroundColor: 'white'
//         // },
//         tabBarStyle: {
//           height: 60,
//           paddingTop: 10,
//           paddingBottom: 10,
//           position: 'absolute',
//           borderTopWidth: 0,
//         },
//         tabBarBackground: () => (
//           <LinearGradient
//             start={{x: 1, y: 0}}
//             end={{x: 1, y: 1}}
//             colors={['#30303C', '#00001A']}
//             style={{flex: 1}}
//           />
//         ),
//         tabBarLabelStyle: {
//           fontSize: 12,
//           fontWeight: '900',
//           paddingTop: 1,
//         },
//       })}>
//       <Tab.Screen
//         name="HomeAdminScreen"
//         component={HomeAdminScreen}
//         options={{
//           headerShown: false,
//           tabBarLabel: 'Home',
//           ...TransitionPresets.SlideFromRightIOS,
//           tabBarIcon: ({focused}) => (
//             <Image
//               style={{
//                 tintColor: focused ? color.active_tab : color.inactive_tab,
//                 height: Scale(18),
//                 width: Scale(18),
//               }}
//               source={require('../images/ic_home.png')}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="BookListScreen"
//         component={BookListScreen}
//         options={{
//           headerShown: false,
//           tabBarLabel: 'Booking List',
//           tabBarIcon: ({focused}) => (
//             <Image
//               style={{
//                 tintColor: focused ? color.active_tab : color.inactive_tab,
//                 height: Scale(20),
//                 width: Scale(20),
//               }}
//               source={require('../images/ic_event.png')}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="MemberlistScreen"
//         component={MemberlistScreen}
//         options={{
//           headerShown: false,
//           tabBarLabel: 'Members',
//           tabBarIcon: ({focused}) => (
//             <Image
//               style={{
//                 tintColor: focused ? color.active_tab : color.inactive_tab,
//                 height: Scale(20),
//                 width: Scale(20),
//               }}
//               source={require('../images/ic_book.png')}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="SubscriptionScreen"
//         component={SubscriptionScreen}
//         options={{
//           headerShown: false,
//           tabBarLabel: 'Subscription',
//           tabBarIcon: ({focused}) => (
//             <Image
//               style={{
//                 tintColor: focused ? color.active_tab : color.inactive_tab,
//                 height: Scale(20),
//                 width: Scale(20),
//               }}
//               source={require('../images/ic_activity.png')}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="AnnouncementScreenAdmin"
//         component={AnnouncementScreenAdmin}
//         options={{
//           headerShown: false,
//           tabBarLabel: 'Announcement',
//           tabBarIcon: ({focused}) => (
//             <Image
//               style={{
//                 tintColor: focused ? color.active_tab : color.inactive_tab,
//                 height: Scale(20),
//                 width: Scale(20),
//               }}
//               source={require('../images/ic_speaker.png')}
//             />
//           ),
//         }}
//       />

//       {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
//     </Tab.Navigator>
//   </SafeAreaView>
// );
const AppNavigator = () => (
  <NavigationContainer>
    {/* <Drawer.Navigator drawerContent={props => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen name="Main" component={TabNavigator}    options={{ headerShown: false }}
 />
    </Drawer.Navigator> */}
    {/* <StatusBar backgroundColor={color.bgcolor} barStyle={'light-content'} /> */}

    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
     
    </Stack.Navigator>
  </NavigationContainer>
);
// const DrawerNavigator = () => {
//   const [username, setusername] = useState('');
//   const [userprofile, setuserprofile] = useState('');

//   (async () => {
//     const user = await getdata('userdetails');
//     // console.log("dasdasdasdsa",user)
//     const username = user.first_name + ' ' + user.last_name;
//     const userprofile = user.profile_pic;
//     setuserprofile(userprofile);
//     setusername(username);
//   })();
//   return (
//     <Drawer.Navigator
//       initialRouteName="CustomSideMenu"
//       screenOptions={{
//         headerShown: false,
//       }}
//       drawerContent={props => (
//         <CustomSidebarMenu
//           data={{
//             name: username,
//             profile_pic: userprofile,
//           }}
//           {...props}
//         />
//       )}>
//       <Drawer.Screen
//         name="Main"
//         component={TabNavigator}
//         options={{headerShown: false}}
//       />
//     </Drawer.Navigator>
//   );
// };
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
