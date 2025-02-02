import React from 'react'
import Navbar from "@/components/Header";
import BlogCard from "@/components/BlogCard";
import { useEffect, useState } from "react";
import BlogIntro from '@/components/BlogIntro';

export default async function Page() {
  const data = await fetch('https://www.googleapis.com/blogger/v3/blogs/2749467661318318539/posts?key=AIzaSyAFOiSSYoMJjlAuhZ5pQ-NaHuO2wWy4o80&fetchImages=true')
  const posts = await data.json()
  const items = posts.items
  return (
  <main className="flex flex-col items-center w-full font-sans">
    <Navbar />
    <BlogIntro />
    {items.map(post => (
      <BlogCard key={post.id} post={post}/>
    ))}
  </main>
  )
}