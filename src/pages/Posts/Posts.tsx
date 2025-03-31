import { useState, useEffect } from "react";

import "../../styles/Posts.css";
import { Post } from "../../types/post";

interface PostsProps {
  searchTerm: string;
}

const Posts = ({ searchTerm }: PostsProps) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://cloud.codesupply.co/endpoint/react/data.json"
        );
        const data = await response.json();
        setPosts(data);
        setFilteredPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const filtered = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchTerm, posts]);

  return (
    <div className="posts-container">
      <div className="posts-grid">
        {filteredPosts.map((post, index) => (
          <article
            key={index}
            className="post-card"
            onClick={() => setSelectedPost(post)}
          >
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
        ))}
      </div>

      {selectedPost && (
        <div className="post-modal" onClick={() => setSelectedPost(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-button"
              onClick={() => setSelectedPost(null)}
            >
              ×
            </button>
            <div className="modal-image">
              <img
                src={selectedPost.img_2x || selectedPost.img}
                alt={selectedPost.title}
              />
            </div>
            <div className="modal-text">
              <span className="post-tag">{selectedPost.tags}</span>
              <h2>{selectedPost.title}</h2>
              <div className="post-meta">
                <span>{selectedPost.autor}</span>
                <span>{selectedPost.date}</span>
                <span>{selectedPost.views} views</span>
              </div>
              <p>{selectedPost.text}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Posts;
