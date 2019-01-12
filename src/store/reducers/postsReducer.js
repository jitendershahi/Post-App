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

        case actionTypes.EDIT_POST:
            var editposts = [...state].filter(el => el !== action.data.id)
            var arr = [...editposts,action.data]
            let indexe = arr.findIndex(el => el.id === action.data.id);
            if(indexe === -1){
                return [...arr,action.data]
            } else {
                return arr
            }

        default:
            return state
    }
}

export default postsReducer;