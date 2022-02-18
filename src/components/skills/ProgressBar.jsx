import React from 'react'

export default function ProgressBar(props) {
  console.log(props)
  return (
    <div className={props.className}>
      <h3>{props.title}</h3>
      <div className="years">
        <span>Experience</span>
        <span>1 year</span>
        <span>2 years</span>
      </div>

      <div>
        {props.languages.map(item => {
          let xpYears = 2
          let progressBar = (item.xp / xpYears) * 100 + '%'

          return (
            <div key={item.id} className="languagesList">
              <li>{item.value}</li>
              <div className="progressBar" style={{ width: progressBar }}></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
