import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "./Api/getData";
import { DetailedPostCard } from "./Components/DetailedPostCard";
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
      <DetailedPostCard post={post} />
    </div>
  );
}
