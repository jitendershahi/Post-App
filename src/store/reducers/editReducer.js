import * as actionTypes from './../actionscreators/actionTypes';

const initialState = {
    editPost: {}
}


export const editReducer = (state = initialState.editPost, action) => {
    switch (action.type) {
        case actionTypes.EDIT_POST:
            return {
                title:'manoj',
                body:'sharma'
            }

        default:
            return state
    }
}

export default editReducer;