import React from "react";
import Navbar from "@/components/Header";

// Define Post Type
type Post = {
  id: string;
  title: string;
  content: string;
  images?: { url: string }[];
};

// Fetch Single Post From API
async function getPost(postId: string): Promise<Post | null> {
  try {
    const res = await fetch(
      `https://www.googleapis.com/blogger/v3/blogs/2749467661318318539/posts/${postId}?key=AIzaSyAFOiSSYoMJjlAuhZ5pQ-NaHuO2wWy4o80&fetchImages=true`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) throw new Error("Failed to fetch blog post");

    return await res.json();
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

export default async function PostPage({ params }: { params: { postId: string } }) {
  const post = await getPost(params.postId);

  if (!post) {
    return (
      <main className="flex flex-col items-center w-full font-sans">
        <Navbar />
        <p className="text-center text-red-500 mt-4">Post not found.</p>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center w-full font-sans">
      <Navbar />
      <h1 className="text-3xl font-bold mt-4">{post.title}</h1>
      {post.images && post.images.length > 0 ? (
        <img src={post.images[0].url} alt={post.title} width="100%" />
        ) : (
        <img src="/fallback-image.jpg" alt="Default Image" width="100%" /> // Use a fallback image
        )}
      <div className="mt-4" dangerouslySetInnerHTML={{ __html: post.content }} />
    </main>
  );
}
