import React from 'react';
import { Link } from 'react-router-dom';
import './SingleFriends.css'

const SingleFriend = ({allFriend}) => {
    const {id, name, email, username} = allFriend;
    
    return (
        <div className='friend'>
            <h1>Name : {name}</h1>
            <h2>email : {email}</h2>
            <p>user: <Link to={`/friends/${id}`}>{username}</Link></p>
        </div>
    );
};

export default SingleFriend;