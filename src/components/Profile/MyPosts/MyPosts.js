import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.scss';
import {updateNewPostText} from "../../../redux/state";

const MyPosts = (props) => {
    let postsElements = props.postsData.map(postDataObj => {
        return <Post {...postDataObj} />
    });

    let newPostArea = React.createRef();

    let onPostChange = () => {
        let text = newPostArea.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.MyPosts}>
            <div className={s.CreateNewPost}>
                <textarea ref={newPostArea}
                          name="newPostArea" cols="30" rows="3"
                          placeholder="What's new?"
                          value={props.newPostText}
                          onChange={onPostChange}/>
                <button onClick={props.addPost}>Create new post</button>
            </div>
            <div className={s.PrevPosts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;