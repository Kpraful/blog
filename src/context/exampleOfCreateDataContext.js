import React, {
	useState,
	useReducer
} from 'react'


import jsonServer from '../api/jsonServer'
import createDataContext from './createDataContext'



//every info which Provider provide is passed to every child
const blogReducer = (state, action) => {

	//state:title:"someTitle"
	//action===type:'add_blogpost'||'someOtherType', payload
	switch (action.type) {
		case 'add_blogpost':
			return (
				[...state, {
					id: Math.floor(Math.random() * 999999),

					title:action.payload.title,

					content:action.payload.content,

				}]
			)

		case 'edit_blogPost':

			state=state.filter((state) => state.id!== action.payload.id)

			return(

						
						[...state,{

							title:action.payload.title,

							id:action.payload.id,

							content: action.payload.content,
						}]					
				)

		case 'delete_blogpost':
			return state.filter((blogPost) => blogPost.id !== action.payload)


		case 'get_blogpost':
			return action.payload

		default:
			return state
	}

}

const getBlogPost=dispatch=>{

	return async ()=>{

		const response=await jsonServer.get('/blogpost');

		//response.data === [{},{},{} ]
		dispatch({type:'get_blogpost',payload:response.data})
	}	
}

// WhenEvery this function is called it's inside function will be returned

// example=addBlogPost

// console.log(example)

// (title, content) => {

// 		dispatch({
// 			type: 'add_blogpost',
// 			payload: {
// 				title: title,
// 				content: content
// 			}
// 		})
const addBlogPost = (dispatch) => {
	return (title, content,callback) => {

		dispatch({
			type: 'add_blogpost',
			payload: {
				title: title,
				content: content
			}
		})

		if(callback){
			callback();
		}
	}

}

//Inner function is actually what run inside component
const editBlogPost=dispatch=>{

	return(id,title,content,callback)=>{

		dispatch({type:'edit_blogPost',payload:{id:id, title:title , content:content}})

		if(callback)
		{
			callback();
		}
	}
}


const deleteBlogPost = (dispatch) => {
	return (id) => {
		dispatch({
			type: 'delete_blogpost',
			payload: id
		}) //actually running inside component
	}
}

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost, editBlogPost, getBlogPost }, [])