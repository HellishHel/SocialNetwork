import React from "react";
import s from './ProfileInfo.module.scss';

const ProfileInfo = () => {
    return (
        <div className={s.profile_info}>
            <div className={s.personal_image}></div>
            <div className={s.user_block}>
                <div className={s.avatar}>
                    <img src="https://avatars.githubusercontent.com/u/51361929?v=4?s=400" alt=""/>
                </div>
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