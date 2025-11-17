import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getBlogBySlug(slug) {
  const filePath = path.join(process.cwd(), "content/blogs", slug + ".md");
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    metadata: data,
    content,
  };
}
