
import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { createNewNotification, removeNotification } from '../reducers/notificationReducer'

//Uuden Anekdootin eristmäinen omaan komponenttiin ja exportattu muiden komponenttien/failien
//käyttöön
const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const addNewAnecdote = (event) => {
        event.preventDefault()
        console.log('MITÄ INPUT KENTTÄÄN TULEE', event.target.newAnecdote.value)
        const content = event.target.newAnecdote.value
        event.target.newAnecdote.value = ''
        console.log('MITÄ INPUT KENTTÄÄN TULEE', content)
        dispatch(createAnecdote(content))
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