import { Post } from "../../types/post";
import "../../styles/Posts.css";

interface PostCardProps {
  post: Post;
  onClick: (post: Post) => void;
}

const PostCard = ({ post, onClick }: PostCardProps) => {
  return (
    <article className="post-card" onClick={() => onClick(post)}>
      <div className="post-image">
        <img
          src={post.img}
          srcSet={`${post.img} 1x, ${post.img_2x} 2x`}
          alt={post.title}
        />
      </div>
      <div className="post-content">
        <span className="post-tag">{post.tags}</span>
        <h2>{post.title}</h2>
        <div className="post-meta">
          <span>{post.autor}</span>
          <span>{post.date}</span>
          <span>{post.views} views</span>
        </div>
        <p>{post.text}</p>
      </div>
    </article>
  );
};

export default PostCard;
