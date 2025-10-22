// File location example: app/blog/[id]/page.tsx
import React from "react";
// Assuming getBlogByIdServer is imported from a utility file
import SingleBlogContainer from "@/app/components/SingleBlog/SingleBlogContainer";
import { getBlogByIdServer } from "@/lib/api/products";
import { Metadata } from "next";

const SITE_NAME = "New Town Spares";
const BASE_URL = "https://nts-ecommerce.vercel.app";


// =========================================================================
// 1. DYNAMIC METADATA GENERATION (SEO)
// =========================================================================

export async function generateMetadata({ 
  params,
}: { 
  // Custom type matching your product example's structure: Promise<{ slug: string }>
  // Yahaan hum 'id' use kar rahe hain jo aapke folder structure [id] se aati hai.
  params: Promise<{ id: string }>; 
}): Promise<Metadata> {
  
  // Custom: Await params to get the ID
  const { id } = await params; 
  
  // Data Fetching (No try/catch, relying on the inner API function to handle errors)
  // Next.js automatic caching use karega.
  const blog = await getBlogByIdServer(id); 

  // --- Fallback Check ---
  if (!blog) {
    return {
      title: `Blog Post Not Found | ${SITE_NAME}`,
      description: "This blog post could not be found.",
    };
  }

  // --- URL Construction ---
  // Canonical URL: Assuming the format is /blogs/postUrl
  const url = `${BASE_URL}/blogs/${blog.postUrl}`; 

  // --- Final Metadata Object ---
  return {
    // 1. Title
    title: `${blog.title} | ${SITE_NAME}`, 

    // 2. Description (with fallback and substring limit)
    description:
      blog.metaDescription?.substring(0, 160) ||
      blog.body?.substring(0, 160) || 
      `Read the latest blog post by ${blog.author} on ${SITE_NAME}.`, 

    // 3. Keywords (with fallback)
    keywords: 
      blog.tags || 
      `${blog.title}, ${blog.author}, Blog, ${SITE_NAME}`, 

    // 4. Canonical URL
    alternates: {
      canonical: url,
    },

    // 5. Open Graph (for Social Sharing)
    openGraph: {
      title: blog.title,
      description: blog.metaDescription || blog.body,
      url,
      siteName: SITE_NAME, 
      images: [
        {
          url: blog.thumbnail || `${BASE_URL}/default-blog-image.svg`, 
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      type: "article", 
      authors: [blog.author],
      publishedTime: blog.createdAt,
      modifiedTime: blog.updatedAt,
    },

    // 6. Twitter Card
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.metaDescription || blog.body,
      images: [blog.thumbnail || `${BASE_URL}/default-blog-image.svg`],
    },
    
    // 7. Author metadata
    authors: [{ name: blog.author }],
  };
}

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  
  const blogId = params.id;
    const blog = await getBlogByIdServer(blogId);
  if (!blog) {
    return (
      <main className="text-center p-10">
        <h1 className="text-2xl font-bold">Blog Post Not Found</h1>
        <p className="mt-2 text-gray-600">The requested post with ID "{blogId}" does not exist.</p>
      </main>
    );
  }

  return (
    <main>
      <SingleBlogContainer singleBlog={blog}/>
    </main>
  );
}

// Note: Agar aapko 'page' variable name hi chahiye toh aap usey
// 'export const page = async...' karke phir 'export default page;' kar sakte hain.
// Lekin Next.js mein standard practice 'export default async function Page...' hai.