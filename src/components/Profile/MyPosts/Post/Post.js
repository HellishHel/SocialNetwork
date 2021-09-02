import React from "react";
import post from './Post.module.scss';

const Post = (props) => {
    return (
        <div className={post.Post}>
            <div className={post.avatar}>
                <img src="" alt=""/>
            </div>
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