import React from 'react'
import NavBar from '../components/NavBar'
// import { CopyToClipboard } from 'react-copy-to-clipboard'
import ContactForm from '../components/contact/contactForm'

export default function Contact() {
  return (
    <div className="contact">
      <NavBar />
      <div className="contactContainer">
        <ContactForm />
      </div>
    </div>
  )
}
