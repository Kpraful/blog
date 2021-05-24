import React,{useContext} from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import {Context} from '../context/exampleOfCreateDataContext'
import {EvilIcons} from '@expo/vector-icons'
const ShowScreen=({navigation})=>{

	// navigation.getParam('id')
	const {state}= useContext(Context)

	const blogPost=state.find( (state)  => state.id==navigation.getParam('id') )

	console.log(blogPost)

	return(

		<View>
			<Text>{blogPost.content}</Text>
		</View>
		)
}

ShowScreen.navigationOptions = ({navigation})=>{

	return{
		headerRight: <TouchableOpacity onPress={()=> navigation.navigate('Edit',{id:navigation.getParam('id')})}>
		<EvilIcons name="pencil" size={34}/>
			</TouchableOpacity>
		}
	}


export default ShowScreen;