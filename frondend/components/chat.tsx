import React from 'react';
import {Alert, Image, Linking, StyleSheet, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const Chat = () => {
  const messager = 'http://m.me/lamquyet9x';

  const openMessenger = async () => {
    const supported = await Linking.canOpenURL(messager);
    if (supported) {
      await Linking.openURL(messager);
    } else {
      Alert.alert(`Don't know how to open this URL: ${messager}`);
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        openMessenger();
      }}>
      <Image
        source={require('../images/messenger.png')}
        style={styles.image}></Image>
    </TouchableWithoutFeedback>
  );
};

export default Chat;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});
