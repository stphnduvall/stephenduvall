import * as React from 'react'
import * as ReactDOM from "react-dom"
import SocialBtn from "./components/socialBtns"
import * as elements from "./elements"

import "./scss/styles.scss"

function Projects() {

  return (
    <>
      <h2 id="projectHeading">Projects</h2>
      {
        elements.projects.map(project => {
          return (
            <a className="row align-items-center" href={project.link}>
              <div className="col-4 col-md-6" id="projectImage">
                <img src={project.img} className="img-fluid" />
              </div>
              <div className="col" id="projectInfo">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            </a>
          )
        })
      }
    </>
  )
}

function NavBar() {

  return (
    <div className="row justify-content-center">
      {elements.buttons.map((i) => {
        return <SocialBtn type={i.type} value={i.value} link={i.link}/>
      })}
    </div>
  )
}

ReactDOM.render(<Projects />, document.getElementById('projectContainer'))
ReactDOM.render(<NavBar />, document.getElementById('socialButtons'))
