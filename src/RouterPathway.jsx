import React from "react";
import { Posts } from "./Posts";
import { Post } from "./Post";
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
            <Route index element={<Posts />} />
            <Route path="/posts/:id" element={<Post />} />
          </Route>
          <Route path="*" element={<RouteNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}
