import React, { Component } from 'react'
import ProgressBar from './ProgressBar'

class Languages extends Component {
  state = {
    languages: [
      {
        id: 1,
        icon: './media/icons/html.svg',
        value: 'HTML',
        xp: 2
      },
      {
        id: 2,
        icon: './media/icons/css3.svg',
        value: 'CSS',
        xp: 2
      },
      {
        id: 3,
        icon: './media/icons/javascript.svg',
        value: 'JavaScript',
        xp: 1.8
      },
      {
        id: 4,
        icon: './media/icons/nodejs.svg',
        value: 'TypeScript',
        xp: 1
      }
    ],
    frameworks: [
      {
        id: 1,
        icon: './media/icons/react.svg',
        value: 'React',
        xp: 1.8
      },
      {
        id: 2,
        icon: './media/icons/sass.svg',
        value: 'Sass',
        xp: 2
      },
      {
        id: 3,
        icon: './media/icons/bootstrap.svg',
        value: 'Angular',
        xp: 0.8
      },
      {
        id: 4,
        icon: './media/icons/nextjs.svg',
        value: 'NextJS',
        xp: 1
      }
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
