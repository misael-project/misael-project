import React from "react"
import Image from "next/image";
import ContentTemplate from "./content-template"

export default function AboutSection(){
  return (
    <ContentTemplate sectionId="about">
      <div className="py-6 text-gray-600">
          <nav className="scroll-mt-24 flex-row items-center gap-4 py-8 px-6 sm:flex hidden">
            <div className="flex flex-col basis-1/3 items-center gap-4">
              <h2
                className="text-center font-extrabold tracking-tight text-6xl highlight-text"
              >
                ABOUT US
              </h2>
            </div>
            <div className="flex-3 font-medium basis-2/3 text-lg px-2">
              Misael Project was founded by people who are very passionate in developing pop culture industry in Indonesia.
              As such, we are committed to do business with the spirit of professionalism, honesty, and transparency. <br/>
              Our aspiration is to be the preferred cooperative partner for Indonesian local creators, in order to contribute to the greater good for the local pop culture industry.
            </div>
          </nav>
          
          <div className="flex scroll-mt-24 flex-col items-center gap-4 py-6 sm:hidden">
            <div className="flex flex-col flex-1 items-center gap-4">
              <h2
                className="text-center font-extrabold tracking-tight text-6xl highlight-text"
              >
                ABOUT US
              </h2>
            </div>
            <p className="text-center font-medium max-w-3xl text-lg px-2">
              Misael Project was founded by people who are very passionate in developing pop culture industry in Indonesia.
              As such, we are committed to do business with the spirit of professionalism, honesty, and transparency. <br/>
              Our aspiration is to be the preferred cooperative partner for Indonesian local creators, in order to contribute to the greater good for the local pop culture industry.
            </p>
          </div>
      </div>
    </ContentTemplate>
  )
}