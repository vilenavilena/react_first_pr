import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return <div>My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
        </div>
        <div className={s.posts}>
            <Post message='Hello' likesCount='90' />
            <Post message='How are you ' likesCount='125' />
            <Post message='Thirty seconds to mars concert' likesCount='3000' />
        </div>

    </div>
}

export default MyPosts