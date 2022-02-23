import React, { useState } from 'react'

export default function Project(props) {
  const [showInfo, setShowInfo] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  let { name, languagesIcons, demo, source, info, picture } = props.item

  const handleInfo = () => {
    setShowInfo(!showInfo)
  }

  const showLoader = () => {
    return <i className="fas fa-spinner fa-spin"></i>
  }

  return (
    <>
      <div className="project">
        <div className="icons">
          {languagesIcons.map(icon => (
            <img src={icon} alt="language" />
          ))}
        </div>
        <h3>{name}</h3>

        <div style={{ display: isLoading ? 'block' : 'none' }}>
          {showLoader()}
        </div>
        <div style={{ display: isLoading ? 'none' : 'block' }}>
          <img
            src={picture}
            alt="project"
            onClick={handleInfo}
            onLoad={() => setIsLoading(false)}
          />
        </div>

        <span className="infos">
          <i className="fas fa-plus-circle" onClick={handleInfo}></i>
        </span>
      </div>
      {showInfo && (
        <div className="showInfos">
          <div className="infosContent">
            <div className="head">
              <h2>{name}</h2>
              <span className="cross" onClick={handleInfo}>
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
    </>
  )
}

// export default class Project extends Component {
//   state = {
//     showInfo: false
//   }

//   handleInfo = () => {
//     this.setState({
//       showInfo: !this.state.showInfo
//     })
//   }

//   render() {
//     let { name, languagesIcons, demo, source, info, picture } = this.props.item

//     return (
//       <div className="project">
//         <div className="icons">
//           {languagesIcons.map(icon => (
//             <img src={icon} alt="language" />
//           ))}
//         </div>
//         <h3>{name}</h3>
//         <img src={picture} alt="project" onClick={this.handleInfo} />
//         <span className="infos">
//           <i className="fas fa-plus-circle" onClick={this.handleInfo}></i>
//         </span>

//         {this.state.showInfo && (
//           <div className="showInfos">
//             <div className="infosContent">
//               <div className="head">
//                 <h2>{name}</h2>
//                 <span className="cross" onClick={this.handleInfo}>
//                   &#10005;
//                 </span>
//               </div>

//               <p className="text">{info}</p>
//               <div className="sourceCode">
//                 <a
//                   href={source}
//                   rel="noopener noreferrer"
//                   className="button"
//                   target="_blank"
//                 >
//                   Source code
//                 </a>
//                 <a
//                   href={demo}
//                   rel="noopener noreferrer"
//                   className="button"
//                   target="_blank"
//                 >
//                   Live demo
//                 </a>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     )
//   }
// }
