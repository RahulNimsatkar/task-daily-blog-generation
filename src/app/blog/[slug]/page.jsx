import { getBlogBySlug } from '@/lib/getBlogBySlug';
import { getBlogs } from '@/lib/getBlogs';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { formatDate } from '@/utils/formatDate';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import '@/styles/blog.css';

export async function generateStaticParams() {
  const blogs = getBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }) {
  const blog = getBlogBySlug(params.slug);
  
  if (!blog) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found',
    };
  }

  return {
    title: blog.metadata.title,
    description: blog.metadata.description,
  };
}

export default function BlogPage({ params }) {
  const blog = getBlogBySlug(params.slug);
  
  if (!blog) {
    notFound();
  }
  
  const { metadata, content } = blog;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link 
        href="/blog" 
        className="text-blue-600 hover:text-blue-700 mb-6 inline-block"
      >
        ← Back to all posts
      </Link>

      <article className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {metadata.title}
          </h1>

          <div className="flex items-center gap-4 mb-8 text-gray-600">
            <time>{formatDate(metadata.date)}</time>
            {metadata.tags && metadata.tags.length > 0 && (
              <div className="flex gap-2">
                {metadata.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {metadata.banner && (
            <img 
              src={metadata.banner} 
              alt={metadata.title}
              className="w-full h-96 object-cover rounded-lg mb-8"
            />
          )}

          <div className="prose prose-lg max-w-none">
            <MDXRemote source={content} />
          </div>
        </div>
      </article>
    </div>
  );
}
