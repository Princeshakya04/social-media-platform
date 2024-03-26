import React, { useState, useEffect } from 'react';
import "./post.css"
import { MoreVert } from "@material-ui/icons"
import moment from 'moment';
import axios from 'axios';

export default function Post({ post }) {
  const [username, setUsername] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8000/api/users/${post.user_id}`)
      .then(response => {
        setUsername(response.data.username);
      })
      .catch(error => {
        console.error('Error fetching user: ', error);
      });
  }, [post.user_id]);

    const timeAgo = moment(post.created_at).fromNow();

    return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/profile/manProfile.jpg" alt="" className="postProfileImg" />
                    <span className="postUsername">{username}</span>
                    <span className="postDate">{timeAgo}</span>
                </div>
                <div className="postTopRight">
                <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post.media} alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/assets/posts/like.png" alt="" className="likeIcon" />
                    <img src="/assets/posts/heart.png" alt="" className="likeIcon" />
                    <span className="postLikeCounter">{post.like_count} people like it</span>
                </div>
                <div className="topBottomRight">
                    <span className="postCommentText">{post.comment_count} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
