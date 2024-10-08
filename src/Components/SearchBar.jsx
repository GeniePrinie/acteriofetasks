import { useEffect, useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

export const SearchBar = ({ posts, onFilteredPosts }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const filteredPosts =
      search === ""
        ? posts
        : posts.filter((post) =>
            post.title.toLowerCase().includes(search.toLowerCase())
          );
    onFilteredPosts(filteredPosts);
  }, [onFilteredPosts, posts, search]);

  return (
    <div
      className="mx-auto mt-5"
      style={{
        maxWidth: "450px",
      }}
    >
      <Form>
        <InputGroup>
          <Form.Control
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search for post titles..."
            aria-label="Search"
            aria-describedby="searchPost"
            className="border-dark placeholder-text-dark"
            style={{
              border: "1px solid",
              borderRadius: "20px",
            }}
          />
        </InputGroup>
      </Form>
    </div>
  );
};
