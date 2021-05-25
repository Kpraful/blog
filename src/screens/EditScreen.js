import React,{useState,useContext} from 'react'
import {Text,View,StyleSheet,TextInput} from 'react-native'
import {Context} from '../context/exampleOfCreateDataContext'
import BlogPostForm from '../components/BlogPostForm'
const EditScreen = ({navigation}) =>{


	const id= navigation.getParam('id')

	const{state,editBlogPost}=useContext(Context)

	const blogPost=state.find((state)=> state.id===navigation.getParam('id'))

	// const[title,setTitle]=useState(blogPost.title)

	// const[content,setContent]=useState(blogPost.content)
	// return(
	// 	<View>
	// 	<Text> Edit Title:</Text>
	// 	<TextInput style={styles.input} value={title} onChangeText={(newTitle)=> setTitle(newTitle) }/>

	// 	</View>
	// 	)

	return <BlogPostForm 
		initialValues={{title:blogPost.title, content: blogPost.content}}

		onSubmit={
			function(title,content)
			{
				editBlogPost(id,title,content,()=>navigation.navigate('indexScreen'))
			}
		}
	
	/>
}

const styles=StyleSheet.create({

	input:{

		borderColor: '#000000',
		borderWidth: 1,
	}

})

export default EditScreen