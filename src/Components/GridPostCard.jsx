import { Link } from "react-router-dom";

export const GridPostCard = ({ post }) => {
  return (
    <div className="col-lg-6" key={post.id}>
      <Link to={`/posts/${post.id}`}>
        <div className="card bg-secondary border-0 mb-1 py-2 px-3">
          <div className="card-body">
            <h1 className="card-title fs-4 pb-3">{post.title}</h1>
            <p className="card-text pb-3">{post.body}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
