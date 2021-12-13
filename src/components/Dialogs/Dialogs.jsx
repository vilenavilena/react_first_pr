import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to ={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.messages}>
            <div className={s.message}>Hello</div>
            <div className={s.message}>How are you</div>
            <div className={s.message}>Thanks</div>
            <div className={s.messages}>
                <NavLink to></NavLink>
            </div>
        </div>
        )

}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Maxim' id='1'/>
                <DialogItem name='Kate' id='2'/>
                <DialogItem name='Denis' id='3'/>
                <DialogItem name='Danya' id='1'/>
                <DialogItem name='Ann' id='1'/>
            </div>

        </div>
    )
}

export default Dialogs;