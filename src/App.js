import React from 'react'
//Vote funktio on "anecdoteReducer.js" filessä
import { voteAnecdote, createAnecdote } from './reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'







const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  //Id syötetään "anecdoteReducer.js" filessä olevalle voteAnecdote funktiolle
  const vote = (id) => {
    dispatch(voteAnecdote(id))
  }

  const newAnecdote = (event) => {
    event.preventDefault()
    console.log('MITÄ INPUT KENTTÄÄN TULEE', event.target.newAnecdote.value)
    const content = event.target.newAnecdote.value
    event.target.newAnecdote.value = ''
    console.log('MITÄ INPUT KENTTÄÄN TULEE', content)
    dispatch(createAnecdote(content))
  }


  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={newAnecdote}>
        <div><input name="newAnecdote" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App