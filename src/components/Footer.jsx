export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center">
          <p className="mb-2">My Markdown Blog</p>
          <p className="text-gray-400 text-sm">
            Built with Next.js and Markdown | © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
