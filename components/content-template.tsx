import React from "react"

interface props {
  sectionId: string
  title?: string
  children: JSX.Element
}
export default function ContentTemplate({sectionId, title, children}: props){
  return (
    <section
      id={sectionId}
      className="py-6"
    >
      {
        title &&
        <h2
          className="font-extrabold tracking-tight text-4xl mx-4 text-neutral-500"
        >
          {title}
        </h2>
      }
      <div className="max-w-3xl text-center text-xl flex-col">
        {children}
      </div>
      <slot />
    </section>
  )  
}
