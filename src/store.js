import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import anecdoteReducer, { initializeAnecdotes } from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'

import anecdoteService from './services/anecdotes'

//Luodaan combineReducer, jotta voidaan käyttää useamppaa reduceria
const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer,
  filter: filterReducer
})

const store = createStore(
  reducer,
  composeWithDevTools()
)

console.log('JSONISTA KAIKKI', anecdoteService.getAll())
/*
//Tällä alustetaan alkutila json serveriltä ja "db.json" filestä
//HUOM! Alustus siirretty App.js fileen ja siellä käytetään effecHookia
anecdoteService.getAll().then(anecdotes => store.dispatch(initializeAnecdotes(anecdotes)))
*/

export default store