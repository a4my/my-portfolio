import React from 'react'

export default function ProgressBar(props) {
  return (
    <div className={props.className}>
      <h3>{props.title}</h3>
      <div className="years">
        <span>Experience</span>
        <span>2 year</span>
        <span>3 years</span>
      </div>

      <div>
        {props.languages.map(item => {
          let xpYears = 3
          let progressBar = (item.xp / xpYears) * 100 + '%'

          return (
            <div key={item.id} className="languagesList">
              <div className="container">
                <li className="active">{item.value}</li>
                <img className="hidden" src={item.icon} alt="languages" />
              </div>

              <div className="progressBar" style={{ width: progressBar }}></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
