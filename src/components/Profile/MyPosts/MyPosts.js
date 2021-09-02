import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.scss';

let postsData = [
    {
        id: '1',
        message: 'My first post',
        likesCount: 2
    },
    {
        id: '2',
        message: 'Hey, how are you?',
        likesCount: 6
    }
];

let postsElements = postsData.map(postDataObj => {
    return <Post {...postDataObj} />
});

const MyPosts = () => {
    return (
        <div className={s.MyPosts}>
            <div className={s.CreateNewPost}>
                <textarea name="newPostArea" cols="30" rows="3" placeholder="What's new?"></textarea>
                <button>Create new post</button>
            </div>
            <div className={s.PrevPosts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;