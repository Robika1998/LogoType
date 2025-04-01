import { Post } from "../types/post";
import { apiManager } from "./apiManager";

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    return await apiManager.fetch<Post[]>("/data.json");
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};
