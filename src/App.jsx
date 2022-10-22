import React, { useState } from 'react'
import DisplayPosts from './components/DisplayPosts/DisplayPosts';
import CreatePostForm from './components/CreatePostForm/CreatePostForm';
import NavBar from './components/NavBar/NavBar';
import {format} from "date-fns"
import "./App.css"


function App() {
      const result = format(new Date(), 'MM/dd/yyyy, H:mm:ss' )
      const [posts, setPosts] = useState([{id:1, name: "Bob", post: "I like learning to code at devCodeCamp. Its a really great place to learn and improve.", date: result }, 
                                          {id:2, name: "Joe", post: "Me too! Python is super fun and so is javascript!", date: result}])

  function addNewPost (post){
    let tempPosts = [post,...posts];
    setPosts(tempPosts)
  }

  return (
    <div>
      <NavBar/>
      <div className="main">
          <CreatePostForm posts={posts} addNewPost={addNewPost}/>
          <DisplayPosts posts={posts}/>
      </div>
    </div>
  );
}

export default App;
