import React from 'react'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <div className="home">
      <NavBar />
      <div className="homeContent">
        <div className="content">
          <h1>Alex Fourmy</h1>
          <h2>Frontend Developer</h2>
          <div className="pdf">
            <a href="./media/CV.pdf" target="_blank" className="downloadBtn">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
