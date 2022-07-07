import React, {ChangeEvent, RefObject} from 'react';
import { NavLink } from 'react-router-dom';
import classdialogs from './Dialogs.module.css';
import DialogItem from "./DialogItem";
import Message from "./Message";
import {
    ActionsTypes
} from "./redux/store";
import {addMessageActionCreator, onMessageChangeActionCreator} from "./redux/dialogsReducer";
import {DialogsPropsType} from "./DialogsContainer";



const Dialogs = (props: DialogsPropsType) => {
    let usersData = props.dialogsPage.users.map((el) => {
        return (
            <DialogItem key={el.id} name = {el.name} src={el.src}/>
        )
    })
    let messagesData = props.dialogsPage.messages.map((el) => {
        return (
            <Message key={el.id} message={el.message} />
        )
    })
    let newMessage:RefObject<HTMLTextAreaElement>  = React.createRef();
    const addMessage = () => {
        props.addMessage();
    }

    const onMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.onMessageChange(e.currentTarget.value);
    }

    return (
        <div className={classdialogs.sectioncontainer}>
            <div className={classdialogs.dialogsusers}>
                {usersData}
            </div>
            <div className={classdialogs.dialogsmessages}>
                {messagesData}
                <textarea onChange={onMessageChange} value={props.dialogsPage.newMessageText} ref={newMessage}></textarea>
                <button onClick={addMessage}>Отправить</button>
            </div>
        </div>
    );
};

export default Dialogs;