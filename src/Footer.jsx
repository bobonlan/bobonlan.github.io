import { Link } from "react-router-dom";

const NAV_LINKS = [
  { to: "/", label: "about" },
  { to: "/cool-links", label: "blog" },
  { to: "/form", label: "contact" },
];

const SOCIAL_LINKS = [
  { href: "https://github.com/bobonlan", label: "github" },
  { href: "https://twitter.com/bobonlan", label: "x / twitter" },
  { href: "https://twitch.tv/bobonlan", label: "twitch" },
  { href: "https://www.reddit.com/user/bobonlan/", label: "reddit" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col">
          <span className="footer-label">// navigate</span>
          <ul className="footer-links">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="footer-link">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col footer-brand">
          <span className="footer-wordmark">bobonlan.com</span>
        </div>

        <div className="footer-col footer-col-right">
          <span className="footer-label">// socials</span>
          <ul className="footer-links">
            {SOCIAL_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} target="_blank" rel="noreferrer" className="footer-link">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">© {new Date().getFullYear()} bobonlan</span>
      </div>
    </footer>
  );
}