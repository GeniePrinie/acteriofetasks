import { Link } from "react-router-dom";

export const PostsCard = () => {
  return (
    <div class="row py-5 g-5">
      <div class="col-lg-6">
        <Link>
          <div class="card bg-secondary border-0 mb-1 py-2 px-3">
            <div class="card-body">
              <h1 class="card-title fs-4 pb-3">
                Text title. All he wanted was a candy bar.
              </h1>
              <p class="card-text pb-3">
                Text body. All he wanted was a candy bar. It didn't seem like a
                difficult request to comprehend, but the clerk remained frozen
                and didn't seem to want to honor the request. It might have had
                something to do with the gun pointed at his face.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
