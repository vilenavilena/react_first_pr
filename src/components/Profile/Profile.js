import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts.jsx'



const Profile = () => {
    return <div>
        <div>
            <img src="https://www.travelanddestinations.com/wp-content/uploads/2019/11/Beach-Destinations-in-Asia.jpg" />

        </div>
        <div>
            ava + desc
        </div>
        <MyPosts />
    </div>
}

export default Profile;