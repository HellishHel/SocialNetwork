import React from "react";
import s from './ProfileInfo.module.scss';
import Avatar from "../Avatar/Avatar";

const ProfileInfo = () => {
    return (
        <div className={s.profile_info}>
            <div className={s.personal_image}></div>
            <div className={s.user_block}>
                <Avatar className={s.avatar} />
                <div className={s.description}>
                    <div className={s.username}>Username</div>
                    <div className={s.user_description}>
                        User's description
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;