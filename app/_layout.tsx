import { Platform, StyleSheet, Text, View } from 'react-native'
import { Slot } from 'expo-router'
import { useFonts} from 'expo-font'
import {StatusBar} from 'expo-status-bar'
import { globalStyles } from '@/styles/globalStyles'

import * as NavigationBar from 'expo-navigation-bar'

const isAndroid = Platform.OS === 'android';

if(isAndroid){
  NavigationBar.setBackgroundColorAsync('black')
}

const _layout = () => {
  
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  })

  if(!loaded){
    return null;
  }

  return (
    <View style={globalStyles.background}>
      <Text>_layout</Text>
      <Slot/>

      <StatusBar style="light" />
    </View>
  )
}

export default _layout

const styles = StyleSheet.create({})