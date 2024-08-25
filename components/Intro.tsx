import React from "react"
import Image from "next/image";
import ContentTemplate from "./content-template"

export default function IntroSection(){
  return (
    <ContentTemplate sectionId="intro">
      <>
        <Image
          src="/misaelLogo.png"
          // className="dark:invert"
          alt={"Logo Misael Project with Text"}
          width={0}
          height={0}
          sizes="50vw"
          style={{ width: '100%', height: 'auto' }}
        />
        <h2 className="text-4xl font-bold text-center text-gray-600">
          Your <span className="font-bold highlight-text">comrade</span> in your creative journey
        </h2>
      </>
    </ContentTemplate>
  )
}