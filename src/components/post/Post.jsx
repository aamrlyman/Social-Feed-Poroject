import React, { useState } from 'react';
import LikeButtonDislikeButtons from '../LikeDislikeButtons/LikeDislikeButtons';
import "./Post.css"

const Post = (props) => {


    return (
        <div className='post'>
            <h3>{props.post.name}</h3>
            <p>{props.post.post}</p>
            <p>{props.post.date}</p>
            <LikeButtonDislikeButtons/>
        </div>
      );
}
 
export default Post;