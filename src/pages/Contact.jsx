import React from 'react'
import NavBar from '../components/NavBar'
// import { CopyToClipboard } from 'react-copy-to-clipboard'
import ContactForm from '../components/contact/contactForm'
import InfoBox from '../components/contact/InfoBox'

export default function Contact() {
  return (
    <div className="contact">
      <NavBar />
      <div className="contactContainer">
        <ContactForm />
        <InfoBox />
      </div>
    </div>
  )
}
