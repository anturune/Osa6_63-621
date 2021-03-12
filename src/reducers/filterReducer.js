//Annetaan initial arvo notification objectille
const initialState = { value: '' }

//Filterin tilankäsittelijä eli reducer

//HUOM! tätä reduceria ajetaan "src/components/AnecdoteFilter.js" komponentista
//ja tilaa hyödynnetään "AnecdoteList.js" komponentissa filteröimään pois ne
//anecdootit, jotka eivät sisällä kenttään syötettyjä merkkejä

//HUOM! Muista lisätä reduceri "store.js" fileen!

//HUOM! "filter" kenttää pitää lisätä renderöitymään "App.js" filestä. 
//Kentän määritys "src/components/AnecdoteFilter.js"-komponentissa
const filterReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'FILTER_ANECDOTES_ALIGN_WITH_INPUT':
            //console.log('TULEEKO NOTIFICATIONIIN case VOTE', action.data)
            return { ...state, value: action.data.content }
        default:
            return state
    }
}


//Tällä actionilla annetaan käsky palauttaa "NEW_ANECDOTE_NOTE" tila 
//Action on javascript objekti jolla on type -field.
export const filterAnecdotes = (content) => {
    return {
        type: 'FILTER_ANECDOTES_ALIGN_WITH_INPUT',
        data: { content }
    }
}

export default filterReducer