import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getData } from "./Api/getData";
import { DetailedPostCard } from "./Components/DetailedPostCard";
import { BASE_ENDPOINT } from "./Utility/constants";

export function PostPage() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const result = await getData(`${BASE_ENDPOINT}/${id}`);
        setPost(result);
        setError(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchPost();
  }, [id]);

  const redirectToHome = () => {
    navigate("/");
  };

  return (
    <>
      <Helmet>
        <title>The Posts. | Post {id}</title>
        <meta name="description" content={`Details of Post ${id}`} />
      </Helmet>
      <div className="container">
        {error ? (
          <div className="mt-5 text-center">
            <h2>404 - Page Not Found</h2>
            <p>The page you're looking for does not exist.</p>
            <button className="btn btn-primary mt-4" onClick={redirectToHome}>
              Go back to all posts
            </button>
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </>
  );
}
