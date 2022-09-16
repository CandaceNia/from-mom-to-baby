import { Link } from "react-router-dom";
import Counter from "./Counter";
import css from "./Post.css"

function Post({ post }) {
  return (
    <>
    <div className="Post">
      <h5 id="post-heading">Post</h5>
        <h5 id="userName">UserName : {post.name}</h5>
            <img src={post.image} alt={post.name} id="image"/>
            <br></br>
            <p>{post.caption}</p>
            <Counter/>   
    </div>
    </>
  );
}

export default Post;