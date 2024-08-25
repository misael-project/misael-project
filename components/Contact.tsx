import React from "react"
import Image from "next/image";
import ContentTemplate from "./content-template"
import ContactForm from "./ContactForm"

const items = [
  {
    image: '/facebook-icon.png',
    alt: 'Misael Facebook Icon',
    link: 'https://www.facebook.com/misaelproject'
  },
  {
    image: '/instagram-icon.png',
    alt: 'Misael Instagram Icon',
    link: 'https://www.instagram.com/misaelproject/'
  },
  // {
  //   image: twitterIcon,
  //   alt: 'twitter icon',
  //   link: 'https://www.twitter.com'
  // },
]

export default function ContactSection(){
  return (
    <ContentTemplate sectionId="Contact">
      <div>
        Email us at <span className="highlight-text"><a href="mailto:info@misalproject.com" target="_blank">info@misalproject.com</a></span>
          <br/>
          <div className="flex flex-row justify-center py-3 gap-6 w-full" >
            {
              items.map(item => <a href={item.link} target="_blank" key={item.alt}><Image src={item.image} alt={item.alt} width={50} height={50}/></a>)
            }
          </div>
        <ContactForm />
      </div>
    </ContentTemplate>
  )
}