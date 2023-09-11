import React from 'react'
import {View} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
function SafeArea() {
    const inset = useSafeAreaInsets();
  return (
    <View style ={{
        height : inset.top, 
        width : '100%',
        backgroundColor : 'grey'
    }}>

    </View>
  )
}

export default SafeArea