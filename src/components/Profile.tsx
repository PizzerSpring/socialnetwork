import React from 'react';
import classprofile from "./Profile.module.css";
import Myposts from "./Myposts";
import ProfileInfo from "./ProfileInfo";
import {ActionsTypes} from "./redux/store";
import {Store} from "redux";
import {Istate} from "./redux/redux-store";
import MyPostsContainer from "./MyPostsContainer";

type ProfilePropsType = {

}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={classprofile.sectioncontainer}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;