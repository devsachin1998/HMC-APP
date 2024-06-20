import * as React from 'react';

// Customizable Area Start
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    Platform,
    TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { CustomHeader } from '../../componants/CustomHeader';
import Scale from '../../globalServices/Scale';

import Loader from '../../componants/Loader';
import AdminHomeController, { Props } from './AdminHomeController';
// Customizable Area End

export default class AdminHome extends AdminHomeController {
    constructor(props: Props) {
        super(props);
        // Customizable Area Start
        // Customizable Area End
    }

    // Customizable Area Start
    // Customizable Area End
    renderItemAct = (item: any, index) => {
        return (
            <View style={{ flexDirection: 'column', margin: 10, borderRadius: 5, overflow: 'hidden' }}>
                <Text>Hello Admin</Text>
            </View>
        );
    };
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: '#fffbe7' }}>
                    <CustomHeader  logout={true}  />
                    <View style={styles.iconContainer}>
            <Entypo
              name="home"
              size={26}
              // style={styles.icon}
            />
            <Text style={{fontWeight:'600',fontSize:Scale(16)}}>Admin Home</Text>
          </View>
                    <FlatList
                     data={this.state.homeBlocks}
                     numColumns={3}
                     showsVerticalScrollIndicator={false}
                     contentContainerStyle={{paddingBottom:Scale(15) }}
                     renderItem={({item})=>(
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate("Maintenance")} style={{height:Scale(170),borderRadius:Scale(10),width:"29%",marginLeft:"3.3%",marginTop:Scale(15), justifyContent:"center", backgroundColor:item.bgColor}}>
                            <Icon style={{color: "white", fontSize: Scale(20), textAlign:"center"}} name = {item.iconName}></Icon>
                            <Text style={{color:"white", textAlign:"center",fontSize: Scale(16)}}>{item.label}</Text>
                        </TouchableOpacity>
                     )}
                    />
                </View>
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
        justifyContent: 'center',
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
        marginStart: Scale(55),
        marginEnd: Scale(45),
        alignItems: 'center',
        justifyContent: 'center',
        // To equally divide the space between two touchable elements
    },
    input: {
        marginTop: Scale(10),
        fontSize: 16,
        padding: 10,
        borderColor: 'skyblue',
        borderBottomWidth: 1,
        borderRadius: 5,
    },
    headcontainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 10,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 2,
            },
        }),
    },
    androidShadow: {
        elevation: 5,
    },
    iconContainer: {
        alignItems: 'center',
        padding: Scale(16),
        borderBottomLeftRadius:Scale(20),
        borderBottomRightRadius:Scale(20),

        backgroundColor: 'skyblue',
    },
    text: {
        fontSize: 14,
        marginTop: Scale(8),
        color: 'white',
        fontWeight: '700',
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
