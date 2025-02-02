import React from 'react'
import Navbar from "@/components/Header";
import BlogCard from "@/components/BlogCard";
import { useEffect, useState } from "react";
import BlogIntro from '@/components/BlogIntro';
import Link from "next/link";

type Post = {
  id: string;
  title: string;
  content: string;
  images?: { url: string }[];
};

async function getPosts(): Promise<Post[]> {
  try {
    const res = await fetch(
      "https://www.googleapis.com/blogger/v3/blogs/2749467661318318539/posts?key=AIzaSyAFOiSSYoMJjlAuhZ5pQ-NaHuO2wWy4o80&fetchImages=true",
      { next: { revalidate: 60 } } 
    );

    if (!res.ok) throw new Error("Failed to fetch blog posts");

    const data = await res.json();
    return data.items || [];
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export default async function Page() {
  const posts = await getPosts();

  return (
    <main className="flex flex-col items-center w-full font-sans">
      <Navbar />
      <BlogIntro />
      {posts.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">No posts found.</p>
      ) : (
        posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <BlogCard post={post} /> {}
          </Link>
        ))
      )}
    </main>
  );
}