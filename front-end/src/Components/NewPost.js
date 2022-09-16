import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Post.css';

const API = process.env.REACT_APP_API_URL;

function PostNewForm() {

  const [post, setPost] = useState({
    name: '',
    image: '',
    caption: '',
  });

  const navigate = useNavigate();

const addPost = (post) => {
  axios
    .post(`${API}/posts`, post)
    .then(() => {
      navigate('/posts');
    })
    .catch((err) => {
      console.warn(err);
    });
    // console.log(`${API}/posts`);
  }
    const handleTextChange = (event) => {
      setPost({ ...post, [event.target.id]: event.target.value });
    };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    addPost(post);
  };

  return (
    <div>
      <div id="new-form-box">
        <form id="new-form"  onSubmit={handleSubmit}>
          <span>
            <label id="new-labels name-label">UserName</label>
            <br />
            <input
              required
              id="name-input"
              type="text"
              onChange={handleTextChange}
            />
          </span>
          <br />
          <span>
            <label id="new-labels image-label">Photo</label>
            <br />
            <input
              type="url"
              id="img-input"
              onChange={handleTextChange}
            />
          </span>
          <br />
          <span>
            <label id="new-labels caption-label">Caption</label>
            <br />
            <input
              required
              id="caption-input"
              type="text"
              onChange={handleTextChange}
              placeholder="What's on your mind..."
            />
          </span>
          <br></br>
          <button type='submit' id="new-post-submit-button">Sumbit</button>
        </form>
      </div>
    </div>
  );
  };
export default PostNewForm;