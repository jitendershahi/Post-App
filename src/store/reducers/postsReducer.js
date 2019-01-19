import * as actionTypes from './../actionscreators/actionTypes';

const initialState = {
    posts: [{
            title: "test A",
            body: "body A",
            id: 1
        },
        {
            title: "test B",
            body: "body B",
            id: 2
        },
        {
            title: "test C",
            body: "body C",
            id: 3
        },
        {
            title: "test D",
            body: "body D",
            id: 4
        },
        {
            title: "test E",
            body: "body E",
            id: 5
        }
    ]
}

export const postsReducer = (state = initialState.posts, action) => {
    switch (action.type) {
        case actionTypes.LOAD_POSTS:
            return [...state]

        case actionTypes.ADD_POST:
            let obj = {
                ...action.data,
                id:state.length + 1
            }
            let posts = state.concat(obj)
            return [...posts]
            // let index = state.findIndex(el => el.id === action.data.id);
            // if (index === -1) {
            //     return [...state, action.data]
            // } else {
            //     return state
            // }


        case actionTypes.EDIT_POST:
            var editposts = [...state].filter(el => el.id !== action.data.id)
            var arr = [...editposts,action.data]
            return [
                ...arr
            ]
            // var editposts = [...state].filter(el => el !== action.data.id)
            // var arr = [...editposts, action.data]
            // let indexe = arr.findIndex(el => el.id === action.data.id);
            // if (indexe === -1) {
            //     return [...arr, action.data]
            // } else {
            //     return arr
            // }

        case actionTypes.DELETE_POST:
             var postss = [...state].filter(el => el.id !== action.data)
             return [...postss]

        default:
            return state
    }
}

export default postsReducer;

// export const postsReducer = (state = initialState.posts, action) => {
//     switch (action.type) {
//         case actionTypes.LOAD_POSTS:
//             let posts = action.data.slice()
//             return [...posts]

//         case actionTypes.ADD_POST:
//             let index = state.findIndex(el => el.id === action.data.id);
//             if(index === -1){
//                 return [...state,action.data]
//             } else {
//                 return state
//             }

//         case actionTypes.EDIT_POST:
//             var editposts = [...state].filter(el => el !== action.data.id)
//             var arr = [...editposts,action.data]
//             let indexe = arr.findIndex(el => el.id === action.data.id);
//             if(indexe === -1){
//                 return [...arr,action.data]
//             } else {
//                 return arr
//             }

//         default:
//             return state
//     }
// }