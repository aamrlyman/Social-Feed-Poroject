import React, { useEffect, useState } from 'react'

const CreatePostForm = (props) => {
    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit (event){
        event.preventDefault();
        let newPost = {
            id: (props.posts.length + 1),
            name: name,
            post: post
        }
        props.addNewPost(newPost)
        setName('');
        setPost('');
        
    }
    
    // useEffect(() => [name = setName(''), post = setPost('')], [onSubmit])

    return ( 
        <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" value={name} name="name" onChange={(event) => setName(event.target.value)}/>
                <label>Post</label>
                <input type="text" value={post} name="post" onChange={(event) => setPost(event.target.value)}/>
            <button type="submit" className="btn btn-primary">Create</button>
        </form>
     );
}
 
export default CreatePostForm;
