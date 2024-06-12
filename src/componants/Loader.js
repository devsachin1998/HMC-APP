
import React from 'react';
import { StyleSheet, View, Modal, ActivityIndicator, Text } from 'react-native';

const Loader = (props) => {
    const { loading, ...attributes } = props;

    //   console.log(props);




    return (
        <Modal
            transparent={true}
            animationType={'none'}
            visible={loading}
            onRequestClose={() => {
                console.log('close modal');
            }}>
            <View style={styles.modalBackground}>
                
                <View style={styles.activityIndicatorWrapper}>

                    <ActivityIndicator
                        animating={true}
                        color="#000000"
                        size="large"
                        style={styles.activityIndicator}
                    />
                                    <Text style={{fontSize:18,fontWeight:700,paddinTop:0,marginBottom:10}}>Loading...</Text>


                </View>
            </View>
        </Modal>
    );
};

export default Loader;

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040',
    },
    activityIndicatorWrapper: {
        backgroundColor: '#FFFFFF',
        height: 100,
        width: "90%",
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