import React from 'react';
import classprofileinfo from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div className={classprofileinfo.content}>
            <div className={classprofileinfo.avahead}></div>
            <div className={classprofileinfo.nameavatar}>
                <span className={classprofileinfo.name}>Карл Маркс</span>
                <span className={classprofileinfo.namedescription}>Немецкий философ, экономист, писатель</span>
            </div>
            <div className={classprofileinfo.followercontainer}>
                <div className={classprofileinfo.followers}>Подписалось</div>
                <div className={classprofileinfo.followersnumber}>100</div>
            </div>
            <img className={classprofileinfo.avatar}
                 src='https://avatars.mds.yandex.net/get-zen_doc/1606228/pub_5d40aef1d11ba2229c914ff2_5d40afb3b96cfd23777c0824/scale_1200'/>
        </div>
    );
};

export default ProfileInfo;