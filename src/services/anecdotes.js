import axios from 'axios'

//Määritellään baseUrl, joka lukee datan "db.json" filestä
const baseUrl = 'http://localhost:3001/anecdotes'
//Funktio kaikkien anecdoottien hakemiseksi
const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

//Funktio uuden anecdootin luomiseksi
const createNewAnecdote = async (content) => {
    //Anecdote objectille votes nolla, ei tarvitse ID:tä koska json server hoitaa sen
    const anecdoteObject = { content, votes: 0 }
    const response = await axios.post(baseUrl, anecdoteObject)
    return response.data
}


//Funktio votettukselle
const addNewVote = async (newAnecdoteObject, id) => {
    //Anecdote objectin päivitys, etsitään ensin id:n perusteella kannasta ja päivitetään
    //uudella objectilla
    const response = await axios.put(`${baseUrl}/${id}`, newAnecdoteObject)
    return response.data
}

export default { getAll, createNewAnecdote, addNewVote }