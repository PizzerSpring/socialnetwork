import React from 'react';
import classmessage from './Message.module.css';

type MessagePropsType = {
    message: string
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={classmessage.message}>
            {props.message}
        </div>
    );
};

export default Message;