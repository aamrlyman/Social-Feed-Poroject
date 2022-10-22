import "./CreatePostForm.css"
import React, { useEffect, useState } from 'react'
import {format} from "date-fns"

const CreatePostForm = (props) => {
    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit (event){
        event.preventDefault();
        const result = format(new Date(), 'MM/dd/yyyy, H:mm:ss' )
        // const fullDate = new Date();
        // const postDate = `${fullDate.getDate()} ${fullDate.getMonth()}` ;
        let newPost = {
            id: (props.posts.length + 1),
            name: name,
            post: post,
            date: result,
        }
        props.addNewPost(newPost)
        setName('');
        setPost('');
        
    }
    
    return ( 
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                    <div class="formItem">
                        <label>Name</label>
                        <input type="text" value={name} className="form-control" name="name" placeholder='name' onChange={(event) => setName(event.target.value)}/>
                    </div>
                    <div class="formItem">    
                        <label>Post</label>
                        <textarea type="text" value={post} className="form-control" name="post" placeholder='How are you feeling right now?' onChange={(event) => setPost(event.target.value)}/>
                        <button type="submit" className="btn btn-primary">Create</button>
                    </div>
            </div>
        </form>
     );
}
 
export default CreatePostForm;
