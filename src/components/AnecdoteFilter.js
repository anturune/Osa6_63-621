import React from 'react'
import { useDispatch } from 'react-redux'
//Importataan reducerista "filterAnecdotes" actioni
import { filterAnecdotes } from '../reducers/filterReducer'

//Otetaan input kentän sisältö talteen eventtinä ja muutetaan filterin tilaa 
//sitä mukaa kun kenttä täyttyy
const Filter = () => {
    const dispatch = useDispatch()
    const handleChange = (event) => {
        //Estää mm. browserin uudelleen latautumisen
        event.preventDefault()
        //Otetaan inpute kenttää syötetty arvo talteen
        const howToFilter = event.target.value
        //Viedään arvo "filterReducer.js":ssä olevalle "filterAnecdotes"
        //actionille
        dispatch(filterAnecdotes(howToFilter))

    }
    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            filter <input onChange={handleChange} />
        </div>
    )
}

//export default Filter
export { Filter }