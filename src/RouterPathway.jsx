import React from "react";
import { PostsPage } from "./PostsPage";
import { PostPage } from "./PostPage";
import { Layout } from "./Layout/Layout";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function RouteNotFound() {
  return <div>Page not found</div>;
}

export function RouterPathway() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/posts" />} />
          <Route path="/posts" element={<Layout />}>
            <Route index element={<PostsPage />} />
            <Route path="/posts/:id" element={<PostPage />} />
          </Route>
          <Route path="*" element={<RouteNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}
