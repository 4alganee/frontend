import {useEffect, useRef, useState} from 'react';
import {
  Alert,
  Button,
  Image,
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {PERMISSIONS} from 'react-native-permissions';
import ViewShot from 'react-native-view-shot';
import Share from 'react-native-share';

import {
  globalstyles,
  height,
  scale,
  width,
} from '../../../configs/globalStyles';
export const APP_PERMISSION_CODE = {
  camera: [PERMISSIONS.IOS.CAMERA],
};
export const FrameBtn = () => {
  const [result, setResult] = useState(null);
  const [ModalVisible, setModalVisible] = useState(false);
  const onPickImage = res => {
    if (res.didCancel || !res) {
      return;
    }
    setResult(res);
    setModalVisible(true);
  };
  const onLaunchCamera = () => {
    launchCamera(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
      onPickImage,
    );
  };

  const onLaunchImageLibrary = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
      onPickImage,
    );
  };

  const openModal = () => {
    Alert.alert('Choose options', '', [
      {
        text: 'Take picture',
        onPress: () => {
          onLaunchCamera();
        },
      },
      {
        text: 'Album',
        onPress: () => {
          onLaunchImageLibrary();
        },
      },
      {
        text: 'Cancel',
        onPress: () => {},
      },
    ]);
  };
  const ref = useRef();
  const onShare = async uri => {
    const result = await Share.open({
      url: Platform.OS === 'ios' ? `file://${uri}` : uri,
    })
      .then(res => {
        setModalVisible(false);
      })
      .catch(err => {
        setModalVisible(false);
      })
      .finally(() => {
        setModalVisible(false);
      });
  };

  const onCapture = () => {
    ref.current.capture().then(uri => {
      onShare(uri);
    });
  };
  return (
    <>
      <TouchableOpacity onPress={openModal}>
        <Text>Make your own photo📸</Text>
      </TouchableOpacity>

      {result && (
        <Modal visible={ModalVisible} transparent={true} animationType="fade">
          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
            }}>
            <View style={styles.modalBackground} />
          </TouchableOpacity>
          <View style={styles.container}>
            <ViewShot
              ref={ref}
              options={{
                fileName: 'Your-File-Name',
                format: 'jpg',
                quality: 0.9,
              }}>
              <ImageBackground
                style={styles.modalcontent}
                source={require('../../../configs/assets/captureframe.png')}>
                <Image
                  source={{uri: result.assets[0].uri}}
                  style={styles.img}
                />
              </ImageBackground>
            </ViewShot>
          </View>
          <TouchableOpacity style={styles.btn} onPress={onCapture}>
            <Text style={[globalstyles.p1, styles.btntext]}>save & share</Text>
          </TouchableOpacity>
        </Modal>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: '100%',
    width: '100%',
  },

  img: {
    width: 240 * width,
    height: 300 * height,
    borderRadius: 16 * scale,
  },
  container: {
    position: 'absolute',
  },
  modalcontent: {
    top: 172 * height,
    left: 26 * width,
    width: 338 * width,
    height: 512 * height,
    borderRadius: 16 * scale,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    position: 'absolute',
    top: 700 * height,
    left: 145 * width,
    width: 100 * width,
    height: 40 * height,
    backgroundColor: '#282828',
    borderRadius: 8 * scale,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btntext: {
    color: 'white',
  },
});
