import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { voteNotification, removeNotification } from '../reducers/notificationReducer'

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
    //Luodaan funktio vote napille, joka lisää yhden äänen ja antaa notificaation
    //sekä tyhjää notificaation 5sec jälkeen
    const addAnecdoteVote = (anecdote) => {
        //console.log('AECDOTE VOTEING ID', anecdote.id)
        dispatch(voteAnecdote(anecdote.id))
        dispatch(voteNotification(anecdote.content))
        //Viiden sekunnin päästä poistetaan notificaatio
        setTimeout(() => {
            dispatch(removeNotification())
        }, 5000)

    }
    //Tähän pitää laittaa "state.anecdotes", koska monta reduceria
    const anecdotes = useSelector(state => state.anecdotes)
    //console.log('ANEKDOOTIT ', anecdotes)
    return (
        anecdotes.map(anecdote =>
            <Anecdote
                key={anecdote.id}
                anecdote={anecdote}
                handleClick={() => addAnecdoteVote(anecdote)} />
        ))
}

export { AnecdoteList }
/*
//Tämä default export ei toiminut
export default AnecdoteList
*/