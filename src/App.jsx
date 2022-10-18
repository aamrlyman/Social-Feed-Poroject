import React, { useState } from 'react'
import DisplayPosts from './components/DisplayPosts/DisplayPosts';
import CreatePostForm from './components/CreatePostForm/CreatePostForm';
import NavBar from './components/NavBar/NavBar';
import {format} from "date-fns"

function App() {
      const result = format(new Date(), 'MM/dd/yyyy, H:mm:ss' )
      const [posts, setPosts] = useState([{id:1, name: "Bob", post: "You're Cool!", date: result }, 
                                          {id:2, name: "Joe", post: "No You aren't!", date: result}])

  function addNewPost (post){
    let tempPosts = [...posts, post];
    setPosts(tempPosts)
  }

  return (
    <div>
      <NavBar/>
      <CreatePostForm posts={posts} addNewPost={addNewPost}/>
      <DisplayPosts posts={posts}/>
    </div>
  );
}

export default App;
