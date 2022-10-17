import React, { useState } from 'react'
import DisplayPosts from './components/displayPosts/DisplayPosts';
import CreatePostForm from './components/createPostForm/CreatePostForm';
import Post from './components/post/Post';


function App() {
      const [posts, setPosts] = useState([{name: "Bob", post: "message"}, {name: "Joe", post: "message"}])

  function addNewPost (post){
    let tempPosts = [...posts, post];
    setPosts(tempPosts)
  }

  return (
    <div>
      <CreatePostForm addNewPost={addNewPost}/>
      <Post/>
      <DisplayPosts posts={posts}/>
    </div>
  );
}

export default App;
