

const DisplayPosts = (props) => {
    return (
        <div>
        {props.posts.map((post, index) =>{
            return (
                <div key={index}>
                    <h3>{post.name}</h3>
                    <p>{post.post}</p>
                    <button>Like</button>
                    <button>DisLike</button>
                </div>
                )
    } )}
    </div>);
}
 
export default DisplayPosts;