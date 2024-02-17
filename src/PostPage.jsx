import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "./Api/getData";
import { PostCard } from "./Components/PostCard";

export function PostPage() {
  let { id } = useParams();

  const endpoint = `https://dummyjson.com/posts/${id}`; // TODO: Extract into const file
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const result = await getData(endpoint);
        setPost(result);
      } catch (error) {
        console.error("error fetching data", error); // TODO: Make alert
      }
    };
    fetchPost();
  }, [id]);

  return (
    <div className="container">
      <PostCard post={post} />
    </div>
  );
}
