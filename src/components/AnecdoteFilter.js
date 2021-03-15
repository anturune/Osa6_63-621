import React from 'react'
//Tämä iport tarvitaan connect funktion käyttöön
import { connect } from 'react-redux'
//import { useDispatch } from 'react-redux'
//Importataan reducerista "filterAnecdotes" actioni
import { filterAnecdotes } from '../reducers/filterReducer'


/*
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
*/

//-------------TÄSSÄ KÄYTETÄÄN connect FUNKTIOTA dispatch HOOKIEN SIJAAN ALKAA----------------
//Otetaan input kentän sisältö talteen eventtinä ja muutetaan filterin tilaa 
//sitä mukaa kun kenttä täyttyy
//props:t kun käytetään connect funktiota, muuten ei
const Filter = (props) => {
    /*
    //------------TÄMÄ KUN KÄYTETÄÄN dispatch-HOOKIETA NIIN TÄMÄ ALKAA---------
    const dispatch = useDispatch()
    //------------TÄMÄ KUN KÄYTETÄÄN dispatch-HOOKIETA NIIN TÄMÄ LOPPUU--------
    */
    const handleChange = (event) => {
        //Estää mm. browserin uudelleen latautumisen
        event.preventDefault()
        //Otetaan inpute kenttää syötetty arvo talteen
        const howToFilter = event.target.value

        //------------TÄMÄ KUN KÄYTETÄÄN connect FUNKTIOTA ALKAA-------------------
        props.filterAnecdotes(howToFilter)
        //------------TÄMÄ KUN KÄYTETÄÄN connect FUNKTIOTA LOPPUU-------------------

        //------------TÄMÄ KUN KÄYTETÄÄN dispatch-HOOKIETA ALKAA-------------------
        //Viedään arvo "filterReducer.js":ssä olevalle "filterAnecdotes"
        //actionille
        //dispatch(filterAnecdotes(howToFilter))
        //------------TÄMÄ KUN KÄYTETÄÄN dispatch-HOOKIETA LOPPUU------------------

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

//Tässä mahdollistetaan importattu "filterAnecdotes" reducer välittäminen propseina
//Filter -komponentille
const mapDispatchToProps = {
    filterAnecdotes,
}
//Tällä välitetään "mapDispatchToProps" propsina Filter-komponentille
//HUOM! Default arvo null, muuten ei toimi renderöinti
const ConnectedFilter = connect(null, mapDispatchToProps)(Filter)
export default ConnectedFilter

//-------------TÄSSÄ KÄYTETÄÄN connect FUNKTIOTA dispatch HOOKIEN SIJAAN ALKAA----------------