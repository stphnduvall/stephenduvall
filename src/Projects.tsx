import * as React from 'react'

interface project {
  title: string
  img: string
  desc: string
  link: string
}

export default function Projects() {

  let projectArray: project[] = [
    {title: 'Project 1', img: 'https://via.placeholder.com/200/ff6f00/000', desc: 'I built this project in high school. It was very basic and doesn\'t do much I built this project in high school. It was very basic and doesn\'t do much', link: 'https://google.com'},
    {title: 'Project 2', img: 'https://via.placeholder.com/200/ff6f00/000', desc: 'This is one of my favorite projects. I like the code a lot', link: 'https://google.com'},
    {title: 'Project 3', img: 'https://via.placeholder.com/200/ff6f00/000', desc: 'I don\'t know why I have this project on here, I really hate it.', link: 'https://google.com'},
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
