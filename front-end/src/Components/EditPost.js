import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

function EditPost () {
    let { id } = useParams();
    const navigate = useNavigate();
    const API = process.env.REACT_APP_API_URL

    const [post, setPost] = useState ({
        name: "",
        image: "",
        caption: "",
    });

    const handleTextChange = (event) => {
        setPost ({ ...post, [event.target.id]: event.target.value })
    }

    useEffect (() => {
        axios.get (`${API}/posts/${id}`)
        .then((res) => {
            setPost (res.data.payload);
        }).catch((err) => {
            navigate ("/not-found");
        })
    }, [id]);
 
    const handleSubmit = ( event) => {
        event.preventDefault ();
        axios
        .put(`${API}/posts/${id}`, post)
        .then((res) => {
            navigate("/posts");
        }).catch((err) => {
            console.log(err)
        })
        };
        return (
<div>
    <form onSubmit={handleSubmit}>
        <label htmlFor="name"> UserName</label>
        <input
        id="name"
        value={post.name}
        type="text"
        onChange={handleTextChange}
        />
        <label htmlFor="image"> Image</label>
        <input
        id="image"
        value={post.image}
        onChange={handleTextChange}
        type="text"
        />
        <label htmlFor="caption">Caption</label>
        <input
        id="caption"
        value={post.caption}
        onChange={handleTextChange}
        type="text"
        />
        <br/>
        <button type="submit">Submit</button>
    </form>
</div>
        )
    }

export default EditPost;