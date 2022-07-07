import {ActionsTypes} from "./store";


type usersType = {
    id: number
    name: string
    src: string
}
export type messagesType = {
    id: number
    message: string
}
export type dialogsPageType = {
    messages: Array<messagesType>
    users: Array<usersType>
    newMessageText: string
}

let initialState: dialogsPageType = {
    users: [
        {id: 1, name: 'Екатерина', src: '/dialogs/1'},
        {id: 2, name: 'Владислав', src: '/dialogs/2'},
        {id: 3, name: 'Кирилл', src: '/dialogs/3'},
        {id: 4, name: 'Ольга', src: '/dialogs/4'},
        {id: 5, name: 'Константин', src: '/dialogs/5'},
    ],
    messages: [
        {id: 1, message: 'Во сколько сегодня?'},
        {id: 2, message: 'За сколько купил?'},
        {id: 3, message: 'Че сегодня поедем?'},
        {id: 4, message: 'Хорошо, напишу как появится возможность'},
        {id: 5, message: 'Куда поедем?'},
    ],
    newMessageText: ''
}


const dialogsReducer = (state: dialogsPageType = initialState, action: ActionsTypes): dialogsPageType => {
    switch (action.type) {
        case "ADD-MESSAGE": {
            let newMessage: messagesType = {
                id: 6,
                message: state.newMessageText
            }
            return {...state, messages: [...state.messages, newMessage], newMessageText: ''}
        }
        case "ON-MESSAGE-CHANGE": {
            return {...state, newMessageText: action.newTextOfMessage}
        }
        default: {
            return state;
        }
    }
}

export const addMessageActionCreator = () => ({type:'ADD-MESSAGE'} as const);
export const onMessageChangeActionCreator = (messageText: string) => (
    {
        type: 'ON-MESSAGE-CHANGE',
        newTextOfMessage: messageText
    } as const);

export default dialogsReducer;