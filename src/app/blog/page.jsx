import { getBlogs } from '@/lib/getBlogs';
import Link from 'next/link';

export const metadata = {
  title: 'All Blog Posts',
  description: 'Browse all blog posts',
};

export default function BlogListPage() {
  const blogs = getBlogs();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">All Blog Posts</h1>

      {blogs.length > 0 ? (
        <div className="space-y-6">
          {blogs.map((blog) => (
            <Link 
              key={blog.slug} 
              href={`/blog/${blog.slug}`}
              className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {blog.banner && (
                  <img 
                    src={blog.banner} 
                    alt={blog.title}
                    className="w-full md:w-48 h-48 object-cover rounded"
                  />
                )}
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2 text-gray-900">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 mb-3">{blog.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{blog.date}</span>
                    {blog.tags && blog.tags.length > 0 && (
                      <div className="flex gap-2">
                        {blog.tags.map((tag, index) => (
                          <span 
                            key={index}
                            className="bg-blue-100 text-blue-800 px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg">
          <p className="text-gray-600">No blog posts found. Create your first post in the content/blogs directory!</p>
        </div>
      )}
    </div>
  );
}
