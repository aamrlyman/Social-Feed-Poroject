import React, { useState } from 'react';
import LikeButtonDislikeButtons from '../LikeDislikeButtons/LikeDislikeButtons';


const Post = (props) => {


    return (
        <div>
            <h3>{props.post.name}</h3>
            <p>{props.post.post}</p>
            <LikeButtonDislikeButtons/>
        </div>
      );
}
 
export default Post;