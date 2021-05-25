import React,{useContext,useState} from 'react'
import {View,Text,TextInput,StyleSheet,Button} from 'react-native'
import {Context} from '../context/exampleOfCreateDataContext'
import BlogPostForm from '../components/BlogPostForm'
const CreateScreen=({navigation})=>{

	// navigation.getParam('id')
	// const {state}= useContext(Context)

	// const blogPost=state.find( (state)  => state.id==navigation.getParam('id') )

	const {addBlogPost} = useContext(Context)

	return <BlogPostForm 



		onSubmit={(title,content)=>{

		addBlogPost(title,content,()=> navigation.navigate('indexScreen'))


	} }/>
	// const [title, setTitle] = useState('')
	// const [content, setContent] = useState('')
	// return(

	// 	<View>
	// 		<Text style={styles.label}>Enter Title:</Text>
	// 		<TextInput value={title} onChangeText={(text)=> setTitle(text)} style={styles.input}/>
	// 		<Text style={styles.label}>Enter Content:</Text>
	// 		<TextInput style={styles.input} onChangeText={(text)=> setContent(text)}/>
	// 		<Button title="Add Blog Post"
	// 		onPress={
	// 			function()
	// 			{
	// 				addBlogPost(title,content)
	// 				navigation.navigate('indexScreen')
	// 			}
	// 		}

	// 		 />
	// 	</View>
	// 	)
}

BlogPostForm.defaultProps = {
  initialValues:
  {
  	title:'', 
  	content: ''
  }
}




// const styles=StyleSheet.create({

// 	input:{

// 		borderColor: '#000000',
// 		borderWidth: 1,
// 		fontSize: 18,
// 		padding: 5,
// 		margin: 5
// 	},
// 	label:{
// 		fontSize: 20,
// 		margin:5
// 	}

// })

export default CreateScreen;