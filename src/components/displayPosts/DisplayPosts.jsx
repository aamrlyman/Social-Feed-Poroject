import Post from "../post/Post";

const DisplayPosts = (props) => {
    return (
        <div>
            {props.posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
        );

}
 
export default DisplayPosts;