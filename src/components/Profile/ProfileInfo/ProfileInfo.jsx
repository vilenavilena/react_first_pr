import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return <div>
        <div>
            <img src="https://www.travelanddestinations.com/wp-content/uploads/2019/11/Beach-Destinations-in-Asia.jpg"/>
        </div>
        <div className={s.descriptionBlock}>
            ava + desc
        </div>
    </div>
}

export default ProfileInfo;