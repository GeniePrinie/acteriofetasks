import { useEffect, useState } from "react";
import { getData } from "./Api/getData";
import { PostsCard } from "./Components/PostsCard";

export function PostsPage() {
  const endpoint = "https://dummyjson.com/posts"; // TODO: Extract into const file
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = await getData(endpoint);
        setPosts(result.posts);
      } catch (error) {
        console.error("error fetching data", error); // TODO: Make alert
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="container">
      <PostsCard posts={posts} />
    </div>
  );
}
