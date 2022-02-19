import React, { Component } from 'react'

export default class Project extends Component {
  state = {
    showInfo: false
  }

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    })
  }

  render() {
    let { name, languagesIcons, demo, source, info, picture } = this.props.item

    return (
      <div className="project">
        <div className="icons">
          {languagesIcons.map(icon => (
            <img src={icon} alt="language" />
          ))}
        </div>
        <h3>{name}</h3>
        <img src={picture} alt="project" onClick={this.handleInfo} />
        <span className="infos" onClick={this.handleInfo}>
          <i className="fas fa-plus-circle"></i>
        </span>

        {this.state.showInfo && (
          <div className="showInfos">
            <div className="infosContent">
              <div className="head">
                <h2>{name}</h2>
                <span className="cross" onClick={this.handleInfo}>
                  &#10005;
                </span>
              </div>

              <p className="text">{info}</p>
              <div className="sourceCode">
                <a
                  href={source}
                  rel="noopener noreferrer"
                  className="button"
                  target="_blank"
                >
                  Source code
                </a>
                <a
                  href={demo}
                  rel="noopener noreferrer"
                  className="button"
                  target="_blank"
                >
                  Live demo
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}
