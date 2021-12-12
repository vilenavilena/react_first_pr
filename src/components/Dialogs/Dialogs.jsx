import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = () => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to ='/dialog/2'>Maxim</NavLink>
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem />

                <div className={s.dialog}>
                    <NavLink to='/dialog/3'>Kate</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialog/4'>Danya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialog/5'>Denis</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello</div>
                <div className={s.message}>How are you</div>
                <div className={s.message}>Thanks</div>
            </div>
        </div>
    )
}

export default Dialogs;