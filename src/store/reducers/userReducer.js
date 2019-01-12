import * as actionTypes from './../actionscreators/actionTypes';

const initialState = {
    users: []
}


export const userReducer = (state = initialState.users, action) => {
    switch (action.type) {
        case actionTypes.GET_USERS:
            let users = action.data.slice()
            return [...users]

        default:
            return state
    }
}

export default userReducer;