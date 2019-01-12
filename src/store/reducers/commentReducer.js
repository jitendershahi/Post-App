import * as actionTypes from './../actionscreators/actionTypes';

const initialState = {
    comments: []
}


export const commentReducer = (state = initialState.comments, action) => {
    switch (action.type) {
        case actionTypes.LOAD_COMMENTS_PER_POST:
            let comments_post = action.data.slice()
            return [...comments_post].slice(0, 50)

        default:
            return state
    }
}

export default commentReducer;