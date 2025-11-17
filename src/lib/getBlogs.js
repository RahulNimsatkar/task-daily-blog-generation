import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDir = path.join(process.cwd(), "content/blogs");

export function getBlogs() {
  if (!fs.existsSync(blogDir)) {
    return [];
  }

  const files = fs.readdirSync(blogDir);
  const markdownFiles = files.filter(file => file.endsWith('.md'));

  const blogs = markdownFiles.map((filename) => {
    const filePath = path.join(blogDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      slug: filename.replace(".md", ""),
      ...data,
    };
  });

  return blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
}
