import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { getData } from "./Api/getData";
import { GridPostCard } from "./Components/GridPostCard";
import { SearchBar } from "./Components/SearchBar";
import { BASE_ENDPOINT } from "./Utility/constants";

export function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = await getData(`${BASE_ENDPOINT}?limit=0`);
        setPosts(result.posts);
        setFilteredPosts(result.posts);
      } catch (error) {
        alert("Error fetching data: " + error.message);
      }
    };
    fetchPosts();
  }, []);

  const handleFilteredPosts = (filteredPosts) => {
    setFilteredPosts(filteredPosts);
  };

  return (
    <>
      <Helmet>
        <title>The Posts. | All posts</title>
        <meta
          name="description"
          content="Home page of The Posts., where you can search for posts"
        />
      </Helmet>
      <div className="container">
        <SearchBar posts={posts} onFilteredPosts={handleFilteredPosts} />
        {filteredPosts.length === 0 ? (
          <p className="text-center mt-5 fs-5">
            No post title matching your search.
          </p>
        ) : (
          <div className="row py-5 g-5">
            {filteredPosts.map((post) => (
              <GridPostCard post={post} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
