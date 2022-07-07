import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import classusers from "./Users.module.css";

const Users = (props: UsersPropsType) => {

    if(props.usersPage.users.length === 0) {
        props.setUsers([
            {id: 1, followed: false, fullName: 'Vlad', status: 'I am a boss', location: {city: 'Moscow', country: 'Russia'}},
            {id: 2, followed: true, fullName: 'Katya', status: 'I am a boss too', location: {city: 'Kiev', country: 'Ukraine'}},
            {id: 3, followed: false, fullName: 'Uki', status: 'I am a cat', location: {city: 'Berlin', country: 'Germany'}},
        ]);
    }


    let usersData = props.usersPage.users.map(u => {
        return <div key={u.id}>
            <img className={classusers.avatar} src="https://bipbap.ru/wp-content/uploads/2017/08/04.-risunki-dlya-srisovki-legkie-dlya-devochek.jpg"/>
            <span>{u.fullName} </span>
            <span>{u.status}</span>
            {
                u.followed ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> :
                    <button onClick={() => {props.follow(u.id)}}>Follow</button>
            }
            <span>{u.location.country} </span>
            <span>{u.location.city}</span>
        </div>
    });
    return (
        <div>
            {usersData}
        </div>
    );
};

export default Users;