import * as actionTypes from './actionTypes'
import axios from 'axios';

import toastr from 'toastr'

export const loadPosts = (data) => {
    return {
        type: actionTypes.LOAD_POSTS,
        data: data
    }
}

export const loadComments = (data) => {
    return {
        type: actionTypes.LOAD_COMMENTS_PER_POST,
        data: data
    }
}

export const addPost = (post) => {
    return {
        type: actionTypes.ADD_POST,
        data: post
    }
}

export const editPost = (post) => {
    return {
        type: actionTypes.EDIT_POST,
        data: post
    }
}

export const getUsers = (users) => {
    return {
        type: actionTypes.GET_USERS,
        data: users
    }
}

export const getTodos = (todos) => {
    return {
        type: actionTypes.GET_TODOS,
        data: todos
    }
}

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (data) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        data: data
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        data: error
    }
}

export const authLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type:actionTypes.LOG_OUT
    }
}

export const checkAuthTimeout = (expireTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(authLogout());
        }, expireTime * 1000);
    }
}

export const loginSubmit = (data, type) => {
    return dispatch => {
        dispatch(authStart());
        let form = {
            email: data.email,
            password: data.password,
            returnSecureToken: true
        }
        let url = ""
        if (type === "SignUp") {
            url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCAisoiMSdlrKOqBAxJN-cmfc8AAT7f7Ug"
        } else {
            url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCAisoiMSdlrKOqBAxJN-cmfc8AAT7f7Ug"
        }

        axios.post(url, form)
            .then((res) => {
                const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000)
                localStorage.setItem('token', res.data.idToken);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', res.data.localId);
                dispatch(authSuccess(res.data))
                dispatch(checkAuthTimeout(res.data.expiresIn))

            }).catch((err) => {
                toastr.error("User Already Exists " + err)
                dispatch(authFail(err))
            })
    }
}