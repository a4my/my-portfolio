import React, { Component } from 'react'
import ProgressBar from './ProgressBar'

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: 'HTML', xp: 1.6 },
      { id: 2, value: 'CSS', xp: 1.6 },
      { id: 3, value: 'JavaScript', xp: 1.4 },
      { id: 4, value: 'NodeJS', xp: 1.1 }
    ],
    frameworks: [
      { id: 1, value: 'React', xp: 1.1 },
      { id: 2, value: 'Sass', xp: 1.4 },
      { id: 3, value: 'Bootstrap', xp: 0.7 },
      { id: 4, value: 'NextJS', xp: 0.4 }
    ]
  }

  render() {
    let { languages, frameworks } = this.state

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="languages"
        />
        <ProgressBar
          languages={frameworks}
          title="frameworks & libraries"
          className="frameworksDisplay"
        />
      </div>
    )
  }
}

export default Languages
