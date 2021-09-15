import React from "react";
import post from './Post.module.scss';
import Avatar from "../../Avatar/Avatar";
import s from "../../ProfileInfo/ProfileInfo.module.scss";

const Post = (props) => {
    return (
        <div className={post.Post}>
            <Avatar className={post.avatar} />
            <div className={post.message}>
                {props.message}
            </div>
            <div className="likes">
                Likes: {props.likesCount}
            </div>
        </div>
    );
}

export default Post;