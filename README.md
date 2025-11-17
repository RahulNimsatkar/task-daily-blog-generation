# Next.js Markdown Blog

A modern, fast, and fully responsive blog built with Next.js 14 and Markdown. Write your blog posts in Markdown and they automatically appear on your website.

## Features

- 📝 Write blog posts in Markdown format
- 🎨 Beautiful, responsive design with TailwindCSS
- ⚡ Fast page loads with Next.js 14
- 🔍 SEO-friendly with metadata support
- 🏷️ Tag support for organizing posts
- 🖼️ Banner image support for posts
- 📱 Mobile-responsive design
- 🎯 Clean and minimal UI

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Content**: Markdown with frontmatter
- **Markdown Processing**: gray-matter, next-mdx-remote

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5000`

## Project Structure

```
├── content/
│   └── blogs/           # Your markdown blog posts go here
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js app router pages
│   │   ├── blog/        # Blog listing and individual post pages
│   │   ├── layout.jsx   # Root layout
│   │   └── page.jsx     # Homepage
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── lib/             # Utility functions for blog data
│   │   ├── getBlogs.js
│   │   └── getBlogBySlug.js
│   ├── styles/          # Additional CSS files
│   └── utils/           # Helper functions
├── package.json
└── next.config.js
```

## Creating Blog Posts

Create a new `.md` file in the `content/blogs/` directory with the following frontmatter:

```markdown
---
title: "Your Blog Post Title"
description: "A brief description of your post"
date: "2024-11-17"
banner: "/images/banner.jpg"  # Optional
tags: ["tag1", "tag2"]         # Optional
---

# Your Content Here

Write your blog post content in Markdown...
```

### Frontmatter Fields

- `title` (required): The title of your blog post
- `description` (required): A brief description for SEO and previews
- `date` (required): Publication date in YYYY-MM-DD format
- `banner` (optional): Path to a banner image
- `tags` (optional): Array of tags for categorization

## Available Scripts

- `npm run dev` - Start development server on port 5000
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

This project is configured to work seamlessly with Replit's deployment system. Simply click the "Deploy" button in your Replit workspace.

For other platforms:

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Customization

### Change Site Title and Description

Edit `src/app/layout.jsx` to update the metadata:

```javascript
export const metadata = {
  title: 'Your Blog Name',
  description: 'Your blog description',
};
```

### Update Navigation

Edit `src/components/Navbar.jsx` to customize the navigation bar.

### Modify Styling

The project uses TailwindCSS. You can:
- Edit `tailwind.config.js` for theme customization
- Modify component classes in individual files
- Add custom CSS in `src/app/globals.css`

## Adding Images

1. Place images in the `public/` directory
2. Reference them in your Markdown:
```markdown
![Alt text](/images/your-image.jpg)
```

## License

This project is open source and available for personal and commercial use.

## Support

For issues or questions, please check the documentation or open an issue in the project repository.

---

Built with ❤️ using Next.js and Markdown
