import React,{useState,useReducer} from 'react'


const BlogContext = React.createContext();


//every info which Provider provide is passed to every child
const blogReducer=(state,action) =>{

	//state:title:"someTitle"
	//action===type:'add_blogpost'||'someOtherType'
	switch(action.type)
	{
		case 'add_blogpost':
			return(
					[...state,{title:`blog Post #${state.length+1}`}]

				)
		default: 
			return state
	}

}


export const BlogProvider=({children})=>{

	const[blogPost,dispatch]= useReducer(blogReducer, [])
	
	const addBlogPost=()=>{
		dispatch({type:'add_blogpost'})
	}

	// const blogPost=[
	// {title: 'blog post #1'},
	// {title:'blog post #2'}

	// ]

	return <BlogContext.Provider value={{data: blogPost , addBlogPost}}>
		{children}
	</BlogContext.Provider>
}

export default BlogContext;