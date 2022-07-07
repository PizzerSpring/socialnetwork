import React from 'react';
import {followAC, setUsersAC, unfollowAC, usersPageType, usersType} from "./redux/userReducer";
import {Istate} from "./redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import Users from "./Users";

type mapStateToPropsType = {
    usersPage: usersPageType
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<usersType>) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: Istate) => {
    return {
        usersPage: state.userPage
    }

}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users: Array<usersType>) => {
            dispatch(setUsersAC(users));
        },
    }

}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
