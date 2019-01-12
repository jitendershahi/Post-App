import * as actionTypes from './../actionscreators/actionTypes';

const initialState = {
    posts: []
}



export const postsReducer = (state = initialState.posts, action) => {
    switch (action.type) {
        case actionTypes.LOAD_POSTS:
            let posts = action.data.slice()
            return [...posts]

        case actionTypes.ADD_POST:
            let index = state.findIndex(el => el.id === action.data.id);
            if(index === -1){
                return [...state,action.data]
            } else {
                return state
            }

        default:
            return state
    }
}

export default postsReducer;