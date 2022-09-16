import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post.js";
const API = process.env.REACT_APP_API_URL;


export default function Posts () {
const [posts, setPosts] = useState ([]);

    useEffect (() => {
        axios
        .get(`${API}/posts`)
        .then((res) => {
            setPosts(res.data);
        }).catch((err) => {
            console.log(err)
        })

        }, []);


return (
<>
<section>
   <table>
        {posts.map((post) => {
            return <Post key={post.id} post={post} />;
        })}
        </table>

    </section>
    </>
)
}