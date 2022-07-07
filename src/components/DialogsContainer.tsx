import React, {ChangeEvent} from 'react';
import Dialogs from "./Dialogs";
import {Istate} from "./redux/redux-store";
import {Dispatch, Store} from "redux";
import {addMessageActionCreator, dialogsPageType, onMessageChangeActionCreator} from "./redux/dialogsReducer";
import {connect} from "react-redux";


type mapStateToPropsType = {
    dialogsPage: dialogsPageType
}

type mapDispatchToPropsType = {
    addMessage: () => void
    onMessageChange: (value: string) => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: Istate): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        onMessageChange: (value: string) => {
            dispatch(onMessageChangeActionCreator(value));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;