import React from 'react'
import NavBar from '../components/NavBar'
import Experience from '../components/skills/Experience'
import Hobbies from '../components/skills/Hobbies'
import Languages from '../components/skills/Languages'
import OtherSkills from '../components/skills/OtherSkills'

export default function Skills() {
  return (
    <div className="skills">
      <NavBar />
      <div className="skillsContent">
        <Languages />
        <Experience />
        <OtherSkills />
        <Hobbies />
      </div>
    </div>
  )
}
