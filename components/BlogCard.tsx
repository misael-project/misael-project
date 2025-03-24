import React from "react"
import Image from "next/image";

export default function BlogCard({post}) {
  function formatDate(string: string){
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([]);
  }
  return (
    <a
      href={`/blog/${post.id}`}
      className="flex-row items-center justify-center border-bottom-2 px-6 py-4"
    >
      <Image src={post.images[0].url} alt="aaaa" width={1600} height={900}/>
      <h2 className="text-2xl font-bold highlight-text text-center"> {post.title} </h2>
      <h2 className="text-m text-gray-500 text-center"> by: {post.author.displayName} </h2>
      <h2 className="text-sm text-gray-500 text-center"> {formatDate(post.published)} </h2>
    </a>
  )
}