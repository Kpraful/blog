import React from 'react'
import {Text,View,StyleSheet} from 'react-native'

const EditScreen = ({navigation}) =>{

	navigation.getParam('id')

	return(
		<View>
		<Text> Edit Screen = {navigation.getParam('id')}</Text>
		</View>
		)
}

export default EditScreen