import React from 'react';
import classdialogsitem from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    src: string
}

const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={classdialogsitem.user}>
            <NavLink className={classdialogsitem.useritem} to={props.src}>
                {props.name}
            </NavLink>
        </div>
    );
};

export default DialogItem;