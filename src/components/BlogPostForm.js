import React,{useContext,useState} from 'react'
import {View,Text,TextInput,StyleSheet,Button} from 'react-native'
// import {Context} from '../context/exampleOfCreateDataContext'

const BlogPostForm=({onSubmit,initialValues})=>{

		const [content, setContent] = useState(initialValues.content)
		const [title, setTitle] = useState(initialValues.title)
		// console.log(initialValues)
		// console.log(initialValues.content)
		

		return(

		<View>
			<Text style={styles.label}>Enter Title:</Text>
			<TextInput value={title} onChangeText={(text)=> setTitle(text)} style={styles.input}/>
			<Text style={styles.label}>Enter Content:</Text>
			<TextInput value ={content} style={styles.input} onChangeText={(text)=> setContent(text)}/>
			<Button title="Save Blog Post" 

			onPress={()=> onSubmit(title,content)}
			/>
		</View>
		)

}

const styles=StyleSheet.create({

	input:{

		borderColor: '#000000',
		borderWidth: 1,
		fontSize: 18,
		padding: 5,
		margin: 5
	},
	label:{
		fontSize: 20,
		margin:5
	}

})
export default BlogPostForm