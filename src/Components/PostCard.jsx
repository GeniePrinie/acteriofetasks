import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PostCard = ({ post }) => {
  return (
    <div className="center">
      <div
        className="card bg-secondary border-0 my-5 py-2 px-3 mx-auto"
        style={{ maxWidth: "800px" }}
      >
        <div
          className="cursor pt-3 pe-4"
          style={{ position: "absolute", top: "0", right: "0" }}
        >
          <FontAwesomeIcon icon={faEllipsis} />
        </div>

        <div className="card-body">
          <div
            className="user fs-4 py-2 border-black"
            style={{ borderBottom: "1px solid" }}
          >
            User {post.userId}
          </div>
          <h1 className="card-title fs-4 pb-0 pt-4">{post.title}</h1>
          <span className="fs-5 text-dark pt-0">
            {post.tags && post.tags.map((tag) => `#${tag} `)}
          </span>
          <p className="card-text pt-4 pb-3">{post.body}</p>

          <FontAwesomeIcon
            icon={faHeart}
            size="lg"
            className="me-2 cursor text-dark"
          />
          <span className="text-dark">
            {post.reactions === 1
              ? `${post.reactions} reaction`
              : `${post.reactions} reactions`}
          </span>
        </div>
      </div>
    </div>
  );
};
