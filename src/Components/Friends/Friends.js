import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleFriend from './SingleFriend';

const Friends = () => {
    const friends = useLoaderData();
    return (
        <div>
            <h1>I hava lots of friends: {friends.length}</h1>
            {
                friends.map(friend => <SingleFriend
                key={friend.id}
                allFriend={friend}
                />)
            }
        </div>
    );
};

export default Friends;