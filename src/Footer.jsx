import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Footer() {
  return (
    <nav className="nav2">
      <h1 className="footerH1">Thanks for the click</h1>

      <ul>
        <CustomLink to="https://github.com/bobonlan" target="_blank">
          GitHub
        </CustomLink>
        <CustomLink to="https://twitter.com/bobonlan" target="_blank">
          X, Formerly Known as Twitter
        </CustomLink>
        <CustomLink to="https://twitch.tv/bobonlan" target="_blank">
          Twitch
        </CustomLink>
        <CustomLink to="https://www.reddit.com/user/bobonlan/" target="_blank">
          Reddit
        </CustomLink>
      </ul>
    </nav>
  );
}
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
