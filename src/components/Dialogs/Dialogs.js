import React from "react";
import s from './Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.page.dialogDataObjs.map(dialogDataObj => {
        return <DialogItem {...dialogDataObj} />
    });

    let messagesElements = props.page.messagesData.map(messageObj => {
        return <Message {...messageObj} />
    });

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_list}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;