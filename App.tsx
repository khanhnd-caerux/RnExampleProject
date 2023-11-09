/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {
  requestUserPermission,
  getFCMToken,
} from './src/helper/PushNotificationAndroid';
import {
  getFcmToken,
  registerListenerWithFCM,
} from './src/helper/PushNotificationIOS';

const App = () => {
  useEffect(() => {
    if (Platform.OS === 'ios') {
      getFcmToken();
      const unsubscribe = registerListenerWithFCM();
      return unsubscribe;
    } else {
      requestUserPermission();
      getFCMToken();
    }
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{alignSelf: 'center', flex: 1, justifyContent: 'center'}}>
        <Text style={{fontWeight: 'bold'}}>Push notification</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
