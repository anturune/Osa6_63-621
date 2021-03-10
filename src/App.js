import React from 'react'
//Vote funktio on "anecdoteReducer.js" filessä
//import { voteAnecdote } from './reducers/anecdoteReducer'
//import { useSelector, useDispatch } from 'react-redux'
import { AnecdoteForm } from './components/AnecdoteForm'
import { AnecdoteList } from './components/AnecdoteList'


/*
//---------------UUSI ANECDOTE UUDEKSI KOPMONENTIKSI SIIRRETTY FILEEN "src/components/NewAnecdote"-----
const NewAnecdote = () => {
  const dispatch = useDispatch()
  const addNewAnecdote = (event) => {
    event.preventDefault()
    console.log('MITÄ INPUT KENTTÄÄN TULEE', event.target.newAnecdote.value)
    const content = event.target.newAnecdote.value
    event.target.newAnecdote.value = ''
    console.log('MITÄ INPUT KENTTÄÄN TULEE', content)
    dispatch(createAnecdote(content))
  }

  return (
    <div>
      <form onSubmit={addNewAnecdote}>
        <div><input name="newAnecdote" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}
//---------------UUSI ANECDOTE UUDEKSI KOPMONENTIKSI SIIRRETTY FILEEN "src/components/NewAnecdote"-----
*/
/*
//---------------ANECDOOTTIEN LISTAUS UUDEKSI KOPMONENTIKSI SIIRRETTY FILEEN "src/components/AnecdoteList"-----
const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state)
  return (
    anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => dispatch(voteAnecdote(anecdote.id))}>vote</button>
        </div>
      </div>
    ))
}
//---------------ANECDOOTTIEN LISTAUS UUDEKSI KOPMONENTIKSI SIIRRETTY FILEEN "src/components/AnecdoteList"-----
*/

const App = () => {
  /*
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  //Id syötetään "anecdoteReducer.js" filessä olevalle voteAnecdote funktiolle
  const vote = (id) => {
    dispatch(voteAnecdote(id))
  }
  */
  /*
    const newAnecdote = (event) => {
      event.preventDefault()
      console.log('MITÄ INPUT KENTTÄÄN TULEE', event.target.newAnecdote.value)
      const content = event.target.newAnecdote.value
      event.target.newAnecdote.value = ''
      console.log('MITÄ INPUT KENTTÄÄN TULEE', content)
      dispatch(createAnecdote(content))
    }
  */

  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <h2>create new</h2>
      <AnecdoteForm />
    </div>
  )
}

export default App