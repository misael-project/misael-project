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
      className="flex flex-col items-center py-6"
    >
      <div className="flex flex-col items-center">
        <slot name="eyebrow" />
        {
          title &&
          <h2
            className="text-center font-extrabold tracking-tight text-6xl highlight-title"
          >
            {title}
          </h2>
        }
      </div>
      <div className="max-w-6xl text-center text-xl flex-col">
        {children}
      </div>
      <slot />
    </section>
  )  
}
