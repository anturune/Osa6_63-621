import axios from 'axios'

//Määritellään baseUrl, joka lukee datan "db.json" filestä
const baseUrl = 'http://localhost:3001/anecdotes'
//Funktio kaikkien anecdoottien hakemiseksi
const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

export default { getAll }