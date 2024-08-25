"use client"
import React, { useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";

export default function ContactForm() {
  const [from, setFrom] = useState("")
  const [contact, setContact] = useState("")
  const [content, setContent] = useState("")
  const onFormSubmit = (e) => {
    e.preventDefault()
    if(!content) {
      toast("Please enter your message", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Bounce,
      })
      return
    }
    setFrom("")
    setContact("")
    setContent("")
    fetch('https://discord.com/api/webhooks/1251840163924017273/RyGZlj9yXak8ldZ2REN_hzrIf3N_RtksuUV-BkUNRIWsNNE3vCJALrFUxhw8nSJAZZ4d', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: `**From:** ${from}\n**Contact:** ${contact}\n\`\`\`${content}\`\`\``
      })
    })
    toast("Message Sent!", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Bounce,
    })
    
  }

  return (
    <>
      <form method="POST" onSubmit={onFormSubmit}>
        <div className="flex flex-col p-4 bordered rounded-md bg-white/40 w-96">
          <p className="highlight-text mx-auto mt-1">Or send us a direct message!</p>
          <label className="grid grid-cols-4 my-1 py-auto">
            <p className="my-auto mx-1 highlight-text">From:</p>
            <input value={from} onChange={(e) => setFrom(e.target.value)} type="text" name="from" className="border col-span-3 mx-1 border-red-300"/>
          </label>
          <label className="grid grid-cols-4 my-1">
            <p className="my-auto mx-1 highlight-text">Contact:</p>
            <input value={contact} onChange={(e) => setContact(e.target.value)} type="text" name="contact" className="border col-span-3 mx-1 border-red-300"/>
          </label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)}  className="my-1 mx-1" name="content"/>
          <button className="bordered p-2 my-2 bg-red-300"><p className="text-white">Submit</p></button>
        </div>
      </form>
      <ToastContainer toastClassName="bg-red-300" />
    </>
  );
}
