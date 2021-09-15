import React from "react";
import s from './Avatar.module.scss';

const Avatar = (props) => {
    return (
        <div className={props.className ? props.className : s.avatar}>
            <img src="https://avatars.githubusercontent.com/u/51361929?v=4?s=400" alt=""/>
        </div>
    );
}

export default Avatar;