import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PostCard = () => {
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
            User 9
          </div>
          <h1 className="card-title fs-4 pb-0 pt-4">
            Text title. All he wanted was a candy bar.
          </h1>
          <span className="fs-5 text-dark pt-0">#hashtag #more #stuff</span>
          <p className="card-text pt-4 pb-3">
            Text body. All he wanted was a candy bar. It didn't seem like a
            difficult request to comprehend, but the clerk remained frozen and
            didn't seem to want to honor the request. It might have had
            something to do with the gun pointed at his face.
          </p>

          <FontAwesomeIcon
            icon={faHeart}
            size="lg"
            className="me-2 cursor text-dark"
          />

          <span className="text-dark"> 3 likes</span>
        </div>
      </div>
    </div>
  );
};
