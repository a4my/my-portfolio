import React from 'react'
import { useState } from 'react'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    let nameS = document.getElementById('name')
    let emailS = document.getElementById('email')
    let messageS = document.getElementById('message')
    let formMess = document.querySelector('.form-message')

    const isEmail = () => {
      let isMail = document.getElementById('not-mail')
      let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

      if (email.match(regex)) {
        isMail.style.display = 'none'
        return true
      } else {
        isMail.style.display = 'block'
        isMail.style.animation = 'dongle 1s'
        setTimeout(() => {
          isMail.style.animation = 'none'
        }, 1000)
        return false
      }
    }

    if (name && isEmail() && message) {
      const templateId = 'template_r59wcmm'
      const userId = 'service_40nd5pf'

      nameS.classList.remove('red')
      emailS.classList.remove('red')
      messageS.classList.remove('red')

      sendFeedback(userId, templateId, {
        name,
        company,
        phone,
        email,
        message
      })
    } else {
      formMess.innerHTML = 'Fill in all required fields *'
      formMess.style.background = 'rgb(253, 87, 87)'
      formMess.style.opacity = '1'

      if (!name) {
        nameS.classList.add('error')
      }
      if (!email) {
        emailS.classList.add('error')
      }
      if (!message) {
        messageS.classList.add('error')
      }
    }
  }

  const sendFeedback = (userId, templateId, variables) => {
    let formMess = document.querySelector('.form-message')

    window.emailjs
      .send(userId, templateId, variables)
      .then(res => {
        formMess.innerHTML = 'Email sent, thank you! '
        formMess.style.background = '#00c1ec'
        formMess.style.opacity = '1'

        document.getElementById('name').classList.remove('error')
        document.getElementById('email').classList.remove('error')
        document.getElementById('message').classList.remove('error')
        setName('')
        setCompany('')
        setPhone('')
        setEmail('')
        setMessage('')

        setTimeout(() => {
          formMess.style.opacity = '0'
        }, 5000)
      })
      .catch(
        err => (formMess.innerHTML = 'An error has happened, please try again')
      )
  }

  return (
    <form className="contact-form">
      <h2>Get in touch</h2>
      <p>* required fields</p>
      <div className="form-content">
        <input
          type="text"
          id="name"
          name="name"
          required
          onChange={e => setName(e.target.value)}
          placeholder="name *"
          value={name}
        />
        <input
          type="text"
          id="company"
          name="company"
          onChange={e => setCompany(e.target.value)}
          placeholder="company"
          value={company}
        />
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={e => setPhone(e.target.value)}
          placeholder="telephone"
          value={phone}
        />
        <div className="email-content">
          <label id="not-mail">Invalid email address</label>
          <input
            type="mail"
            id="email"
            name="email"
            required
            onChange={e => setEmail(e.target.value)}
            placeholder="email *"
            value={email}
          />
        </div>
        <textarea
          id="message"
          name="message"
          onChange={e => setMessage(e.target.value)}
          placeholder="message *"
          value={message}
          required
        />
        <div className="btnContainer">
          <input
            id="submitBtn"
            type="submit"
            value="Send email"
            onClick={handleSubmit}
          />
        </div>
      </div>

      <div className="form-message"></div>
    </form>
  )
}

export default ContactForm
