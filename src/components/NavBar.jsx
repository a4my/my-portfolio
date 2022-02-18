import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="./media/avatar.jpg" alt="Alex Fourmy" />
          <h3>Alex Fourmy</h3>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <NavLink
              exact
              to="/"
              className={({ isActive }) => '' + (isActive ? 'navActive' : '')}
            >
              <i className="fas fa-home"></i>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/skills"
              className={({ isActive }) => '' + (isActive ? 'navActive' : '')}
            >
              <i className="fas fa-laptop-code"></i>
              <span>Skills</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/portfolio"
              className={({ isActive }) => '' + (isActive ? 'navActive' : '')}
            >
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/contact"
              className={({ isActive }) => '' + (isActive ? 'navActive' : '')}
            >
              <i className="fas fa-comment-dots"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/alex-fourmy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/a4my"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
        <div className="signature">
          <p>A4MY - 2022</p>
        </div>
      </div>
    </div>
  )
}
