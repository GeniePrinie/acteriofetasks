import { RemovePost } from "./RemovePost";
import { Reaction } from "./Reaction";

export const PostCard = ({ post }) => {
  return (
    <div className="center">
      <div
        className="card bg-secondary border-0 my-5 py-2 px-3 mx-auto"
        style={{ maxWidth: "800px" }}
      >
        <RemovePost id={post.id} />

        <div className="card-body">
          <div
            className="user fs-4 py-2 border-black text-dark"
            style={{ borderBottom: "1px solid" }}
          >
            User {post.userId}
          </div>
          <h1 className="card-title fs-4 pb-0 pt-4">{post.title}</h1>
          <span className="fs-5 text-dark pt-0">
            {post.tags && post.tags.map((tag) => `#${tag} `)}
          </span>
          <p className="card-text pt-4 pb-3">{post.body}</p>

          <Reaction post={post} />
        </div>
      </div>
    </div>
  );
};
