import * as actionTypes from './../actionscreators/actionTypes';

const initialState = {
    practise: {}
}


export const practiseReducer = (state = initialState.practise, action) => {
    switch (action.type) {
        case actionTypes.PRACTISE:
            let obj = Object.assign({}, action.data)
            let editForm = {
                firstName: obj.name,
                lastName: obj.username,
                email: obj.email,
                favoriteColor: 'ff0000',
                notes: obj.website
            }
            return {...editForm}

        default:
            return state
    }
}

export default practiseReducer;