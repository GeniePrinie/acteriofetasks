import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "./Api/getData";
import { PostCard } from "./Components/PostCard";
import { BASE_ENDPOINT } from "./Utility/constants";

export function PostPage() {
  let { id } = useParams();

  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const result = await getData(`${BASE_ENDPOINT}/${id}`);
        setPost(result);
      } catch (error) {
        alert("Error fetching data: " + error.message);
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
