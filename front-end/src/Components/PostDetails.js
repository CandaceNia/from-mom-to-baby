import { useState, useEffect, useContext } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../userContext';
import Counter from './Counter';
import {FaTrashAlt, FaEdit} from "react-icons/fa"

function PostDetails() {
  const trash = FaTrashAlt();
  const edit = FaEdit();
  const [post, setPost] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/posts/${id}`)
      .then((res) => {
        setPost(res.data.payload);
      })
      .catch(() => {
        navigate('not found');
      });
  }, [id]);

  const handleDelete = () => {
    const answer = window.confirm(
      `Are you sure you want to delete this post? It will be deleted forever.`
    );
    if (answer) {
      axios
        .delete(`{API}}/posts/${id}`)
        .then(() => {
          navigate('/posts');
        })
        .catch((err) => {
          console.warn(err);
        });
    }
  };

  const msg = useContext(UserContext);
  return (
    <article>
      <aside id="amount-of-likes"></aside>
      <div id="post-box">
        <h5 id="post-heading">Post</h5>
        <h5 id="userName">UserName : {post.name}</h5>
        <img
          src={post.image}
          alt={post.name}
          id="image"
        />
        <br></br>
        <p>{post.caption}</p>
        <Counter />
        <Link to={`/post/${post.id}/edit`}>
          <button>Edit</button>
        </Link>

        <button onClick={handleDelete}>DELETE {trash}</button>
      </div>
    </article>
  );
}
export default PostDetails;
