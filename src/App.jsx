import React, { useState } from 'react'
import DisplayPosts from './components/displayPosts/DisplayPosts';
import CreatePostForm from './components/createPostForm/CreatePostForm';


function App() {
      const [posts, setPosts] = useState([{id:1, name: "Bob", post: "message"}, {id:2, name: "Joe", post: "message"}])

  function addNewPost (post){
    let tempPosts = [...posts, post];
    setPosts(tempPosts)
  }

  return (
    <div>
      <CreatePostForm posts={posts} addNewPost={addNewPost}/>
      <DisplayPosts posts={posts}/>
    </div>
  );
}

export default App;
