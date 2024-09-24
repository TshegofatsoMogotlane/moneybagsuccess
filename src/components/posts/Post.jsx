import React, { useState } from "react";
import { PostWrapper } from "./Post.styled";

const Post = () => {
  const [image, setImage] = useState(null);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleCommentChange = (e) => {
    setCommentInput(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentInput) {
      setComments([...comments, commentInput]);
      setCommentInput("");
    }
  };

  return (
    <PostWrapper>
      <div className="posts-container">
        <div className="post">
          <div className="profile-info">
            {/* <img src="assets/akhil.jpg" alt="Profile Image" /> */}
            <div className="user-info">
              <div className="username">BRICS EMPIRE PHOTOGRAPHY</div>
              <div className="handle">@bricsempire.io</div>
            </div>
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="image-upload"
          />
          {image && <img src={image} alt="Uploaded" className="uploaded-image" />}
          <button onClick={handleLike} className="like-button">
            Like {likes}
          </button>
          <form onSubmit={handleCommentSubmit} className="comment-form">
            <input
              type="text"
              value={commentInput}
              onChange={handleCommentChange}
              placeholder="Add a comment..."
              className="comment-input"
            />
            <button type="submit" className="submit-comment">Post</button>
          </form>
          <div className="comments-section">
            {comments.map((comment, index) => (
              <div key={index} className="comment">
                {comment}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PostWrapper>
  );
};

export default Post;

