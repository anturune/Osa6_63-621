const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
//
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
    default:
      return state
  }
}
//Tällä annetaan reducerille ID ja type, jolla määrätään mitä tehdään
//Action on javascript objekti jolla on type -field.
export const voteAnecdote = (id) => {
  console.log('TULIKO VOTEEN')
  return {
    type: 'VOTE',
    data: { id }
  }
}

//Tällä Luodaan uusi anecdote ja importataan esim. "App.js" fileen, josta
//tänne tuodaan anecdoten contentti
//Action on javascript objekti jolla on type -field.
export const createAnecdote = (content) => {
  console.log('TULIKO CREATW ANECDOTEEN')
  return {
    type: 'NEW_ANECDOTE',
    data: {
      content,
      id: getId(),
      votes: 0
    }
  }
}


export default anecdoteReducer