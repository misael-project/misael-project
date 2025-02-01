import React from "react"
import Image from "next/image";
import ContentTemplate from "./content-template"

export default function Divider(){
  return (
    <div className="mx-2">
      <hr className="border-red-300 border-2"/>
      <div className="flex w-100 justify-end mx-2">
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
    </div>
  )
}