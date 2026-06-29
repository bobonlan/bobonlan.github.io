import "./../App.css";
import { Link } from "react-router-dom";
import posts from "./../posts.jsx";

const Button3 = () => {
  return (
    <div className="page-content">
      <section className="blog-header">
        <p className="about-prompt">// blog</p>
        <h1>Posts</h1>
        <p>Whatever I'm working on, thinking about, or figured out.</p>
      </section>

      {posts.length === 0 ? (
        <p className="no-posts">No posts yet. Check back soon.</p>
      ) : (
        <div className="blog-grid">
          {posts.map((post) => (
            <Link to={`/blog/${post.slug}`} key={post.slug} className="blog-tile">
              <div className="blog-tile-meta">
                <span className="blog-date">{post.date}</span>
                <span className="blog-tags">
                  {post.tags.map((t) => (
                    <span key={t} className="blog-tag">{t}</span>
                  ))}
                </span>
              </div>
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-excerpt">{post.excerpt}</p>
              <span className="blog-read-more">read more →</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Button3;