import { useEffect, useState } from "react";
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
        const result = await getData(`${BASE_ENDPOINT}`);
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
    <div className="container">
      <SearchBar posts={posts} onFilteredPosts={handleFilteredPosts} />
      {filteredPosts.length === 0 ? (
        <p className="text-center">No post title matching your search.</p>
      ) : (
        <div className="row py-5 g-5">
          {filteredPosts.map((post) => (
            <GridPostCard post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
