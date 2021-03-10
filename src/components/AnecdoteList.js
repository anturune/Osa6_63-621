import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

//Eristetään omaan komponenttiin yksittäisen Anecdootin näyttäminen sekä vote nappi
const Anecdote = ({ anecdote, handleClick }) => {
    return (
        <div>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={handleClick}>vote</button>
            </div>
        </div>
    )
}

//Anekdoottien listaus eristetty omaan moduuliin
const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state)
    return (
        anecdotes.map(anecdote =>
            <Anecdote
                key={anecdote.id}
                anecdote={anecdote}
                handleClick={() => dispatch(voteAnecdote(anecdote.id))}
            />
        ))
}

export { AnecdoteList }
/*
//Tämä default export ei toiminut
export default AnecdoteList
*/