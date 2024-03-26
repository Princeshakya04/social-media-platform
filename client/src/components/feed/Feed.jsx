import { useEffect, useState } from "react";
import Post from "../post/Post.jsx";
import Share from "../share/Share.jsx";
import axios from 'axios';
import "./feed.css"

export default function Feed() {

  const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/posts')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error('Error fetching posts: ', error);
            });
    }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map(post => (
            <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
