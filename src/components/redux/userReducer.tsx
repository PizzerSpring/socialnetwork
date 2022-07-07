import {ActionsTypes} from "./store";

type locationType = {
    city: string
    country: string
}

export type usersType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: locationType
}

export type usersPageType = {
    users: Array<usersType>
}

const initialState: usersPageType = {
    users: [

    ]
}

const userReducer = (state: usersPageType = initialState, action: ActionsTypes): usersPageType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })}
        }
        case 'UNFOLLOW': {
            return {...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })}
        }
        case 'SET-USERS': {
            return {...state, users: [...state.users, ...action.users]}

        }
        default: {
            return state;
        }
    }
}

export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId
    } as const

}

export const unfollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
}

export const setUsersAC = (users: Array<usersType>) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}

export default userReducer;