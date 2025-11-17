import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            My Blog
          </Link>
          
          <div className="flex gap-6">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Home
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
