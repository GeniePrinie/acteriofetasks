import { useEffect, useState } from "react";
import { getData } from "./Api/getData";
import { PostsCard } from "./Components/PostsCard";
import { BASE_ENDPOINT } from "./Utility/constants";

export function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = await getData(`${BASE_ENDPOINT}`);
        setPosts(result.posts);
      } catch (error) {
        alert("Error fetching data: " + error.message);
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
