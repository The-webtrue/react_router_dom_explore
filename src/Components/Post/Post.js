import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
  
    const {id,title, body} = post;

    
    // console.log(post);
    return (
        <div className='post_card'>
            <div>
                <p>Title {title}</p>
                <p><small>{body}</small></p>
               <Link to={`/post/${id}`}><button>More Deteils</button></Link>
            </div>
        </div>
    );
};

export default Post;