
//Tämä import tarvitaan, kun haetaan data json serveriltä
import anecdoteService from '../services/anecdotes'
/*
const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
*/

const anecdotesAtStart = []

const getId = () => (100000 * Math.random()).toFixed(0)

//Tällä luodaan anecdootti olio, jossa id ja votet mukana
const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}
//Lisätään jokaisell anekdootille oma id ja votesit hyödybtäen asObject funktiota
const initialState = anecdotesAtStart.map(asObject)

const anecdoteReducer = (state = initialState, action) => {

  switch (action.type) {

    case 'VOTE':
      //id tulee alla olevasta "voteAnecdote" funktiosta
      const id = action.data.id
      //Etsitään anecdote id:n perusteella jota votetaan
      const anecdoteToVote = state.find(n => n.id === id)
      //Lisätään vote anecdotelle
      const votedAnecdote = {
        ...anecdoteToVote,
        votes: anecdoteToVote.votes + 1
      }
      //Palautetaan uusi taulukon tila
      //Palautetaan kaikki muut anecdotet sellaisenaan paitsi äänestetty uudella arvolla
      //Lopuksi sortataan äänien mukaan
      return state.map(anecdote =>
        anecdote.id !== id
          ? anecdote
          : votedAnecdote).sort((a, b) => a.votes <= b.votes ? 1 : -1)
    //Luodaan uusi Anecdote
    case 'NEW_ANECDOTE':
      console.log('TULEEKO UUSI ANECDOTE', action.data)
      return [...state, action.data]
    //Luodaan noteiden alustus, joka tulee alla olevasta actionista
    //"initializeAnecdotes" ja aktivoidaan actioni "store.js" filestä
    case 'INIT_ANECDOTES':
      return action.data.sort((a, b) => a.votes <= b.votes ? 1 : -1)
    default:
      return state
  }
}

/*
//Tällä annetaan reducerille ID ja type, jolla määrätään mitä tehdään
//Action on javascript objekti jolla on type -field.
export const voteAnecdote = (id) => {
  console.log('TULIKO VOTEEN')
  return {
    type: 'VOTE',
    data: { id }
  }
}
*/
/*
//Tällä Luodaan uusi anecdote ja importataan esim. "App.js" fileen, josta
//tänne tuodaan anecdoten contentti
//Action on javascript objekti jolla on type -field.
export const createAnecdote = ({ content }) => {
  console.log('TULIKO CREATW ANECDOTEEN',content)
  return {
    type: 'NEW_ANECDOTE',
    data: {
      content,
      //Tätä ei tarvita, kun käytetään json serveriä, server luo itse id:n
      //id: getId(),
      votes: 0
    }
  }
}
*/
/*
//Action anecdoottien alustamiselle, tätä ajetaan "stor.js" filestä
export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes
  }
}
*/

//----------------NÄMÄ TOTEUTETTU REDUX THUNKILLA ALKAA----------------------------------
//Tällä annetaan reducerille ID ja type, jolla määrätään mitä tehdään
//Action on javascript objekti jolla on type -field.
//Kun päivitetään objecti tietokantaan, niin annetaan uusi objecti ja ID
//ja ajetaan "src/services/anecdotes.js" filessä put -komento, joka löytää
//anecdoten ID:n perusteella ja korvaa vanhan objectin uudella
//Anecdote ja id saadaan "src/Components/AnecdoteList.js" filestä ja 
//"const AnecdoteList = () => {" funktiosta
export const voteAnecdoteReduxThunk = (anecdote, id) => {
  console.log('TULIKO VOTEEN')
  return async dispatch => {
    //Viedään "src/services/anecdotes.js" filessä put -komennolle sekä
    //uusi anecdote obejkti, että vanhan/korvattavan objectin id
    await anecdoteService.addNewVote({
      content: anecdote.content,
      votes: anecdote.votes + 1
    }, anecdote.id)
    dispatch({
      type: 'VOTE',
      data: { id }
    })
  }
}

//Redux-thunk: Tällä Luodaan uusi anecdote ja importataan esim. "App.js" fileen, josta
//tänne tuodaan anecdoten contentti
//Action on javascript objekti jolla on type -field.
export const createAnecdote = content => {
  console.log('TULIKO CREATW ANECDOTEEN', content)
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNewAnecdote(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote,
    })
  }
}

//Redux-Thunk:lla tehtäessä sisemmässä funktiossaan, eli asynkronisessa actionissa operaatio hakee 
//ensin palvelimelta kaikki muistiinpanot ja sen jälkeen dispatchaa muistiinpanot 
//storeen lisäävän actionin.
export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}
//----------------NÄMÄ TOTEUTETTU REDUX THUNKILLA LOPPUU----------------------------------

export default anecdoteReducer