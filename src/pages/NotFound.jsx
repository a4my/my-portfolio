import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="notFound">
      <div className="notFoundContent">
        <img src="./media/notFound.svg" alt="404" />
        <h3>Oops... no page available here!</h3>
        <NavLink exact to="/">
          <i className="fas fa-home"></i>
          <span>Home</span>
        </NavLink>
      </div>
    </div>
  )
}
