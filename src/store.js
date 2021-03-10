import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import anecdoteReducer from './reducers/anecdoteReducer'
//import filterReducer from './reducers/filterReducer'

//Luodaan combineReducer, jotta voidaan käyttää useamppaa reduceria
const reducer = combineReducers({
  anecdotes: anecdoteReducer
  //filter: filterReducer
})

const store = createStore(
  reducer,
  composeWithDevTools()
)

export default store