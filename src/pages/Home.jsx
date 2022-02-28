import React from 'react'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <div className="home">
      <NavBar />
      <div className="homeContent">
        <div className="content">
          <h1 className="animate__animated animate__bounceInLeft">
            Alex Fourmy
          </h1>

          <div id="container">
            <div id="flip">
              <div>
                <div>Creative</div>
              </div>
              <div>
                <div>Learning</div>
              </div>
              <div>
                <div>Frontend</div>
              </div>
            </div>
            Developer
          </div>

          <div className="pdf">
            <a href="./media/CV.pdf" target="_blank" className="downloadBtn">
              Download CV
            </a>
            <p className="hiddenAdjectives adj-1">Positive</p>
            <p className="hiddenAdjectives adj-2">Rigorous</p>
            <p className="hiddenAdjectives adj-3">Adaptable</p>
            <p className="hiddenAdjectives adj-4">Determined</p>
            <p className="hiddenAdjectives adj-5">Proactive</p>
            <p className="hiddenAdjectives adj-6">Insatiable</p>
            <p className="hiddenAdjectives adj-7">Focused</p>
            <p className="hiddenAdjectives adj-8">Structured</p>
            {/* <div className="impacts imp-1"></div>
            <div className="impacts imp-2"></div>
            <div className="impacts imp-3"></div>
            <div className="impacts imp-4"></div>
            <div className="impacts imp-5"></div>
            <div className="impacts imp-6"></div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
