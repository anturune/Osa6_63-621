
//Annetaan initial arvo notification objectille
const initialState = { value: 'Mukavaa päivää' }


const notificationReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'VOTE_ANECDOTE_NOTE':
            //console.log('TULEEKO NOTIFICATIONIIN case VOTE', action.data)
            return { ...state, value: 'ANECDOTE VOTED: ' + action.data.content }
        //Luodaan uusi Anecdote
        case 'NEW_ANECDOTE_NOTE':
            //console.log('TULEEKO NOTIFICATIONIIN case NEW_ANECDOTE_NOTE', action.data)
            return { ...state, value: 'NEW ANECDOTE ADDED: ' + action.data.content }
        //Poistetaan notificaatio 5sec jälkeen
        case 'REMOVE_NOTE':
            return { ...state, value: null }
        default:
            return state
    }
}


//Tällä actionilla annetaan käsky palauttaa "NEW_ANECDOTE_NOTE" tila 
//Action on javascript objekti jolla on type -field.
export const createNewNotification = (content) => {
    return {
        type: 'NEW_ANECDOTE_NOTE',
        data: { content }
    }
}
//Tällä actionilla annetaan käsky palauttaa "REMOVE_NOTE" tila 
//Action on javascript objekti jolla on type -field.
export const removeNotification = () => {
    return {
        type: 'REMOVE_NOTE'
    }
}

//Tällä actionilla annetaan käsky palauttaa "NEW_ANECDOTE_NOTE" tila 
//Action on javascript objekti jolla on type -field.
export const voteNotification = (content) => {
    return {
        type: 'VOTE_ANECDOTE_NOTE',
        data: { content }
    }
}

export default notificationReducer
