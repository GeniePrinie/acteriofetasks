import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="py-4 ps-5 bg-primary fs-1">
      <NavLink to={"/"} className="logo">
        The Posts.
      </NavLink>
    </header>
  );
};
