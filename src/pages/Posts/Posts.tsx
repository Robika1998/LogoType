import { useState, useEffect } from "react";
import PostCard from "../../components/PostCard/PostCard";
import PostModal from "../../components/PostModal/PostModal";
import { usePostFilter } from "../../hooks/usePostFilter";
import { Post } from "../../types/post";
import { fetchPosts } from "../../api/Post";
import "../../styles/Posts.css";

interface PostsProps {
  searchTerm: string;
}

const Posts = ({ searchTerm }: PostsProps) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const filteredPosts = usePostFilter(posts, searchTerm);

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
    };

    loadPosts();
  }, []);

  return (
    <div className="posts-container">
      <div className="posts-grid">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <PostCard key={index} post={post} onClick={setSelectedPost} />
          ))
        ) : (
          <div className="no-results">
            Posts are empty, please search for another option
          </div>
        )}
      </div>

      {selectedPost && (
        <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </div>
  );
};

export default Posts;
