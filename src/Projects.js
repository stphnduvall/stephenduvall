import React from 'react'

function project(title, img, desc, link) {
  this.title = title
  this.img = img
  this.desc = desc
  this.link = link
}

export default function Projects() {

  let projectArray = [
    new project('Project 1', 'https://via.placeholder.com/200/ff6f00/000', 'I built this project in high school. It was very basic and doesn\'t do much I built this project in high school. It was very basic and doesn\'t do much', 'https://google.com'),
    new project('Project 2', 'https://via.placeholder.com/200/ff6f00/000', 'This is one of my favorite projects. I like the code a lot', 'https://google.com'),
    new project('Project 3', 'https://via.placeholder.com/200/ff6f00/000', 'I don\'t know why I have this project on here, I really hate it.', 'https://google.com')
  ]

  return (
    <>
      <h2 id="projectHeading">Projects</h2>
      {
        projectArray.map(project => {
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
