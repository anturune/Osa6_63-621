
import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { createNewNotification, removeNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'
//Uuden Anekdootin eristmäinen omaan komponenttiin ja exportattu muiden komponenttien/failien
//käyttöön
const AnecdoteForm = () => {
    const dispatch = useDispatch()

    //Muutetaan async/await, koska talletetaan uusi anecdote json serverille
    const addNewAnecdote = async (event) => {
        event.preventDefault()
        //console.log('MITÄ INPUT KENTTÄÄN TULEE', event.target.newAnecdote.value)
        const content = event.target.newAnecdote.value
        event.target.newAnecdote.value = ''
        //console.log('MITÄ INPUT KENTTÄÄN TULEE', content)
        //Tätä muutettu, kun luodaan anekdootti json serverille
        //const newAnecdote = await anecdoteService.createNewAnecdote(content)

        //Redux thunk:lla kun tehdäään, niin tämä riittää.
        //Eli menee "src/reducers/anecdoteReducer":in kautta "src/services/anecdote.js" fileen
        dispatch(createAnecdote(content))

        console.log('UUSI ANEKDOOTTI', content)

        //Luodaan Notificaatio anecdoten lisäämiseksi
        dispatch(createNewNotification(content))
        //Viiden sekunnin päästä poistetaan notificaatio
        setTimeout(() => {
            dispatch(removeNotification())
        }, 5000)
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

export { AnecdoteForm }
/*
//Tämä default export ei toiminut
export default AddAnecdote
*/