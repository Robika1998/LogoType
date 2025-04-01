import { useState, useEffect } from "react";
import { Post } from "../types/post";

export const usePostFilter = (posts: Post[], searchTerm: string) => {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);

  useEffect(() => {
    const filtered = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchTerm, posts]);

  return filteredPosts;
};
