import { marked } from "marked";

const modules = import.meta.glob("./posts/*.md", { as: "raw", eager: true });

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { attributes: {}, body: raw };

  const attributes = {};
  match[1].split("\n").forEach((line) => {
    const [key, ...rest] = line.split(":");
    if (!key) return;
    let value = rest.join(":").trim();
    if (value.startsWith("[") && value.endsWith("]")) {
      value = value.slice(1, -1).split(",").map((v) => v.trim());
    }
    attributes[key.trim()] = value;
  });

  return { attributes, body: match[2] };
}

const posts = Object.entries(modules).map(([filepath, raw]) => {
  const { attributes, body } = parseFrontmatter(raw);
  const slug = filepath.replace("./posts/", "").replace(".md", "");
  return {
    slug,
    title: attributes.title || slug,
    date: attributes.date || "",
    tags: Array.isArray(attributes.tags) ? attributes.tags : [],
    excerpt: attributes.excerpt || "",
    html: marked(body),
  };
});

posts.sort((a, b) => new Date(b.date) - new Date(a.date));

export default posts;