import * as actionTypes from  './actionTypes'


export const loadPosts = (data) => {
    return {
        type:actionTypes.LOAD_POSTS,
        data:data
    }
}

export const loadComments = (data) => {
    return {
        type:actionTypes.LOAD_COMMENTS_PER_POST,
        data:data
    }
}

export const addPost = (post) => {
    return {
        type:actionTypes.ADD_POST,
        data:post
    }
}

export const editPost = (post) => {
    return {
        type:actionTypes.EDIT_POST,
        data:post
    }
}

export const getUsers = (users) => {
    return {
        type:actionTypes.GET_USERS,
        data:users
    }
}

export const getTodos = (todos) => {
    return {
        type:actionTypes.GET_TODOS,
        data:todos
    }
}
