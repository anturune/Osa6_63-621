
//Annetaan initial arvo notification objectille
const initialState = { value: 'INITIAL NOTIFICATION' }

//Notificaation reducer
const notificationReducer = (state = initialState, action) => {

    switch (action.type) {
        //Äänestetään anecdotea
        case 'VOTE_NOTE':
            console.log('TULEEKO NOTIFICATIONIIN case VOTE', action.data)

            return state
        //Luodaan uusi Anecdote
        case 'NEW_ANECDOTE_NOTE':

            return state
        default:
            return state
    }
}



export default notificationReducer