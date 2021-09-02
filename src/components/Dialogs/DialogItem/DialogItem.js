import React from "react";
import s from './../Dialogs.module.scss';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let classes = props.isActive ? s.item + ' ' + s.active : s.item;
    return (
        <NavLink className={classes} to={`/dialogs/${props.id}`}>
            {props.name}
        </NavLink>
    );
}

export default DialogItem;