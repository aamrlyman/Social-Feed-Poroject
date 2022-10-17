import React, { useState } from 'react';


const Post = (props) => {


    return (
        <div>
        <h3>{props.post.name}</h3>
        <p>{props.post.post}</p>
        <button>Like</button>
        <button>DisLike</button>
         </div>
      );
}
 
export default Post;