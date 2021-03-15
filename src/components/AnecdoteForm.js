
import React from 'react'
//Tämä iport tarvitaan connect funktion käyttöön
import { connect } from 'react-redux'
//import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { createNewNotification, removeNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'


//---------TÄLLAINEN KOMPONENTTI, KUN KÄYTETÄÄN connect FUNKTIOTA ALKAA-----------------------
//Uuden Anekdootin eristmäinen omaan komponenttiin ja exportattu muiden komponenttien/failien
//käyttöön
const AnecdoteForm = (props) => {
    
    //Muutetaan async/await, koska talletetaan uusi anecdote json serverille
    const addNewAnecdote = async (event) => {
        event.preventDefault()
        
        const content = event.target.newAnecdote.value
        event.target.newAnecdote.value = ''
        //Kun käytetään connect funktiota, "createAnecdote" ja "createNewNotification"
        //on välitetty propseina
        props.createAnecdote(content)
        console.log('UUSI ANEKDOOTTI', content)
        props.createNewNotification(`YOU CREATED: '${content}'`, 10)

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
//Tässä mahdollistetaan importattu "createAnecdote" reducer välittäminen propseina
//AnecdoteForm -komponentille
const mapDispatchToProps = {
    createAnecdote,
    createNewNotification,
}
//Tällä välitetään "mapDispatchToProps" propsina AnecdoteForm-komponentille
//HUOM! Default arvo null, muuten ei toimi renderöinti
const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)
export default ConnectedAnecdoteForm

//------------------TÄLLAINEN KOMPONENTTI, KUN KÄYTETÄÄN connect FUNKTIOTA LOPPUU-----------------------


/*---------TÄLLAINEN KOMPONENTTI, KUN KÄYTETÄÄN dispatch Hookieta ALKAA-----------------------
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
        */
/*
        //Luodaan Notificaatio anecdoten lisäämiseksi
        dispatch(createNewNotification(content))
        //Viiden sekunnin päästä poistetaan notificaatio
        setTimeout(() => {
            dispatch(removeNotification())
        }, 5000)
        */
/*
//-----NOTIFICAATIO AWAIT/ASYNC:lla ALKAA------
dispatch(createNewNotification(`YOU CREATED: '${content}'`, 10))
//-----NOTIFICAATIO AWAIT/ASYNC:lla LOPPUU------

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
*/
//---------TÄLLAINEN KOMPONENTTI, KUN KÄYTETÄÄN dispatch Hookieta LOPPUU-----------------------
