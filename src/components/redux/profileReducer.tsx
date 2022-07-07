import {ActionsTypes} from "./store";

type postsType = {
    id: number
    post: string
    likeCount: number
}

export type profilePageType = {
    posts: Array<postsType>
    newPost: string
}

let initialState: profilePageType = {
    posts: [
        {id: 1, post: 'Мы либо научимся жить вместе, либо погибнем по одиночке.', likeCount: 25},
        {id: 2, post: 'Людям очень трудно научиться говорить «я не знаю».', likeCount: 7},
    ],
    newPost: ''
}


const profileReducer = (state = initialState, action: ActionsTypes): profilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPostMessage: postsType = {
                id: 5,
                post: state.newPost,
                likeCount: 0
            }
            return {...state, posts: [...state.posts, newPostMessage], newPost: ''}
        }
        case "ON-POST-CHANGE": {
            return {...state, newPost: action.newText}
        }
        default: {
            return state;
        }
    }
}

export const addPostActionCreator = () => ({type: 'ADD-POST'} as const);
export const onPostChangeActionCreator = (text: string) => (
    {
        type: 'ON-POST-CHANGE',
        newText: text
    } as const);

export default profileReducer;