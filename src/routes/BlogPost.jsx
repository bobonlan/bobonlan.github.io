import "./../App.css";
import { useParams, Link } from "react-router-dom";
import posts from "./../posts.jsx";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="page-content">
        <p className="about-prompt">// 404</p>
        <h1>Post not found</h1>
        <p>That post doesn't exist or may have moved.</p>
        <Link to="/cool-links" className="back-link">← back to blog</Link>
      </div>
    );
  }

  return (
    <div className="page-content">
      <Link to="/cool-links" className="back-link">← back to blog</Link>

      <article className="blog-post">
        <header className="blog-post-header">
          <p className="about-prompt">// {post.date}</p>
          <h1>{post.title}</h1>
          <div className="blog-tags" style={{ marginTop: "0.5rem" }}>
            {post.tags.map((t) => (
              <span key={t} className="blog-tag">{t}</span>
            ))}
          </div>
        </header>

        <div
          className="blog-post-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </div>
  );
}