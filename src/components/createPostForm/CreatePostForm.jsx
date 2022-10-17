import React, { useState } from 'react'

const CreatePostForm = (props) => {
    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit (event){
        event.preventDefault();
        let newPost = {
            id: props.posts.length,
            name: name,
            post: post
        }
        
    }

    return ( 
        <form>
                <label>Name</label>
                <input type="text" value={name} name="name" onChange={(event) => setName(event.target.value)}/>
                <label>Post</label>
                <input type="text" value={post} name="post" onChange={(event) => setPost(event.target.value)}/>
            <button type="submit" className="btn btn-primary">Create</button>
        </form>
     );
}
 
export default CreatePostForm;
