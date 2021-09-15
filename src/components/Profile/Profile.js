import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.scss';
import {updateNewPostText} from "../../redux/state";

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPosts postsData={props.page.postsData}
                     addPost={props.addPost}
                     newPostText={props.page.newPostText}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    );
}

export default Profile;