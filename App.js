import React from 'react' //for using jsx
import {
  createStackNavigator
} from 'react-navigation-stack';

import {createAppContainer} from 'react-navigation';

import indexScreen from './src/screens/IndexScreen';

import {BlogProvider} from './src/context/BlogContext'

import {Provider} from './src/context/exampleOfCreateDataContext'

import ShowScreen from './src/screens/ShowScreen'

import CreateScreen from './src/screens/CreateScreen'

import Edit from "./src/screens/EditScreen"
const navigator=createStackNavigator({

  indexScreen:indexScreen,
  Show: ShowScreen,
  Create: CreateScreen,
  Edit:Edit,

},{
  initialRouteName:'indexScreen',
  defaultNavigationOptions:{
    title:'Blog'
  }
})

const App= createAppContainer(navigator)

export default()=> {
  return <Provider>
      <App/>
  </Provider>
}