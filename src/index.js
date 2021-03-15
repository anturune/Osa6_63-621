import React from 'react'
import ReactDOM from 'react-dom'
//import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'

//const store = createStore(anecdoteReducer)
/*
import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import anecdoteReducer from './reducers/anecdoteReducer'
//import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
  anecdotes: anecdoteReducer
  //filter: filterReducer
})

const store = createStore(
  reducer,
  composeWithDevTools()
)
*/
//store on luotu tiedostossa store.js
//console.log('INDEX.JS', store)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)