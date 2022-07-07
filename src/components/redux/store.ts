import profileReducer, { addPostActionCreator, onPostChangeActionCreator} from "./profileReducer";
import dialogsReducer, {addMessageActionCreator, onMessageChangeActionCreator} from "./dialogsReducer";
import {followAC, setUsersAC, unfollowAC} from "./userReducer";


export type StoreType = {
    _state: any
    _renderEntiredTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => any
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof onPostChangeActionCreator> |
    ReturnType<typeof addMessageActionCreator> |
    ReturnType<typeof onMessageChangeActionCreator> |
    ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC>


const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'Мы либо научимся жить вместе, либо погибнем по одиночке.', likeCount: 25},
                {id: 2, post: 'Людям очень трудно научиться говорить «я не знаю».', likeCount: 7},
            ],
            newPost: ''
        },
        dialogsPage: {
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
        },

    },
    _renderEntiredTree() {
    },
    subscribe(observer: () => void) {
        this._renderEntiredTree = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action: ActionsTypes) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._renderEntiredTree();
    }
}

export default store;