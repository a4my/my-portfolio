import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export default function InfoBox() {
  const [showLocation, setShowLocation] = useState(false)
  const [phoneCopied, setPhoneCopied] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)

  const handleShowLocation = () => {
    setShowLocation(!showLocation)
  }

  const handlePhoneCopied = () => {
    if (emailCopied === false) {
      setPhoneCopied(true)
      setTimeout(() => {
        setPhoneCopied(false)
      }, 1000)
    }
  }

  const handleEmailCopied = () => {
    if (phoneCopied === false) {
      setEmailCopied(true)
      setTimeout(() => {
        setEmailCopied(false)
      }, 1000)
    }
  }

  return (
    <div className="infoContainer">
      <h2>contact details</h2>
      <ul>
        <li>
          <i className="fas fa-map-marker-alt"></i>
          <span onClick={handleShowLocation}>Hybrid/Remote</span>
        </li>
        <li>
          <i className="fas fa-mobile-alt"></i>
          <CopyToClipboard text="07714207222">
            <span onClick={handlePhoneCopied}>077 1420 7222</span>
          </CopyToClipboard>
        </li>
        <li>
          <i className="fas fa-at"></i>
          <CopyToClipboard text="alexfourmy@gmail.com">
            <span onClick={handleEmailCopied}>alexfourmy@gmail.com</span>
          </CopyToClipboard>
        </li>
      </ul>
      <ul className="copiedMessage">
        {phoneCopied && (
          <li className="phone">
            <i class="fas fa-check"></i>
            <span>Phone number copied!</span>
          </li>
        )}
        {emailCopied && (
          <li className="email">
            <i class="fas fa-check"></i>
            <span>Email address copied!</span>
          </li>
        )}
      </ul>
      {showLocation && (
        <div className="showLocation">
          <div className="locationContent">
            <div className="head">
              <h2>My address</h2>
              <span className="cross" onClick={handleShowLocation}>
                &#10005;
              </span>
            </div>

            <div className="address">
              <i className="fas fa-map-marker-alt"></i>
              <span>Cheeseman's Terrace, W149XJ, London UK</span>
            </div>

            <p className="text">
              I am based in London and I am available for remote work anywhere or hybrid work in London.
            </p>

            <div className="btnContainer">
              <span onClick={handleShowLocation}>Close window</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
