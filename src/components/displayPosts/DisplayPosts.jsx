import Post from "../Post/Post";
import "./DisplayPosts.css"
const DisplayPosts = (props) => {
    return (
        <div class= "DisplayPosts">
            {props.posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
        );

}
 
export default DisplayPosts;