import * as actionTypes from './../actionscreators/actionTypes';

const initialState = {
    token: null,
    userId:null,
    error:null,
    loading:null
}


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
        return {
            ...state,
            error:null,
            loading:true
        }

        case actionTypes.AUTH_SUCCESS:
        return {
            ...state,
            token:action.data.idToken,
            userId:action.data.localId,
            error:null,
            loading:false
        }

        case actionTypes.AUTH_FAIL:
        return {
            loading:false,
            error:action.data
        }

        case actionTypes.LOG_OUT:
        return {
            ...state,
            token:null,
            userId:null
        }
           

        default:
            return state
    }
}

export default authReducer;