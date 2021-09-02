import React from "react";
import s from './Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

let dialogDataObjs = [
    {
        id: '1',
        name: 'Maria',
        isActive: true
    },
    {
        id: '2',
        name: 'Nika',
        isActive: false
    },
    {
        id: '3',
        name: 'Ana',
        isActive: false
    }
];

let messagesData = [
    {
        id: '1',
        message: 'Hi'
    },
    {
        id: '2',
        message: 'What\'s up?'
    },
    {
        id: '3',
        message: 'Love you'
    },
    {
        id: '4',
        message: 'Kiss'
    }
];

let dialogsElements = dialogDataObjs.map(dialogDataObj => {
    return <DialogItem {...dialogDataObj} />
});

let messagesElements = messagesData.map(messageObj => {
    return <Message {...messageObj} />
});

const Dialogs = (props) => {
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