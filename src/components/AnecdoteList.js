import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdoteReduxThunk } from '../reducers/anecdoteReducer'
import { createNewNotification, voteNotification, removeNotification } from '../reducers/notificationReducer'

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
        //dispatch(voteAnecdote(anecdote.id))

        //Näin voten lisäys kun käytetään redux thunkia
        //Annetaan anecdote kokonaisuudessaan ja id "anecdoteReducerille"
        dispatch(voteAnecdoteReduxThunk(anecdote, anecdote.id))

        //------------NOTIFICATION AWAIT/ASYNC:lla----------------------------
        dispatch(createNewNotification(`YOU VOTED: '${anecdote.content}'`, 10))

        //------------NOTIFICATION AWAIT/ASYNC:lla----------------------------
        /*
        dispatch(voteNotification(anecdote.content))
        //Viiden sekunnin päästä poistetaan notificaatio
        setTimeout(() => {
            dispatch(removeNotification())
        }, 5000)
        */
    }
    //Näytetään kaikki jos ei ole "filter" kenttään kirjoittetu mitään
    //Otetaan filterin arvo talteen (voidaan myös laittaa suoraan if-lauseeseen) "state.filter.value"
    //ja tällöin ei tarvita tätä apumuuttujaa. HUOM! muutetaan vielä arvo lower caseksi, niin ei ole case
    //sensitive
    const filter = useSelector(state => state.filter.value.toLocaleLowerCase())
    const anecdotes = useSelector(state => {
        if (filter === '') {
            return state.anecdotes
        }
        //Filteröidään pois ne anecdootit, jotka eivät sisällä filter kentän arvoa
        //HUOM! muutetaan lower caseksi anecdootit ettei ole case sensitive
        return state.anecdotes.filter(anecdote => anecdote.content.toLocaleLowerCase().includes(filter))
    })

    //console.log('FILETERIN ARVO', filter)
    //console.log('ANECDOTESIT', anecdotes)
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
//Tämä default export ei toiminut--> toimii jos ei importata hakasuluilla "{}"
export default AnecdoteList
*/