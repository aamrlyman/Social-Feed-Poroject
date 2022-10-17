import Post from "../Post/Post";

const DisplayPosts = (props) => {
    return (
        <div>
            {props.posts.slice(0).reverse().map(post => <Post key={post.id} post={post}/>)}
        </div>
        );

}
 
export default DisplayPosts;