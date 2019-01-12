import * as actionTypes from './../actionscreators/actionTypes';

const initialState = {
    todos: []
}


export const todosReducer = (state = initialState.todos, action) => {
    switch (action.type) {
        case actionTypes.GET_TODOS:
            let todosData = action.data.slice(0,15)
            return [...todosData]

        default:
            return state
    }
}

export default todosReducer;