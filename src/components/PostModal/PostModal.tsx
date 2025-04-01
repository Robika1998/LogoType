import { Post } from "../../types/post";
import "../../styles/Posts.css";

interface PostModalProps {
  post: Post;
  onClose: () => void;
}

const PostModal = ({ post, onClose }: PostModalProps) => {
  return (
    <div className="post-modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <div className="modal-image">
          <img src={post.img_2x || post.img} alt={post.title} />
        </div>
        <div className="modal-text">
          <span className="post-tag">{post.tags}</span>
          <h2>{post.title}</h2>
          <div className="post-meta">
            <span>{post.autor}</span>
            <span>{post.date}</span>
            <span>{post.views} views</span>
          </div>
          <p>{post.text}</p>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
