import Link from 'next/link';
import { getBlogs } from '@/lib/getBlogs';

export default function Home() {
  const blogs = getBlogs();
  const latestBlogs = blogs.slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">
          Welcome to My Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover articles about web development, technology, and more.
          All powered by Markdown and Next.js.
        </p>
      </div>

      <div className="mb-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Latest Posts</h2>
          <Link 
            href="/blog" 
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            View All →
          </Link>
        </div>

        {latestBlogs.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestBlogs.map((blog) => (
              <Link 
                key={blog.slug} 
                href={`/blog/${blog.slug}`}
                className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
              >
                {blog.banner && (
                  <img 
                    src={blog.banner} 
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{blog.description}</p>
                  <p className="text-sm text-gray-500">{blog.date}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg">
            <p className="text-gray-600">No blog posts yet. Create your first post in the content/blogs directory!</p>
          </div>
        )}
      </div>
    </div>
  );
}
