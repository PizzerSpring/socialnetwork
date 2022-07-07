import React, {ChangeEvent} from 'react';
import {Dispatch, Store} from "redux";
import {Istate} from "./redux/redux-store";
import Myposts from "./Myposts";
import {addPostActionCreator, onPostChangeActionCreator, profilePageType} from "./redux/profileReducer";
import {connect} from "react-redux";



type mapStateToPropsType = {
    profilePage: profilePageType
}

type mapDispatchToPropsType = {
    addPost: () => void
    onChangePostMessage: (value: string) => void

}

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: Istate): mapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        onChangePostMessage: (value: string) => {
            dispatch(onPostChangeActionCreator(value));
        }

    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);

export default MyPostsContainer;