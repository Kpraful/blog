import React,{	useContext,useEffect} from 'react'
import {View,Text,StyleSheet,FlatList,Button,TouchableOpacity } from 'react-native'
// import blogContext from '../context/BlogContext'
import {Context} from '../context/exampleOfCreateDataContext'

import {Feather} from '@expo/vector-icons';

const indexScreen=({navigation})=>{

	// const {data,addBlogPost} = useContext(blogContext)
	const {state, addBlogPost, deleteBlogPost,getBlogPost} = useContext(Context);


	useEffect(()=> {

		// console.log(getBlogPost)
		getBlogPost()

	},[])
	
	return(

		<View >
			
			<FlatList


			data={state}
			keyExtractor={
				(data)=> String(data.id)
			}
			renderItem={
				function({item})
				{
					return(
						<TouchableOpacity onPress={()=> navigation.navigate('Show',{id: item.id})}>
						<View style={styles.row}>
						<Text style={styles.title}>{item.title} - {item.id} </Text>
						
						<TouchableOpacity onPress={()=> deleteBlogPost(item.id)}>
						<Feather name="trash" style={styles.icon} />
						</TouchableOpacity>
						</View>
						</TouchableOpacity>
						)
				}
			}

			/>

		</View>

		)
} 

indexScreen.navigationOptions= ({navigation})=>{

	return{
		
		headerRight:()=>(
			
		<TouchableOpacity onPress={ ()=> navigation.navigate('Create') }>
		<Feather name="plus" size={30} style={{marginRight: 50}}/>
		</TouchableOpacity>

		)
	}

}

const styles = StyleSheet.create({

	row:{

		flexDirection : 'row',
		justifyContent: 'space-between',
		paddingVertical:  20,
		borderTopWidth:  1,
		paddingHorizontal:10,
		borderColor: 'grey'
	},

	title:{

		fontSize: 18
	},

	icon:{

		fontSize: 15
	}
})

export default indexScreen