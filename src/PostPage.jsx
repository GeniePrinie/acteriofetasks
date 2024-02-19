import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
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
    <>
      <Helmet>
        <title>The Posts. | Post {id}</title>
        <meta name="description" content={`Details of Post ${id}`} />
      </Helmet>
      <div className="container">
        <div className="mt-3">
          <Link to="/" className="breadcrumbs">
            All posts
          </Link>{" "}
          /{" "}
          <Link
            to={`/posts/${id}`}
            className="breadcrumbs text-decoration-underline"
          >
            Post {id}
          </Link>
        </div>

        <DetailedPostCard post={post} />
      </div>
    </>
  );
}
