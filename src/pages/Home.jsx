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
                <div>Practical</div>
              </div>
              <div>
                <div>Learning</div>
              </div>
              <div>
                <div>Frontend</div>
              </div>
              {/* <div>
                <div>Skillful</div>
              </div>
              <div>
                <div>Diligent</div>
              </div>
              <div>
                <div>Flexible</div>
              </div> */}
            </div>
            Developer
          </div>

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
