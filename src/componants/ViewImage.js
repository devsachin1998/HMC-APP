import React, { useState } from 'react';
import { StyleSheet, View, Modal, TouchableOpacity, Text, Image } from 'react-native';

const ViewImage = (props) => {
    const { url,press } = props; // Destructure url directly

    const [modalVisible, setModalVisible] = useState(true);

    const closeModal = () => {
        console.log('close modal');
        setModalVisible(false);
    };

    return (
        <Modal
            transparent={true}
            animationType='none'
            visible={modalVisible}
            onRequestClose={closeModal} // Close modal on hardware back button press
        >
            <View style={styles.modalBackground}>
                <TouchableOpacity
                    style={styles.closeButton}
                    onPress={press} // Close modal on close button press
                >
                    <Text style={styles.closeButtonText}> X </Text>
                </TouchableOpacity>
                <View style={styles.activityIndicatorWrapper}>
                    <Image resizeMode='contain' source={{ uri: url }} style={styles.modalImage} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundColor: '#FFFFFF',

        justifyContent: 'center',
        alignItems: 'center',
    },
    activityIndicatorWrapper: {
        width: '100%',
        // top:10,
        height:"75%",
        // position:'relative',
        // borderRadius: 10,
        // padding: 20,
        // borderWidth:1,
        alignItems: 'center',
    },
    modalImage: {
        width: '100%',
        height: '100%',
    },
    closeButton: {
        position: 'absolute',
        top: 60,
        right: 20,
        padding: 10,
        borderRadius: 20,
        backgroundColor: 'red',
    },
    closeButtonText: {
        fontSize: 18,
        padding:1,
      
        fontWeight: 'bold',
        color: 'white',
    },
});

export default ViewImage;
