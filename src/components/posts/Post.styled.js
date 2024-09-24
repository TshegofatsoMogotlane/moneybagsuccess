import styled from "styled-components";

export const PostWrapper = styled.div`
  .posts-container {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background-color: ${(props) => props.theme.colors.background};
  }

  .post {
    border: 1px solid lightgray;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
    background-color: white;
  }

  .profile-info {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .user-info {
    margin-left: 1rem;
  }

  .username {
    font-weight: bold;
  }

  .handle {
    color: gray;
  }

  .image-upload {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .uploaded-image {
    max-width: 100%;
    border-radius: 8px;
    margin-top: 0.5rem;
  }

  .like-button {
    margin-top: 1rem;
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  .comment-form {
    display: flex;
    margin-top: 1rem;
  }

  .comment-input {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid lightgray;
    border-radius: 5px;
    margin-right: 0.5rem;
  }

  .submit-comment {
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  .comments-section {
    margin-top: 1rem;
    max-height: 150px;
    overflow-y: auto;
  }

  .comment {
    margin: 0.5rem 0;
  }
`;

