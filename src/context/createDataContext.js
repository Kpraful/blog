import React,{useReducer} from 'react';

//actions call back function
export default(reducer,actions,initialState) => {

	const Context= React.createContext();

	const Provider=({children})=> {

		const [state,dispatch]=useReducer(reducer,initialState);

		//actions==={addBlogPost :(dispatch)=> {return ()=> {} } }

		const boundActions={};

		for(let key in actions){

			// console.log(actions)
			console.log(actions[key])
			boundActions[key]=actions[key](dispatch);
		}
	// 	action[key](dispatch)===	const addBlogPost=(dispatch)=>{
	// 		dispatch({type:'add_blogpost'})
	// 	}

		return <Context.Provider value={{state, ...boundActions}} >
		{children}
		</Context.Provider>
	}

	return {Context,Provider};

};