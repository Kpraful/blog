import React, {
	useState,
	useReducer
} from 'react'
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
		case 'delete_blogpost':
			return state.filter((blogPost) => blogPost.id !== action.payload)

		default:
			return state
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
	return (title, content) => {

		dispatch({
			type: 'add_blogpost',
			payload: {
				title: title,
				content: content
			}
		})
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

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost }, [{title: 'Test Post',content: 'Test Content',id:1  }])