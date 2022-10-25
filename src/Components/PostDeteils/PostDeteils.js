import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDeteils = () => {
    const post = useLoaderData();
    const {title, body} = post;
   
    return (
        <div>
            <p>Now showing Deteils about  <strong>{title}</strong> </p>
            <p>{body}</p>
        </div>
    );
};

export default PostDeteils;