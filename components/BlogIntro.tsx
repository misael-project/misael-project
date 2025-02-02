import React from "react"
import Image from "next/image";
import ContentTemplate from "./content-template"
import Divider from "./Divider";

export default function BlogIntro(){
  return (
    <ContentTemplate sectionId="intro">
      <div className="w-screen">
        <Image
          src="/misaelLogo.png"
          // className="dark:invert"
          alt={"Logo Misael Project with Text"}
          width={0}
          height={0}
          sizes="50vw"
          style={{ width: '100%', height: 'auto' }}
        />
        <div className="my-2 mx-2">
          <div className="flex w-100 justify-start mx-2">
            <svg className="mx-2 my-2" width="15" height="15" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" x="0" y="0" fill="#ed9189"/>
            </svg>
            <svg className="mx-2 my-2" width="15" height="15" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" x="0" y="0" fill="#ed9189"/>
            </svg>
            <svg className="mx-2 my-2" width="15" height="15" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" x="0" y="0" fill="#ed9189"/>
            </svg>
          </div>
          <hr className="border-red-300 border-2"/>
        </div>
        <h2 className="text-4xl font-bold text-center text-gray-600 my-6">
         <span className="font-bold highlight-text">Blogs</span> 
        </h2>
        <Divider />
      </div>
    </ContentTemplate>
  )
}